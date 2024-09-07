const asyncHandler = require("express-async-handler");

const logout = asyncHandler(async (req, res) => {
  try {
    await res.clearCookie("token");
    return res.status(200).json({
      message: "Logout Successfully Done",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Unable to Handle Logout",
      success: false,
    });
  }
});
module.exports = {
  logout,
};
