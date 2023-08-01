const User = require("./User");
const Faculty = require('./faculty');
const PerformanceReview = require('./performanceReview');

User.hasOne(Faculty, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// A user can have many Faculty
User.hasMany(Faculty, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// A user can have many Performance Reviews
User.hasMany(PerformanceReview, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });

module.exports = { User, Faculty, PerformanceReview };
