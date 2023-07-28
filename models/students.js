const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Faculty = sequelize.define("Faculty", {
    StudentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    StudentName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    YearOfTraining: {
        type: DataTypes.STRING(100),
        allowNull: false,

  });

  module.exoprts = Students;