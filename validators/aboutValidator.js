const Joi = require("joi");

const aboutSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  birthday: Joi.date().iso().required(), // YYYY-MM-DD format
  age: Joi.number().integer().min(0).required(),
  website: Joi.string().uri().optional(),
  degree: Joi.string().max(50).optional(),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(), // 10-digit phone number
  email: Joi.string().email().required(),
  city: Joi.string().max(100).required(),
  freelance: Joi.boolean().required(),
  brief_description: Joi.string().max(500).optional(),
  profile_photo: Joi.string().optional()
});

module.exports = aboutSchema;
