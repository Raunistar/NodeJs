//we will learn about built in email module of node js provided by NodeMailer
//1.import nodemailer
const nodemailer = require("nodemailer");

//2.configure email and send it
async function sendMail() {
  //1.create an email transporter
  //using SMTP[simple transfer protocol]
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "raunistar001@gmail.com",
      pass: "pass",
    },
  });
  //2.configure email content
  const mailOptions = {
    from: "raunistar001@gmail.com",
    to: "",
    subject: "",
    text: "",
  };

  //send the email
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.log("Unexpected error.Try again." + error);
  }
}
