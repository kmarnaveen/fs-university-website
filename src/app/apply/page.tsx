"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight,
  User,
  Calendar,
  MapPin
} from 'lucide-react';

const ApplicationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    parentMobile: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const steps = [
    { id: 1, title: 'Personal Details', icon: User },
    { id: 2, title: 'Academic Info', icon: CheckCircle2 },
    { id: 3, title: 'Upload Documents', icon: CheckCircle2 },
    { id: 4, title: 'Payment', icon: CheckCircle2 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Basic validation can be added here
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header & Progress Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/fs-university-logo1.png" 
                alt="FS University" 
                className="h-12"
              />
              <div>
                <h1 className="text-xl font-bold text-[var(--fsu-crimson)]">
                  FS University
                </h1>
                <p className="text-sm text-gray-600">Online Application Portal</p>
              </div>
            </div>
            <Badge variant="outline" className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]">
              Application 2025
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      isActive 
                        ? 'bg-[var(--fsu-crimson)] border-[var(--fsu-crimson)] text-white' 
                        : isCompleted 
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-gray-200 border-gray-300 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                    </div>
                    <span className={`text-xs mt-2 ${
                      isActive ? 'text-[var(--fsu-crimson)] font-medium' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      step.id < currentStep ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Form Container - Left Side */}
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8">
              <div className="mb-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-[var(--fsu-crimson)] mb-2">
                  FS University Online Application Form 2025
                </h1>
                <p className="text-gray-600">
                  Please fill in your details accurately. All fields marked with * are mandatory.
                </p>
              </div>

              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <User className="w-5 h-5 mr-2 text-[var(--fsu-crimson)]" />
                    Personal Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name (As per 10th Marksheet) *
                      </label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="+91 9876543210"
                          value={formData.mobile}
                          onChange={(e) => handleInputChange('mobile', e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="outline" className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]">
                          Verify OTP
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <Input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <div className="flex space-x-4">
                        {['Male', 'Female', 'Other'].map((option) => (
                          <label key={option} className="flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value={option}
                              checked={formData.gender === option}
                              onChange={(e) => handleInputChange('gender', e.target.value)}
                              className="mr-2 text-[var(--fsu-crimson)]"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father's/Guardian's Name *
                      </label>
                      <Input
                        placeholder="Enter father's/guardian's name"
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange('fatherName', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent's Mobile Number *
                      </label>
                      <Input
                        placeholder="+91 9876543210"
                        value={formData.parentMobile}
                        onChange={(e) => handleInputChange('parentMobile', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Address *
                      </label>
                      <textarea
                        placeholder="Enter your complete address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <Input
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <Input
                        placeholder="Enter state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode *
                      </label>
                      <Input
                        placeholder="Enter pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-6">
                    <Button 
                      onClick={handleNext}
                      className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-8 py-3"
                    >
                      Save & Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Placeholder for other steps */}
              {currentStep > 1 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚧</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Step {currentStep} Coming Soon
                  </h3>
                  <p className="text-gray-600">
                    This step is currently under development. Please check back later.
                  </p>
                  <Button 
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="mt-4"
                  >
                    Back to Step 1
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Help & Support - Right Side */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[var(--fsu-crimson)] mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Need Help?
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Required Documents Checklist:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ 10th Marksheet</li>
                    <li>✓ 12th Marksheet</li>
                    <li>✓ Passport Size Photo</li>
                    <li>✓ Signature Sample</li>
                    <li>✓ Category Certificate (if applicable)</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-800 mb-3">Contact Support:</h4>
                  
                  <div className="space-y-3">
                    <a 
                      href="tel:+919876543210" 
                      className="flex items-center text-sm text-[var(--fsu-crimson)] hover:underline"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Admissions Helpline: +91 98765 43210
                    </a>
                    
                    <a 
                      href="mailto:admissions@fsuniversity.ac.in" 
                      className="flex items-center text-sm text-[var(--fsu-crimson)] hover:underline"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      admissions@fsuniversity.ac.in
                    </a>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Button variant="outline" className="w-full text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]">
                    View Application FAQ
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
              <h3 className="text-lg font-semibold mb-2">Application Deadline</h3>
              <p className="text-sm opacity-90 mb-3">
                Last date to submit your application for the 2025-26 academic year.
              </p>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-medium">March 31, 2025</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
