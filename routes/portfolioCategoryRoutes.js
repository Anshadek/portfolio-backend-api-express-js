const express = require("express");
const router = express.Router();
const portfolioCategoryController = require("../controllers/portfolioCategoryController");

// Routes
router.post("/", portfolioCategoryController.create);
router.get("/", portfolioCategoryController.getAll);
router.get("/:id", portfolioCategoryController.getById);
router.delete("/:id", portfolioCategoryController.remove);

module.exports = router;
