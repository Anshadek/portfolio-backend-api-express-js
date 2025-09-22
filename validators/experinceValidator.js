const Joi = require("joi");

const experienceSchema = Joi.object({
  job_role: Joi.string().max(255).required(),
  duration: Joi.string().max(255).optional(),
  company_name: Joi.string().max(255).required()
});

module.exports = experienceSchema;
