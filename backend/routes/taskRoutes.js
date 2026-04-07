const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const router = express.Router();

router.get("/", protect, adminOnly, getTasks);
router.post("/", protect, adminOnly, createTask);
router.put("/:id", protect, adminOnly, updateTask);
router.delete("/:id", protect, adminOnly, `deleteTask`);
module.exports = router;