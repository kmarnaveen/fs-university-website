'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle,
  AlertCircle,
  Download,
  ArrowRight
} from 'lucide-react';

interface ApplicationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Position Information
  position: string;
  department: string;
  expectedSalary: string;
  availableStartDate: string;
  
  // Education
  highestDegree: string;
  university: string;
  graduationYear: string;
  major: string;
  gpa: string;
  
  // Experience
  currentPosition: string;
  currentEmployer: string;
  yearsOfExperience: string;
  relevantExperience: string;
  
  // Additional Information
  coverLetter: string;
  references: string;
  linkedIn: string;
  portfolio: string;
  additionalInfo: string;
  
  // Consent
  consentToProcess: boolean;
  consentToContact: boolean;
}

export default function ApplicationFormPage() {
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    position: '',
    department: '',
    expectedSalary: '',
    availableStartDate: '',
    highestDegree: '',
    university: '',
    graduationYear: '',
    major: '',
    gpa: '',
    currentPosition: '',
    currentEmployer: '',
    yearsOfExperience: '',
    relevantExperience: '',
    coverLetter: '',
    references: '',
    linkedIn: '',
    portfolio: '',
    additionalInfo: '',
    consentToProcess: false,
    consentToContact: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    resume: null,
    coverLetter: null,
    transcript: null,
    portfolio: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const handleInputChange = (field: keyof ApplicationFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (type: string, file: File | null) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.position && formData.department;
      case 3:
        return formData.highestDegree && formData.university;
      case 4:
        return formData.yearsOfExperience;
      case 5:
        return formData.consentToProcess;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in joining FS University. We have received your application and will review it carefully. You can expect to hear from our HR team within 5-7 business days.
          </p>
          <div className="space-y-3">
            <Button asChild className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]">
              <Link href="/careers">
                Back to Careers
              </Link>
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download Application Copy
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:underline hover:text-[var(--fsu-crimson)]">Home</Link>
              <span>/</span>
              <Link href="/careers" className="hover:underline hover:text-[var(--fsu-crimson)]">Careers</Link>
              <span>/</span>
              <span className="text-gray-900">Application Form</span>
            </nav>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Job Application Form
                </h1>
                <p className="text-gray-600">
                  Complete all sections to submit your application to FS University.
                </p>
              </div>
              
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
              >
                <Link href="/careers">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Careers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[var(--fsu-crimson)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  <p className="text-gray-600">Tell us about yourself</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <Input
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Street address"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <Input
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="City"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <Input
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="State"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Position Information */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Position Information</h2>
                  <p className="text-gray-600">Which position are you applying for?</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position Title *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    <option value="Professor">Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Research Associate">Research Associate</option>
                    <option value="Administrative Assistant">Administrative Assistant</option>
                    <option value="IT Specialist">IT Specialist</option>
                    <option value="Student Affairs Coordinator">Student Affairs Coordinator</option>
                    <option value="Finance Manager">Finance Manager</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                  >
                    <option value="">Select a department</option>
                    <option value="Engineering">School of Engineering</option>
                    <option value="Management">School of Management</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Administration">Administration</option>
                    <option value="IT">Information Technology</option>
                    <option value="Research">Research & Development</option>
                    <option value="Student Affairs">Student Affairs</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary
                  </label>
                  <Input
                    value={formData.expectedSalary}
                    onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                    placeholder="e.g., $60,000 - $80,000"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Start Date
                  </label>
                  <Input
                    type="date"
                    value={formData.availableStartDate}
                    onChange={(e) => handleInputChange('availableStartDate', e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Education */}
          {currentStep === 3 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Education Background</h2>
                  <p className="text-gray-600">Tell us about your educational qualifications</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Degree *
                  </label>
                  <select
                    value={formData.highestDegree}
                    onChange={(e) => handleInputChange('highestDegree', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                  >
                    <option value="">Select highest degree</option>
                    <option value="High School">High School Diploma</option>
                    <option value="Associate">Associate Degree</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="Master">Master's Degree</option>
                    <option value="PhD">Ph.D.</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    University/Institution *
                  </label>
                  <Input
                    value={formData.university}
                    onChange={(e) => handleInputChange('university', e.target.value)}
                    placeholder="Name of university or institution"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year
                  </label>
                  <Input
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                    placeholder="e.g., 2020"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Major/Field of Study
                  </label>
                  <Input
                    value={formData.major}
                    onChange={(e) => handleInputChange('major', e.target.value)}
                    placeholder="e.g., Computer Science"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA (Optional)
                  </label>
                  <Input
                    value={formData.gpa}
                    onChange={(e) => handleInputChange('gpa', e.target.value)}
                    placeholder="e.g., 3.8/4.0"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Experience & Documents */}
          {currentStep === 4 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Experience & Documents</h2>
                  <p className="text-gray-600">Your work experience and supporting documents</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      value={formData.yearsOfExperience}
                      onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years (Entry Level)</option>
                      <option value="2-5">2-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="11-15">11-15 years</option>
                      <option value="16+">16+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Position
                    </label>
                    <Input
                      value={formData.currentPosition}
                      onChange={(e) => handleInputChange('currentPosition', e.target.value)}
                      placeholder="Your current job title"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Employer
                  </label>
                  <Input
                    value={formData.currentEmployer}
                    onChange={(e) => handleInputChange('currentEmployer', e.target.value)}
                    placeholder="Company or organization name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience Summary
                  </label>
                  <textarea
                    value={formData.relevantExperience}
                    onChange={(e) => handleInputChange('relevantExperience', e.target.value)}
                    placeholder="Briefly describe your relevant work experience..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                  />
                </div>

                {/* File Upload Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { key: 'resume', label: 'Resume/CV *', icon: FileText },
                      { key: 'coverLetter', label: 'Cover Letter', icon: FileText },
                      { key: 'transcript', label: 'Academic Transcript', icon: GraduationCap },
                      { key: 'portfolio', label: 'Portfolio/Samples', icon: Award }
                    ].map(({ key, label, icon: Icon }) => (
                      <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {label}
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[var(--fsu-crimson)] transition-colors">
                          <Icon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600 mb-2">
                            {uploadedFiles[key] ? uploadedFiles[key]!.name : 'Click to upload or drag and drop'}
                          </p>
                          <input
                            type="file"
                            onChange={(e) => handleFileUpload(key, e.target.files?.[0] || null)}
                            className="hidden"
                            id={`file-${key}`}
                            accept=".pdf,.doc,.docx"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => document.getElementById(`file-${key}`)?.click()}
                            className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Choose File
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Additional Information & Consent */}
          {currentStep === 5 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Final Details</h2>
                  <p className="text-gray-600">Additional information and consent</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>
                    <Input
                      value={formData.linkedIn}
                      onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio Website
                    </label>
                    <Input
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange('portfolio', e.target.value)}
                      placeholder="https://yourportfolio.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    References (Optional)
                  </label>
                  <textarea
                    value={formData.references}
                    onChange={(e) => handleInputChange('references', e.target.value)}
                    placeholder="Please provide 2-3 professional references with contact information..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                  />
                </div>

                {/* Consent Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Consent & Agreements</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent-process"
                        checked={formData.consentToProcess}
                        onChange={(e) => handleInputChange('consentToProcess', e.target.checked)}
                        className="mt-1 w-4 h-4 text-[var(--fsu-crimson)] border-gray-300 rounded focus:ring-[var(--fsu-crimson)]"
                      />
                      <label htmlFor="consent-process" className="text-sm text-gray-700">
                        <span className="font-medium">Data Processing Consent *</span><br />
                        I consent to the processing of my personal data for the purpose of this job application and recruitment process.
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent-contact"
                        checked={formData.consentToContact}
                        onChange={(e) => handleInputChange('consentToContact', e.target.checked)}
                        className="mt-1 w-4 h-4 text-[var(--fsu-crimson)] border-gray-300 rounded focus:ring-[var(--fsu-crimson)]"
                      />
                      <label htmlFor="consent-contact" className="text-sm text-gray-700">
                        <span className="font-medium">Communication Consent</span><br />
                        I agree to be contacted regarding this application and future opportunities at FS University.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="text-gray-600 border-gray-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i + 1 <= currentStep ? 'bg-[var(--fsu-crimson)]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                {!isSubmitting && <CheckCircle className="w-4 h-4 ml-2" />}
              </Button>
            )}
          </div>

          {/* Form Validation Messages */}
          {!isStepValid() && currentStep > 1 && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <p className="text-sm text-yellow-800">
                  Please fill in all required fields before proceeding.
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
