import { Resend } from 'resend'
import { AppError } from '../utils/error.utils.js'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email, name, token) => {
    try {
        // build verification link with client url
        const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`
        // user resend.emails.send()
        await resend.emails.send({
            // needs from , to , subject, html
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Verify Your Email Address',
            html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Hi ${name}! 👋</h1>
          <p>Thanks for registering! Please verify your email.</p>
          <a href="${verificationLink}" 
             style="background: #4F46E5; color: white; padding: 12px 24px; 
                    border-radius: 6px; text-decoration: none;">
            Verify Email ✅
          </a>
          <p>This link expires in 24 hours.</p>
          <p>If you didn't register, ignore this email.</p>
        </div>
      `    })
    } catch (error) {
        throw new AppError('Failed to send verification email', 500)
    }
}