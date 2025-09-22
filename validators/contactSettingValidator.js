const Joi = require('joi');

const contactSettingSchema = Joi.object({
  title: Joi.string().max(255).required(),
  address: Joi.string().max(500).required(),
  phone: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
  map_location: Joi.string().required()
});

module.exports = contactSettingSchema;
