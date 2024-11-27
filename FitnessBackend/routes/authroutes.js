const express = require("express");
const { register, login, updateUser, deleteUser,getAllUsers } = require("../controllers/authContoller");
const { verifyToken, isAdminOrSelf } = require("../middleware/authMiddleware");
const router = express.Router();

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/", verifyToken, isAdminOrSelf, getAllUsers);


// Update & delete user (protected routes)
router.put("/:id", verifyToken, isAdminOrSelf, updateUser);
router.delete("/:id", verifyToken, isAdminOrSelf, deleteUser);





module.exports = router;
