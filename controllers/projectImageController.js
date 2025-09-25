const ProjectImage = require("../models/ProjectImage");
const Project = require("../models/Project");
const { createProjectImageSchema, updateProjectImageSchema } = require("../validators/projectImageValidator");

// Create
exports.create = async (req, res) => {
  try {
    console.log(req.formData);
    const { error } = createProjectImageSchema.validate(req.formData, { abortEarly: false });
    if (error) {
      const messages = error.details.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }

    const project = await Project.findByPk(req.formData.project_id); // <-- use formData
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });

    const image = await ProjectImage.create(req.formData);
    res.status(201).json({ success: true, data: image });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


// Get All
exports.getAll = async (req, res) => {
  try {
    const images = await ProjectImage.findAll({
      include: [{ model: Project, attributes: ["id", "title"] }],
      order: [["createdAt", "DESC"]]
    });
    res.status(200).json({ success: true, data: images });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get By Id
exports.getById = async (req, res) => {
  try {
    const image = await ProjectImage.findByPk(req.params.id, {
      include: [{ model: Project, attributes: ["id", "title"] }]
    });

    if (!image) return res.status(404).json({ success: false, message: "Project image not found" });

    res.status(200).json({ success: true, data: image });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const { error } = updateProjectImageSchema.validate(req.body);
    if (error) return res.status(400).json({ success: false, error: error.details[0].message });

    const image = await ProjectImage.findByPk(req.params.id);
    if (!image) return res.status(404).json({ success: false, message: "Project image not found" });

    await image.update(req.body);
    res.status(200).json({ success: true, data: image });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete
exports.deleteById = async (req, res) => {
  try {
    const image = await ProjectImage.findByPk(req.params.id);
    if (!image) return res.status(404).json({ success: false, message: "Project image not found" });

    await image.destroy();
    res.status(200).json({ success: true, message: "Project image deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
