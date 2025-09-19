const Project = require('../models/Project');
const ProjectImage = require('../models/ProjectImage');
const PortfolioCategory = require('../models/PortfolioCategory');

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [PortfolioCategory, ProjectImage]
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
