'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, Mail, Phone, MapPin, MessageSquare, Clock, Users } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  inquiryType: z.string().min(1, 'Please select an inquiry type')
});

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'sales', label: 'Sales & Pricing' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'technical', label: 'API & Integration' }
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  // Track conversion when success dialog is shown
  useEffect(() => {
    if (showSuccess && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17856277749/rowCCM6IieEbEPXZxMJC',
        'value': 1.0,
        'currency': 'INR'
      });
    }
  }, [showSuccess]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setSuccessData(result.contact);
      setShowSuccess(true);
      reset();
    } catch (error) {
      alert(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch with
              <span className="text-teal-600"> Our Team</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our messaging solutions? We're here to help you find the perfect fit for your business communication needs.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">&lt; 1hr</h3>
              <p className="text-gray-600 font-medium">Response Time</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                      <p className="text-gray-600 mb-1">info@netrivya.com</p>
                      {/* <p className="text-gray-600">sales@netrivya.com</p> */}
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                      <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                      <p className="text-gray-600 text-sm">24/7 Support Available</p>
                    </div>
                  </div> */}

                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                      <p className="text-gray-600 mb-1">123 Business Street</p>
                      <p className="text-gray-600">Suite 100, City, State 12345</p>
                    </div>
                  </div> */}
                </div>

                {/* Response Time Card */}
                <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-teal-900">Quick Response</h4>
                  </div>
                  <p className="text-teal-800 text-sm leading-relaxed">
                    We typically respond to all inquiries within 1 hour during business hours and within 24 hours on weekends.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        {...register('name')}
                        className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        {...register('email')}
                        className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        {...register('phone')}
                        className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your company name (optional)"
                        {...register('company')}
                        className="mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type and Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="inquiryType" className="text-gray-700 font-medium">Inquiry Type *</Label>
                      <Select onValueChange={(value) => setValue('inquiryType', value)}>
                        <SelectTrigger className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.inquiryType ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && (
                        <p className="text-red-500 text-sm mt-1">{errors.inquiryType.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief subject of your inquiry"
                        {...register('subject')}
                        className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.subject ? 'border-red-500' : ''}`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                      {...register('message')}
                      className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-teal-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>
            <DialogTitle className="text-center text-xl font-bold text-gray-900">Message Sent Successfully!</DialogTitle>
            <DialogDescription className="text-center text-gray-600 leading-relaxed">
              Thank you <strong>{successData?.name}</strong>! We've received your message about "<strong className="text-teal-600">{successData?.subject}</strong>".
              <br />
              <br />
              Our team will review your inquiry and get back to you within 24 hours at <strong className="text-teal-600">{successData?.email}</strong>.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowSuccess(false)} 
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
            >
              Got it, thanks!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}