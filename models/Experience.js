const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Experience = sequelize.define('Experience', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  job_role: { type: DataTypes.STRING, allowNull: false },
  duration: { type: DataTypes.STRING, allowNull: true },
  responsibilities: { type: DataTypes.STRING, allowNull: true },
  company_name: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'experiences',
  timestamps: true
});

module.exports = Experience;
