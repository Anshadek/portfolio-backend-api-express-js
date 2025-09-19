const PortfolioCategory = require('../models/PortfolioCategory');

exports.createCategory = async (req, res) => {
  try {
    const category = await PortfolioCategory.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await PortfolioCategory.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
