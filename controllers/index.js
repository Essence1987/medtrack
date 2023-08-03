<<<<<<< Updated upstream
=======
const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard');
const homeRoutes = require('./homepage');

router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router;
>>>>>>> Stashed changes
