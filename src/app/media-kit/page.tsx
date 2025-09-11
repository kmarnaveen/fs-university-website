"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download,
  Mail,
  Phone,
  Calendar,
  FileText,
  ExternalLink,
  Building,
  Users,
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileImage,
  Play
} from 'lucide-react';
import Link from 'next/link';

const MediaKitPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const pressReleases = [
    {
      id: 1,
      title: 'FS University Launches Revolutionary AI Research Center',
      date: '2024-01-20',
      description: 'Major investment in artificial intelligence research facility with industry partnerships',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'National Excellence Award for Innovation in Education',
      date: '2024-01-15',
      description: 'University recognized by Ministry of Education for outstanding contributions',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Partnership Agreement with Global Tech Giants',
      date: '2024-01-10',
      description: 'Strategic collaborations with Microsoft, Google, and Amazon announced',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Gold Rating for Academic Excellence Achievement',
      date: '2024-01-06',
      description: 'NAAC awards highest rating for quality education and infrastructure',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'International Student Exchange Program Expansion',
      date: '2024-01-04',
      description: 'University extends partnerships to 25 countries worldwide',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'New Research Facility Groundbreaking Ceremony',
      date: '2023-12-28',
      description: 'Construction begins on state-of-the-art biotechnology research center',
      downloadUrl: '#'
    },
    {
      id: 7,
      title: 'Alumni Success Stories: Tech Entrepreneurs',
      date: '2023-12-25',
      description: 'Former students launch successful startups with university support',
      downloadUrl: '#'
    },
    {
      id: 8,
      title: 'Sustainable Campus Initiative Launch',
      date: '2023-12-20',
      description: 'Comprehensive environmental program targets carbon neutrality by 2030',
      downloadUrl: '#'
    },
    {
      id: 9,
      title: 'Faculty Research Breakthrough in Quantum Computing',
      date: '2023-12-15',
      description: 'Professor team achieves major advancement in quantum information systems',
      downloadUrl: '#'
    },
    {
      id: 10,
      title: 'Student Innovation Challenge Winners Announced',
      date: '2023-12-10',
      description: 'Annual competition showcases creative solutions to global challenges',
      downloadUrl: '#'
    },
    {
      id: 11,
      title: 'Medical School Accreditation Renewed',
      date: '2023-12-05',
      description: 'Highest rating received for clinical education and research programs',
      downloadUrl: '#'
    },
    {
      id: 12,
      title: 'International Collaboration Agreement Signed',
      date: '2023-12-01',
      description: 'Partnership with European universities enhances research opportunities',
      downloadUrl: '#'
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(pressReleases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReleases = pressReleases.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const universityFacts = [
    { label: 'Founded', value: '1995' },
    { label: 'Total Students', value: '25,000+' },
    { label: 'Faculty Members', value: '1,200+' },
    { label: 'Academic Programs', value: '150+' },
    { label: 'Campus Size', value: '200 Acres' },
    { label: 'Schools & Colleges', value: '12' },
    { label: 'Research Centers', value: '25' },
    { label: 'Industry Partnerships', value: '500+' },
    { label: 'International Collaborations', value: '75' },
    { label: 'Alumni Network', value: '100,000+' },
    { label: 'Annual Research Funding', value: '$50M+' },
    { label: 'Employment Rate', value: '95%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:underline hover:text-[var(--fsu-crimson)]">Home</Link>
                <span>/</span>
                <Link href="/news" className="hover:underline hover:text-[var(--fsu-crimson)]">News & Media</Link>
                <span>/</span>
                <span>Media Kit</span>
              </nav>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Media Kit & Press Resources
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Official assets, press releases, and information for media professionals and journalists.
                </p>
                <Badge className="bg-green-100 text-green-800">
                  Updated Daily
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Media Contact */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Media Contact</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Sarah Mitchell</h3>
                    <p className="opacity-90">Director of Communications & Media Relations</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>media@fsuniversity.ac.in</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <span>+91 11 2345 6789 (Office)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="mb-4 opacity-90">For urgent media inquiries</p>
                <Button 
                  asChild
                  className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  <Link href="mailto:media@fsuniversity.ac.in">
                    Contact Media Team
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Press Releases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-8">
              Recent Press Releases
            </h2>
            <div className="space-y-4">
              {currentReleases.map((release) => (
                <Card key={release.id} className="p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {release.description}
                      </p>
                    </div>
                    <div className="ml-6">
                      <Button 
                        asChild
                        variant="outline"
                        className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                      >
                        <Link href={release.downloadUrl}>
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1} to {Math.min(endIndex, pressReleases.length)} of {pressReleases.length} press releases
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(page)}
                      className={`w-8 h-8 p-0 ${
                        currentPage === page
                          ? 'bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white'
                          : 'text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white'
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                asChild
                variant="outline"
                className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              >
                <Link href="/news">
                  View All News & Press Releases
                </Link>
              </Button>
            </div>
          </div>

          {/* University Fact Sheet */}
          <Card className="p-8 mb-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8 text-[var(--fsu-crimson)]" />
                <h3 className="text-2xl font-bold text-gray-900">University Fact Sheet</h3>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key statistics and information about FS University for quick reference and reporting.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {universityFacts.map((fact, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-1">
                    {fact.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-8 py-3"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Complete Fact Sheet (PDF)
              </Button>
            </div>
          </Card>

          {/* Additional Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 mx-auto mb-4 text-[var(--fsu-crimson)]" />
              <h3 className="font-semibold text-gray-900 mb-2">Campus Tour</h3>
              <p className="text-sm text-gray-600 mb-4">Schedule a media visit or virtual tour</p>
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
              >
                <Link href="/contact">Schedule Visit</Link>
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 mx-auto mb-4 text-[var(--fsu-crimson)]" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Sources</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with faculty experts for interviews</p>
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
              >
                <Link href="/contact">Find Experts</Link>
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 mx-auto mb-4 text-[var(--fsu-crimson)]" />
              <h3 className="font-semibold text-gray-900 mb-2">Awards & Recognition</h3>
              <p className="text-sm text-gray-600 mb-4">Latest achievements and accolades</p>
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
              >
                <Link href="/news">View Awards</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaKitPage;
