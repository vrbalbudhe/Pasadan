const asyncHandler = require("express-async-handler");
const prisma = require("../../lib/prisma");

const getVisibility = asyncHandler(async (req, res) => {
  try {
    const visibility = await prisma.visibilityAdvBar.findFirst();
    if (!visibility) {
      return res.status(404).json({ isVisible: false });
    }
    return res.status(200).json(visibility);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch visibility" });
  }
});

const postVisibility = asyncHandler(async (req, res) => {
  try {
    const { isVisible } = req.body;

    let visibility = await prisma.visibilityAdvBar.findFirst();
    if (!visibility) {
      visibility = await prisma.visibilityAdvBar.create({
        data: { isVisible },
      });
    } else {
      visibility = await prisma.visibilityAdvBar.update({
        where: { id: visibility.id },
        data: { isVisible },
      });
    }

    res.json(visibility);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update visibility" });
  }
});

module.exports = {
  getVisibility,
  postVisibility,
};
