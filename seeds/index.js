const sequelize = require('../config/connection');
const { User } = require('../models');
const userData = require('./userSeedData.json');

const seedUser = () => User.bulkCreate(userData,{
    individualHooks:true,
    returning:true
});

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    
  process.exit(0);
};

seedAll();