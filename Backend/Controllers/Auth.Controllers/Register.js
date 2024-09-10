const prisma = require("../../lib/prisma");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("./JWT");
const Joi = require("joi");
const { sendMail, otpGenerator, verifyOtp } = require("./Otp");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/
    )
    .required(),
});

const register = asyncHandler(async (req, res) => {
  // const { error } = schema.validate(req.body);
  // if (error) {
  //   return res.status(400).json({
  //     message: error.details[0].message,
  //     success: false,
  //   });
  // }

  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: String(email),
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: String(email),
        password: hashedPassword,
        name,
      },
    });

    if (newUser) {
      const token = generateToken(newUser);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });

      await prisma.user.update({
        where: {
          email: String(email),
        },
        data: { otpVerified: true },
      });

      res.status(200).json({
        message: "Registration successful. Please verify your OTP.",
        success: true,
      });
    }
  } catch (error) {
    console.error("Error in registration controller:", error);
    return res.status(500).json({
      message: "Error in registration controller",
      success: false,
    });
  }
});

const otpValidator = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  try {
    if (!email || !otp) {
      return res.status(400).json({
        message: "Email & OTP are required.",
        success: false,
      });
    }

    const verification = await verifyOtp(otp, email);

    if (verification.success) {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user) {
        return res.status(404).json({
          message: "User Already Exists.",
          success: false,
        });
      }

      return res.status(200).json({
        message: verification.message,
        success: true,
      });
    } else {
      return res.status(401).json({
        message: verification.message,
        success: false,
      });
    }
  } catch (error) {
    console.error("Error in OTP validation controller:", error);
    return res.status(500).json({
      message: "Error in OTP validation controller",
      success: false,
    });
  }
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { message } = schema.validate(req.body);
  if (message) {
    return res.status(400).json({
      message: message,
      success: false,
    });
  }

  try {
    const { email } = req.body;
    console.log(email);

    const emailExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailExists) {
      return res.status(500).json({
        message: "Email Already Exists",
        success: false,
      });
    }

    const otpCode = await otpGenerator(email);
    const subject = "Your OTP Code - Pasaydan NGO";
    const text = `Dear user,\n\nYour One-Time Password (OTP) for verification is: ${otpCode}.\n\nPlease enter this code to proceed with your action.\n\nThank you for supporting Pasadan, where we make a difference together.\n\nBest regards,\nPasadan Team`;
    const httpBody = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">Pasaydan NGO</h2>
        <p>Dear user,</p>
        <p>Your One-Time Password (OTP) for verification is:</p>
        <h3 style="color: #E91E63;">${otpCode}</h3>
        <p>Please enter this code to proceed with your action.</p>
        <p>Thank you for supporting Pasadan, where we make a difference together.</p>
  
        <div style="margin-top: 30px;">
          <h3 style="color: #4CAF50;">Our Recent Activities</h3>
          <p>Here’s a glimpse of our efforts to help those in need:</p>
  
          <!-- Images of NGO Activities -->
          <div style="display: flex; gap: 10px;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZC-9SifIMk41c6U-QGZvYsUTW4JLKUqi17Q&s" alt="Cycle Donation" style="width: 48%; height: auto; border-radius: 8px;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxyZaH2T7W4IwWWlsf7gS2Zi3rK_eH7r4lA&s" alt="Blanket Donation" style="width: 48%; height: auto; border-radius: 8px;">
          </div>
          <p style="margin-top: 20px;">Your contributions help us continue these efforts and reach more people in need.</p>
        </div>
  
        <p style="margin-top: 40px;">Best regards,<br/>Pasaydan Team</p>
      </div>
      `;

    await sendMail(email, subject, text, httpBody);

    return res.status(200).json({
      message: "VerifyEmail Controller Successfully Executed",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error In VerifyEmail Controller",
      success: false,
    });
  }
});

module.exports = {
  register,
  otpValidator,
  verifyEmail,
};
