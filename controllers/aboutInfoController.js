const AboutInfo = require('../models/AboutInfo');

exports.create = async (req, res) => {
  try {
    const about = await AboutInfo.create(req.body);
    res.status(201).json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const abouts = await AboutInfo.findAll();
    res.json(abouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const about = await AboutInfo.findByPk(req.params.id);
    if (!about) return res.status(404).json({ error: 'Not found' });
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const about = await AboutInfo.findByPk(req.params.id);
    if (!about) return res.status(404).json({ error: 'Not found' });
    await about.update(req.body);
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const about = await AboutInfo.findByPk(req.params.id);
    if (!about) return res.status(404).json({ error: 'Not found' });
    await about.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
