const Joi = require("joi");

const educationSchema = Joi.object({
  course: Joi.string().max(255).required(),
  duration: Joi.string().max(255).required(),
  college_name: Joi.string().max(255).required(),
  college_address: Joi.string().max(255).required(),
  description: Joi.string().allow(null, '').required()
});

module.exports = educationSchema;
