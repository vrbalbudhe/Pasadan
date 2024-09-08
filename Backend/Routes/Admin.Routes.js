const express = require("express");
const {
  getAllUsers,
  deleteUser,
} = require("../Controllers/Admin.Controllers/UserManagement");
const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
