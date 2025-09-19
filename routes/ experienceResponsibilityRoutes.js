const express = require("express");
const router = express.Router();
const responsibilityController = require("../controllers/experienceResponsibilityController");

router.post("/", responsibilityController.create);
router.get("/", responsibilityController.getAll);
router.get("/:id", responsibilityController.getById);
router.put("/:id", responsibilityController.update);
router.delete("/:id", responsibilityController.remove);

module.exports = router;
