const ContactSetting = require('../models/ContactSetting');

// ✅ Create
exports.createContactSetting = async (req, res) => {
  try {
    const contactSetting = await ContactSetting.create(req.body);
    res.status(201).json(contactSetting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Get All
exports.getAllContactSettings = async (req, res) => {
  try {
    const settings = await ContactSetting.findAll();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get by ID
exports.getContactSettingById = async (req, res) => {
  try {
    const setting = await ContactSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: 'Contact setting not found' });
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update
exports.updateContactSetting = async (req, res) => {
  try {
    const setting = await ContactSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: 'Contact setting not found' });

    await setting.update(req.body);
    res.json(setting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Delete
exports.deleteContactSetting = async (req, res) => {
  try {
    const setting = await ContactSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: 'Contact setting not found' });

    await setting.destroy();
    res.json({ message: 'Contact setting deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
