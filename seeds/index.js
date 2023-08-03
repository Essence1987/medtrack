const sequelize = require('../config/connection');
const { User } = require('../models');
const { Faculty } = require('../models');
const { PerformanceReview } = require('../models');
const userData = require('./userSeedData.json');
const facultyData = require('./facultySeedData.json');
const performanceReviewData = require('./performanceReviewSeedData.json');

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true
});

const seedFaculty = () => Faculty.bulkCreate(facultyData, {
  individualHooks: true,
  returning: true
});

const seedPerformanceReview = () => PerformanceReview.bulkCreate(performanceReviewData, {
  individualHooks: true,
  returning: true
});

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  await seedFaculty();
  await seedPerformanceReview();
  process.exit(0);
};

seedAll();
