const PerformanceReviews = require('../models/performanceReview');
const protect = require('./protect');

// Route handler for /dashboard

const showDashboard = async (req, res) => {
    try {
        const loggedUserId = req.session.loggedUserId;

        // Get all performance reviews for the logged in user

        const userReviews = await PerformanceReviews.findAll({
            where: { userId: LoggedUserId },
    });

    // Render the dashboard template, passing in the user reviews
    res.render('dashboard', { userReviews });
} catch (error) {
    console.error('Error fetching user reviews:', error);
    res.status(500).send('Error fetching user reviews');
}
};

module.exports = showDashboard;