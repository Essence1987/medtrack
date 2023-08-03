const express = require('express');
const router = express.Router();
const PerformanceReview = require('../../models/performanceReview');

// Route handler for /api/add-review (GET)
router.get('/add-review', (req, res) => {
  // This is the same as before if you need to render the addReview.handlebars template
  res.render('addReview');
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
    } = req.body;

    // Insert the data into the PerformanceReview table
    await PerformanceReview.create({
      MedicalKnowledgeRating,
      ClinicalJudgmentRating,
      TeachingSkillsRating,
      HumanisticQualitiesRating,
      OverallExperienceRating,
      OverallExperienceComments,
    });

    // Redirect to the /dashboard page after the INSERT completes
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error adding performance review: ', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
