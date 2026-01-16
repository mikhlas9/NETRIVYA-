import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';
import { sendContactConfirmation, sendContactNotification } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { 
      name, 
      email, 
      phone, 
      subject, 
      message,
      company,
      inquiryType 
    } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Create new contact entry
    const contactData = {
      name,
      email: email.toLowerCase(),
      phone,
      company: company || '',
      subject,
      message,
      inquiryType: inquiryType || 'general'
    };

    const contact = new Contact(contactData);
    await contact.save();

    // Send emails
    try {
      await Promise.all([
        sendContactConfirmation(contactData),
        sendContactNotification(contactData)
      ]);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the contact submission if email fails
    }

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        contact: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}