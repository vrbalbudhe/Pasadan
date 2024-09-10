const nodemailer = require("nodemailer");
const prisma = require("../../lib/prisma");

const sendMail = async (to, subject, text, html, attachments) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EmailAddress,
      pass: process.env.EmailPassword,
    },
  });

  const mailOptions = {
    from: process.env.EmailAddress,
    to: to,
    subject: subject,
    text: text,
    html: html,
    attachments: attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email.");
  }
};

const otpGenerator = async (email, expiresInMinutes = 1) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);

    const existingOtp = await prisma.otp.findUnique({
      where: { email },
    });

    if (existingOtp) {
      await prisma.otp.update({
        where: { email },
        data: { otp, expiresAt },
      });
    } else {
      await prisma.otp.create({
        data: { email, otp, expiresAt },
      });
    }

    return otp;
  } catch (error) {
    console.error("Error generating OTP:", error);
    throw new Error("Unable to generate the OTP.");
  }
};

const verifyOtp = async (otpCode, email) => {
  try {
    let intOtp = parseInt(otpCode, 10);
    const otpRecord = await prisma.otp.findFirst({
      where: {
        email: email,
        otp: intOtp,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!otpRecord) {
      return {
        success: false,
        message: "Invalid OTP code.",
      };
    }

    if (otpRecord.expiresAt < new Date()) {
      await prisma.otp.delete({
        where: {
          id: otpRecord.id,
        },
      });
      return {
        success: false,
        message: "OTP has expired.",
      };
    }

    return {
      success: true,
      message: "OTP verified successfully.",
    };
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw new Error("Unable to perform OTP verification.");
  }
};

module.exports = {
  sendMail,
  otpGenerator,
  verifyOtp,
};
