const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Experience = require('./Experience');

const ExperienceResponsibility = sequelize.define('ExperienceResponsibility', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  responsibility: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'experience_responsibilities',
  timestamps: true
});

ExperienceResponsibility.belongsTo(Experience, { foreignKey: 'experience_id', onDelete: 'CASCADE' });
Experience.hasMany(ExperienceResponsibility, { foreignKey: 'experience_id' });

module.exports = ExperienceResponsibility;
