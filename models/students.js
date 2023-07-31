const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Students extends Model {}

Students.init(
  {
    StudentID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: false,
    },
    StudentName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    YearOfTraining: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'students',
  }
);   


async function createStudentTable() {
  try {
    await Students.sync({ force: true });
    console.log('Student table was created successfully.');
  } catch (error) {
    console.log('Error creating Student table:', error);
  }
}



module.exports = Students;