import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { sendMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", sendMessage); // public
router.get("/", protect, getMessages); // admin only

export default router;
