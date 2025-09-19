module.exports = (err, req, res, next) => {
    console.error(err);
  
    if (err.name === "MulterError") {
      return res.status(400).json({ error: `Upload error: ${err.message}` });
    }
  
    res.status(500).json({ error: "Something went wrong" });
  };
  