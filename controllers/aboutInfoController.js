const AboutInfo = require("../models/AboutInfo");
const aboutSchema = require("../validators/aboutValidator");

exports.create = async (req, res, next) => {
  try {
    // req.formData contains text fields + uploaded file names
    const { error, value } = aboutSchema.validate(req.formData, { abortEarly: false, stripUnknown: true });

    if (error) {
      const errors = {};
      error.details.forEach((detail) => {
        const field = detail.path[0];
        errors[field] = detail.message;
      });
      return res.status(400).json({ errors });
    }

    const about = await AboutInfo.create(value);
    res.status(201).json({ success: true, data: about });
  } catch (err) {
    console.error(err);
    next(err);
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

exports.getFirst = async (req, res) => {
  console.log("getFirst");
  try {
    const about = await AboutInfo.findOne();
    console.log(about);
    if (!about) return res.status(404).json({ error: 'Not found' });
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { error, value } = aboutSchema.validate(req.formData, { abortEarly: false, stripUnknown: true });
    if (error) {
      const errors = {};
      error.details.forEach((detail) => {
        const field = detail.path[0];
        errors[field] = detail.message;
      });
      return res.status(400).json({ errors });
    }

    const about = await AboutInfo.findByPk(req.params.id);
    if (!about) return res.status(404).json({ error: "Not found" });

    await about.update(value);
    res.json({ success: true, data: about });
  } catch (err) {
    console.error(err);
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
