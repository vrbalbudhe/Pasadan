const asyncHandler = require("express-async-handler");
const { generateCertificate } = require("./CertificateGenerator");
const Joi = require("joi");

/*
 * Username -> name Attribute of the User Model
 * Email -> Email Address
 */

const schema = Joi.object({
  username: Joi.string().min(8).max(30).required(),
  email: Joi.string().email().required(),
});

const CertificateSender = asyncHandler(async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  try {
    const { username, email } = req.body;

    await generateCertificate(username, email);

    return res.status(200).json({
      message: "Successfully Email Send ",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Unable to Handle The Certificate Sender Handler",
      success: false,
    });
  }
});

module.exports = {
  CertificateSender,
};
