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
const {
  getCommentPost,
} = require("../Controllers/Comment.Controller/GetComment");
const {
  createCommentPost,
} = require("../Controllers/Comment.Controller/PostComment");

router.get("/getAllUsers", verifyToken, verifyAdmin, getAllUsers);
router.delete("/deleteUser/:id", verifyToken, verifyAdmin, deleteUser);
router.get("/getDrive", getDrivePost);
router.post("/postDrive", verifyToken, verifyAdmin, createDrivePost);
router.get("/getComment", getCommentPost);
router.post("/postComment", verifyToken, verifyAdmin, createCommentPost);

module.exports = router;
