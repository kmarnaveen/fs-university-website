"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
} from "lucide-react";

export default function ScholarshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scholarships = [
    {
      name: "Merit-Based Excellence Scholarship",
      amount: "Up to 100% Tuition Fee Waiver",
      eligibility: "Students with 90%+ in 12th Grade or equivalent CGPA",
      category: "merit",
      icon: <Star className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "June 30, 2025",
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
      icon: <Users className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "July 15, 2025",
      documentsRequired: ["Income certificate", "BPL card", "Bank statements"],
    },
    {
      name: "Sports Excellence Scholarship",
      amount: "Up to 50% Tuition Fee Waiver",
      eligibility: "State/National level sports achievers",
      category: "sports",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "August 1, 2025",
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
      icon: <Heart className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "August 1, 2025",
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
      icon: <Globe className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "May 31, 2025",
      documentsRequired: [
        "Academic transcripts",
        "Passport copy",
        "English proficiency scores",
      ],
    },
    {
      name: "Women in Engineering Scholarship",
      amount: "₹50,000 per year",
      eligibility: "Female students pursuing Engineering programs",
      category: "diversity",
      icon: <Award className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
      duration: "Full Course Duration",
      renewable: true,
      applicationDeadline: "July 20, 2025",
      documentsRequired: [
        "Engineering admission proof",
        "Academic records",
        "Essay on women in STEM",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Scholarships", count: scholarships.length },
    {
      id: "merit",
      label: "Merit-Based",
      count: scholarships.filter((s) => s.category === "merit").length,
    },
    {
      id: "need",
      label: "Need-Based",
      count: scholarships.filter((s) => s.category === "need").length,
    },
    {
      id: "sports",
      label: "Sports",
      count: scholarships.filter((s) => s.category === "sports").length,
    },
    {
      id: "cultural",
      label: "Cultural Arts",
      count: scholarships.filter((s) => s.category === "cultural").length,
    },
    {
      id: "international",
      label: "International",
      count: scholarships.filter((s) => s.category === "international").length,
    },
    {
      id: "diversity",
      label: "Diversity",
      count: scholarships.filter((s) => s.category === "diversity").length,
    },
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Review Eligibility",
      description:
        "Check the specific requirements for your chosen scholarship program",
    },
    {
      step: "2",
      title: "Prepare Documents",
      description:
        "Gather all required documents and ensure they are properly certified",
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Complete the online application form before the deadline",
    },
    {
      step: "4",
      title: "Await Decision",
      description: "Application review takes 4-6 weeks from the deadline",
    },
  ];

  const filteredScholarships =
    selectedCategory === "all"
      ? scholarships
      : scholarships.filter(
          (scholarship) => scholarship.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              Financial Support
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scholarships & Financial Aid
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Making quality education accessible through comprehensive
              financial support programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] hover:bg-[var(--fsu-gold)]/90 text-black font-semibold"
                onClick={() => {
                  document
                    .getElementById("scholarship-finder")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
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

      {/* Filter Section */}
      <section id="scholarship-finder" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
              Find Your Perfect Scholarship
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Filter by category to discover scholarships that match your
              profile
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                      : "bg-white text-[var(--fsu-crimson)] border-2 border-gray-200 hover:border-[var(--fsu-crimson)]"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Scholarships Grid */}
          <div className="max-w-6xl mx-auto">
            <motion.div layout className="grid gap-8 md:grid-cols-2">
              {filteredScholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-all duration-300 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

                    <CardContent className="relative p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${scholarship.color}`}
                        >
                          {scholarship.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2 group-hover:text-[var(--fsu-maroon)] transition-colors">
                            {scholarship.name}
                          </h3>
                          <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] font-semibold">
                            {scholarship.amount}
                          </Badge>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-[var(--fsu-crimson)] mb-2">
                            Eligibility:
                          </h4>
                          <p className="text-gray-600">
                            {scholarship.eligibility}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-gray-700">
                              Duration:
                            </span>
                            <p className="text-gray-600">
                              {scholarship.duration}
                            </p>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700">
                              Renewable:
                            </span>
                            <p className="text-gray-600">
                              {scholarship.renewable ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>

                        <div>
                          <span className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4" />
                            Application Deadline:
                          </span>
                          <p className="text-[var(--fsu-crimson)] font-semibold">
                            {scholarship.applicationDeadline}
                          </p>
                        </div>

                        <div>
                          <span className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                            <FileText className="w-4 h-4" />
                            Required Documents:
                          </span>
                          <ul className="space-y-1">
                            {scholarship.documentsRequired.map(
                              (doc, docIndex) => (
                                <li
                                  key={docIndex}
                                  className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  {doc}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold"
                        asChild
                      >
                        <Link href="/apply">Apply for Scholarship</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simple steps to secure your scholarship
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-8 right-8 h-0.5 bg-gray-200 hidden md:block"></div>
              <div className="absolute top-6 left-8 w-3/4 h-0.5 bg-[var(--fsu-crimson)] hidden md:block"></div>

              <div className="grid md:grid-cols-4 gap-8">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-12 h-12 bg-[var(--fsu-crimson)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-[var(--fsu-crimson)] text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                Important Guidelines
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Key information for scholarship applicants
              </p>
            </div>

            <Card className="border-2 border-gray-100 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-[var(--fsu-crimson)] text-lg mb-4">
                    Application Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      All documents must be certified copies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      Applications must be submitted online
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      Late applications will not be considered
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      Interview may be required for final selection
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[var(--fsu-crimson)] text-lg mb-4">
                    Renewal Conditions
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      Maintain minimum 70% academic performance
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      No disciplinary actions or violations
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      Continue meeting original eligibility criteria
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      Submit annual renewal application
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply for a Scholarship?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let financial constraints limit your dreams. Apply for our
            scholarships and start your journey towards academic excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/apply">Start Application</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/contact">Get Assistance</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
