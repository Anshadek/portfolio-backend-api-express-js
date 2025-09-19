const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Project = require('./Project');

const ProjectImage = sequelize.define('ProjectImage', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  image_path: { type: DataTypes.STRING, allowNull: false },
  image_title: { type: DataTypes.STRING, allowNull: true },
  image_description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: 'project_images',
  timestamps: true
});

ProjectImage.belongsTo(Project, { foreignKey: 'project_id', onDelete: 'CASCADE' });
Project.hasMany(ProjectImage, { foreignKey: 'project_id' });

module.exports = ProjectImage;
