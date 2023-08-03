const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class PerformanceReview extends Model {}

PerformanceReview.init(
  {
    FacultyName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'faculty',
        key: 'FacultyName',
      },
    },
    PerformanceReviewId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    MedicalKnowledgeRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ClinicalJudgmentRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TeachingSkillsRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    HumanisticQualitiesRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OverallExperienceRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OverallExperienceComments: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "PerformanceReview",
  }
);

module.exports = PerformanceReview;
