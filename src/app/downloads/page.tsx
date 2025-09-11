"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search,
  Filter,
  Download,
  FileText,
  Calendar,
  Eye,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  File
} from 'lucide-react';

const DownloadsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const itemsPerPage = 10;

  const categories = ['All', 'Admissions', 'Examinations', 'Hostel', 'Scholarships', 'General Forms', 'Academic', 'Fee Structure', 'Notices'];

  const documents = [
    {
      id: 1,
      name: 'Hostel Admission Form 2025',
      category: 'Hostel',
      datePublished: '2025-09-10',
      fileSize: '2.3 MB',
      downloads: 1250,
      fileType: 'PDF',
      description: 'Application form for hostel accommodation for the academic year 2025-26'
    },
    {
      id: 2,
      name: 'MBA Application Form',
      category: 'Admissions',
      datePublished: '2025-09-08',
      fileSize: '1.8 MB',
      downloads: 3400,
      fileType: 'PDF',
      description: 'Complete application form for MBA program admission'
    },
    {
      id: 3,
      name: 'Scholarship Application Guidelines',
      category: 'Scholarships',
      datePublished: '2025-09-05',
      fileSize: '950 KB',
      downloads: 890,
      fileType: 'PDF',
      description: 'Detailed guidelines for applying to various scholarship programs'
    },
    {
      id: 4,
      name: 'Academic Calendar 2025-26',
      category: 'Academic',
      datePublished: '2025-09-03',
      fileSize: '1.2 MB',
      downloads: 2100,
      fileType: 'PDF',
      description: 'Complete academic calendar with important dates and examination schedule'
    },
    {
      id: 5,
      name: 'Examination Re-evaluation Form',
      category: 'Examinations',
      datePublished: '2025-09-01',
      fileSize: '450 KB',
      downloads: 650,
      fileType: 'PDF',
      description: 'Form for requesting re-evaluation of examination papers'
    },
    {
      id: 6,
      name: 'Fee Structure 2025-26',
      category: 'Fee Structure',
      datePublished: '2025-08-28',
      fileSize: '780 KB',
      downloads: 1800,
      fileType: 'PDF',
      description: 'Detailed fee structure for all programs and courses'
    },
    {
      id: 7,
      name: 'Transfer Certificate Application',
      category: 'General Forms',
      datePublished: '2025-08-25',
      fileSize: '320 KB',
      downloads: 420,
      fileType: 'PDF',
      description: 'Application form for transfer certificate and migration'
    },
    {
      id: 8,
      name: 'Library Membership Form',
      category: 'General Forms',
      datePublished: '2025-08-22',
      fileSize: '280 KB',
      downloads: 850,
      fileType: 'PDF',
      description: 'Registration form for library membership and services'
    },
    {
      id: 9,
      name: 'Internship Guidelines 2025',
      category: 'Academic',
      datePublished: '2025-08-20',
      fileSize: '1.5 MB',
      downloads: 1200,
      fileType: 'PDF',
      description: 'Guidelines and requirements for internship programs'
    },
    {
      id: 10,
      name: 'Identity Card Application Form',
      category: 'General Forms',
      datePublished: '2025-08-18',
      fileSize: '400 KB',
      downloads: 950,
      fileType: 'PDF',
      description: 'Application form for student/faculty identity card issuance'
    },
    {
      id: 11,
      name: 'Research Paper Submission Guidelines',
      category: 'Academic',
      datePublished: '2025-08-15',
      fileSize: '1.1 MB',
      downloads: 320,
      fileType: 'PDF',
      description: 'Guidelines for submitting research papers and publications'
    },
    {
      id: 12,
      name: 'Semester Registration Form',
      category: 'Academic',
      datePublished: '2025-08-12',
      fileSize: '520 KB',
      downloads: 1680,
      fileType: 'PDF',
      description: 'Form for semester course registration and enrollment'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Admissions': 'bg-blue-100 text-blue-800',
      'Examinations': 'bg-red-100 text-red-800',
      'Hostel': 'bg-green-100 text-green-800',
      'Scholarships': 'bg-purple-100 text-purple-800',
      'General Forms': 'bg-gray-100 text-gray-800',
      'Academic': 'bg-orange-100 text-orange-800',
      'Fee Structure': 'bg-yellow-100 text-yellow-800',
      'Notices': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'downloads':
        return b.downloads - a.downloads;
      case 'date':
      default:
        return new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime();
    }
  });

  const totalPages = Math.ceil(sortedDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDocuments = sortedDocuments.slice(startIndex, startIndex + itemsPerPage);

  const handleDownload = (document: any) => {
    // Implement download logic here
    console.log('Downloading:', document.name);
  };

  const handlePreview = (document: any) => {
    // Implement preview logic here
    console.log('Previewing:', document.name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Download Center
            </h1>
            <p className="text-lg text-gray-600">
              Find all important forms, documents, and resources here. 
              Access official university documents, application forms, and academic resources.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search for a document..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Category:</span>
              </div>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] h-12 min-w-[150px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <ArrowUpDown className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
              </div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] h-12 min-w-[120px]"
              >
                <option value="date">Date Published</option>
                <option value="name">Name</option>
                <option value="downloads">Most Downloaded</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 pt-4 border-t text-sm text-gray-600">
            Showing {paginatedDocuments.length} of {filteredDocuments.length} documents
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </Card>

        {/* Document Table/List */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Document</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Category</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Date Published</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Size</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Downloads</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedDocuments.map((document, index) => (
                  <tr key={document.id} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                    <td className="py-4 px-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900 truncate">
                            {document.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {document.description}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <File className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{document.fileType}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={getCategoryColor(document.category)}>
                        {document.category}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(document.datePublished)}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">
                      {document.fileSize}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">
                      {document.downloads.toLocaleString()}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePreview(document)}
                          className="text-gray-600 hover:text-[var(--fsu-crimson)]"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleDownload(document)}
                          className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  {/* Page Numbers */}
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className={currentPage === pageNum ? 
                            "bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white" : 
                            ""
                          }
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                    {totalPages > 5 && (
                      <>
                        <span className="text-gray-400">...</span>
                        <Button
                          variant={currentPage === totalPages ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(totalPages)}
                          className={currentPage === totalPages ? 
                            "bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white" : 
                            ""
                          }
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Help Section */}
        <Card className="mt-8 p-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Help Finding a Document?</h3>
            <p className="mb-6 opacity-90">
              Can't find what you're looking for? Our support team can help you locate the right documents or assist with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100">
                Contact Support
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]">
                Request New Document
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DownloadsPage;
