const asyncHandler = require("express-async-handler");
const prisma = require("../../lib/prisma");

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!users || users.length === 0) {
      return res.status(404).json({
        message: "No users found!",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Get All Users Handler Succeeded",
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    return res.status(500).json({
      message: "Unable to access the Get All Users handler",
      success: false,
    });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return res.status(200).json({
      message: "User deleted successfully",
      success: true,
      deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to delete user",
      success: false,
    });
  }
});

module.exports = {
  getAllUsers,
  deleteUser,
};
