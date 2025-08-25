import express from "express";
import nodemailer from "nodemailer";
import "dotenv/config"; // npm i dotenv

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8787;

// Expect these env vars in production

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const MAIL_TO = process.env.MAIL_TO;

app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, message } = req.body || {};

    if (!fullName || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE !== "false",
      auth: { user: EMAIL_USERNAME, pass: EMAIL_PASSWORD },
    });

    await transporter.sendMail({
      from: EMAIL_USERNAME, // keep this EXACT,
      to: MAIL_TO,
      replyTo: `${fullName} <${email}>`,
      subject: `Contact Form — ${fullName}`,
      text: `From: ${fullName} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${fullName} &lt;${email}&gt;</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ ok: false, error: "Email send failed" });
  }
});

app.listen(PORT, () => {
  console.log(`[api] listening on http://localhost:${PORT}`);
});
