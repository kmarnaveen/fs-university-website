"use client";

import { useState } from "react";
import Link from "next/link";
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
    {
      id: "general",
      name: "General Info",
      count: prospectusFiles.filter((f) => f.category === "general").length,
    },
    {
      id: "programs",
      name: "Programs",
      count: prospectusFiles.filter((f) => f.category === "programs").length,
    },
    {
      id: "admission",
      name: "Admissions",
      count: prospectusFiles.filter((f) => f.category === "admission").length,
    },
    {
      id: "campus",
      name: "Campus Life",
      count: prospectusFiles.filter((f) => f.category === "campus").length,
    },
    {
      id: "research",
      name: "Research",
      count: prospectusFiles.filter((f) => f.category === "research").length,
    },
  ];

  const quickLinks = [
    {
      title: "Admission Requirements",
      description: "Check eligibility criteria for your program",
      link: "/admissions/eligibility",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      title: "Fee Structure",
      description: "Current breakdown of academic fees and costs",
      link: "/admissions/fees",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Apply Online",
      description: "Start your application process",
      link: "/apply",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Contact Admissions",
      description: "Get personalized guidance",
      link: "/contact",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const filteredFiles =
    selectedCategory === "all"
      ? prospectusFiles
      : prospectusFiles.filter((file) => file.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              <Download className="w-4 h-4 mr-2" />
              University Prospectus
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Download Prospectus
              <span className="block text-[var(--fsu-gold)]">& Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Get comprehensive information about our programs, facilities, and
              admission process. Access detailed brochures and guides to help
              you make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
                onClick={() => {
                  document
                    .getElementById("prospectus-downloads")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse Downloads
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
      <section id="prospectus-downloads" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                Featured Download
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Start with our comprehensive university prospectus containing
                everything you need to know
              </p>
            </div>

            {/* Featured Card */}
            {prospectusFiles
              .filter((file) => file.featured)
              .map((file, index) => (
                <div key={index} className="mb-16">
                  <Card className="bg-white shadow-xl border-2 border-[var(--fsu-gold)]/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-[var(--fsu-gold)]/10"></div>

                    <CardContent className="relative p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Icon */}
                        <div
                          className={`w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br ${file.color}`}
                        >
                          {file.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
                            Featured Download
                          </Badge>
                          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
                            {file.title}
                          </h2>
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {file.description}
                          </p>

                          <div className="flex flex-wrap gap-4 mb-6">
                            <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              <FileText className="w-4 h-4 mr-2" />
                              {file.format}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {file.pages}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              <Download className="w-4 h-4 mr-2" />
                              {file.size}
                            </span>
                          </div>
                        </div>

                        {/* Download Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            size="lg"
                            className="bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)] font-semibold px-8"
                            asChild
                          >
                            <a href={file.downloadUrl} download>
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    className={`${
                      selectedCategory === category.id
                        ? "bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)]"
                        : "border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                    <Badge className="ml-2 bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Other Downloads Grid */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-8 text-center">
                Additional Resources
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFiles
                  .filter((file) => !file.featured)
                  .map((file, index) => (
                    <Card
                      key={index}
                      className="h-full border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-all duration-300 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

                      <CardHeader className="relative text-center pb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg bg-gradient-to-br ${file.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {file.icon}
                        </div>
                        <CardTitle className="text-lg font-bold text-[var(--fsu-crimson)] group-hover:text-[var(--fsu-maroon)] transition-colors">
                          {file.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="relative text-center">
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {file.description}
                        </p>

                        <div className="flex justify-center gap-2 mb-6 text-xs text-gray-500">
                          <span>{file.format}</span>
                          <span>•</span>
                          <span>{file.pages}</span>
                          <span>•</span>
                          <span>{file.size}</span>
                        </div>

                        <Button
                          className="w-full bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)] group-hover:bg-[var(--fsu-gold)] group-hover:text-[var(--fsu-crimson)] transition-all duration-300"
                          asChild
                        >
                          <a href={file.downloadUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
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

      {/* Contact CTA */}
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
    </div>
  );
}
