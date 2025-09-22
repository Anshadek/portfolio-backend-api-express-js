const PortfolioCategory = require('../models/PortfolioCategory');
const portfolioCategorySchema = require('../validators/portfolioCategoryValidator');

// Create Category
exports.create = async (req, res) => {
  try {
    const { error, value } = portfolioCategorySchema.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }

    const category = await PortfolioCategory.create(value);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Categories
exports.getAll = async (req, res) => {
  try {
    const categories = await PortfolioCategory.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Category by ID
exports.getById = async (req, res) => {
  try {
    const category = await PortfolioCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Category
exports.remove = async (req, res) => {
  try {
    const category = await PortfolioCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    await category.destroy();
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
