import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// Client places order
router.post("/", createOrder);

// Admin views orders
router.get("/", protect, getOrders);

export default router;
