const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err))

// Routes
app.use('/api/contact', require('./routes/contactRoutes'))

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...')
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
