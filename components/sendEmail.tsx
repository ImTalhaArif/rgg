import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import { NextApiRequest, NextApiResponse } from 'next';

// AWS SES SMTP configuration
const sesConfig = {
  host: 'email-smtp.us-east-2.amazonaws.com', // Replace with the correct AWS SES SMTP endpoint
  port: 587, // The port for AWS SES SMTP (465 for SSL/TLS)
  secure: true, // Use SSL/TLS
  auth: {
    user: 'AKIAYQNRITCL6ISDNQ7A', // Your SMTP username
    pass: 'BP/hM4uj96toWQl8uRXaPAzjnxU+11LUYD657+XF/UkF', // Your SMTP password
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { to, subject, text, html } = req.body;

  // Create a Nodemailer transporter with the SMTP transport
  const transporter = nodemailer.createTransport(smtpTransport(sesConfig));

  // Email content
  const mailOptions = {
    from: 'barbara@carshipy.com', // Sender email address
    to, // Recipient email address
    subject, // Email subject
    text, // Plain text body
    html, // HTML body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export default handler;
