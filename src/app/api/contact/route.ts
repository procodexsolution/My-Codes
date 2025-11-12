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

    // Modern HTML Email Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f2f5; padding: 40px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="text-align:center; margin-bottom:30px;">
            <h1 style="color:#111; font-size:24px; margin:0;">📩 New Contact Message</h1>
          </div>

          <!-- User Details -->
          <div style="margin-bottom:20px;">
            <p style="margin:0 0 8px 0; font-size:16px;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 8px 0; font-size:16px;"><strong>Email:</strong> ${email}</p>
          </div>

          <!-- Message -->
          <div style="margin-bottom:30px;">
            <p style="margin:0 0 8px 0; font-size:16px;"><strong>Message:</strong></p>
            <div style="background:#f7f7f7; padding:15px; border-left:4px solid #ffd700; border-radius:8px; font-size:15px; color:#333;">
              ${message}
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align:center; font-size:12px; color:#888;">
            <p style="margin:0;">This message was sent from your website contact form.</p>
            <p style="margin:0;">&copy; ${new Date().getFullYear()} Your Portfolio</p>
          </div>
        </div>
      </div>
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
