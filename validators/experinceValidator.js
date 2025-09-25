const Joi = require("joi");

const experienceSchema = Joi.object({
  job_role: Joi.string()
    .max(255)
    .required()
    .messages({
      "string.base": "Job role must be a text",
      "string.empty": "Job role field is required",
      "string.max": "Job role must not exceed 255 characters",
      "any.required": "Job role field is required",
    }),

  duration: Joi.string()
    .max(255)
    .required()
    .messages({
      "string.base": "Duration must be a text",
      "string.empty": "Duration field is required",
      "string.max": "Duration must not exceed 255 characters",
      "any.required": "Duration field is required",
    }),

  company_name: Joi.string()
    .max(255)
    .required()
    .messages({
      "string.base": "Company name must be a text",
      "string.empty": "Company name field is required",
      "string.max": "Company name must not exceed 255 characters",
      "any.required": "Company name field is required",
    }),

  responsibilities: Joi.string()
    .allow(null, "")
    .required()
    .messages({
      "string.base": "Responsibilities must be a text",
      "string.empty": "Responsibilities field is required",
      "any.required": "Responsibilities field is required",
    }),
});

module.exports = experienceSchema;
