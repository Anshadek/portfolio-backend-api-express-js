const uploadFactory = require("./upload");

const formData = (folder, fields = []) => {
  const upload = uploadFactory(folder);

  return (req, res, next) => {
    let uploader;

    if (fields.length > 1) {
      uploader = upload.fields(fields);
    } else if (fields.length === 1) {
      uploader = upload.single(fields[0].name);
    } else {
      uploader = upload.none();
    }

    uploader(req, res, (err) => {
      if (err) return res.status(400).json({ error: err.message });

      req.formData = { ...req.body };

      if (req.file) {
        req.formData[fields[0].name] = req.file.filename;
      }

      if (req.files) {
        for (const field in req.files) {
          req.formData[field] = req.files[field].map((f) => f.filename);
        }
      }

      next();
    });
  };
};

module.exports = formData;
