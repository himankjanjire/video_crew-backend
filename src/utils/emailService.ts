import nodemailer from 'nodemailer';
import { ContactData } from '../types';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendContactEmails = async (contactData: ContactData): Promise<void> => {
  const { name, email, description, phone } = contactData;

  // Email to admin
  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333; text-align: center; margin-bottom: 30px;">New Contact Inquiry - Video Crew</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
          <h3 style="color: #555; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6;">${description}</p>
        </div>
      </div>
    </div>
  `;

  // Email to user
  const userEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333; text-align: center; margin-bottom: 30px;">Thank You for Contacting Video Crew</h2>
        <p style="color: #555; line-height: 1.6;">Dear ${name},</p>
        <p style="color: #555; line-height: 1.6;">Thank you for reaching out to Video Crew. We have received your inquiry and our team will review it shortly.</p>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Your Message:</h3>
          <p style="line-height: 1.6;">${description}</p>
        </div>
        <p style="color: #555; line-height: 1.6;">We typically respond within 24-48 hours. If you have any urgent questions, please don't hesitate to contact us directly.</p>
        <p style="color: #555; line-height: 1.6;">Best regards,<br><strong>Video Crew Team</strong></p>
      </div>
    </div>
  `;

  await Promise.all([
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "nsinghrajputx@gmail.com",
      subject: `New Contact Inquiry from ${name}`,
      html: adminEmailHtml,
    }),
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Video Crew",
      html: userEmailHtml,
    }),
  ]);
};
