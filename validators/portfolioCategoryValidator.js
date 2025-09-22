const Joi = require("joi");

const portfolioCategorySchema = Joi.object({
  name: Joi.string().max(255).required()
});

module.exports = portfolioCategorySchema;
