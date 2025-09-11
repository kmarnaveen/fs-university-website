"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight,
  Download,
  Clock,
  Award,
  Users,
  Building,
  GraduationCap,
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle,
  FileText,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';

const MBAPage = () => {
  const [stickyVisible, setStickyVisible] = useState(true);

  const programHighlights = [
    { icon: Clock, label: 'Duration', value: '2 Years' },
    { icon: GraduationCap, label: 'Level', value: 'Postgraduate' },
    { icon: Award, label: 'Approvals', value: 'AICTE, UGC' },
    { icon: Users, label: 'Intake', value: '120 Students' }
  ];

  const curriculum = {
    semester1: [
      'Principles of Management',
      'Financial Accounting',
      'Business Economics',
      'Statistics for Management',
      'Organizational Behavior',
      'Business Communication'
    ],
    semester2: [
      'Marketing Management',
      'Human Resource Management',
      'Operations Management',
      'Financial Management',
      'Business Research Methods',
      'Business Ethics & CSR'
    ],
    semester3: [
      'Strategic Management',
      'International Business',
      'Specialization Subjects (Finance/Marketing/HR/Operations)',
      'Project Management',
      'Digital Marketing',
      'Supply Chain Management'
    ],
    semester4: [
      'Advanced Specialization Subjects',
      'Industry Project/Dissertation',
      'Leadership & Change Management',
      'Entrepreneurship Development',
      'Business Simulation',
      'Comprehensive Viva'
    ]
  };

  const careerProspects = [
    {
      role: 'Management Consultant',
      industry: 'Consulting',
      avgSalary: '₹8-15 LPA',
      description: 'Advise organizations on management best practices and strategic decisions.'
    },
    {
      role: 'Business Analyst',
      industry: 'IT & Technology',
      avgSalary: '₹6-12 LPA',
      description: 'Analyze business processes and recommend technology solutions.'
    },
    {
      role: 'Product Manager',
      industry: 'Technology/FMCG',
      avgSalary: '₹10-18 LPA',
      description: 'Lead product development and manage product lifecycle.'
    },
    {
      role: 'Investment Banking Analyst',
      industry: 'Banking & Finance',
      avgSalary: '₹12-20 LPA',
      description: 'Analyze financial data and support investment decisions.'
    },
    {
      role: 'Marketing Manager',
      industry: 'Various Industries',
      avgSalary: '₹7-14 LPA',
      description: 'Develop and execute marketing strategies for products and services.'
    },
    {
      role: 'Operations Manager',
      industry: 'Manufacturing/Services',
      avgSalary: '₹8-16 LPA',
      description: 'Oversee daily operations and improve organizational efficiency.'
    }
  ];

  const recruiters = [
    'TCS', 'Infosys', 'Wipro', 'HDFC Bank', 'ICICI Bank', 'Deloitte', 
    'PwC', 'EY', 'Accenture', 'Amazon', 'Flipkart', 'Mahindra', 
    'Tata Group', 'Reliance', 'HUL', 'P&G'
  ];

  const eligibilityRequirements = [
    'Bachelor\'s degree in any discipline with minimum 50% marks',
    'Valid CAT/MAT/XAT/CMAT score',
    'Minimum 2 years of work experience (preferred)',
    'English proficiency (written and spoken)',
    'Group Discussion and Personal Interview'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Apply Button */}
      {stickyVisible && (
        <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden lg:block">
          <Card className="p-4 shadow-xl bg-[var(--fsu-crimson)] text-white">
            <div className="text-center mb-3">
              <h4 className="font-semibold">Ready to Apply?</h4>
              <p className="text-xs opacity-90">Start your MBA journey</p>
            </div>
            <Button 
              asChild
              className="w-full bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)] font-semibold"
            >
              <Link href="/apply">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStickyVisible(false)}
              className="w-full mt-2 text-white hover:bg-[var(--fsu-maroon)]"
            >
              ×
            </Button>
          </Card>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/schools" className="hover:underline">Schools</Link>
              <span>/</span>
              <Link href="/schools/management" className="hover:underline">Management</Link>
              <span>/</span>
              <span className="text-[var(--fsu-crimson)]">MBA</span>
            </nav>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
                Master of Business Administration (MBA)
              </h1>
              
              {/* Key Info Bar */}
              <div className="flex flex-wrap items-center gap-6 p-4 bg-gray-100 rounded-lg">
                {programHighlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IconComponent className="w-5 h-5 text-[var(--fsu-crimson)]" />
                      <span className="text-sm font-medium text-gray-700">{highlight.label}:</span>
                      <span className="text-sm font-semibold text-gray-900">{highlight.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button 
                asChild
                className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-8 py-3 text-lg"
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tabbed Content Interface */}
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="about" className="text-sm">About Program</TabsTrigger>
            <TabsTrigger value="curriculum" className="text-sm">Curriculum</TabsTrigger>
            <TabsTrigger value="careers" className="text-sm">Career Prospects</TabsTrigger>
            <TabsTrigger value="eligibility" className="text-sm">Eligibility & Fees</TabsTrigger>
          </TabsList>

          {/* Tab 1: About Program */}
          <TabsContent value="about" className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                About the MBA Program
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  Our Master of Business Administration (MBA) program is designed to develop visionary leaders who can navigate the complexities of modern business environments. This comprehensive two-year program combines rigorous academic coursework with practical industry exposure to prepare students for senior management roles.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-[var(--fsu-crimson)]" />
                      Program Objectives
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Develop strategic thinking and decision-making capabilities
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Build leadership and team management skills
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Foster innovation and entrepreneurial mindset
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Enhance communication and presentation abilities
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-[var(--fsu-crimson)]" />
                      Learning Outcomes
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Master core business functions and their integration
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Apply analytical tools for business problem-solving
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Understand global business practices and ethics
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                        Lead organizational change and transformation
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  The program emphasizes experiential learning through case studies, industry projects, internships, and international exposure opportunities. Our distinguished faculty, combined with state-of-the-art facilities and strong industry partnerships, ensures that graduates are well-prepared to excel in their chosen career paths.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Tab 2: Curriculum & Syllabus */}
          <TabsContent value="curriculum" className="space-y-8">
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[var(--fsu-crimson)]">
                  Curriculum & Syllabus
                </h2>
                <Button variant="outline" className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Syllabus (PDF)
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Semester 1 */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Semester 1 - Foundation
                  </h3>
                  <ul className="space-y-2">
                    {curriculum.semester1.map((subject, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <BookOpen className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Semester 2 */}
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Semester 2 - Core Management
                  </h3>
                  <ul className="space-y-2">
                    {curriculum.semester2.map((subject, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <BookOpen className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Semester 3 */}
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Semester 3 - Specialization
                  </h3>
                  <ul className="space-y-2">
                    {curriculum.semester3.map((subject, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <BookOpen className="w-4 h-4 mr-2 mt-0.5 text-purple-600 flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Semester 4 */}
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Semester 4 - Advanced & Project
                  </h3>
                  <ul className="space-y-2">
                    {curriculum.semester4.map((subject, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <BookOpen className="w-4 h-4 mr-2 mt-0.5 text-orange-600 flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-[var(--fsu-crimson)] text-white rounded-lg">
                <h4 className="font-semibold mb-2">Specialization Areas Available:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>• Finance</div>
                  <div>• Marketing</div>
                  <div>• Human Resources</div>
                  <div>• Operations</div>
                  <div>• International Business</div>
                  <div>• Information Technology</div>
                  <div>• Entrepreneurship</div>
                  <div>• Healthcare Management</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Tab 3: Career Prospects */}
          <TabsContent value="careers" className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                Career Prospects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {careerProspects.map((career, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-[var(--fsu-crimson)]">
                    <h4 className="font-semibold text-gray-900 mb-2">{career.role}</h4>
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline" className="text-xs">{career.industry}</Badge>
                      <span className="text-sm font-medium text-green-600">{career.avgSalary}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{career.description}</p>
                  </Card>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Recruitment Partners
                </h3>
                <p className="text-gray-600 mb-4">
                  Our graduates are recruited by leading companies across various industries:
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {recruiters.map((company, index) => (
                    <div key={index} className="bg-white p-3 rounded text-center text-sm font-medium text-gray-700">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Tab 4: Eligibility & Fees */}
          <TabsContent value="eligibility" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                  Eligibility Criteria
                </h2>
                
                <ul className="space-y-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Candidates from all academic backgrounds are eligible</li>
                    <li>• Work experience adds to the selection criteria</li>
                    <li>• Final selection based on overall profile assessment</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                  Fee Structure
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Total Program Fee</h3>
                    <div className="text-3xl font-bold">₹4,50,000</div>
                    <p className="text-sm opacity-90">For the complete 2-year program</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Annual Tuition Fee</span>
                      <span className="font-semibold">₹2,00,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Hostel Fee (Annual)</span>
                      <span className="font-semibold">₹80,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Other Fees (Books, Lab, etc.)</span>
                      <span className="font-semibold">₹25,000</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Payment Options:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Semester-wise payment allowed</li>
                      <li>• Education loan assistance available</li>
                      <li>• Merit-based scholarships for eligible students</li>
                      <li>• EMI options through partner banks</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    asChild
                    className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                  >
                    <Link href="/downloads">
                      <FileText className="w-4 h-4 mr-2" />
                      View Detailed Fee Structure
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of successful professionals who have advanced their careers through our MBA program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Link href="/apply">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3 text-lg"
            >
              <Link href="/enquiry">
                Schedule Campus Visit
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MBAPage;
