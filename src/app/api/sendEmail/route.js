import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    port: parseInt(process.env.SMTP_PORT || '2525'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user',
      pass: process.env.SMTP_PASSWORD || 'password',
    },
  });

  const mailOptions = {
    from: email,
    to: 'paulovvalledev@gmail.com',
    subject,
    html: `<p>Email: ${email}</p><p>Assunto: ${subject}</p><p>Mensagem: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
