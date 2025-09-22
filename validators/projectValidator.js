const Joi = require('joi');

const createProjectSchema = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().allow(null, ''),
  client: Joi.string().allow(null, ''),
  project_date: Joi.date().allow(null, ''),
  project_url: Joi.string().uri().allow(null, ''),
  category_id: Joi.number().integer().required()
});

const updateProjectSchema = Joi.object({
  title: Joi.string().max(255).optional(),
  description: Joi.string().allow(null, ''),
  client: Joi.string().allow(null, ''),
  project_date: Joi.date().allow(null, ''),
  project_url: Joi.string().uri().allow(null, ''),
  category_id: Joi.number().integer().optional()
});

module.exports = { createProjectSchema, updateProjectSchema };
