const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req, res, next) => {
  // Ensure that req.cookies is defined
  if (!req.cookies) {
    return res.status(401).json({
      message: "User is Not Authenticated - Cookies missing",
      success: false,
    });
  }

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "User is Not Authenticated",
      success: false,
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({
          message: "Token has expired.",
          success: false,
        });
      }
      return res.status(401).json({
        message: "User is Not Authenticated",
        success: false,
      });
    }
    req.userId = payload.userId;
    next();
  });
});

module.exports = verifyToken;
