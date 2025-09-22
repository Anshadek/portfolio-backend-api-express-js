const express = require('express');
const router = express.Router();
const contactSettingController = require('../controllers/contactSettingController');

// CRUD routes
router.post('/', contactSettingController.create);
router.get('/', contactSettingController.getAll);
router.get('/:id', contactSettingController.getById);
router.put('/:id', contactSettingController.update);
router.delete('/:id', contactSettingController.remove);

module.exports = router;
