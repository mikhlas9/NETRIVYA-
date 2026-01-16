'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';

const signupSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  services: z.object({
    voice: z.boolean().default(false),
    sms: z.boolean().default(false),
    rcs: z.boolean().default(false),
    whatsapp: z.boolean().default(false)
  }).refine(data => Object.values(data).some(Boolean), {
    message: 'Please select at least one service'
  }),
  companyName: z.string().min(1, 'Company name is required'),
  country: z.string().min(1, 'Country is required'),
  mobileNumber: z.string().min(1, 'Mobile number is required'),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions'
  }),
  receiveMarketing: z.boolean().default(false)
});

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 
  'France', 'India', 'Japan', 'Brazil', 'Mexico', 'Other'
];

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      services: {
        voice: false,
        sms: false,
        rcs: false,
        whatsapp: false
      },
      agreeToTerms: false,
      receiveMarketing: false
    }
  });

  const watchedServices = watch('services');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/signup', {
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

      setSuccessData(result.user);
      setShowSuccess(true);
      reset();
    } catch (error) {
      alert(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to reach the
              <span className="text-teal-600"> world?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses using our messaging platform to connect with their customers globally.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    {...register('firstName')}
                    className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    {...register('lastName')}
                    className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    {...register('email')}
                    className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <Label className="text-gray-700 font-medium mb-4 block">Select Services *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: 'voice', label: 'Voice' },
                    { key: 'sms', label: 'SMS' },
                    { key: 'rcs', label: 'RCS' },
                    { key: 'whatsapp', label: 'WhatsApp' }
                  ].map(({ key, label }) => (
                    <div key={key} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
                      <Checkbox
                        id={key}
                        checked={watchedServices[key]}
                        onCheckedChange={(checked) => 
                          setValue(`services.${key}`, checked)
                        }
                        className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                      />
                      <Label htmlFor={key} className="text-gray-700 font-medium cursor-pointer">{label}</Label>
                    </div>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-red-500 text-sm mt-2">{errors.services.message}</p>
                )}
              </div>

              {/* Company and Location */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="companyName" className="text-gray-700 font-medium">Company Name *</Label>
                  <Input
                    id="companyName"
                    placeholder="Company Name"
                    {...register('companyName')}
                    className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.companyName ? 'border-red-500' : ''}`}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="country" className="text-gray-700 font-medium">Country *</Label>
                  <Select onValueChange={(value) => setValue('country', value)}>
                    <SelectTrigger className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.country ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="mobileNumber" className="text-gray-700 font-medium">Mobile Number *</Label>
                  <div className="flex mt-2">
                    <span className="inline-flex items-center px-4 text-sm text-gray-700 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg font-medium">
                      +1
                    </span>
                    <Input
                      id="mobileNumber"
                      placeholder="Mobile Number"
                      {...register('mobileNumber')}
                      className={`rounded-l-none border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.mobileNumber ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                  )}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    {...register('agreeToTerms')}
                    onCheckedChange={(checked) => setValue('agreeToTerms', checked)}
                    className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 mt-1"
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                    I agree to the <span className="text-teal-600 underline hover:text-teal-700">Terms and Conditions</span> and{' '}
                    <span className="text-teal-600 underline hover:text-teal-700">Privacy Policy</span> *
                  </Label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
                )}
                
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="receiveMarketing"
                    {...register('receiveMarketing')}
                    onCheckedChange={(checked) => setValue('receiveMarketing', checked)}
                    className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 mt-1"
                  />
                  <Label htmlFor="receiveMarketing" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                    I agree to receive marketing communications and product updates
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Continue'}
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                This site is protected by reCAPTCHA and the Google{' '}
                <span className="text-teal-600 underline hover:text-teal-700">Privacy Policy</span> and{' '}
                <span className="text-teal-600 underline hover:text-teal-700">Terms of Service</span> apply.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-teal-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>
            <DialogTitle className="text-center text-xl font-bold text-gray-900">Registration Successful!</DialogTitle>
            <DialogDescription className="text-center text-gray-600 leading-relaxed">
              Welcome <strong>{successData?.firstName}</strong>! Your account has been created successfully.
              <br />
              <br />
              We've sent a confirmation email to <strong className="text-teal-600">{successData?.email}</strong>.
              Our team will get in touch with you soon to help you get started.
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