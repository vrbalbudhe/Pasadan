const asyncHandler = require("express-async-handler");
const prisma = require("../../lib/prisma");

const getCommentPost = asyncHandler(async (req, res) => {
  try {
    const CommentPosts = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!CommentPosts || CommentPosts.length === 0) {
      return res.status(404).json({
        message: "No Comment Posts Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "GetCommentPost Handler Successful",
      success: true,
      data: CommentPosts,
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
