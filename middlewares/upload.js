const multer = require("multer");
const path = require("path");
const fs = require("fs");
const config = require("../config/upload");

// dynamic storage
const storage = (folder) =>
  multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = path.join(config.uploadDir, folder);

      // create folder if not exists
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }

      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const uniqueName =
        Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
      cb(null, uniqueName);
    },
  });

// file filter
const fileFilter = (req, file, cb) => {
  const extName = config.allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = config.allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images and PDFs are allowed."));
  }
};

// factory function
const upload = (folder) =>
  multer({
    storage: storage(folder),
    fileFilter,
    limits: { fileSize: config.maxFileSize },
  });

module.exports = upload;
