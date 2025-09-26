const express = require("express");
const router = express.Router();
const homeController = require("../../controllers/user/homeController");
console.log("route section");
// store files inside "uploads/about/"
router.get("/", homeController.getAbout);
module.exports = router;
