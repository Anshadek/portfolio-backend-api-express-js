const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.post("/", messageController.create);
router.get("/", messageController.getAll);
router.get("/:id", messageController.getById);
router.put("/:id", messageController.update);
router.delete("/:id", messageController.remove);

module.exports = router;
