const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token;
  console.log(token);
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

module.exports = { verifyToken };
