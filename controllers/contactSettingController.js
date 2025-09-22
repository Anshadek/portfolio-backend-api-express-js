const ContactSetting = require('../models/ContactSetting');
const contactSettingSchema = require('../validators/contactSettingValidator');

module.exports = {

  // Create new contact setting
  create: async (req, res) => {
    try {
      // Validate with abortEarly: false to get all errors
      const { error, value } = contactSettingSchema.validate(req.body, { abortEarly: false });
  
      if (error) {
        // Map all error messages into an array
        const errors = error.details.map(detail => detail.message);
        return res.status(400).json({ errors });
      }
  
      const contact = await ContactSetting.create(value);
      res.status(201).json(contact);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  

  // Get all contact settings
  getAll: async (req, res) => {
    try {
      const contacts = await ContactSetting.findAll();
      res.json(contacts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Get contact setting by ID
  getById: async (req, res) => {
    try {
      const contact = await ContactSetting.findByPk(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact setting not found' });
      res.json(contact);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Update contact setting by ID
  update: async (req, res) => {
    try {
      const { error, value } = contactSettingSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const contact = await ContactSetting.findByPk(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact setting not found' });

      await contact.update(value);
      res.json(contact);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Delete contact setting by ID
  remove: async (req, res) => {
    try {
      const contact = await ContactSetting.findByPk(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact setting not found' });

      await contact.destroy();
      res.json({ message: 'Contact setting deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

};
