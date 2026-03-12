const express = require("express");
const protect = require("../middlewares/authMiddleware");
const { loginAdmin, changePassword } = require("../controllers/authController");

const router = express.Router();

// Admin login
router.post("/login", loginAdmin);

// Change password (protected)
router.put("/change-password", protect, changePassword);

module.exports = router;
