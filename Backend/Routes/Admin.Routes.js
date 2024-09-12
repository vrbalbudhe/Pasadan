const express = require("express");
const {
  getAllUsers,
  deleteUser,
} = require("../Controllers/Admin.Controllers/UserManagement");
const router = express.Router();
const { verifyToken } = require("../Middlewares/verifyToken0");
const { verifyAdmin } = require("../Middlewares/verifyAdmin");
const { getDrivePost } = require("../Controllers/Drive.Controllers/GetDrive");
const {
  createDrivePost,
} = require("../Controllers/Drive.Controllers/PostDrive");

router.get("/getAllUsers", verifyToken, verifyAdmin, getAllUsers);
router.delete("/deleteUser/:id", verifyToken, verifyAdmin, deleteUser);
router.get("/getDrive", getDrivePost);
router.post("/postDrive", createDrivePost);

module.exports = router;
