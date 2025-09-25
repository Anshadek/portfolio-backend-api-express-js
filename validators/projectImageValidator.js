const Joi = require("joi");

// Supported image MIME types
const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const maxFileSize = 5 * 1024 * 1024; // 5MB

// -----------------------------
// Create Project Image Validator
// -----------------------------
const createProjectImageSchema = Joi.object({
  project_id: Joi.number()
    .integer()
    .required()
    .messages({
      "number.base": "Project ID must be a number",
      "any.required": "Project ID is required",
    }),

    image_path: Joi.string()
    .required()
    .messages({
      "any.required": "Image file is required",
      "string.base": "Image path must be a string",
    })
    .messages({
      "any.required": "Image file is required",
      "any.invalid": "Only JPEG, PNG, GIF, or WebP images are allowed",
      "any.max": "Image size must be less than 5MB",
    }),
  

  image_title: Joi.string()
    .max(255)
    .allow(null, "")
    .messages({
      "string.base": "Image title must be text",
      "string.max": "Image title must not exceed 255 characters",
    }),

  image_description: Joi.string()
    .max(1000)
    .allow(null, "")
    .messages({
      "string.base": "Image description must be text",
      "string.max": "Image description must not exceed 1000 characters",
    }),
});

// -----------------------------
// Update Project Image Validator
// -----------------------------
const updateProjectImageSchema = Joi.object({
  project_id: Joi.number()
    .integer()
    .optional()
    .messages({
      "number.base": "Project ID must be a number",
    }),

    image_path: Joi.string()
    .required()
    .messages({
      "any.required": "Image file is required",
      "string.base": "Image path must be a string",
    }),

  image_title: Joi.string()
    .max(255)
    .allow(null, "")
    .messages({
      "string.base": "Image title must be text",
      "string.max": "Image title must not exceed 255 characters",
    }),

  image_description: Joi.string()
    .max(1000)
    .allow(null, "")
    .messages({
      "string.base": "Image description must be text",
      "string.max": "Image description must not exceed 1000 characters",
    }),
});

module.exports = { createProjectImageSchema, updateProjectImageSchema };
