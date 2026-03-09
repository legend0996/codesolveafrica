import express from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getProjects);           // public — list all projects
router.post("/", protect, createProject);       // admin only
router.put("/:id", protect, updateProject);     // admin only
router.delete("/:id", protect, deleteProject);  // admin only

export default router;
