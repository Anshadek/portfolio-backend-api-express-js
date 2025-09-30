const express = require("express");
const router = express.Router();
const homeController = require("../../controllers/user/homeController");
console.log("route section");
// store files inside "uploads/about/"
router.get("/about-info", homeController.getAbout);
router.get("/skills-info", homeController.getSkill);
router.get("/education-info", homeController.getEducation);
router.get("/experience-info", homeController.getExperience);
router.get("/contact-info", homeController.getContact);
router.get("/portfolio-category", homeController.getPortfolioCategory);

module.exports = router;
