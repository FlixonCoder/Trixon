"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

// Availability config (mirrors backend)
const AVAILABILITY = {
    0: null,
    1: { start: 14, end: 21 },
    2: { start: 14, end: 21 },
    3: { start: 14, end: 21 },
    4: { start: 14, end: 21 },
    5: { start: 17, end: 24 },
    6: null
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function formatTime(h, m) {
    const period = h >= 12 ? 'PM' : 'AM'
    const hour12 = h > 12 ? h - 12 : (h === 0 ? 12 : h)
    return `${hour12}:${m.toString().padStart(2, '0')} ${period}`
}

function getSlots(dayOfWeek) {
    const hours = AVAILABILITY[dayOfWeek]
    if (!hours) return []
    const slots = []
    for (let h = hours.start; h < hours.end; h++) {
        slots.push(formatTime(h, 0))
        slots.push(formatTime(h, 30))
    }
    return slots
}

function formatDateDisplay(date) {
    return `${DAY_NAMES[date.getDay()]}, ${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

function formatDateISO(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}

// Generate next 14 available days
function getAvailableDates() {
    const dates = []
    const today = new Date()
    let d = new Date(today)
    d.setDate(d.getDate() + 1) // start from tomorrow

    while (dates.length < 14) {
        if (AVAILABILITY[d.getDay()] !== null) {
            dates.push(new Date(d))
        }
        d.setDate(d.getDate() + 1)
    }
    return dates
}

const ReachOut = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('form') // 'form' | 'schedule' | 'confirmed' | 'query-sent'
    const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', companyName: '', companyWebsite: '', role: '' })
    const [formStatus, setFormStatus] = useState(null) // null, 'submitting', 'error'
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [scheduleStatus, setScheduleStatus] = useState(null) // null, 'submitting', 'error', 'conflict', 'duplicate'
    const [scheduleMessage, setScheduleMessage] = useState('')
    const [confirmedDetails, setConfirmedDetails] = useState(null)
    const [availableSlots, setAvailableSlots] = useState([])
    const [loadingSlots, setLoadingSlots] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setStep('form')
            setFormData({ fullName: '', email: '', phone: '', companyName: '', companyWebsite: '', role: '' })
            setFormStatus(null)
            setSelectedDate(null)
            setSelectedTime(null)
            setScheduleStatus(null)
            setConfirmedDetails(null)
            setAvailableSlots([])
        }
    }, [isOpen])

    // Fetch slots when date changes
    useEffect(() => {
        if (selectedDate) {
            fetchSlots(selectedDate)
        }
    }, [selectedDate])

    const fetchSlots = async (date) => {
        setLoadingSlots(true)
        setSelectedTime(null)
        try {
            const dateISO = formatDateISO(date)
            const response = await fetch(`${BACKEND_URL}/api/schedule/slots?date=${dateISO}`)
            const data = await response.json()
            if (response.ok) {
                setAvailableSlots(data.slots || [])
            } else {
                setAvailableSlots([])
            }
        } catch (error) {
            console.error('Error fetching slots:', error)
            setAvailableSlots([])
        } finally {
            setLoadingSlots(false)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('submitting')

        try {
            const response = await fetch(`${BACKEND_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStep('schedule')
                setFormStatus(null)
            } else {
                setFormStatus('error')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setFormStatus('error')
        }
    }

    const handleScheduleSubmit = async () => {
        if (!selectedDate || !selectedTime) return
        setScheduleStatus('submitting')

        const dateStr = formatDateDisplay(selectedDate)
        const dateISO = formatDateISO(selectedDate)

        try {
            const response = await fetch(`${BACKEND_URL}/api/schedule`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    date: dateStr,
                    dateISO: dateISO,
                    time: selectedTime
                })
            })

            if (response.ok) {
                setConfirmedDetails({ date: dateStr, time: selectedTime })
                setStep('confirmed')
                setScheduleStatus(null)
            } else if (response.status === 409) {
                setScheduleStatus('conflict')
                // Refresh slots
                fetchSlots(selectedDate)
            } else if (response.status === 400) {
                const data = await response.json()
                setScheduleStatus('duplicate')
                setScheduleMessage(data.message || 'You already have an active booking.')
            } else {
                setScheduleStatus('error')
            }
        } catch (error) {
            console.error('Error scheduling meeting:', error)
            setScheduleStatus('error')
        }
    }

    const handleQueryOnly = async () => {
        setScheduleStatus('submitting')
        try {
            const response = await fetch(`${BACKEND_URL}/api/contact/notify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStep('query-sent')
                setScheduleStatus(null)
            } else {
                setScheduleStatus('error')
            }
        } catch (error) {
            console.error('Error sending query:', error)
            setScheduleStatus('error')
        }
    }

    const availableDates = getAvailableDates()

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">

                            {/* ---- STEP: QUERY SENT (no meeting) ---- */}
                            {step === 'query-sent' && (
                                <div className="flex-1 flex items-center justify-center p-12 text-center relative">
                                    <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div>
                                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-serif italic text-stone-900 mb-2">Message Sent!</h3>
                                        <p className="text-stone-500 text-lg mb-8 max-w-md mx-auto">
                                            We've received your query and will get back to you at <span className="font-semibold text-stone-700">{formData.email}</span> within 24 hours.
                                        </p>
                                        <button onClick={onClose} className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors shadow-lg">
                                            Done
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* ---- STEP: CONFIRMED ---- */}
                            {step === 'confirmed' && (
                                <div className="flex-1 flex items-center justify-center p-12 text-center relative">
                                    <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div>
                                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-serif italic text-stone-900 mb-2">You're all set!</h3>
                                        <p className="text-stone-500 text-lg mb-2 max-w-md mx-auto">
                                            A confirmation email has been sent to <span className="font-semibold text-stone-700">{formData.email}</span>.
                                        </p>
                                        <p className="text-stone-400 text-sm mb-6 flex items-center justify-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Don't see it? Check your <span className="font-semibold">spam folder</span>
                                        </p>
                                        {confirmedDetails && (
                                            <div className="bg-stone-50 rounded-2xl p-6 mb-8 inline-block text-left border border-stone-100 min-w-[280px]">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    <span className="font-semibold text-stone-900">{confirmedDetails.date}</span>
                                                </div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span className="font-semibold text-stone-900">{confirmedDetails.time} (IST)</span>
                                                </div>
                                                <div className="pt-4 border-t border-stone-200">
                                                    <p className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-2">Meeting Link</p>
                                                    <a href="https://meet.google.com/ijk-egyk-qgk" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline flex items-center gap-2">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                                        meet.google.com/ijk-egyk-qgk
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                        <div>
                                            <button onClick={onClose} className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors shadow-lg">
                                                Done
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ---- STEP: SCHEDULE ---- */}
                            {step === 'schedule' && (
                                <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
                                    {/* Left: Date picker */}
                                    <div className="bg-stone-900 p-6 sm:p-8 text-stone-50 md:w-2/5 md:flex-none md:overflow-y-auto relative">
                                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-stone-700 blur-3xl"></div>
                                        </div>
                                        <div className="relative z-10">
                                            <h2 className="text-2xl font-serif italic mb-2">Pick a date</h2>
                                            <p className="text-stone-400 text-sm mb-6">30-minute strategy session</p>

                                            <div className="space-y-2">
                                                {availableDates.map((date, i) => {
                                                    const isSelected = selectedDate && formatDateISO(selectedDate) === formatDateISO(date)
                                                    return (
                                                        <button
                                                            key={i}
                                                            onClick={() => { setSelectedDate(date); setSelectedTime(null) }}
                                                            className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm ${isSelected
                                                                    ? 'bg-white text-stone-900 font-semibold shadow-lg'
                                                                    : 'bg-stone-800/50 text-stone-300 hover:bg-stone-800 hover:text-white'
                                                                }`}
                                                        >
                                                            <span className="font-medium">{DAY_NAMES[date.getDay()]}</span>
                                                            <span className="ml-2 text-stone-400">{MONTH_NAMES[date.getMonth()]} {date.getDate()}</span>
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Time slots */}
                                    <div className="p-6 sm:p-8 md:w-3/5 md:flex-1 md:overflow-y-auto relative">
                                        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-2 z-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        {!selectedDate ? (
                                            <div className="flex items-center justify-center h-full text-stone-400">
                                                <div className="text-center">
                                                    <svg className="w-12 h-12 mx-auto mb-4 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    <p className="text-lg mb-6">Select a date to see available times</p>
                                                    <button
                                                        onClick={handleQueryOnly}
                                                        disabled={scheduleStatus === 'submitting'}
                                                        className="text-sm text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-0.5"
                                                    >
                                                        {scheduleStatus === 'submitting' ? 'Sending...' : 'Skip — just send my query'}
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className="text-lg font-bold text-stone-900 mb-1">
                                                    {formatDateDisplay(selectedDate)}
                                                </h3>
                                                <p className="text-sm text-stone-500 mb-5">All times in IST (India Standard Time)</p>

                                                <div className="min-h-[140px] relative">
                                                    {loadingSlots ? (
                                                        <div className="flex flex-col items-center justify-center py-8">
                                                            <div className="w-6 h-6 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin mb-3"></div>
                                                            <p className="text-stone-500 text-xs">Checking availability...</p>
                                                        </div>
                                                    ) : availableSlots.length === 0 ? (
                                                        <div className="py-8 text-center bg-stone-50 rounded-xl border border-dashed border-stone-200">
                                                            <p className="text-stone-500 text-sm">No slots available for this day.</p>
                                                        </div>
                                                    ) : (
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                                                            {availableSlots.map((slot, i) => (
                                                                <button
                                                                    key={i}
                                                                    onClick={() => setSelectedTime(slot)}
                                                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${selectedTime === slot
                                                                            ? 'bg-stone-900 text-white border-stone-900 shadow-lg'
                                                                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                                                                        }`}
                                                                >
                                                                    {slot}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {scheduleStatus === 'conflict' && (
                                                    <div className="p-3 bg-amber-50 text-amber-700 rounded-lg text-sm mb-4 border border-amber-200">
                                                        Oops! This slot was just taken. Please choose another available time.
                                                    </div>
                                                )}

                                                {scheduleStatus === 'duplicate' && (
                                                    <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm mb-4 border border-blue-200">
                                                        {scheduleMessage}
                                                    </div>
                                                )}

                                                {scheduleStatus === 'error' && (
                                                    <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm mb-4 border border-red-200">
                                                        Something went wrong. Please try again or contact us directly.
                                                    </div>
                                                )}

                                                <button
                                                    onClick={handleScheduleSubmit}
                                                    disabled={!selectedTime || scheduleStatus === 'submitting'}
                                                    className="w-full bg-stone-900 text-white font-medium py-3 px-6 rounded-xl hover:bg-stone-800 transition-colors shadow-md hover:shadow-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {scheduleStatus === 'submitting' ? (
                                                        'Confirming...'
                                                    ) : (
                                                        <>
                                                            Confirm Meeting
                                                            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </>
                                                    )}
                                                </button>

                                                <div className="text-center mt-4">
                                                    <button
                                                        onClick={handleQueryOnly}
                                                        disabled={scheduleStatus === 'submitting'}
                                                        className="text-sm text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-0.5"
                                                    >
                                                        Skip — just send my query
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* ---- STEP: FORM ---- */}
                            {step === 'form' && (
                                <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
                                    {/* Left Side: Contact Info */}
                                    <div className="bg-stone-900 p-8 sm:p-10 text-stone-50 md:w-2/5 shrink-0 flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-stone-700 blur-3xl"></div>
                                            <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-stone-600 blur-3xl"></div>
                                        </div>

                                        <div className="relative z-10">
                                            <h2 className="text-3xl font-serif italic mb-6">Secure your foundation.</h2>
                                            <p className="text-stone-400 mb-8 font-light leading-relaxed">
                                                Tell us about your startup and we'll respond within 24 hours with a free technical strategy outline.
                                            </p>
                                        </div>

                                        <div className="relative z-10 space-y-6">
                                            <div className="flex items-center space-x-4">
                                                <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-stone-300 text-sm">office.trixon.co@gmail.com</span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-stone-300 text-sm">Remote / Worldwide</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Form */}
                                    <div className="p-8 sm:p-10 md:w-3/5 md:flex-1 md:overflow-y-auto relative">
                                        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-2 z-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        {/* Step indicator */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold">1</div>
                                                <span className="text-sm font-medium text-stone-900">Your Info</span>
                                            </div>
                                            <div className="w-8 h-px bg-stone-200"></div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-xs font-bold">2</div>
                                                <span className="text-sm text-stone-400">Schedule</span>
                                            </div>
                                        </div>

                                        <form className="space-y-5" onSubmit={handleFormSubmit}>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="fullName" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                                                    <input
                                                        type="text" id="fullName" value={formData.fullName} onChange={handleChange} required
                                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                        placeholder="Jane Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                                                    <input
                                                        type="email" id="email" value={formData.email} onChange={handleChange} required
                                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                        placeholder="jane@company.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone / WhatsApp</label>
                                                    <input
                                                        type="tel" id="phone" value={formData.phone} onChange={handleChange} required
                                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                        placeholder="+1 234 567 8900"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="role" className="block text-sm font-medium text-stone-700 mb-1">Role / Designation</label>
                                                    <input
                                                        type="text" id="role" value={formData.role} onChange={handleChange} required
                                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                        placeholder="Founder, CTO, etc."
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="companyName" className="block text-sm font-medium text-stone-700 mb-1">Company Name</label>
                                                    <input
                                                        type="text" id="companyName" value={formData.companyName} onChange={handleChange} required
                                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                        placeholder="Acme Corp"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="companyWebsite" className="block text-sm font-medium text-stone-700 mb-1">Company Website <span className="text-stone-400 font-normal">(Optional)</span></label>
                                                    <input
                                                        type="url" id="companyWebsite" value={formData.companyWebsite} onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                        placeholder="https://acme.com"
                                                    />
                                                </div>
                                            </div>

                                            {formStatus === 'error' && (
                                                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                                    Something went wrong. Please try again.
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={formStatus === 'submitting'}
                                                className="w-full bg-stone-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-stone-800 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {formStatus === 'submitting' ? 'Sending...' : 'Continue to Schedule'}
                                                {formStatus !== 'submitting' && (
                                                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ReachOut