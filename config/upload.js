const path = require("path");

module.exports = {
  uploadDir: path.join(__dirname, "../uploads"),
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: /jpeg|jpg|png|gif|pdf/,
};
