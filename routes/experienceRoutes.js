const express = require("express");
const router = express.Router();
const experienceController = require("../controllers/experienceController");

router.post("/", experienceController.create);
router.get("/", experienceController.getAll);
router.get("/:id", experienceController.getById);
router.put("/:id", experienceController.update);
router.delete("/:id", experienceController.remove);

module.exports = router;
