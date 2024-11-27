const express = require("express");
const {
  createClass,
  getAllClasses,
  updateClass,
  deleteClass,
} = require("../controllers/classController");
const { verifyToken, isAdminOrCoach } = require("../middleware/authMiddleware");

const router = express.Router();

// Routes
router.post("/", verifyToken, isAdminOrCoach, createClass); // Create class
router.get("/", verifyToken, isAdminOrCoach, getAllClasses); // Get all classes
router.put("/:id", verifyToken, isAdminOrCoach, updateClass); // Update class
router.delete("/:id", verifyToken, isAdminOrCoach, deleteClass); // Delete class

module.exports = router;
