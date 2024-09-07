const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { sendMail } = require("../Auth.Controllers/Otp");
const sharp = require("sharp");

const generateCertificate = async (userName, userEmail) => {
  try {
    const certificatesDir = path.join(__dirname, "certificates");
    if (!fs.existsSync(certificatesDir)) {
      fs.mkdirSync(certificatesDir);
    }

    const outputPath = path.join(
      certificatesDir,
      `${userName}-certificate.pdf`
    );
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(outputPath);
    doc.pipe(writeStream);

    const certificateTemplatePath = path.join(
      __dirname,
      "../../Assets/PasaydanCertificates.jpg"
    );

    const { width, height } = await sharp(certificateTemplatePath).metadata();

    const pageWidth = 595;
    const pageHeight = 842;

    const aspectRatio = width / height;
    let imgWidth, imgHeight;

    if (aspectRatio > 1) {
      imgWidth = pageWidth;
      imgHeight = pageWidth / aspectRatio;
    } else {
      imgHeight = pageHeight;
      imgWidth = pageHeight * aspectRatio;
    }

    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;

    doc.image(certificateTemplatePath, x, y, {
      width: imgWidth,
      height: imgHeight,
    });

    doc
      .fontSize(35)
      .font("Helvetica")
      .fillColor("black")
      .text(userName, 210, 400);

    doc.end();

    writeStream.on("finish", async () => {
      const subject = `Pasaydan Donation Certificate`;
      const text = `Dear ${userName},\n\nThank you for your participation. Please find your certificate attached.`;
      const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="text-align: center; color: #333;">Congratulations ${userName}!</h2>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          We are thrilled to inform you that you have successfully completed the program. Attached below is your certificate in recognition of your achievement.
        </p>
        
        <div style="margin: 20px 0; text-align: center;">
          <img src="https://example.com/your-certificate-preview.jpg" alt="Certificate Preview" style="width: 100%; max-width: 300px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        </div>
        
        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          If you have any questions or need further assistance, feel free to reach out to us at <a href="mailto:support@yourdomain.com" style="color: #337ab7; text-decoration: none;">support@yourdomain.com</a>.
        </p>

        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          Warm regards,<br>
          <strong>Your Organization's Name</strong>
        </p>

        <div style="text-align: center; margin-top: 20px;">
          <a href="https://yourwebsite.com" style="padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">Visit our Website</a>
        </div>
      </div>
      `;

      await sendMail(userEmail, subject, text, html, [
        {
          filename: `${userName}-certificate.pdf`,
          path: outputPath,
        },
      ]);

      fs.unlinkSync(outputPath);
      console.log("Certificate sent and deleted after sending.");
    });

    return outputPath;
  } catch (error) {
    console.error("Error generating certificate:", error);
    throw error;
  }
};

module.exports = {
  generateCertificate,
};
