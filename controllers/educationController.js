// controllers/educationController.js
const Education = require("../models/Education");
const educationSchema = require("../validators/educationValidator");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const { id, ...data } = req.body;
    const { error, value } = educationSchema.validate(data, { abortEarly: false });
    if (error) {
      // Collect all error messages
      const messages = error.details.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }
    const education = await Education.create(value);
    res.status(201).json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const educations = await Education.findAll();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) return res.status(404).json({ error: "Not found" });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Education.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Education.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
