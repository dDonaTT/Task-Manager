const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { getUsers, getUserbyId, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", protect, adminOnly,getUsers);
router.get("/:id", protect, adminOnly, getUserbyId);
router.delete("/:id", protect, adminOnly, deleteUser);
module.exports = router;