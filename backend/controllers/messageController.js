import Message from "../models/Message.js";

// CLIENT: send message
export const sendMessage = async (req, res) => {
  try {
    const { clientPhone, clientEmail, description } = req.body;

    if (!clientPhone || !description) {
      return res
        .status(400)
        .json({ message: "Phone and description are required" });
    }

    const message = await Message.create({
      clientPhone,
      clientEmail,
      description,
    });

    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: get all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
