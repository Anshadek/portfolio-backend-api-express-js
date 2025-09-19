const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutInfoController");

router.post("/", aboutController.create);
router.get("/", aboutController.getAll);
router.get("/:id", aboutController.getById);
router.put("/:id", aboutController.update);
router.delete("/:id", aboutController.remove);

module.exports = router;
