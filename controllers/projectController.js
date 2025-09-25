const Project = require('../models/Project');
const PortfolioCategory = require('../models/PortfolioCategory');
const { createProjectSchema, updateProjectSchema } = require('../validators/projectValidator');
const { date } = require('joi');

// Create a new project
exports.create = async (req, res) => {
  try {
    const { id, PortfolioCategory, ...data } = req.body;
    const { error } = createProjectSchema.validate(data);
    if (error) return res.status(400).json({ success: false, error: error.details[0].message });

    const project = await Project.create(data);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update a project by ID
exports.update = async (req, res) => {
  try {
    const { id, PortfolioCategory, ...data } = req.body;
    const { error } = updateProjectSchema.validate(data, { abortEarly: false });
    if (error) return res.status(400).json({ success: false, error: error.details[0].message });

    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    await project.update(data);
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get all projects
exports.getAll = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [{ model: PortfolioCategory, attributes: ['id', 'name'] }],
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get a project by ID
exports.getById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id, {
      include: [{ model: PortfolioCategory, attributes: ['id', 'name'] }]
    });

    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete a project by ID
exports.deleteById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    await project.destroy();
    res.status(200).json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
