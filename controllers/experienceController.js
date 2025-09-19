const Experience = require('../models/Experience');
const ExperienceResponsibility = require('../models/ExperienceResponsibility');

// Create
exports.createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All with Responsibilities
exports.getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll({
      include: [ExperienceResponsibility]
    });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ error: 'Experience not found' });

    await experience.update(req.body);
    res.json(experience);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ error: 'Experience not found' });

    await experience.destroy();
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
