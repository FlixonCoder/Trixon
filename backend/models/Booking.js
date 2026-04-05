const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    date: {
        type: String,  // stored as ISO date string e.g. "2026-04-07"
        required: true
    },
    time: {
        type: String,  // stored as "2:00 PM"
        required: true
    },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    companyWebsite: { type: String, default: '' },
    role: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

// Compound unique index — one booking per slot
bookingSchema.index({ date: 1, time: 1 }, { unique: true })

module.exports = mongoose.model('Booking', bookingSchema)
