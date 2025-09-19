const ProjectImage = require('../models/ProjectImage');

exports.createImage = async (req, res) => {
  try {
    const image = await ProjectImage.create(req.body);
    res.status(201).json(image);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const image = await ProjectImage.findByPk(req.params.id);
    if (!image) return res.status(404).json({ error: 'Image not found' });

    await image.destroy();
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
