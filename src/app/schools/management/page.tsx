import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Users,
  BookOpen,
  Award,
  GraduationCap,
  ExternalLink,
  MapPin,
  Calendar,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const SchoolOfManagementPage = () => {
  const programs = [
    {
      id: 'bba',
      name: 'Bachelor of Business Administration',
      shortName: 'BBA',
      level: 'Undergraduate',
      duration: '3 Years',
      description: 'A comprehensive undergraduate program designed to provide fundamental business knowledge and leadership skills.',
      slug: 'bba'
    },
    {
      id: 'mba',
      name: 'Master of Business Administration',
      shortName: 'MBA',
      level: 'Postgraduate',
      duration: '2 Years',
      description: 'An advanced management program focusing on strategic thinking, leadership, and business innovation.',
      slug: 'mba'
    },
    {
      id: 'pgdm',
      name: 'Post Graduate Diploma in Management',
      shortName: 'PGDM',
      level: 'Postgraduate',
      duration: '2 Years',
      description: 'Industry-focused management program with emphasis on practical business applications.',
      slug: 'pgdm'
    },
    {
      id: 'phd-mgmt',
      name: 'Doctor of Philosophy in Management',
      shortName: 'PhD Management',
      level: 'Doctoral',
      duration: '3-5 Years',
      description: 'Research-oriented doctoral program for aspiring management scholars and thought leaders.',
      slug: 'phd-management'
    }
  ];

  const facilities = [
    {
      name: 'Modern Lecture Halls',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'State-of-the-art lecture halls equipped with smart boards and audio-visual systems.'
    },
    {
      name: 'Syndicate Rooms',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Small group discussion rooms for case study analysis and team projects.'
    },
    {
      name: 'Computer Lab',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Advanced computer lab with latest software for data analysis and business simulations.'
    },
    {
      name: 'Management Library',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Specialized collection of business books, journals, and digital resources.'
    },
    {
      name: 'Seminar Hall',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Professional seminar hall for guest lectures and industry interactions.'
    },
    {
      name: 'Case Study Room',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Dedicated spaces for interactive case study discussions and presentations.'
    }
  ];

  const achievements = [
    { icon: Award, stat: '95%', label: 'Placement Rate' },
    { icon: Users, stat: '₹12 LPA', label: 'Average Package' },
    { icon: Globe, stat: '50+', label: 'Industry Partners' },
    { icon: BookOpen, stat: '25+', label: 'Faculty Members' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm opacity-90">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/schools" className="hover:underline">Schools</Link>
                <span>/</span>
                <span>Management</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              School of Management
            </h1>
            <h2 className="text-xl lg:text-3xl font-light mb-8 opacity-90">
              Nurturing the Next Generation of Business Leaders
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)] px-8 py-3 text-lg font-semibold"
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3 text-lg"
              >
                <Link href="/downloads">
                  Download Brochure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-1">
                  {achievement.stat}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Dean's Welcome Section */}
        <Card className="mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="lg:col-span-1 bg-gray-100 p-8 flex flex-col items-center justify-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
                <Users className="w-24 h-24 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dr. Rajesh Kumar Sharma
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Dean, School of Management
              </p>
              <Button variant="outline" size="sm" className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Profile
              </Button>
            </div>
            
            <div className="lg:col-span-2 p-8">
              <h2 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                Message from the Dean
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Welcome to the School of Management at FS University. Our institution stands as a beacon of excellence in business education, where we transform aspiring minds into visionary leaders who will shape the future of global business.
                </p>
                <p>
                  Our comprehensive curriculum combines theoretical rigor with practical application, ensuring our graduates are well-equipped to navigate the complexities of modern business environments. With state-of-the-art facilities, distinguished faculty, and strong industry partnerships, we provide an unparalleled learning experience.
                </p>
                <p>
                  At the School of Management, we believe in nurturing not just business acumen, but also ethical leadership, innovation, and social responsibility. Our graduates go on to lead multinational corporations, start successful ventures, and drive positive change in society.
                </p>
                <p className="text-[var(--fsu-crimson)] font-medium">
                  Join us in your journey towards becoming a transformational leader.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Programs Offered Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Explore Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of management programs designed to meet diverse career aspirations and academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <Card key={program.id} className="p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {program.name}
                    </h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline" className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]">
                        {program.level}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--fsu-crimson)]">
                      {program.shortName}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button 
                    asChild
                    variant="outline" 
                    className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                  >
                    <Link href={`/programs/${program.slug}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                  >
                    <Link href="/apply">
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Facilities & Infrastructure Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              State-of-the-Art Learning Environment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our modern facilities provide the perfect environment for interactive learning, research, and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold text-center px-4">
                      {facility.name}
                    </h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact & Location */}
        <Card className="p-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6 opacity-90 leading-relaxed">
                Ready to start your management journey? Contact our admissions team for personalized guidance and support.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>School of Management, FS University Campus, Shikohabad</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3" />
                  <span>management@fsuniversity.ac.in</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button 
                asChild
                className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 px-8 py-3 text-lg"
              >
                <Link href="/enquiry">
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SchoolOfManagementPage;
