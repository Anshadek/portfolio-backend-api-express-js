const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Education = sequelize.define('Education', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  course: { type: DataTypes.STRING, allowNull: false },
  duration: { type: DataTypes.STRING, allowNull: true },
  college_name: { type: DataTypes.STRING, allowNull: false },
  college_address: { type: DataTypes.STRING, allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true },
}, {
  tableName: 'educations',
  timestamps: true
});

module.exports = Education;
