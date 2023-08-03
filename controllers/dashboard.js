const router = require('express').Router();
const PerformanceReviews = require('../models/performanceReview');
const protect = require('./protect');

// Route handler for /dashboard

router.get('/dashboard', protect, async (req, res) => {
    try {
        // Get all performance reviews for the logged in user
        const userReviews = await PerformanceReviews.findAll({
            where: { userId: req.session.userId },
    });
    console.log(userReviews);
    // Render the dashboard template, passing in the user reviews
    res.render('dashboard', { userReviews });
} catch (error) {
    console.error('Error fetching user reviews:', error);
    res.status(500).send('Error fetching user reviews');
}
});

module.exports = router;