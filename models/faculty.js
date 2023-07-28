const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Faculty = sequelize.define("Faculty", {
  FacultyId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FacultyName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.export = Faculty; 
