import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, contact, message } = req.body;
try {
  // Set up Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vaghela9632@gmail.com", 
      pass: "ddjs qbnu ajzd nmjb", 
    },
  });

    const mailOptions ={
        from: "vaghela9632@gmail.com",
        to: "aryanpatel01525@gmail.com",
        replyTo: email,
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
