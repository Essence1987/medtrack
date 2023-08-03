const express = require('express');
const router = express.Router();

const {User} = require('../../models');

// User Registration
router.post('/register', async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const user = await User.create({ username, email, password});

        req.session.save(() => {
            req.session.userId = user.id
            req.session.username = user.username
            req.session.loggedIn = true
        })
        
        res.json({ message: 'User registered successfully', user }); // Fixed response format
    } catch (error) {
        res.status(500).json({ error: 'An error has occurred. Please try again later.' });
    }
});

// User Login

router.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: 'Incorrect username or password' });
        }

        const isPasswordValid = user.checkPassword(password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Incorrect username or password' });
        }

        req.session.save(() => {
            req.session.userId = user.id
            req.session.username = user.username
            req.session.loggedIn = true
            res.redirect('/dashboard')
        })
        // res.json({ message: 'User logged in successfully'}, user);
    } catch (error) {
        res.status(500).json({ error: 'An error has occurred. Please try again later.' });
    }
});

module.exports = router;