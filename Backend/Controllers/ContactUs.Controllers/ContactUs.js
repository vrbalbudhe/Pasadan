const asyncHandler = require("express-async-handler");
const Joi = require("joi");
const prisma = require("../../lib/prisma");
const { sendMail } = require("../../Controllers/Auth.Controllers/Otp");

const schema = Joi.object({
  email: Joi.string().email().required(),
  fullname: Joi.string().required(),
  message: Joi.string().required(),
});

const handleContactFormSub = asyncHandler(async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  try {
    const { fullname, email, message } = req.body;

    const subject = "New Contact Us Form Submission";

    const text = `
      You have received a new message from the Contact Us form.

      Full Name: ${fullname}
      Email Address: ${email}

      Message:
      ${message}

      -- 
      Pasaydan NGO
      Contact: contact@pasaydan.org
      Website: https://www.pasaydan.org
    `;

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Us Submission</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #4f46e5;
            color: #ffffff;
            padding: 15px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
          }
          .content h3 {
            color: #4f46e5;
            font-size: 18px;
          }
          .content p {
            font-size: 16px;
            margin: 10px 0;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #666;
          }
          .footer a {
            color: #4f46e5;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h2>New Contact Us Submission</h2>
          </div>
          <div class="content">
            <p><strong>Full Name:</strong> ${fullname}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Pasaydan NGO | <a href="https://www.pasaydan.org">www.pasaydan.org</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    await sendMail(process.env.EmailAddress, subject, text, html);

    return res.status(200).json({
      message: "Request created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return res.status(500).json({
      message: "Unable to send the contact form request",
      success: false,
    });
  }
});

module.exports = {
  handleContactFormSub,
};
