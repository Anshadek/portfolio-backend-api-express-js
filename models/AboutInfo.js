const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AboutInfo = sequelize.define('AboutInfo', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  freelance: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  brief_description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  profile_photo: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'about_infos',
  timestamps: true
});

module.exports = AboutInfo;
