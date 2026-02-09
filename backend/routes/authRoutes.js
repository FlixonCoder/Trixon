const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /api/auth/login - Admin Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate email
    if (email !== process.env.ADMIN_EMAIL) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create token
    const payload = {
        admin: {
            id: 'admin' // Static ID since there is only one admin
        }
    };

    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' }, // Token valid for 1 hour
        (err, token) => {
            if (err) throw err;
            res.json({ token });
        }
    );
});

module.exports = router;
