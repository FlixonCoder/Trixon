const express = require('express')
const router = express.Router()
const Message = require('../models/Message')
const authMiddleware = require('../middleware/authMiddleware')

// POST /api/contact - Submit a new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const newMessage = new Message({
            name,
            email,
            message
        })

        const savedMessage = await newMessage.save()

        res.status(201).json(savedMessage)
    } catch (error) {
        console.error('Error saving message:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

// GET /api/contact - Get all messages (for admin panel)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 })
        res.status(200).json(messages)
    } catch (error) {
        console.error('Error fetching messages:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE /api/contact/:id - Delete a message
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const message = await Message.findById(req.params.id)
        if (!message) {
            return res.status(404).json({ message: 'Message not found' })
        }

        await message.deleteOne()
        res.status(200).json({ message: 'Message deleted' })
    } catch (error) {
        console.error('Error deleting message:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

// PUT /api/contact/:id - Update message (e.g., toggle save)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const message = await Message.findById(req.params.id)
        if (!message) {
            return res.status(404).json({ message: 'Message not found' })
        }

        // Update fields provided in body
        if (req.body.isSaved !== undefined) {
            message.isSaved = req.body.isSaved
        }

        const updatedMessage = await message.save()
        res.status(200).json(updatedMessage)
    } catch (error) {
        console.error('Error updating message:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
