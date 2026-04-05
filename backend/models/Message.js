const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyWebsite: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isSaved: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Message', messageSchema)
