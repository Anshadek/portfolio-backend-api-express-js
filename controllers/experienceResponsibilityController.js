const ExperienceResponsibility = require('../models/ExperienceResponsibility');

exports.createResponsibility = async (req, res) => {
  try {
    const responsibility = await ExperienceResponsibility.create(req.body);
    res.status(201).json(responsibility);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteResponsibility = async (req, res) => {
  try {
    const responsibility = await ExperienceResponsibility.findByPk(req.params.id);
    if (!responsibility) return res.status(404).json({ error: 'Responsibility not found' });

    await responsibility.destroy();
    res.json({ message: 'Responsibility deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
