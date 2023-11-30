import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export default async function handler(
    req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_EMAIL, // your Gmail account
        pass: process.env.MAILER_PASSWORD, // your Gmail password or an app-specific password
      },
    });

    let info = await transporter.sendMail({
      from: email,
      to: 'emiljohn.mandia86@gmail.com',
      subject: 'TRY',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
  }