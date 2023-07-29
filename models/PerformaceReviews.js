const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

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

  
  }










{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'students',
}
);


module.exports = PerformanceReview;
