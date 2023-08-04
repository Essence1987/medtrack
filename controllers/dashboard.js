const router = require('express').Router();
const PerformanceReviews = require('../models/performanceReview');
const protect = require('./protect');

// Route handler for /dashboard
router.get('/dashboard', protect, async (req, res) => {
    try {
       // Get all performance reviews for the logged-in user
        const userReviews = await PerformanceReviews.findAll({
            where: { UserId: req.session.userId },
        });

        // Convert the userReviews data to plain JSON object
        const userReviewsData = userReviews.map(review => review.get({ plain: true }));

        console.log(userReviewsData);

        // Render the dashboard template, passing in the user reviews data
        res.render('dashboard', { performanceReviews: userReviewsData });
    } catch (error) {
        console.error('Error fetching user reviews:', error);
        res.status(500).send('Error fetching user reviews');
    }
});

module.exports = router;
