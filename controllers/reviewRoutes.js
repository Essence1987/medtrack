const express = require('express');
const router = express.Router();
const PerformanceReview = require('../models/performanceReview');
const Faculty = require('../models/faculty');
const protect = require('./protect');

// Route handler for /api/add-review (GET)
router.get('/add-review', protect, async (req, res) => {
  try {
    // Get a list of faculty members' names to populate the dropdown in the form
    const facultyMembers = await Faculty.findAll({
      attributes: ['FacultyName'],
    });

    // Pass the faculty members' names to the addReview template
    res.render('addReview', { facultyMembers });
  } catch (error) {
    console.error('Error fetching faculty members: ', error);
    res.status(500).send('Server error');
  }
});

// Route handler for /api/add-review (POST)
router.post('/add-review', async (req, res) => {
  try {
    // Get the form data from the request body
    const {
      MedicalKnowledgeRating,
      ClinicalJudgmentRating,
      TeachingSkillsRating,
      HumanisticQualitiesRating,
      OverallExperienceRating,
      OverallExperienceComments,
      FacultyName,
    } = req.body;

    // Get the logged-in user's ID from the session
    const userId = req.session.userId;
    console.log(req.session.userId);
    console.log(userId);

    if (!userId) {
      throw new Error('User not authenticated');
    }

    // Insert the data into the PerformanceReview table
    const performanceReview = await PerformanceReview.create({
      MedicalKnowledgeRating,
      ClinicalJudgmentRating,
      TeachingSkillsRating,
      HumanisticQualitiesRating,
      OverallExperienceRating,
      OverallExperienceComments,
      FacultyName, // Save the selected faculty member's name in the PerformanceReview table
      UserId: userId, // Associate the review with the user ID
    });

    // Redirect to the /dashboard page after the INSERT completes
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error adding performance review: ', error);
    res.status(500).send('Error adding performance review');
  }
});

module.exports = router;
