import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    // 1. Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Configure SMTP Transporter (Use your email provider details)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'outlook', or use host/port for custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your App Password (Not your normal password)
      },
    });

    // 3. Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // So you can hit "Reply" to answer the client
      subject: `[NEW LEAD] ${projectType} - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project: ${projectType}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #4f46e5;">New System Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <hr />
          <h3>Briefing:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}