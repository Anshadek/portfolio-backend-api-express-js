const Joi = require("joi");

const createProjectImageSchema = Joi.object({
  project_id: Joi.number().integer().required(),
  image_path: Joi.string().required(),
  image_title: Joi.string().allow(null, ""),
  image_description: Joi.string().allow(null, "")
});

const updateProjectImageSchema = Joi.object({
  image_path: Joi.string().optional(),
  image_title: Joi.string().allow(null, ""),
  image_description: Joi.string().allow(null, ""),
  project_id: Joi.number().integer().optional()
});

module.exports = { createProjectImageSchema, updateProjectImageSchema };
