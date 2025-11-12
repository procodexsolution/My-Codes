import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Configure your email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email HTML template
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 30px;">
      <div style="max-width:600px;margin:auto;background:white;padding:20px;border-radius:10px;">
        <h2 style="color:#222;">📩 New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#fafafa;padding:15px;border-radius:8px;border:1px solid #ddd;">${message}</p>
        <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />
        <p style="font-size:13px;color:#777;">This message was sent from your website contact form.</p>
      </div>
    </div>
  `;

  try {
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
