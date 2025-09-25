"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Star,
  Users,
  Trophy,
  Heart,
  Globe,
  ArrowLeft,
  CheckCircle,
  FileText,
  Calendar,
  DollarSign,
  GraduationCap,
  BookOpen,
  ExternalLink,
} from "lucide-react";

export default function ScholarshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scholarships = [
    {
      name: "Merit-Based Excellence Scholarship",
      amount: "Up to 100% Tuition Fee Waiver",
      eligibility: "Students with 90%+ in 12th Grade or equivalent CGPA",
      category: "merit",
      featured: true,
      icon: <Star className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "June 30, 2025",
      beneficiaries: "50+ students annually",
      documentsRequired: [
        "Academic transcripts",
        "Merit certificate",
        "Recommendation letters",
      ],
    },
    {
      name: "Need-Based Financial Aid",
      amount: "Up to 75% Fee Reduction",
      eligibility: "Family income below ₹3 lakhs per annum",
      category: "need",
      featured: false,
      icon: <Users className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "July 15, 2025",
      beneficiaries: "100+ students annually",
      documentsRequired: ["Income certificate", "BPL card", "Bank statements"],
    },
    {
      name: "Sports Excellence Scholarship",
      amount: "Up to 50% Tuition Fee Waiver",
      eligibility: "State/National level sports achievers",
      category: "sports",
      featured: false,
      icon: <Trophy className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "August 1, 2025",
      beneficiaries: "25+ students annually",
      documentsRequired: [
        "Sports certificates",
        "Achievement records",
        "Coach recommendation",
      ],
    },
    {
      name: "Cultural Arts Scholarship",
      amount: "Up to 40% Fee Reduction",
      eligibility: "Exceptional talent in music, dance, drama, or visual arts",
      category: "cultural",
      featured: false,
      icon: <Heart className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "August 1, 2025",
      beneficiaries: "20+ students annually",
      documentsRequired: [
        "Portfolio/Performance video",
        "Awards certificates",
        "Art teacher recommendation",
      ],
    },
    {
      name: "International Student Scholarship",
      amount: "Up to 60% Tuition Fee Waiver",
      eligibility: "International students with excellent academic record",
      category: "international",
      featured: false,
      icon: <Globe className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "May 31, 2025",
      beneficiaries: "15+ students annually",
      documentsRequired: [
        "Academic transcripts",
        "Passport copy",
        "English proficiency scores",
      ],
    },
    {
      name: "Research Excellence Grant",
      amount: "₹50,000 - ₹2,00,000 annually",
      eligibility: "PhD and Master's research students",
      category: "research",
      featured: false,
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
      duration: "Research Duration",
      renewable: true,
      applicationDeadline: "September 15, 2025",
      beneficiaries: "30+ researchers annually",
      documentsRequired: [
        "Research proposal",
        "Supervisor endorsement",
        "Academic transcripts",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Scholarships", count: scholarships.length },
    {
      id: "merit",
      name: "Merit-Based",
      count: scholarships.filter((s) => s.category === "merit").length,
    },
    {
      id: "need",
      name: "Need-Based",
      count: scholarships.filter((s) => s.category === "need").length,
    },
    {
      id: "sports",
      name: "Sports",
      count: scholarships.filter((s) => s.category === "sports").length,
    },
    {
      id: "cultural",
      name: "Cultural Arts",
      count: scholarships.filter((s) => s.category === "cultural").length,
    },
    {
      id: "international",
      name: "International",
      count: scholarships.filter((s) => s.category === "international").length,
    },
    {
      id: "research",
      name: "Research",
      count: scholarships.filter((s) => s.category === "research").length,
    },
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description:
        "Review scholarship criteria and ensure you meet all requirements",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Prepare Documents",
      description: "Gather all required documents and certificates",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Complete online application form before deadline",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Review Process",
      description: "Applications are evaluated by scholarship committee",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const quickLinks = [
    {
      title: "Fee Structure",
      description: "View detailed breakdown of academic fees",
      link: "/admissions/fees",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Admission Requirements",
      description: "Check eligibility criteria for programs",
      link: "/admissions/eligibility",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Apply Online",
      description: "Start your scholarship application",
      link: "/apply",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Contact Financial Aid",
      description: "Get personalized scholarship guidance",
      link: "/contact",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const filteredScholarships =
    selectedCategory === "all"
      ? scholarships
      : scholarships.filter(
          (scholarship) => scholarship.category === selectedCategory
        );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              <Award className="w-4 h-4 mr-2" />
              Financial Support
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scholarships & Financial Aid
              <span className="block text-[var(--fsu-gold)]">
                Making Education Accessible
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Making quality education accessible through comprehensive
              financial support programs. Discover scholarships designed to
              recognize excellence and support deserving students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
                onClick={() => {
                  document
                    .getElementById("scholarship-finder")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Find Scholarships
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

      {/* Featured Scholarship */}
      <section id="scholarship-finder" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
                Featured Scholarship
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our flagship merit-based scholarship program recognizing
                academic excellence
              </p>
            </div>

            {/* Featured Card */}
            {scholarships
              .filter((scholarship) => scholarship.featured)
              .map((scholarship, index) => (
                <div key={index} className="mb-12">
                  <Card className="bg-white shadow-xl border-2 border-[var(--fsu-gold)]/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-[var(--fsu-gold)]/10"></div>

                    <CardContent className="relative p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row items-center gap-6">
                        {/* Icon */}
                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${scholarship.color}`}
                        >
                          {scholarship.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-3">
                            Featured Scholarship
                          </Badge>
                          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--fsu-crimson)] mb-3">
                            {scholarship.name}
                          </h2>
                          <p className="text-base text-gray-600 mb-4 leading-relaxed">
                            {scholarship.eligibility}
                          </p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600">Amount</p>
                              <p className="text-sm font-semibold text-[var(--fsu-crimson)]">
                                {scholarship.amount}
                              </p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600">Duration</p>
                              <p className="text-sm font-semibold text-[var(--fsu-crimson)]">
                                {scholarship.duration}
                              </p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600">Deadline</p>
                              <p className="text-sm font-semibold text-[var(--fsu-crimson)]">
                                {scholarship.applicationDeadline}
                              </p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600">
                                Beneficiaries
                              </p>
                              <p className="text-sm font-semibold text-[var(--fsu-crimson)]">
                                {scholarship.beneficiaries}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex flex-col gap-4">
                          <Button
                            size="lg"
                            className="bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)] font-semibold px-8"
                            asChild
                          >
                            <Link href="/apply">Apply Now</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-4 text-center">
                Browse Scholarships by Category
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
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

            {/* Scholarships Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredScholarships
                .filter((scholarship) => !scholarship.featured)
                .map((scholarship, index) => (
                  <Card
                    key={index}
                    className="h-full border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

                    <CardHeader className="relative text-center pb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg bg-gradient-to-br ${scholarship.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {scholarship.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-[var(--fsu-crimson)] group-hover:text-[var(--fsu-maroon)] transition-colors">
                        {scholarship.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative text-center">
                      <div className="mb-4">
                        <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-2">
                          {scholarship.amount}
                        </Badge>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {scholarship.eligibility}
                        </p>
                      </div>

                      <div className="space-y-2 mb-6 text-xs text-gray-500">
                        <p>
                          <strong>Duration:</strong> {scholarship.duration}
                        </p>
                        <p>
                          <strong>Deadline:</strong>{" "}
                          {scholarship.applicationDeadline}
                        </p>
                        <p>
                          <strong>Beneficiaries:</strong>{" "}
                          {scholarship.beneficiaries}
                        </p>
                      </div>

                      <Button
                        className="w-full bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)] group-hover:bg-[var(--fsu-gold)] group-hover:text-[var(--fsu-crimson)] transition-all duration-300"
                        asChild
                      >
                        <Link href="/apply">Apply Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
                How to Apply
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Follow these simple steps to apply for scholarships and
                financial aid
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationSteps.map((step, index) => (
                <Card
                  key={index}
                  className="text-center p-4 border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors group"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-full flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-[var(--fsu-gold)] mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-base font-semibold text-[var(--fsu-crimson)] mb-2 group-hover:text-[var(--fsu-maroon)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Related Information
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore these additional resources for complete financial planning
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="p-4 border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors group"
              >
                <Link href={link.link} className="block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-[var(--fsu-crimson)] group-hover:text-[var(--fsu-maroon)] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-xs">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[var(--fsu-crimson)] transition-colors" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Financial Assistance?
          </h2>
          <p className="text-lg text-neutral-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Our financial aid counselors are here to help you find the best
            scholarship options and create a comprehensive financial plan for
            your education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/contact">Contact Financial Aid</Link>
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
