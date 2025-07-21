import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, service, message } = await req.json();
  const html = `
  <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
    <h2 style="color: #2a2a2a; margin-bottom: 16px;">Quote Request For: ${service}</h2>
    
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></p>
    <p><strong>Service: ${service}</strong></p>
    <p><strong>Message:</strong></p>
    <div style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #007BFF; white-space: pre-wrap;">
      ${message}
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <p style="font-size: 14px; color: #999;">This message was sent from the contact form on your website.</p>
  </div>
`;


  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Configure your mail server (use environment variables in production)
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: parseInt(process.env.SMTP_PORT || "465"),
  //   secure: process.env.SMTP_PORT === "465", // true for port 465
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASS,
  //   },
  // });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // Mailtrap uses TLS, not SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });



  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER || process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${name}`,
      html,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}


