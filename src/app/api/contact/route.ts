import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 16-char Gmail App Password
      },
    });

const htmlContent = `
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body { margin:0; padding:0; background-color:#0b0b0b; font-family:Arial,sans-serif; color:#ffffff; }
    table { border-collapse: collapse; width:100%; }
    .container { max-width:600px; margin:20px auto; background:#141414; border-radius:12px; overflow:hidden; }
    .header { text-align:center; padding:20px; font-size:28px; display:flex; align-items:center; justify-content:center; gap:10px; color:#FFD700; }
    .content { padding:20px; font-size:16px; line-height:1.5; color:#e0e0e0; }
    .label { font-weight:bold; color:#ffffff; }
    .message-box { background:#1f1f1f; padding:15px; border-left:4px solid #FFD700; border-radius:4px; word-wrap:break-word; color:#e0e0e0; }
    .footer { text-align:center; font-size:12px; color:#888; padding:15px; }

    /* Mobile */
    @media only screen and (max-width:600px){
      .container { width:95% !important; margin:10px auto; }
      .header { font-size:22px !important; }
      .content { font-size:14px !important; }
    }
  </style>
</head>
<body>
  <table width="100%" bgcolor="#0b0b0b" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <table class="container">
          <!-- Header -->
          <tr>
            <td class="header">
              <!-- SVG Mail Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#FFD700" viewBox="0 0 24 24">
                <path d="M12 13.065L.122 4.5h23.756L12 13.065zM12 15.435L0 6v12h24V6l-12 9.435z"/>
              </svg>
              New Message
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class="content">
              <p><span class="label">Name:</span> ${name}</p>
              <p><span class="label">Email:</span> ${email}</p>
              <p><span class="label">Message:</span></p>
              <div class="message-box">${message}</div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer">
              <p>This message was sent from your website contact form.</p>
              <p>&copy; ${new Date().getFullYear()} Your Portfolio</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: `New message from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
