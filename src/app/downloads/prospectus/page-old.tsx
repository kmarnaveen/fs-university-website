"use client";

import { useState } from "react";
import      pages: "32 pages",
      format: "PDF",
      downloadUrl: "/downloads/Business-Programs-2025.pdf",
      featured: false,
      category: "programs",
      icon: <Building className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      title: "Campus Life & Facilities Guide",
      description:
        "Student hostels, sports facilities, events calendar and campus amenities overview",
      size: "15.2 MB",
      pages: "28 pages",
      format: "PDF",
      downloadUrl: "/downloads/Campus-Life-2025.pdf",
      featured: false,
      category: "campus",
      icon: <Users className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
    {
      title: "Admission Process Guide",
      description:
        "Step-by-step admission process, eligibility criteria, important dates, and fee structure",
      size: "5.4 MB",
      pages: "16 pages",
      format: "PDF",
      downloadUrl: "/downloads/Admission-Guide-2025.pdf",
      featured: false,
      category: "admission",
      icon: <FileCheck className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      title: "Research & Innovation Portfolio",
      description:
        "R&D programs, research opportunities, ongoing projects, and publication guidance",
      size: "9.1 MB",
      pages: "24 pages",
      format: "PDF",
      downloadUrl: "/downloads/Research-Portfolio-2025.pdf",
      featured: false,
      category: "research",
      icon: <Eye className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
  ];

  const categories = [
    { id: "all", name: "All Downloads", count: prospectusFiles.length },
    { id: "general", name: "General Info", count: prospectusFiles.filter(f => f.category === "general").length },
    { id: "programs", name: "Programs", count: prospectusFiles.filter(f => f.category === "programs").length },
    { id: "admission", name: "Admissions", count: prospectusFiles.filter(f => f.category === "admission").length },
    { id: "campus", name: "Campus Life", count: prospectusFiles.filter(f => f.category === "campus").length },
    { id: "research", name: "Research", count: prospectusFiles.filter(f => f.category === "research").length },
  ];rom "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  BookOpen,
  GraduationCap,
  Users,
  Building,
  Calendar,
  ArrowLeft,
  ExternalLink,
  Eye,
  FileCheck,
} from "lucide-react";

export default function ProspectusPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const prospectusFiles = [
    {
      title: "Complete University Prospectus 2025",
      description:
        "Comprehensive guide covering all programs, facilities, admission process, and campus life",
      size: "25.6 MB",
      pages: "120 pages",
      format: "PDF",
      downloadUrl: "/downloads/FS-University-Prospectus-2025.pdf",
      featured: true,
      category: "general",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      title: "Engineering Programs Brochure",
      description:
        "Detailed information about all engineering courses, faculty, labs, and placement statistics",
      size: "12.3 MB",
      pages: "45 pages",
      format: "PDF",
      downloadUrl: "/downloads/Engineering-Programs-2025.pdf",
      featured: false,
      category: "programs",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
    {
      title: "Business & Management Programs",
      description:
        "MBA, BBA and other business programs with curriculum details and industry partnerships",
      size: "8.7 MB",
      pages: "32 pages",
      format: "PDF",
      downloadUrl: "/downloads/Business-Programs-2025.pdf",
      featured: false,
      icon: <Users className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      title: "Campus Life & Facilities Guide",
      description:
        "Student hostels, sports facilities, clubs, events, and campus amenities overview",
      size: "15.2 MB",
      pages: "38 pages",
      format: "PDF",
      downloadUrl: "/downloads/Campus-Life-Guide-2025.pdf",
      featured: false,
      icon: <Building className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
    {
      title: "Admission Process Guide",
      description:
        "Step-by-step admission process, eligibility criteria, important dates, and fee structure",
      size: "6.4 MB",
      pages: "28 pages",
      format: "PDF",
      downloadUrl: "/downloads/Admission-Guide-2025.pdf",
      featured: false,
      icon: <Calendar className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      title: "Research & Innovation Portfolio",
      description:
        "Ph.D. programs, research opportunities, ongoing projects, and publication guidelines",
      size: "11.8 MB",
      pages: "42 pages",
      format: "PDF",
      downloadUrl: "/downloads/Research-Portfolio-2025.pdf",
      featured: false,
      icon: <FileText className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
  ];

  const quickLinks = [
    {
      title: "Admission Requirements",
      description: "Check eligibility criteria for your program",
      link: "/admissions/eligibility",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Fee Structure",
      description: "Detailed breakdown of academic fees",
      link: "/admissions/fees",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Apply Online",
      description: "Start your application process",
      link: "/apply",
      icon: <ExternalLink className="w-6 h-6" />,
    },
    {
      title: "Contact Admissions",
      description: "Get personalized guidance",
      link: "/contact",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white pt-20 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6">
              <Download className="w-4 h-4 mr-2" />
              University Prospectus
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Download Prospectus
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Get comprehensive information about our programs, facilities, and
              admission process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] hover:bg-[var(--fsu-gold)]/90 text-black font-semibold"
                asChild
              >
                <Link href="#prospectus-downloads">Browse Downloads</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                asChild
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Download */}
      <section id="prospectus-downloads" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            {prospectusFiles
              .filter((file) => file.featured)
              .map((file, index) => (
                <div key={index}>
                  <Card className="bg-white shadow-xl border-2 border-[var(--fsu-gold)]/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-[var(--fsu-gold)]/10"></div>

                    <CardContent className="relative p-12">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Icon */}
                        <div
                          className={`w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br ${file.color}`}
                        >
                          {file.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <div className="inline-flex items-center px-3 py-1 bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] rounded-full text-sm font-semibold mb-4">
                            Featured Download
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
                            {file.title}
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {file.description}
                          </p>

                          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                            <Badge className="bg-gray-100 text-gray-700 text-sm px-4 py-2">
                              {file.format}
                            </Badge>
                            <Badge className="bg-gray-100 text-gray-700 text-sm px-4 py-2">
                              {file.size}
                            </Badge>
                            <Badge className="bg-gray-100 text-gray-700 text-sm px-4 py-2">
                              {file.pages}
                            </Badge>
                          </div>

                          <Button
                            size="lg"
                            className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                            asChild
                          >
                            <a href={file.downloadUrl} download>
                              <Download className="w-5 h-5 mr-2" />
                              Download Complete Prospectus
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>

          {/* Other Downloads */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                Program-Specific Brochures
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Download detailed information about specific programs and
                facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {prospectusFiles
                .filter((file) => !file.featured)
                .map((file, index) => (
                  <div key={index}>
                    <Card className="h-full border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-all duration-300 group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

                      <CardHeader className="relative text-center pb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg bg-gradient-to-br ${file.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {file.icon}
                        </div>
                        <CardTitle className="text-lg text-[var(--fsu-crimson)] group-hover:text-[var(--fsu-maroon)] transition-colors leading-tight">
                          {file.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="relative text-center">
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {file.description}
                        </p>

                        <div className="flex justify-center gap-2 mb-6">
                          <Badge className="bg-gray-100 text-gray-700 text-xs px-3 py-1">
                            {file.format}
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-700 text-xs px-3 py-1">
                            {file.size}
                          </Badge>
                        </div>

                        <Button
                          className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold"
                          asChild
                        >
                          <a href={file.downloadUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore these additional resources for detailed information
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors group"
              >
                <Link href={link.link} className="block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[var(--fsu-crimson)] group-hover:text-[var(--fsu-maroon)] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[var(--fsu-crimson)] transition-colors" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our admissions team is here to help you with any questions about our
            programs or the application process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/apply">Start Application</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
