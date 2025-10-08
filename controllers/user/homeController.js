const AboutInfo = require("../../models/AboutInfo");
const Education = require("../../models/Education");
const Experience = require("../../models/Experience");
const Contact = require("../../models/ContactSetting");
const PortfolioCategory = require("../../models/PortfolioCategory");
const Project = require("../../models/Project");  
const ProjectImage = require("../../models/ProjectImage");
const nodemailer = require("nodemailer");

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


// get contact data 
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    if (!contact) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  //
};

// get portfolio data 
exports.getPortfolioCategory = async (req, res) => {
  try {
    const BASE_URL = `${req.protocol}://${req.get("host")}`;

    // Get categories
    const categories = await PortfolioCategory.findAll({
      attributes: ["id", "name"],
    });

    // Get projects with category + images
    const projects = await Project.findAll({
      include: [
        {
          model: PortfolioCategory,
          attributes: ["id", "name"],
        },
        {
          model:ProjectImage,
          as: "images", // 👈 alias from association
          attributes: ["id", "image_path", "image_title", "image_description"],
        },
      ],
    });

    // Map projects into portfolioItems
    const portfolioItems = projects.map((p) => ({
      title: p.title,
      description: p.description,
      images: p.images.map((img) => ({
        url: `${BASE_URL}/uploads/project_images/${img.image_path}`,
        title: img.image_title,
        description: img.image_description,
      })),
      filter: `filter-${p.PortfolioCategory?.id || "uncategorized"}`,
      category: p.PortfolioCategory?.name || "uncategorized",
      ProjectDate: p.project_date,
      client: p.client,
      project_url: p.project_url,
    }));

    res.json({
      categories,
      items: portfolioItems,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.sendMail = async (req, res) => {
  try {
    res.status(200).json({ success: "Message sent successfully!" });
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // configure SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // app password or mail password
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      subject: `New Contact Message: ${subject}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
}