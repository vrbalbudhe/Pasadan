const asyncHandler = require("express-async-handler");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../../lib/prisma");
const { generateToken } = require("./JWT");
const {
  generateCertificate,
} = require("../Certificates.Controllers/CertificateGenerator");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/
    )
    .required(),
});

const Login = asyncHandler(async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  try {
    const { email, password } = req.body;
    const userEmail = String(email);
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      console.log("here error");
      return res.status(404).json({
        message: "User does not exist.",
        success: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials.",
        success: false,
      });
    }

    const tokenData = {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    const token = await generateToken(tokenData);

    res.cookie("token", token, {
      maxAge: 1000 * 60 * 20,
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Login successful",
      success: true,
      role: user.role,
      token: token,
    });
  } catch (error) {
    console.log("Login error:", error);
    return res.status(500).json({
      message: "Error in login controller",
      success: false,
      error: error.message,
    });
  }
});

module.exports = {
  Login,
};
