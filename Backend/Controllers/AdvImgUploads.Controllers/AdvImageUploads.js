const asyncHandler = require("express-async-handler");
const prisma = require("../../lib/prisma");
const path = require("path");
const fs = require("fs");

const postAdvUploadImages = asyncHandler(async (req, res) => {
  try {
    const { originalname, mimetype, size, filename } = req.file;
    const filepath = `../../Middlewares/uploads/${filename}`;

    const newImage = await prisma.advImage.create({
      data: {
        filename: originalname,
        filepath: filepath,
        filetype: mimetype,
        filesize: size,
      },
    });

    res.status(200).json(newImage);
  } catch (error) {
    return res.status(501).json({
      message: "Unable To Handle Uploading Advertisement Image Handler ",
      success: false,
    });
  }
});

const getAdvUploadImages = asyncHandler(async (req, res) => {
  try {
    const images = await prisma.advImage.findMany();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

const delAdvImageUploads = asyncHandler(async (req, res) => {
  const imageId = req.params.id;

  try {
    const image = await prisma.advImage.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    const fullFilePath = path.join(__dirname, image.filepath);

    fs.unlink(fullFilePath, async (err) => {
      if (err) {
        console.error("Error deleting file from filesystem:", err);
        return res.status(500).json({ error: "Failed to delete file" });
      }

      await prisma.advImage.delete({
        where: { id: imageId },
      });

      res.json({ message: "Image successfully deleted" });
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ error: "Failed to delete image" });
  }
});

module.exports = {
  postAdvUploadImages,
  getAdvUploadImages,
  delAdvImageUploads,
};
