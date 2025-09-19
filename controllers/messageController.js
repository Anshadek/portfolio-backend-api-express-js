const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const msgs = await Message.findAll();
    res.json(msgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const msg = await Message.findByPk(req.params.id);
    if (!msg) return res.status(404).json({ error: 'Message not found' });

    msg.read_status = true;
    await msg.save();
    res.json(msg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
