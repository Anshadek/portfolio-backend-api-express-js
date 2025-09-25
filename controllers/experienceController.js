const Experience = require('../models/Experience');
const ExperienceResponsibility = require('../models/ExperienceResponsibility');
const experienceSchema = require('../validators/experinceValidator');

// Create
exports.create = async (req, res) => {
  try {
    
    const { id, ...data } = req.body;
    const { error, value } = experienceSchema.validate(data, { abortEarly: false });
    if (error) {
      // Collect all error messages
      const messages = error.details.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }
    const experience = await Experience.create(value);
    res.status(201).json(experience);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All with Responsibilities
exports.getAll = async (req, res) => {
  try {
    const experiences = await Experience.findAll({
      include: [ExperienceResponsibility]
    });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get By ID
exports.getById = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id, {
      include: [ExperienceResponsibility]
    });
    if (!experience) return res.status(404).json({ error: 'Experience not found' });

    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ error: 'Experience not found' });

    await experience.update(req.body);
    res.json(experience);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Remove (Delete)
exports.remove = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ error: 'Experience not found' });

    await experience.destroy();
    res.json({ message: 'Experience deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
