const express = require("express");
const router = express.Router();
const projectImageController = require("../controllers/projectImageController");

router.post("/", projectImageController.create);
router.get("/", projectImageController.getAll);
router.get("/:id", projectImageController.getById);
router.put("/:id", projectImageController.update);
router.delete("/:id", projectImageController.remove);

module.exports = router;
