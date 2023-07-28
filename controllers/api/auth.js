const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../../models/user');
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
    try {
        const {usename, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, email, password: hashedPassword });

        req.session.userId = user.id; // Stores user ID in the session
        res.json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'An error has occured. Please try again later.' });
    }
});

// User Login

router.post('/login', async (req, res) => {
    try {
        const { usename, password } = req.body;

        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: 'Incorrect username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Incorrect username or password' });
        }

        req.session.userId = user.id; // Stores user ID in the session
        res.json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'An error has occured. Please try again later.' });
    }
});

module.exports = router;