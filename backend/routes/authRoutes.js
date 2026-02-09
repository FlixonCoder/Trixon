const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /api/auth/login - Admin Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    if (!process.env.ADMIN_PASSWORD_HASH) {
        console.error("ADMIN_PASSWORD_HASH missing");
        return res.status(500).json({ message: 'Server misconfiguration' });
    }

    if (email !== process.env.ADMIN_EMAIL) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(
        password,
        process.env.ADMIN_PASSWORD_HASH.trim()
    );

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = {
        admin: { id: 'admin' }
    };

    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
            if (err) return res.status(500).json({ message: 'Token error' });
            res.json({ token });
        }
    );
});


module.exports = router;
