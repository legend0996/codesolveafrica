const express = require("express");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getProjects);           // public — list all projects
router.post("/", protect, createProject);       // admin only
router.put("/:id", protect, updateProject);     // admin only
router.delete("/:id", protect, deleteProject);  // admin only

module.exports = router;
