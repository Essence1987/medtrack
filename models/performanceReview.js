const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");
const Faculty = require("./faculty")

class PerformanceReview extends Model {}

PerformanceReview.init(
  {
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
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FacultyName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Unknown",
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

// Create a foreign key association between PerformanceReview and User
PerformanceReview.belongsTo(User, { foreignKey: "UserId", targetKey: "id" });

module.exports = PerformanceReview;
