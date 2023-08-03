const router = require('express').Router();
const authRoutes = require('./auth');

router.use('/user', authRoutes)

module.exports = router;