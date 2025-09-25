const express = require("express");
const router = express.Router();
const formData = require("../middlewares/formData");
const projectImageController = require("../controllers/projectImageController");

router.post("/", formData("project_images", [{ name: "image_path", maxCount: 1 }]), projectImageController.create);
router.get("/", projectImageController.getAll);
router.get("/:id", projectImageController.getById);
router.put("/:id", formData("project_images", [{ name: "image_path", maxCount: 1 }]), projectImageController.update);
router.delete("/:id", projectImageController.deleteById);

module.exports = router;
