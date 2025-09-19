const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Message = sequelize.define('Message', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  client_name: { type: DataTypes.STRING, allowNull: false },
  client_email: { type: DataTypes.STRING, allowNull: false },
  subject: { type: DataTypes.STRING, allowNull: true },
  message: { type: DataTypes.TEXT, allowNull: false },
  read_status: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'messages',
  timestamps: true
});

module.exports = Message;
