const AboutInfo = require("../models/AboutInfo");
const aboutSchema = require("../validators/aboutValidator");

exports.create = async (req, res, next) => {
  try {
    const { error, value } = aboutSchema.validate(req.formData);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const about = await AboutInfo.create(value);
    res.status(201).json(about);
  } catch (err) {
    next(err); // send to global error handler
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
