import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user:process.env.SMTP_USER,
    pass:process.env.SMTP_PASS
  }
});

export async function sendWelcomeEmail(userEmail, userData) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: userEmail,
    subject: 'Welcome to NETRIVYA! Your registration was successful',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to NETRIVYA</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); padding: 30px 40px; text-align: center;">
            <img src="https://netrivya.com/images/logo.jpeg" alt="NETRIVYA Logo" style="max-height: 60px; margin-bottom: 20px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Welcome to NETRIVYA!</h1>
            <p style="color: #e6fffa; margin: 10px 0 0 0; font-size: 16px;">Your Communication Partner</p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 40px;">
            <h2 style="color: #0d9488; margin: 0 0 20px 0; font-size: 24px;">Hello ${userData.firstName}!</h2>
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
              Thank you for registering with NETRIVYA. We're excited to have you on board and help you transform your communication strategy with our cutting-edge SMS, Voice, and WhatsApp solutions.
            </p>
            
            <!-- Registration Details Card -->
            <div style="background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); border-left: 4px solid #0d9488; padding: 25px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #0d9488; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 Your Registration Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 140px;">👤 Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${userData.firstName} ${userData.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600;">📧 Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${userData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600;">🏢 Company:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${userData.companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600;">🌍 Country:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${userData.country}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600;">🚀 Services:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${Object.keys(userData.services).filter(key => userData.services[key]).join(', ')}</td>
                </tr>
              </table>
            </div>
            
            <!-- Next Steps -->
            <div style="background-color: #ffffff; border: 2px solid #0d9488; border-radius: 8px; padding: 25px; margin: 25px 0;">
              <h3 style="color: #0d9488; margin: 0 0 15px 0; font-size: 18px;">🎯 What's Next?</h3>
              <ul style="color: #374151; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>Our expert team will contact you within 24 hours</li>
                <li>We'll discuss your specific communication needs</li>
                <li>Get a personalized demo of our platform</li>
                <li>Receive custom pricing based on your requirements</li>
              </ul>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 25px 0 0 0;">
              We're committed to providing you with the best communication solutions to help your business grow and succeed.
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1f2937; padding: 30px 40px; text-align: center;">
            <p style="color: #9ca3af; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Best regards,</p>
            <p style="color: #ffffff; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">The NETRIVYA Team</p>
            
            <div style="border-top: 1px solid #374151; padding-top: 20px; margin-top: 20px;">
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">
                📧 Email: info@netrivya.com | 🌐 Website: www.netrivya.com
              </p>
              <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 12px;">
                © 2024 NETRIVYA. All rights reserved. | Transforming Communication, Connecting Businesses.
              </p>
            </div>
          </div>
          
        </div>
      </body>
      </html>
    `
  };

  return await transporter.sendMail(mailOptions);
}

export async function sendLeadNotification(userData) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "leads@netrivya.com",
    subject: 'New Lead Registration - NETRIVYA',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Registration</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 30px 40px; text-align: center;">
            <img src="https://netrivya.com/images/logo.jpeg" alt="NETRIVYA Logo" style="max-height: 50px; margin-bottom: 15px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">🚨 New Lead Alert!</h1>
            <p style="color: #fecaca; margin: 10px 0 0 0; font-size: 14px;">Immediate Action Required</p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 40px;">
            <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); border-left: 4px solid #dc2626; padding: 20px; border-radius: 8px; margin: 0 0 30px 0;">
              <h2 style="color: #dc2626; margin: 0 0 10px 0; font-size: 20px;">🎯 New Registration Alert</h2>
              <p style="color: #374151; margin: 0; font-size: 16px;">A new user has registered on the NETRIVYA platform and is interested in our services.</p>
            </div>
            
            <!-- Lead Details Card -->
            <div style="background-color: #ffffff; border: 2px solid #0d9488; border-radius: 12px; padding: 30px; margin: 25px 0;">
              <h3 style="color: #0d9488; margin: 0 0 25px 0; font-size: 20px; font-weight: 600; text-align: center;">👤 Lead Information</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; width: 140px; border-bottom: 1px solid #e5e7eb;">👤 Full Name:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${userData.firstName} ${userData.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">📧 Email:</td>
                  <td style="padding: 12px 0; color: #0d9488; font-weight: 500; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${userData.email}" style="color: #0d9488; text-decoration: none;">${userData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">📱 Mobile:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${userData.mobileNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">🏢 Company:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${userData.companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">🌍 Country:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${userData.country}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">🚀 Services:</td>
                  <td style="padding: 12px 0; color: #0d9488; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${Object.keys(userData.services).filter(key => userData.services[key]).join(', ')}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">📢 Marketing:</td>
                  <td style="padding: 12px 0; color: ${userData.receiveMarketing ? '#059669' : '#dc2626'}; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${userData.receiveMarketing ? '✅ Opted In' : '❌ Opted Out'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600;">⏰ Registered:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <!-- Action Required -->
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 8px; padding: 25px; margin: 25px 0; text-align: center;">
              <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">⚡ Action Required</h3>
              <p style="color: #78350f; margin: 0 0 15px 0; font-size: 16px; font-weight: 500;">
                Please follow up with this lead within the next 2 hours for maximum conversion potential.
              </p>
              <div style="margin-top: 20px;">
                <a href="mailto:${userData.email}" style="background-color: #0d9488; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; margin: 0 10px;">📧 Send Email</a>
                <a href="tel:${userData.mobileNumber}" style="background-color: #059669; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; margin: 0 10px;">📞 Call Now</a>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1f2937; padding: 25px 40px; text-align: center;">
            <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px;">
              NETRIVYA Lead Management System
            </p>
            <p style="color: #6b7280; margin: 0; font-size: 12px;">
              © 2024 NETRIVYA. Internal Use Only.
            </p>
          </div>
          
        </div>
      </body>
      </html>
    `
  };

  return await transporter.sendMail(mailOptions);
}

