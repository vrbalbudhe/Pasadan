const asyncHandler = require("express-async-handler");

const verifyAdmin = asyncHandler(async (req, res, next) => {
  if (!req.role || req.role !== "admin") {
    return res.status(403).json({
      message: "Access denied. Admins only.",
      success: false,
    });
  }

  next();
});

module.exports = { verifyAdmin };
