// routes/sendEmail.js
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1", // or your region
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const sendMail = async (req, res) => {
  const { name, caree, message } = req.body;

  const isCaree = caree === true || caree === "true"; // handles boolean or string "true"

  // Dynamic subject
  const subjectText = isCaree
    ? "New Career Form Submission"
    : "New Contact Form Submission";

  // Minimal styled HTML email
  const htmlBody = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
          <h2 style="color: #2a9d8f; margin-top: 0;">📩 ${subjectText}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f1f1f1; padding: 10px; border-left: 4px solid #2a9d8f; border-radius: 4px;">
            ${message}
          </p>
          <p style="font-size: 12px; color: #999;">More details available in the dashboard.</p>
        </div>
      </div>
    `;

  const params = {
    Destination: {
      ToAddresses: ["aryanpatel6040@gmail.com", "fentonchem@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subjectText,
      },
    },
    Source: "no-reply@fentonchemical.com", // must be verified
  };

  try {
    await ses.sendEmail(params).promise();
    res.status(200).json({ message: "Email sent successfully via AWS SES" });
  } catch (error) {
    console.error("AWS SES Error:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
};

// Exporting all CRUD functions
module.exports = {
  sendMail,
};
