const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', { 
  StudentID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
    primaryKey: true,
    autoIncrement: false,
  },
  StudentName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  YearOfTraining: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Student;