import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { loginAdmin, changePassword } from "../controllers/authController.js";

const router = express.Router();

// Admin login
router.post("/login", loginAdmin);

// Change password (protected)
router.put("/change-password", protect, changePassword);

export default router;
