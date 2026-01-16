import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import { sendWelcomeEmail, sendLeadNotification } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { 
      firstName, 
      lastName, 
      email, 
      services, 
      companyName, 
      country, 
      mobileNumber, 
      agreeToTerms,
      receiveMarketing 
    } = body;

    if (!firstName || !lastName || !email || !companyName || !country || !mobileNumber || !agreeToTerms) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Create new user
    const userData = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      services: services || {},
      companyName,
      country,
      mobileNumber,
      agreeToTerms,
      receiveMarketing: receiveMarketing || false
    };

    const user = new User(userData);
    await user.save();

    // Send emails
    try {
      await Promise.all([
        sendWelcomeEmail(email, userData),
        sendLeadNotification(userData)
      ]);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the signup if email fails
    }

    return NextResponse.json(
      { 
        message: 'Registration successful',
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}