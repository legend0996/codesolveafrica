const Order = require("../models/Order");

// Generate readable project ID
const generateProjectId = () => {
  return "CSA-" + Math.random().toString(36).substring(2, 8).toUpperCase();
};

// CREATE ORDER (CLIENT)
const createOrder = async (req, res) => {
  try {
    const { clientPhone, clientEmail, projectType, description } = req.body;

    if (!clientPhone || !projectType || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const projectId = generateProjectId();

    const order = await Order.create({
      projectId,
      clientPhone,
      clientEmail,
      projectType,
      description,
    });

    res.status(201).json({
      message: "Order created successfully",
      projectId: order.projectId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL ORDERS (ADMIN)
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrders };
