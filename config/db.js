const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'portfolio_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || null,
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,  // optional: remove SQL logs
  }
);

module.exports = sequelize;
