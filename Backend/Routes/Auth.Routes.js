const express = require("express");
const {
  register,
  otpValidator,
} = require("../Controllers/Auth.Controllers/Register");
const { Login } = require("../Controllers/Auth.Controllers/Login");
const { logout } = require("../Controllers/Auth.Controllers/Logout");
const { verifyTokenAuth } = require("../Middlewares/verifyToken1");
const router = express.Router();

router.post("/register", register);
router.post("/register/otpValidate", otpValidator);
router.post("/login", Login);
router.post("/logout", logout);
router.get("/verify-token-auth", verifyTokenAuth);

module.exports = router;
