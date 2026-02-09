import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const ReachOut = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState(null) // null, 'submitting', 'success', 'error'

    // Reset status when modal opens
    useEffect(() => {
        if (isOpen) {
            setStatus(null)
            setFormData({ name: '', email: '', message: '' })
        }
    }, [isOpen])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const response = await fetch(`${BACKEND_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                // Close modal after success animation logic if desired, or keep open to show success message
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setStatus('error')
        }
    }

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
                        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden pointer-events-auto flex flex-col md:flex-row max-h-[90vh]">

                            {/* Success State */}
                            {status === 'success' ? (
                                <div className="w-full flex inset-0 items-center justify-center p-12 text-center bg-white relative">
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-2"
                                    >
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
                                        <h3 className="text-3xl font-serif italic text-stone-900 mb-4">Message Received!</h3>
                                        <p className="text-stone-500 text-lg mb-8 max-w-md mx-auto">
                                            Thanks for reaching out {formData.name ? `, ${formData.name}` : ''}. We'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors shadow-lg"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Left Side: Contact Info */}
                                    <div className="bg-stone-900 p-8 sm:p-10 text-stone-50 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-stone-700 blur-3xl"></div>
                                            <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-stone-600 blur-3xl"></div>
                                        </div>

                                        <div className="relative z-10">
                                            <h2 className="text-3xl font-serif italic mb-6">Let's build.</h2>
                                            <p className="text-stone-400 mb-8 font-light leading-relaxed">
                                                Fill out the form and we'll get back to you within 24 hours. Just a direct conversation.
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
                                    <div className="p-8 sm:p-10 md:w-3/5 overflow-y-auto max-h-[80vh] md:max-h-none relative">
                                        <button
                                            onClick={onClose}
                                            className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-2 z-10"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <form className="space-y-5 mt-2" onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">How can we help?</label>
                                                <textarea
                                                    id="message"
                                                    rows="3"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all text-stone-900 placeholder-stone-400 resize-none"
                                                    placeholder="Tell us about your project..."
                                                ></textarea>
                                            </div>

                                            {status === 'error' && (
                                                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                                    Something went wrong. Please try again.
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="w-full bg-stone-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-stone-800 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                                {!status && (
                                                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ReachOut