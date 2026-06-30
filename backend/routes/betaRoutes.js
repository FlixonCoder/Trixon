const express = require('express')
const router = express.Router()
const BetaApplication = require('../models/BetaApplication')
const authMiddleware = require('../middleware/authMiddleware')
const { sendBetaNotification, sendBetaConfirmation } = require('../utils/mailer')

// POST /api/beta-program - Apply to the beta program
router.post('/', async (req, res) => {
    try {
        const {
            fullName,
            email,
            linkedin,
            company,
            role,
            industry,
            experienceYears,
            productInterest,
            categories,
            testingExperience,
            feedbackStyle,
            availability,
            motivation
        } = req.body

        // Validation
        if (!fullName || !email || !role || !industry || experienceYears === undefined || !productInterest || !categories || !testingExperience || !availability) {
            return res.status(400).json({ message: 'All required fields must be provided' })
        }

        // Check duplicate email
        const existingApp = await BetaApplication.findOne({ email: email.toLowerCase() })
        if (existingApp) {
            return res.status(409).json({ message: 'You have already applied to the beta program with this email address.' })
        }

        const newApplication = new BetaApplication({
            fullName,
            email: email.toLowerCase(),
            linkedin: linkedin || '',
            company: company || '',
            role,
            industry,
            experienceYears: Number(experienceYears),
            productInterest,
            categories,
            testingExperience,
            feedbackStyle: feedbackStyle || '',
            availability,
            motivation: motivation || ''
        })

        const savedApplication = await newApplication.save()

        // Send email notifications (non-blocking for response)
        try {
            await sendBetaNotification({
                fullName,
                email: email.toLowerCase(),
                linkedin,
                company,
                role,
                industry,
                experienceYears,
                productInterest,
                categories,
                testingExperience,
                feedbackStyle,
                availability,
                motivation
            })
            await sendBetaConfirmation({
                name: fullName,
                email: email.toLowerCase()
            })
            console.log(`✓ Beta application notifications sent for: ${fullName}`)
        } catch (emailErr) {
            console.error('Error sending beta emails:', emailErr)
        }

        res.status(201).json(savedApplication)
    } catch (error) {
        console.error('Error saving beta application:', error)
        res.status(500).json({ message: 'Server error. Please try again later.' })
    }
})

// GET /api/beta-program - List applications (protected for admin panel)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const applications = await BetaApplication.find().sort({ createdAt: -1 })
        res.status(200).json(applications)
    } catch (error) {
        console.error('Error fetching applications:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE /api/beta-program/:id - Delete an application (protected for admin panel)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const application = await BetaApplication.findById(req.params.id)
        if (!application) {
            return res.status(404).json({ message: 'Application not found' })
        }

        await application.deleteOne()
        res.status(200).json({ message: 'Application deleted successfully' })
    } catch (error) {
        console.error('Error deleting application:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
