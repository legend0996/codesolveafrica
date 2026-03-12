const Order = require("../models/Order");
const ProjectUpdate = require("../models/ProjectUpdate");

// CLIENT: track order by projectId
const trackOrder = async (req, res) => {
  try {
    const { projectId } = req.params;

    const order = await Order.findOne({ projectId });

    if (!order) {
      return res.status(404).json({ message: "Project not found" });
    }

    const updates = await ProjectUpdate.find({ projectId }).sort({
      createdAt: 1,
    });

    res.json({
      projectId: order.projectId,
      status: order.status,
      projectType: order.projectType,
      updates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: add project update
const addProjectUpdate = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { message, status } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Update message is required" });
    }

    const order = await Order.findOne({ projectId });

    if (!order) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (status) {
      order.status = status;
      await order.save();
    }

    const update = await ProjectUpdate.create({
      projectId,
      message,
      updatedBy: req.user?.email || "admin",
    });

    res.status(201).json(update);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { trackOrder, addProjectUpdate };
