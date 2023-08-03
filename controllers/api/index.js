const router = require('express').Router();
const authRoutes = require('./auth');
// /api/user/register
// /api/user/login
router.use('/user', authRoutes)

module.exports = router;