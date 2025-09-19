const Education = require('../models/Education');

// Create
exports.createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All
exports.getAllEducations = async (req, res) => {
  try {
    const educations = await Education.findAll();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get One
exports.getEducationById = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) return res.status(404).json({ error: 'Education not found' });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) return res.status(404).json({ error: 'Education not found' });

    await education.update(req.body);
    res.json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) return res.status(404).json({ error: 'Education not found' });

    await education.destroy();
    res.json({ message: 'Education deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
