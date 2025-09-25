const express = require('express');
const router = express.Router();
const formData = require("../middlewares/formData");
const contactSettingController = require('../controllers/contactSettingController');

// CRUD routes
router.post('/', formData("contact"), contactSettingController.create);
router.get('/', contactSettingController.getAll);
router.get('/:id', contactSettingController.getById);
router.put('/:id', formData("contact"), contactSettingController.update);
router.delete('/:id', contactSettingController.remove);

module.exports = router;
