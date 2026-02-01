import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  trackOrder,
  addProjectUpdate,
} from "../controllers/trackingController.js";

const router = express.Router();

// Client tracking
router.get("/:projectId", trackOrder);

// Admin update
router.post("/:projectId/update", protect, addProjectUpdate);

export default router;
