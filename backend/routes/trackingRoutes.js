const express = require("express");
const protect = require("../middlewares/authMiddleware");
const {
  trackOrder,
  addProjectUpdate,
} = require("../controllers/trackingController");

const router = express.Router();

// Client tracking
router.get("/:projectId", trackOrder);

// Admin update
router.post("/:projectId/update", protect, addProjectUpdate);

module.exports = router;
