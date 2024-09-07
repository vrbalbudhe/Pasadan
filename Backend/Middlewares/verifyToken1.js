const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyTokenAuth = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "No Token, authorization denied",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.status(200).json({
      message: "Token is valid",
      success: true,
      userId: decoded.userId,
      email: decoded.email,
      name: decoded.name,
    });
  } catch (err) {
    // Token is invalid or expired
    return res.status(401).json({
      message: "Invalid token",
      success: false,
    });
  }
});

module.exports = {
  verifyTokenAuth,
};
