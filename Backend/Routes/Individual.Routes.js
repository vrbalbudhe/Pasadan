const express = require("express");
const { trial } = require("../Controllers/Individual.Controllers/trail");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();

router.get("/t", verifyToken, trial);

module.exports = router;
