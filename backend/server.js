const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
console.log("Allowed Origins:", [process.env.CLIENT_URI_1, process.env.CLIENT_URI_2, process.env.CLIENT_URI_3, process.env.CLIENT_URI_4]);
app.use(cors({
    origin: [process.env.CLIENT_URI_1, process.env.CLIENT_URI_2, process.env.CLIENT_URI_3, process.env.CLIENT_URI_4],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err))

// Routes
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/contact', require('./routes/contactRoutes'))

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...')
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
