const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Faculty extends Model {}

Faculty.init(
  {
  FacultyId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: false,
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
  modelName: 'faculty',
}
);

async function createFacultyTable() {
  try {
    await Faculty.sync({ force: true });
    console.log('Faculty table was created succesfully.');
  } catch (error) {
    console.log('Error creating Faculy table:', error);
    
  }
}

createFacultyTable();

module.export = Faculty; 
