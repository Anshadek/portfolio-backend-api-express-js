const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Project = require('./Project');

const ProjectImage = sequelize.define('ProjectImage', {
  id: { 
    type: DataTypes.BIGINT, 
    autoIncrement: true, 
    primaryKey: true 
  },
  image_path: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  image_title: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  image_description: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  },
  project_id: {  // 👈 explicitly define foreign key column here
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  tableName: 'project_images',
  timestamps: true
});

// Associations with explicit foreign key naming
Project.hasMany(ProjectImage, { 
  foreignKey: 'project_id', 
  as: 'images',        // 👈 alias for cleaner include queries
  onDelete: 'CASCADE' 
});

ProjectImage.belongsTo(Project, { 
  foreignKey: 'project_id', 
  as: 'project', 
  onDelete: 'CASCADE' 
});

module.exports = ProjectImage;
