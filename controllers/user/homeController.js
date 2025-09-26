const AboutInfo = require("../../models/AboutInfo");

// get about data 
exports.getAbout = async (req, res) => {
  try {
    const about = await AboutInfo.findOne();
    if (!about) return res.status(404).json({ error: 'Not found' });
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
