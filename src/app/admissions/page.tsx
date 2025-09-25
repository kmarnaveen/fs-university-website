"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  Download,
  DollarSign,
  Building,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  FileText,
  Plus,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AdmissionsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const keyDates = [
    { event: "Applications Open", date: "Oct 1, 2024", status: "completed" },
    { event: "Application Deadline", date: "Jun 15, 2025", status: "upcoming" },
    { event: "Classes Commence", date: "Aug 1, 2025", status: "upcoming" },
  ];

  const applicationSteps = [
    {
      id: 1,
      step: "1",
      title: "Explore Programs",
      description:
        "Discover the wide range of undergraduate, postgraduate, and doctoral programs we offer. Find the perfect course that aligns with your passion and career goals by browsing our detailed program pages.",
      icon: <BookOpen className="w-6 h-6" />,
      action: "Explore Our Programs",
      link: "/programs",
    },
    {
      id: 2,
      step: "2",
      title: "Check Eligibility",
      description:
        "Before you apply, it's important to review the specific academic and admission requirements for your chosen program. This ensures you meet all the necessary criteria for a successful application.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      action: "View Eligibility Criteria",
      link: "/admissions/eligibility",
    },
    {
      id: 3,
      step: "3",
      title: "Submit Online Application",
      description:
        "Complete your application through our secure online portal. Fill in your personal and academic details, and upload the required documents. Our user-friendly form makes the process quick and straightforward.",
      icon: <FileText className="w-6 h-6" />,
      action: "Start Your Application",
      link: "/apply",
    },
    {
      id: 4,
      step: "4",
      title: "Receive Offer Letter",
      description:
        "Once your application is reviewed and approved by our admissions committee, you will receive an official offer letter. This is the final step in securing your place at FS University.",
      icon: <Award className="w-6 h-6" />,
      action: "Contact Admissions",
      link: "/contact",
    },
  ];

  const programLevels = [
    {
      title: "Undergraduate Programs",
      description:
        "Bachelor's degrees across Engineering, Business, Science, Arts, and more",
      duration: "3-4 Years",
      startingFrom: "₹1,50,000/year",
      link: "/programs?level=undergraduate",
      icon: <Building className="w-8 h-8" />,
    },
    {
      title: "Postgraduate Programs",
      description:
        "Master's degrees and specialized programs for career advancement",
      duration: "2-3 Years",
      startingFrom: "₹2,50,000/year",
      link: "/programs?level=postgraduate",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Doctoral (Ph.D.) Programs",
      description:
        "Research-focused programs for academic and industry leadership",
      duration: "3-5 Years",
      startingFrom: "₹1,00,000/year",
      link: "/programs?level=doctoral",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "Diploma Programs",
      description:
        "Specialized certificates and industry-focused skill programs",
      duration: "6 months - 2 Years",
      startingFrom: "₹75,000/year",
      link: "/programs?level=diploma",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  const faqs = [
    {
      question: "What is the application deadline for 2025 admissions?",
      answer:
        "The application deadline is June 15, 2025. We recommend applying early to ensure your application is processed on time.",
    },
    {
      question: "Can I apply for multiple programs?",
      answer:
        "Yes, you can apply for up to 3 programs in a single application. You'll need to indicate your preference order.",
    },
    {
      question: "What documents do I need for my application?",
      answer:
        "Required documents include academic transcripts, ID proof, passport-size photographs, entrance exam scores (if applicable), and recommendation letters for postgraduate programs.",
    },
    {
      question: "Is there an application fee?",
      answer:
        "Yes, the application fee is ₹1,500 for domestic students and $50 for international students. This fee is non-refundable.",
    },
    {
      question: "When will I receive my admission decision?",
      answer:
        "Admission decisions are typically communicated within 4-6 weeks of application submission, provided all required documents are received.",
    },
    {
      question: "Do you offer scholarships for international students?",
      answer:
        "Yes, we offer various scholarships including merit-based awards, need-based aid, and special scholarships for international students from specific regions.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              <Building className="w-4 h-4 mr-2" />
              Admissions 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Future Starts
              <span className="block text-[var(--fsu-gold)]">Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Join thousands of students who have transformed their dreams into
              reality at FS University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
                asChild
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                onClick={() => {
                  document
                    .querySelector("#application-process")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Application Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process - Step-by-Step Guide */}
      <section
        id="application-process"
        className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--fsu-crimson)]/10 rounded-full text-[var(--fsu-crimson)] text-sm font-semibold mb-6">
              Application Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fsu-crimson)] mb-8 tracking-tight">
              Your Path to Admission
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              A streamlined, four-step process designed to make your application
              journey simple and transparent.
            </p>
          </div>

          {/* Professional Progress Indicator */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="flex items-center justify-between relative">
              {/* Background Progress Line */}
              <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200" />
              {/* Active Progress Line */}
              <div
                className="absolute top-6 left-0 h-[2px] bg-[var(--fsu-crimson)] transition-all duration-700 ease-out"
                style={{
                  width: `${
                    ((currentStep - 1) / (applicationSteps.length - 1)) * 100
                  }%`,
                }}
              />

              {applicationSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center z-10"
                >
                  <motion.div
                    className="cursor-pointer group"
                    onClick={() => setCurrentStep(step.id)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-500 shadow-sm mb-4
                      ${
                        currentStep >= step.id
                          ? "bg-[var(--fsu-crimson)] text-white border-[var(--fsu-crimson)] shadow-[var(--fsu-crimson)]/20"
                          : "bg-white text-gray-400 border-gray-300 group-hover:border-[var(--fsu-crimson)] group-hover:text-[var(--fsu-crimson)]"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-semibold">
                          {step.step}
                        </span>
                      )}
                    </div>
                    <div className="text-center max-w-[120px]">
                      <span
                        className={`text-sm font-medium transition-all duration-300 leading-tight block ${
                          currentStep === step.id
                            ? "text-[var(--fsu-crimson)]"
                            : "text-gray-500 group-hover:text-[var(--fsu-crimson)]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Active Step Display */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {applicationSteps
                .filter((step) => step.id === currentStep)
                .map((step) => (
                  <div
                    key={step.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="p-10 lg:p-12">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white shadow-lg">
                            <div className="text-2xl">{step.icon}</div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 text-center lg:text-left">
                          <div className="inline-flex items-center px-3 py-1 bg-[var(--fsu-gold)]/10 rounded-full text-[var(--fsu-crimson)] text-sm font-semibold mb-4">
                            Step {step.step} of {applicationSteps.length}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-[var(--fsu-crimson)] mb-4 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                            {step.description}
                          </p>

                          {/* Professional Action Button */}
                          <Button
                            size="lg"
                            className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                            asChild
                          >
                            <Link
                              href={step.link}
                              className="inline-flex items-center gap-2"
                            >
                              {step.action}
                              <motion.span className="group-hover:translate-x-1 transition-transform duration-200">
                                →
                              </motion.span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Minimalist Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-16">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`p-2 rounded-full transition-all duration-200 ${
                currentStep === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:text-[var(--fsu-crimson)] hover:bg-gray-100"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex space-x-2">
              {applicationSteps.map((step) => (
                <button
                  key={step.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentStep === step.id
                      ? "bg-[var(--fsu-crimson)] w-8"
                      : "bg-gray-300 hover:bg-[var(--fsu-gold)]"
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentStep(
                  Math.min(applicationSteps.length, currentStep + 1)
                )
              }
              disabled={currentStep === applicationSteps.length}
              className={`p-2 rounded-full transition-all duration-200 ${
                currentStep === applicationSteps.length
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:text-[var(--fsu-crimson)] hover:bg-gray-100"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Program Levels - Guided Pathways */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Find Your Program
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of programs designed for students
              at every academic level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {programLevels.map((program, index) => (
              <Card
                key={index}
                className="relative p-10 hover:shadow-2xl transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-[var(--fsu-gold)]/30"
              >
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

                <div className="relative flex items-start gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--fsu-crimson)] mb-4 group-hover:text-[var(--fsu-maroon)] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-sm px-4 py-2">
                        {program.duration}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] text-sm px-4 py-2"
                      >
                        Starting from {program.startingFrom}
                      </Badge>
                    </div>
                    <Button
                      size="lg"
                      className={`font-semibold transition-all duration-300 ${
                        index === 0 || index === 1
                          ? "bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white shadow-lg hover:shadow-xl"
                          : "bg-transparent border-2 border-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-gold)] hover:text-[var(--fsu-crimson)]"
                      }`}
                      asChild
                    >
                      <Link href={program.link}>
                        Explore {program.title.split(" ")[0]} Programs →
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Information Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Essential Information
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about fees, eligibility, and financial
              support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="relative p-10 hover:shadow-2xl transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-[var(--fsu-gold)]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-4 group-hover:text-[var(--fsu-maroon)] transition-colors">
                  Eligibility Criteria
                </h3>
                <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                  Check detailed academic and admission requirements for all
                  programs.
                </p>
                <Button
                  size="lg"
                  className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/admissions/eligibility">
                    View Requirements →
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="relative p-10 hover:shadow-2xl transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-[var(--fsu-gold)]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--fsu-gold)] to-[#D4A017] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <DollarSign className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-4 group-hover:text-[var(--fsu-maroon)] transition-colors">
                  Fee Structure
                </h3>
                <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                  Get transparent breakdown of tuition, hostel, and other fees.
                </p>
                <Button
                  size="lg"
                  className="bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/admissions/fees">View Fee Details →</Link>
                </Button>
              </div>
            </Card>

            <Card className="relative p-10 hover:shadow-2xl transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-[var(--fsu-gold)]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-4 group-hover:text-[var(--fsu-maroon)] transition-colors">
                  Scholarships
                </h3>
                <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                  Explore merit-based and need-based financial aid
                  opportunities.
                </p>
                <Button
                  size="lg"
                  className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/admissions/scholarships">
                    Explore Scholarships →
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Get answers to the most commonly asked questions about admissions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-red-50/50 transition-colors">
                      <h3 className="text-xl font-semibold text-[var(--fsu-crimson)] pr-4">
                        {faq.question}
                      </h3>
                      <div className="w-8 h-8 text-[var(--fsu-crimson)] transition-transform group-open:rotate-45 flex items-center justify-center">
                        <Plus className="w-6 h-6" />
                      </div>
                    </summary>
                    <div className="px-8 pb-8">
                      <p className="text-neutral-600 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our admissions team is here to help you every step of the way. Start
            your application today or get in touch for personalized guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold text-xl px-12 py-6"
              asChild
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-xl px-12 py-6"
              asChild
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
