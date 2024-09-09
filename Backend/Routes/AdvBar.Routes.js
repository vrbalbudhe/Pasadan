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

const router = express.Router();

router.get("/visibility", getVisibility);
router.post("/visibility", postVisibility);
router.get("/advUploadImages", getAdvUploadImages);
router.post(
  "/postAdvUploadImages",
  upload.single("image"),
  postAdvUploadImages
);
router.delete("/delAdvUploadImages/:id", delAdvImageUploads);

module.exports = router;
