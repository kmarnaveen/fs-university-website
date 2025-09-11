"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Building,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const departments = ['All', 'Academics', 'Administration', 'IT', 'Research', 'Student Affairs', 'Finance', 'Operations'];

  const benefits = [
    {
      icon: Lightbulb,
      title: 'Innovative Environment',
      description: 'Work in a cutting-edge educational environment that fosters creativity and innovation in teaching and research.'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Access to continuous learning opportunities, professional development programs, and career advancement paths.'
    },
    {
      icon: Heart,
      title: 'Vibrant Community',
      description: 'Join a diverse and inclusive community of passionate educators, researchers, and support staff.'
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Assistant Professor - Computer Science',
      department: 'Academics',
      location: 'Shikohabad Campus',
      type: 'Full-Time',
      experience: '3-5 years',
      postedDate: '2025-09-05',
      deadline: '2025-10-15',
      description: 'We are seeking a dynamic Assistant Professor to join our Computer Science department. The ideal candidate should have expertise in Machine Learning, Data Science, or Software Engineering.',
      requirements: [
        'Ph.D. in Computer Science or related field',
        'Minimum 3 years of teaching experience',
        'Strong research background with publications',
        'Experience in industry projects preferred'
      ],
      responsibilities: [
        'Conduct undergraduate and graduate courses',
        'Supervise student research projects',
        'Contribute to curriculum development',
        'Engage in departmental and university service'
      ]
    },
    {
      id: 2,
      title: 'Senior Administrative Officer',
      department: 'Administration',
      location: 'Shikohabad Campus',
      type: 'Full-Time',
      experience: '5-8 years',
      postedDate: '2025-09-03',
      deadline: '2025-10-10',
      description: 'Looking for an experienced administrative professional to oversee academic operations and student services.',
      requirements: [
        'Master\'s degree in Management or related field',
        'Minimum 5 years of administrative experience',
        'Strong leadership and communication skills',
        'Experience in higher education preferred'
      ],
      responsibilities: [
        'Oversee daily administrative operations',
        'Coordinate with various departments',
        'Manage student academic services',
        'Implement university policies and procedures'
      ]
    },
    {
      id: 3,
      title: 'IT Infrastructure Manager',
      department: 'IT',
      location: 'Shikohabad Campus',
      type: 'Full-Time',
      experience: '6-10 years',
      postedDate: '2025-09-01',
      deadline: '2025-10-05',
      description: 'Lead our IT infrastructure team to maintain and enhance the technological backbone of our university.',
      requirements: [
        'Bachelor\'s degree in IT/Computer Science',
        'Minimum 6 years of IT infrastructure experience',
        'Expertise in network management and security',
        'Cloud technologies experience required'
      ],
      responsibilities: [
        'Manage university IT infrastructure',
        'Lead IT support team',
        'Implement technology solutions',
        'Ensure cybersecurity compliance'
      ]
    },
    {
      id: 4,
      title: 'Research Associate - Biotechnology',
      department: 'Research',
      location: 'Shikohabad Campus',
      type: 'Full-Time',
      experience: '2-4 years',
      postedDate: '2025-08-28',
      deadline: '2025-09-30',
      description: 'Join our cutting-edge biotechnology research team working on innovative projects in molecular biology and genetics.',
      requirements: [
        'Ph.D. in Biotechnology or Life Sciences',
        'Experience in molecular biology techniques',
        'Strong analytical and research skills',
        'Publication record preferred'
      ],
      responsibilities: [
        'Conduct independent research',
        'Collaborate on research projects',
        'Publish research findings',
        'Supervise research students'
      ]
    },
    {
      id: 5,
      title: 'Student Counselor',
      department: 'Student Affairs',
      location: 'Shikohabad Campus',
      type: 'Full-Time',
      experience: '3-5 years',
      postedDate: '2025-08-25',
      deadline: '2025-09-25',
      description: 'Support student well-being and academic success through counseling and guidance services.',
      requirements: [
        'Master\'s in Psychology/Social Work',
        'Licensed counseling professional',
        'Experience in student counseling',
        'Strong interpersonal skills'
      ],
      responsibilities: [
        'Provide individual and group counseling',
        'Develop student support programs',
        'Crisis intervention and support',
        'Collaborate with academic departments'
      ]
    },
    {
      id: 6,
      title: 'Finance Manager',
      department: 'Finance',
      location: 'Shikohabad Campus',
      type: 'Full-Time',
      experience: '5-7 years',
      postedDate: '2025-08-20',
      deadline: '2025-09-20',
      description: 'Manage financial operations and reporting for the university with focus on budget planning and compliance.',
      requirements: [
        'CA/CPA or equivalent qualification',
        'Minimum 5 years in finance management',
        'Experience in educational institutions',
        'Strong analytical skills'
      ],
      responsibilities: [
        'Oversee financial planning and analysis',
        'Manage budget preparation and monitoring',
        'Ensure compliance with regulations',
        'Lead finance team operations'
      ]
    }
  ];

  const getJobTypeColor = (type: string) => {
    const colors = {
      'Full-Time': 'bg-green-100 text-green-800',
      'Part-Time': 'bg-blue-100 text-blue-800',
      'Contract': 'bg-orange-100 text-orange-800',
      'Internship': 'bg-purple-100 text-purple-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getDepartmentIcon = (department: string) => {
    const icons = {
      'Academics': GraduationCap,
      'Administration': Building,
      'IT': Lightbulb,
      'Research': Award,
      'Student Affairs': Users,
      'Finance': Briefcase,
      'Operations': Building
    };
    return icons[department as keyof typeof icons] || Building;
  };

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Work With Us
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Join a team dedicated to shaping the future of education. 
              Explore exciting career opportunities at FS University.
            </p>
            <Button 
              className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 px-8 py-3 text-lg"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Why Work at FSU Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Why Work at FS University?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of being part of our academic community where innovation meets excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-[var(--fsu-crimson)]">Current Openings</h2>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filter by department:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {departments.map((department) => (
              <Button
                key={department}
                variant={selectedDepartment === department ? "default" : "outline"}
                onClick={() => setSelectedDepartment(department)}
                className={selectedDepartment === department ? 
                  "bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white" : 
                  "text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                }
              >
                {department}
              </Button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => {
            const DepartmentIcon = getDepartmentIcon(job.department);
            const isExpanded = expandedJob === job.id;
            
            return (
              <Card key={job.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center flex-shrink-0">
                          <DepartmentIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className={getJobTypeColor(job.type)}>
                          {job.type}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          Posted: {formatDate(job.postedDate)}
                        </div>
                        <div className="flex items-center text-sm text-red-600">
                          <Clock className="w-4 h-4 mr-1" />
                          Deadline: {formatDate(job.deadline)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 lg:items-end">
                      <Button 
                        asChild
                        className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                      >
                        <Link href="/careers/apply">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => toggleJobExpansion(job.id)}
                        className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                      >
                        {isExpanded ? 'Less Details' : 'View Details'}
                        {isExpanded ? 
                          <ChevronUp className="w-4 h-4 ml-2" /> : 
                          <ChevronDown className="w-4 h-4 ml-2" />
                        }
                      </Button>
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-[var(--fsu-crimson)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-[var(--fsu-gold)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Questions About Careers?</h3>
            <p className="mb-6 opacity-90">
              Our HR team is here to help you with any questions about working at FS University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100">
                <Link href="/contact">Contact HR Department</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]">
                <Link href="/careers/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CareersPage;
