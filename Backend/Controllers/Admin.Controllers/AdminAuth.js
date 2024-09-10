const asyncHandler = require("express-async-handler");

const adminLogin = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Admin Login Sucks",
      success: false,
    });
  }
});

module.exports = adminLogin;
