const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioCategoryController");

router.post("/", portfolioController.create);
router.get("/", portfolioController.getAll);
router.get("/:id", portfolioController.getById);
router.put("/:id", portfolioController.update);
router.delete("/:id", portfolioController.remove);

module.exports = router;
