const express = require("express");
const {
  CertificateSender,
} = require("../Controllers/Certificates.Controllers/CertificationGenerate.Controllers");
const router = express.Router();

router.post("/certificate", CertificateSender);

module.exports = router;
