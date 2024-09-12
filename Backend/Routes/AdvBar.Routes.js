const express = require("express");
const upload = require("../Middlewares/multerConfig");
const {
  getVisibility,
  postVisibility,
} = require("../Controllers/AdvBar.Controllers/AdvBarVisibility");
const {
  getAdvUploadImages,
  postAdvUploadImages,
  delAdvImageUploads,
} = require("../Controllers/AdvImgUploads.Controllers/AdvImageUploads");
const { verifyToken } = require("../Middlewares/verifyToken0");
const { verifyAdmin } = require("../Middlewares/verifyAdmin");

const router = express.Router();

router.get("/visibility", getVisibility);
router.post("/visibility", verifyToken, verifyAdmin, postVisibility);
router.get("/advUploadImages", verifyToken, verifyAdmin, getAdvUploadImages);
router.post(
  "/postAdvUploadImages",
  verifyToken,
  verifyAdmin,
  upload.single("image"),
  postAdvUploadImages
);
router.delete(
  "/delAdvUploadImages/:id",
  verifyToken,
  verifyAdmin,
  delAdvImageUploads
);

module.exports = router;
