const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mrcyruswife@gmail.com", // Replace with your email
      pass: "Pramudi2003", // Replace with your email password or app password
    },
  });

  const mailOptions = {
    from: "mrcyruswife@gmail.com",
    to: req.body.email, // Email entered in the form
    subject: req.body.subject, // Subject from the form
    text: req.body.message, // Message from the form
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Error:", error); // Log error for debugging
        res.status(500).json({ success: false, message: "Failed to send the message. Please try again" });
    } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    }
});

  });


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
