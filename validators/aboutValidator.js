const Joi = require("joi");

const aboutSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.base": "Title must be a text",
      "string.empty": "Title field is required",
      "string.min": "Title must be at least 3 characters",
      "string.max": "Title must not exceed 100 characters",
      "any.required": "Title field is required",
    }),

  description: Joi.string()
    .min(10)
    .required()
    .messages({
      "string.base": "Description must be a text",
      "string.empty": "Description field is required",
      "string.min": "Description must be at least 10 characters",
      "any.required": "Description field is required",
    }),

  birthday: Joi.date()
    .iso()
    .required()
    .messages({
      "date.base": "Birthday must be a valid date",
      "date.format": "Birthday must be in YYYY-MM-DD format",
      "any.required": "Birthday field is required",
    }),

  age: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      "number.base": "Age must be a number",
      "number.min": "Age must be greater than or equal to 0",
      "any.required": "Age field is required",
    }),

  website: Joi.string()
    .uri()
    .required()
    .messages({
      "string.base": "Website must be a valid URL",
      "string.empty": "Website field is required",
      "string.uri": "Website must be a valid URL",
      "any.required": "Website field is required",
    }),

  degree: Joi.string()
    .max(50)
    .required()
    .messages({
      "string.base": "Degree must be a text",
      "string.empty": "Degree field is required",
      "string.max": "Degree must not exceed 50 characters",
      "any.required": "Degree field is required",
    }),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone must be a valid 10-digit number",
      "string.empty": "Phone field is required",
      "any.required": "Phone field is required",
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.base": "Email must be a valid text",
      "string.email": "Email must be a valid email address",
      "string.empty": "Email field is required",
      "any.required": "Email field is required",
    }),

  city: Joi.string()
    .max(100)
    .required()
    .messages({
      "string.base": "City must be a text",
      "string.empty": "City field is required",
      "string.max": "City must not exceed 100 characters",
      "any.required": "City field is required",
    }),

  freelance: Joi.boolean()
    .required()
    .messages({
      "boolean.base": "Freelance must be true or false",
      "any.required": "Freelance field is required",
    }),

  brief_description: Joi.string()
    .max(500)
    .required()
    .messages({
      "string.base": "Brief description must be a text",
      "string.empty": "Brief description field is required",
      "string.max": "Brief description must not exceed 500 characters",
      "any.required": "Brief description field is required",
    }),

  profile_photo: Joi.string()
    .required()
    .messages({
      "string.base": "Profile photo must be a text or path",
      "string.empty": "Profile photo field is required",
      "any.required": "Profile photo field is required",
    }),
});

module.exports = aboutSchema;
