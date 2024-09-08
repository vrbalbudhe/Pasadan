const express = require("express");
const {
  handleContactFormSub,
} = require("../Controllers/ContactUs.Controllers/ContactUs");
const router = express.Router();

router.post("/makeRequest", handleContactFormSub);

module.exports = router;
