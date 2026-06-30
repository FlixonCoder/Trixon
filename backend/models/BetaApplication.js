const mongoose = require('mongoose')

const betaApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    linkedin: {
        type: String,
        default: ''
    },
    company: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    experienceYears: {
        type: Number,
        required: true
    },
    productInterest: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    testingExperience: {
        type: String,
        required: true
    },
    feedbackStyle: {
        type: String,
        default: ''
    },
    availability: {
        type: String,
        required: true
    },
    motivation: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('BetaApplication', betaApplicationSchema)
