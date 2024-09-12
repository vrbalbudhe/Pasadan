const asyncHandler = require("express-async-handler");
const prisma = require("../../lib/prisma");

const getDrivePost = asyncHandler(async (req, res) => {
  try {
    const drivePosts = await prisma.drive.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!drivePosts || drivePosts.length === 0) {
      return res.status(404).json({
        message: "No Drive Posts Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "GetDrivePost Handler Successful",
      success: true,
      data: drivePosts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error In GetDrivePost Handler",
      success: false,
      error: error.message,
    });
  }
});

module.exports = {
  getDrivePost,
};