export async function sendContactConfirmation(contactData) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: contactData.email,
    subject: 'Thank you for contacting NETRIVYA! We\'ll be in touch soon.',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting NETRIVYA</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); padding: 30px 40px; text-align: center;">
            <img src="https://netrivya.com/images/logo.jpeg" alt="NETRIVYA Logo" style="max-height: 60px; margin-bottom: 20px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 600;">Thank You for Reaching Out!</h1>
            <p style="color: #e6fffa; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 40px;">
            <h2 style="color: #0d9488; margin: 0 0 20px 0; font-size: 24px;">Hello ${contactData.name}! 👋</h2>
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
              Thank you for contacting NETRIVYA. We've successfully received your inquiry and our expert team will get back to you within <strong style="color: #0d9488;">24 hours</strong>.
            </p>
            
            <!-- Message Summary Card -->
            <div style="background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); border-left: 4px solid #0d9488; padding: 25px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #0d9488; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 Your Message Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 120px;">📧 Subject:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${contactData.subject}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600;">🏷️ Type:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${contactData.inquiryType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600;">⏰ Submitted:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <!-- Message Content -->
            <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; padding: 25px; margin: 25px 0;">
              <h4 style="color: #374151; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">💬 Your Message:</h4>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 3px solid #0d9488;">
                <p style="color: #1f2937; margin: 0; font-size: 15px; line-height: 1.6; font-style: italic;">"${contactData.message}"</p>
              </div>
            </div>
            
            <!-- What's Next -->
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 2px solid #3b82f6; border-radius: 8px; padding: 25px; margin: 25px 0;">
              <h3 style="color: #1d4ed8; margin: 0 0 15px 0; font-size: 18px;">🎯 What Happens Next?</h3>
              <ul style="color: #374151; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>Our team will review your inquiry carefully</li>
                <li>You'll receive a personalized response within 24 hours</li>
                <li>We'll provide detailed information about our solutions</li>
                <li>If needed, we'll schedule a demo or consultation call</li>
              </ul>
            </div>
            
            <!-- Urgent Contact -->
            <div style="background-color: #fef9e7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
              <h4 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">🚨 Need Immediate Assistance?</h4>
              <p style="color: #78350f; margin: 0 0 15px 0; font-size: 14px;">
                For urgent matters, feel free to contact us directly:
              </p>
              <p style="color: #0d9488; margin: 0; font-size: 16px; font-weight: 600;">
                📧 info@netrivya.com | 🌐 www.netrivya.com
              </p>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 25px 0 0 0;">
              We appreciate your interest in NETRIVYA and look forward to helping you transform your communication strategy.
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1f2937; padding: 30px 40px; text-align: center;">
            <p style="color: #9ca3af; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Best regards,</p>
            <p style="color: #ffffff; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">NETRIVYA Support Team</p>
            
            <div style="border-top: 1px solid #374151; padding-top: 20px; margin-top: 20px;">
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">
                📧 Email: info@netrivya.com | 🌐 Website: www.netrivya.com
              </p>
              <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 12px;">
                © 2024 NETRIVYA. All rights reserved. | Transforming Communication, Connecting Businesses.
              </p>
            </div>
          </div>
          
        </div>
      </body>
      </html>
    `
  };

  return await transporter.sendMail(mailOptions);
}

export async function sendContactNotification(contactData) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "leads@netrivya.com",
    subject: `🔔 New Contact Form: ${contactData.inquiryType} - ${contactData.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); padding: 30px 40px; text-align: center;">
            <img src="https://netrivya.com/images/logo.jpeg" alt="NETRIVYA Logo" style="max-height: 50px; margin-bottom: 15px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">📞 New Contact Inquiry</h1>
            <p style="color: #e9d5ff; margin: 10px 0 0 0; font-size: 14px;">Contact Form Submission Alert</p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 40px;">
            <div style="background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%); border-left: 4px solid #7c3aed; padding: 20px; border-radius: 8px; margin: 0 0 30px 0;">
              <h2 style="color: #7c3aed; margin: 0 0 10px 0; font-size: 20px;">📋 New Contact Form Submission</h2>
              <p style="color: #374151; margin: 0; font-size: 16px;">A potential customer has submitted a contact form on the NETRIVYA website.</p>
            </div>
            
            <!-- Contact Details Card -->
            <div style="background-color: #ffffff; border: 2px solid #0d9488; border-radius: 12px; padding: 30px; margin: 25px 0;">
              <h3 style="color: #0d9488; margin: 0 0 25px 0; font-size: 20px; font-weight: 600; text-align: center;">👤 Contact Information</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; width: 140px; border-bottom: 1px solid #e5e7eb;">👤 Name:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${contactData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">📧 Email:</td>
                  <td style="padding: 12px 0; color: #0d9488; font-weight: 500; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${contactData.email}" style="color: #0d9488; text-decoration: none;">${contactData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">📱 Phone:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;"><a href="tel:${contactData.phone}" style="color: #0d9488; text-decoration: none;">${contactData.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">🏢 Company:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${contactData.company || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">🏷️ Inquiry Type:</td>
                  <td style="padding: 12px 0; color: #7c3aed; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${contactData.inquiryType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">📋 Subject:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${contactData.subject}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #374151; font-weight: 600;">⏰ Submitted:</td>
                  <td style="padding: 12px 0; color: #1f2937; font-weight: 500;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <!-- Message Content -->
            <div style="background-color: #ffffff; border: 2px solid #7c3aed; border-radius: 12px; padding: 30px; margin: 25px 0;">
              <h3 style="color: #7c3aed; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; text-align: center;">💬 Customer Message</h3>
              <div style="background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%); padding: 25px; border-radius: 8px; border-left: 4px solid #7c3aed;">
                <p style="color: #1f2937; margin: 0; font-size: 16px; line-height: 1.7; font-style: italic;">"${contactData.message}"</p>
              </div>
            </div>
            
            <!-- Priority Action -->
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 8px; padding: 25px; margin: 25px 0; text-align: center;">
              <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">⚡ Priority Response Required</h3>
              <p style="color: #78350f; margin: 0 0 20px 0; font-size: 16px; font-weight: 500;">
                Please respond to this inquiry promptly to maintain our excellent customer service standards.
              </p>
              <div style="margin-top: 20px;">
                <a href="mailto:${contactData.email}?subject=Re: ${contactData.subject}&body=Dear ${contactData.name},%0D%0A%0D%0AThank you for contacting NETRIVYA regarding ${contactData.inquiryType}.%0D%0A%0D%0A" style="background-color: #0d9488; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; margin: 0 10px;">📧 Reply Now</a>
                <a href="tel:${contactData.phone}" style="background-color: #059669; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; margin: 0 10px;">📞 Call Customer</a>
              </div>
            </div>
            
            <!-- Response Guidelines -->
            <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h4 style="color: #0c4a6e; margin: 0 0 15px 0; font-size: 16px;">📝 Response Guidelines:</h4>
              <ul style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px; font-size: 14px;">
                <li>Acknowledge their inquiry and thank them for contacting NETRIVYA</li>
                <li>Address their specific ${contactData.inquiryType} inquiry</li>
                <li>Provide relevant information about our services</li>
                <li>Offer a demo or consultation if appropriate</li>
                <li>Include your direct contact information for follow-up</li>
              </ul>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1f2937; padding: 25px 40px; text-align: center;">
            <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px;">
              NETRIVYA Customer Support System
            </p>
            <p style="color: #6b7280; margin: 0; font-size: 12px;">
              © 2024 NETRIVYA. Internal Use Only.
            </p>
          </div>
          
        </div>
      </body>
      </html>
    `
  };

  return await transporter.sendMail(mailOptions);
}