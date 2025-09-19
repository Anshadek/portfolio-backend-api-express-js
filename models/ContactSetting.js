const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ContactSetting = sequelize.define('ContactSetting', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: true },
  phone: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: true },
  map_location: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: 'contact_settings',
  timestamps: true
});

module.exports = ContactSetting;
