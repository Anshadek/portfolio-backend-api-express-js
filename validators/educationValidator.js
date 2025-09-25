const Joi = require("joi");

const educationSchema = Joi.object({
  course: Joi.string()
    .max(255)
    .required()
    .messages({
      "string.base": "Course must be a text",
      "string.empty": "Course field is required",
      "string.max": "Course must not exceed 255 characters",
      "any.required": "Course field is required",
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

  college_name: Joi.string()
    .max(255)
    .required()
    .messages({
      "string.base": "College name must be a text",
      "string.empty": "College name field is required",
      "string.max": "College name must not exceed 255 characters",
      "any.required": "College name field is required",
    }),

  college_address: Joi.string()
    .max(255)
    .required()
    .messages({
      "string.base": "College address must be a text",
      "string.empty": "College address field is required",
      "string.max": "College address must not exceed 255 characters",
      "any.required": "College address field is required",
    }),

  description: Joi.string()
    .allow(null, "")
    .required()
    .messages({
      "string.base": "Description must be a text",
      "string.empty": "Description field is required",
      "any.required": "Description field is required",
    }),
});

module.exports = educationSchema;
