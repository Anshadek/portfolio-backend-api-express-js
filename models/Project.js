const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const PortfolioCategory = require('./PortfolioCategory');

const Project = sequelize.define('Project', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  client: { type: DataTypes.STRING, allowNull: true },
  project_date: { type: DataTypes.DATEONLY, allowNull: true },
  project_url: { type: DataTypes.STRING, allowNull: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: 'projects',
  timestamps: true
});

Project.belongsTo(PortfolioCategory, { foreignKey: 'category_id' });
PortfolioCategory.hasMany(Project, { foreignKey: 'category_id' });

module.exports = Project;
