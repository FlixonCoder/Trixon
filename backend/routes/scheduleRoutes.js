const express = require('express')
const router = express.Router()
const Booking = require('../models/Booking')
const { sendMeetingNotification, sendUserConfirmation } = require('../utils/mailer')

const MEET_LINK = 'https://meet.google.com/ijk-egyk-qgk'

// Available time slots configuration (IST)
const AVAILABILITY = {
    0: null,                          // Sunday — unavailable
    1: { start: 14, end: 21 },       // Monday    2:00 PM – 9:00 PM
    2: { start: 14, end: 21 },       // Tuesday   2:00 PM – 9:00 PM
    3: { start: 14, end: 21 },       // Wednesday 2:00 PM – 9:00 PM
    4: { start: 14, end: 21 },       // Thursday  2:00 PM – 9:00 PM
    5: { start: 17, end: 24 },       // Friday    5:00 PM – 12:00 AM
    6: null                           // Saturday — unavailable
}

function formatTime(h, m) {
    const period = h >= 12 ? 'PM' : 'AM'
    const hour12 = h > 12 ? h - 12 : (h === 0 ? 12 : h)
    return `${hour12}:${m.toString().padStart(2, '0')} ${period}`
}

function generateAllSlots(dayOfWeek) {
    const hours = AVAILABILITY[dayOfWeek]
    if (!hours) return []
    const slots = []
    for (let h = hours.start; h < hours.end; h++) {
        slots.push(formatTime(h, 0))
        slots.push(formatTime(h, 30))
    }
    return slots
}

/**
 * Parse a display time string like "2:00 PM" into { h, m } in 24h
 * Used to build Google Calendar timestamps.
 */
function parseTimeToIST(timeStr) {
    // e.g. "2:00 PM" → { h: 14, m: 0 }
    const [timePart, period] = timeStr.split(' ')
    let [h, m] = timePart.split(':').map(Number)
    if (period === 'PM' && h !== 12) h += 12
    if (period === 'AM' && h === 12) h = 0
    return { h, m }
}

/**
 * Build Google Calendar YYYYMMDDTHHMMSS string in IST (UTC+5:30)
 * For the ctz parameter we pass Asia/Kolkata so Google handles DST.
 */
function toGCalDateTime(dateISO, h, m) {
    // dateISO: "2026-04-07", h/m in IST 24h
    const [year, month, day] = dateISO.split('-').map(Number)
    const pad = (n) => String(n).padStart(2, '0')
    return `${year}${pad(month)}${pad(day)}T${pad(h)}${pad(m)}00`
}

/**
 * Build the Google Calendar "Add to Calendar" URL for a 30-min meeting
 */
function buildCalendarUrl({ dateISO, time, name }) {
    const { h, m } = parseTimeToIST(time)
    const endH = m === 30 ? h + 1 : h
    const endM = m === 30 ? 0 : 30

    const gStart = toGCalDateTime(dateISO, h, m)
    const gEnd   = toGCalDateTime(dateISO, endH, endM)

    const title   = `Technical Strategy Session — Trixon`
    const details = `30-minute strategy session with Trixon.\n\nJoin via Google Meet: ${MEET_LINK}\n\nBring your questions about your technical foundation.`
    const location = MEET_LINK

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${gStart}/${gEnd}&ctz=Asia%2FKolkata&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`
}

// ─── GET /api/schedule/slots?date=2026-04-07 ────────────────────────────────
// Returns all slots for the date minus already-booked ones
router.get('/slots', async (req, res) => {
    const { date } = req.query
    if (!date) return res.status(400).json({ message: 'Date is required' })

    const dateObj = new Date(date + 'T00:00:00')
    const dayOfWeek = dateObj.getDay()
    const hours = AVAILABILITY[dayOfWeek]

    if (!hours) {
        return res.json({ available: false, slots: [], message: 'Not available on this day' })
    }

    try {
        // Find already-booked slots for this date
        const existing = await Booking.find({ date }).select('time -_id')
        const bookedTimes = new Set(existing.map(b => b.time))

        // Generate all slots and filter out booked ones
        const allSlots = generateAllSlots(dayOfWeek)
        const freeSlots = allSlots.filter(s => !bookedTimes.has(s))

        res.json({ available: freeSlots.length > 0, slots: freeSlots })
    } catch (err) {
        console.error('Error fetching slots:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// ─── GET /api/schedule/availability ─────────────────────────────────────────
router.get('/availability', (req, res) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const schedule = days.map((name, index) => {
        const hours = AVAILABILITY[index]
        if (!hours) return { day: name, dayIndex: index, available: false }
        return {
            day: name,
            dayIndex: index,
            available: true,
            start: formatTime(hours.start, 0),
            end: formatTime(hours.end === 24 ? 0 : hours.end, 0)
        }
    })
    res.json(schedule)
})

// ─── POST /api/schedule ──────────────────────────────────────────────────────
// Books a meeting: saves to DB then sends emails
router.post('/', async (req, res) => {
    try {
        const { fullName, email, phone, companyName, companyWebsite, role, date, time, dateISO } = req.body

        if (!fullName || !email || !phone || !companyName || !role || !date || !time || !dateISO) {
            return res.status(400).json({ message: 'All required fields must be provided' })
        }

        // Double-check slot is still free (race condition guard)
        const conflict = await Booking.findOne({ date: dateISO, time })
        if (conflict) {
            return res.status(409).json({ message: 'This slot was just booked. Please choose another time.' })
        }

        // Check if user already has a booking (prevent spam/duplicates)
        const existingBooking = await Booking.findOne({ email })
        if (existingBooking) {
            return res.status(400).json({ message: 'A meeting is already scheduled with this email. Please check your inbox or contact us to reschedule.' })
        }

        // Save the booking
        await Booking.create({ date: dateISO, time, fullName, email, phone, companyName, companyWebsite: companyWebsite || '', role })

        // Build calendar URL for visitor
        const calendarUrl = buildCalendarUrl({ dateISO, time, name: fullName })

        // Send notification to founder
        await sendMeetingNotification({ fullName, email, phone, companyName, companyWebsite, role, date, time, meetLink: MEET_LINK })

        // Send confirmation to visitor (with Meet link + calendar URL)
        await sendUserConfirmation({ name: fullName, email, date, time, meetLink: MEET_LINK, calendarUrl })

        console.log(`✓ Meeting booked: ${fullName} on ${date} at ${time}`)
        res.status(201).json({ message: 'Meeting scheduled successfully' })
    } catch (error) {
        if (error.code === 11000) {
            // MongoDB duplicate key — slot was taken
            return res.status(409).json({ message: 'This slot was just booked. Please choose another time.' })
        }
        console.error('Error scheduling meeting:', error)
        res.status(500).json({ message: 'Failed to schedule meeting. Please try again.' })
    }
})

module.exports = router
