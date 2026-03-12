const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// Client places order
router.post("/", createOrder);

// Admin views orders
router.get("/", protect, getOrders);

module.exports = router;
