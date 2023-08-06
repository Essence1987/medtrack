const router = require('express').Router();
const PerformanceReviews = require('../models/performanceReview');
const protect = require('./protect');

// Route handler for /dashboard
router.get('/dashboard', protect, async (req, res) => {
    try {
        // Get all performance reviews for the logged-in user
        console.log(req.session.userId); // Log the userId inside the route handler
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

router.post('/delete-review', protect, async (req, res) => {
    try {
        const { reviewId } = req.body;
        console.log('Review ID to delete:', reviewId);
        const userId = req.session.userId;
        console.log(userId);

        // Delete the selected review
        await PerformanceReviews.destroy({
            where: {
                performance_review_id: reviewId,
                UserId: userId,
            },
        });

        // Redirect to the dashboard page after successful deletion
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error deleting performance review:', error);
        res.status(500).send('Error deleting performance review');
    }
});

module.exports = router;
