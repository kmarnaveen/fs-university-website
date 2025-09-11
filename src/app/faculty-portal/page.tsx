"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { 
  UserCheck,
  Lock,
  Eye,
  EyeOff,
  Shield,
  BookOpen,
  Calendar,
  FileText,
  Users,
  Bell,
  BarChart3,
  Settings,
  Globe,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

const FacultyPortalPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    facultyId: '',
    password: '',
    rememberMe: false
  });

  const quickLinks = [
    {
      icon: Bell,
      title: 'Notice Board',
      description: 'University announcements',
      href: '/notice-board',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Student Management',
      description: 'Manage student records',
      href: '/faculty/students',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BookOpen,
      title: 'Course Materials',
      description: 'Upload & manage content',
      href: '/faculty/courses',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Grade Book',
      description: 'Student assessments',
      href: '/faculty/grades',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Calendar,
      title: 'Academic Calendar',
      description: 'Important dates',
      href: '/academics/calendar',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Settings,
      title: 'Faculty Resources',
      description: 'Tools & guidelines',
      href: '/faculty/resources',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log('Faculty login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/fs-university-logo1.png" 
              alt="FS University" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-2">
            Faculty Portal
          </h1>
          <p className="text-gray-600">
            Access teaching resources, student management, and academic services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Login Form */}
          <Card className="p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Faculty Login
              </h2>
              <p className="text-gray-600">
                Enter your credentials to access the faculty portal
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Faculty ID / Email
                </label>
                <div className="relative">
                  <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Enter your Faculty ID or Email"
                    value={formData.facultyId}
                    onChange={(e) => handleInputChange('facultyId', e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="rounded border-gray-300 text-[var(--fsu-crimson)] focus:ring-[var(--fsu-crimson)]"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-[var(--fsu-crimson)] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white h-12 text-lg"
              >
                Login to Portal
              </Button>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">
                  New faculty member?
                </p>
                <Link 
                  href="/faculty-onboarding" 
                  className="text-[var(--fsu-crimson)] hover:underline font-medium"
                >
                  Complete Onboarding Process
                </Link>
              </div>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-2">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900">Security Notice</h4>
                  <p className="text-xs text-blue-700 mt-1">
                    For security reasons, please log out and close your web browser when you are done accessing services. Faculty accounts are subject to additional security monitoring.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Access Links */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-[var(--fsu-crimson)]" />
                Quick Access
              </h3>
              <p className="text-gray-600 mb-6">
                Access important teaching resources and administrative tools.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Link 
                      key={index} 
                      href={link.href}
                      className="group block p-4 border border-gray-200 rounded-lg hover:border-[var(--fsu-crimson)] hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-[var(--fsu-crimson)]">
                            {link.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Card>

            {/* Faculty Support */}
            <Card className="p-6 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
              <h3 className="text-lg font-semibold mb-3">Faculty Support</h3>
              <p className="text-sm opacity-90 mb-4">
                Need technical assistance or have questions about university policies? Our dedicated faculty support team is here to help.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Faculty Helpdesk: +91 98765 43211</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email: faculty.support@fsuniversity.ac.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Office Hours: Mon-Fri, 9 AM - 6 PM</span>
                </div>
              </div>
              <Button 
                asChild
                variant="outline" 
                className="mt-4 border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
              >
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
            </Card>

            {/* Important Updates */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-[var(--fsu-crimson)]" />
                Important Updates
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-medium text-yellow-800">
                        Grade Submission Deadline
                      </h4>
                      <p className="text-xs text-yellow-700">
                        Final grades for Semester 1 must be submitted by October 15, 2025.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-800">
                        Faculty Development Workshop
                      </h4>
                      <p className="text-xs text-blue-700">
                        "Digital Pedagogy in Higher Education" - Register by Oct 10.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-800">
                        New Research Grant Applications Open
                      </h4>
                      <p className="text-xs text-green-700">
                        Apply for internal research funding - Deadline: Nov 30, 2025.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Faculty Portal</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Grade Management System</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Course Management</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Student Information System</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-yellow-600">Maintenance</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>
            © 2025 FS University Faculty Portal. All rights reserved. | 
            <Link href="/faculty/privacy" className="text-[var(--fsu-crimson)] hover:underline ml-1">Faculty Privacy Policy</Link> | 
            <Link href="/faculty/guidelines" className="text-[var(--fsu-crimson)] hover:underline ml-1">Usage Guidelines</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyPortalPage;
