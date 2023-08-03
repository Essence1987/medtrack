const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Faculty extends Model {}

Faculty.init(
  {
    FacultyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FacultyName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "faculty",
  }
);

module.exports = Faculty;
