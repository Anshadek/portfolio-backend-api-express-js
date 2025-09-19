const express = require("express");
const router = express.Router();
const formData = require("../middlewares/formData");
const educationController = require("../controllers/educationController");

// no files, only form-data
router.post("/", formData("education"), educationController.create);
router.put("/:id", formData("education"), educationController.update);
router.get("/", educationController.getAll);
router.get("/:id", educationController.getById);
router.delete("/:id", educationController.remove);

module.exports = router;
