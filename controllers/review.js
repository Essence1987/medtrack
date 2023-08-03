const addReview = async (req, res) => {
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
};

module.exports = { renderAddReviewPage, addReview };
