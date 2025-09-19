const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PortfolioCategory = sequelize.define('PortfolioCategory', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'portfolio_categories',
  timestamps: true
});

module.exports = PortfolioCategory;
