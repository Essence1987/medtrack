const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard');
const homeRoutes = require('./homepage');
const reviewRoutes = require('./reviewRoutes');

router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/', reviewRoutes);

module.exports = router;