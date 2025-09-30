const AboutInfo = require("../../models/AboutInfo");
const Education = require("../../models/Education");
const Experience = require("../../models/Experience");

// get about data 
exports.getAbout = async (req, res) => {
  try {
    const about = await AboutInfo.findOne();

    if (!about) {
      return res.status(404).json({ error: "Not found" });
    }

    const BASE_URL = `${req.protocol}://${req.get("host")}`;

    // safely append paths only if they exist
    if (about.profile_photo) {
      about.profile_photo = `${BASE_URL}/uploads/about/${about.profile_photo}`;
    }

    console.log("path", about.profile_photo);

    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get skill data 
exports.getSkill = async (req, res) => {
  try {
    const skillData = {
      html: 80,
      css: 80,
      js: 80,
      react: 80,
      node: 80,
      php: 80,
      python: 80,
      java: 80,
      "c++": 80,
      c: 80,
    };

    res.json(skillData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get education data 
exports.getEducation = async (req, res) => {
  try {
    const education = await Education.findAll();
    if (!education) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get experience data 
exports.getExperience = async (req, res) => {
  try {
    const experience = await Experience.findAll();
    if (!experience) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
