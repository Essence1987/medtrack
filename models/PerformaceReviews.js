const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const PerformanceReview = sequelize.define("PerformanceReview", {
  PerformanceReviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FacultyName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = PerformanceReview;
