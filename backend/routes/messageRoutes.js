const express = require("express");
const protect = require("../middlewares/authMiddleware");
const { sendMessage, getMessages } = require("../controllers/messageController");

const router = express.Router();

router.post("/", sendMessage); // public
router.get("/", protect, getMessages); // admin only

module.exports = router;
