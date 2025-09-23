const express = require("express");
const router = express.Router();
const formData = require("../middlewares/formData");
const aboutController = require("../controllers/aboutInfoController");
console.log("route section");
// store files inside "uploads/about/"
router.post("/", formData("about", [{ name: "profile_photo", maxCount: 1 }]), aboutController.create);
router.put("/:id", formData("about", [{ name: "profile_photo", maxCount: 1 }]), aboutController.update);
router.get("/", aboutController.getFirst);
router.get("/:id", aboutController.getById);
router.delete("/:id", aboutController.remove);

module.exports = router;
