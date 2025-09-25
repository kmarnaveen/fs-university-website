"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  CheckCircle,
  GraduationCap,
  BookOpen,
  Award,
  ArrowLeft,
  ChevronDown,
  ClipboardCheck,
} from "lucide-react";

export default function EligibilityPage() {
  const [selectedLevel, setSelectedLevel] = useState<
    keyof typeof programLevels | ""
  >("");
  const [selectedProgram, setSelectedProgram] = useState("");

  const programLevels = {
    undergraduate: ["B.Tech", "B.Sc", "BBA", "B.Com", "BA"],
    postgraduate: ["M.Tech", "MBA", "M.Sc", "M.Com", "MA"],
    doctoral: ["Ph.D. Engineering", "Ph.D. Science", "Ph.D. Management"],
  } as const;

  const eligibilityData = {
    "B.Tech": {
      "Academic Qualification": "10+2 with Physics, Chemistry, Mathematics",
      "Minimum Marks": "50% aggregate in 10+2",
      "Entrance Exam": "JEE Main / State CET / University Entrance Test",
      "Age Limit": "17-25 years at the time of admission",
    },
    "B.Sc": {
      "Academic Qualification": "10+2 with Science subjects",
      "Minimum Marks": "45% aggregate in 10+2",
      "Entrance Exam": "University Entrance Test",
      "Age Limit": "17-25 years at the time of admission",
    },
    BBA: {
      "Academic Qualification": "10+2 in any stream",
      "Minimum Marks": "50% aggregate in 10+2",
      "Entrance Exam": "University Entrance Test / Personal Interview",
      "Age Limit": "17-25 years at the time of admission",
    },
    MBA: {
      "Academic Qualification": "Bachelor's degree in any discipline",
      "Minimum Marks": "50% aggregate in graduation",
      "Entrance Exam": "CAT / XAT / GMAT / University Entrance Test",
      "Work Experience": "Preferred but not mandatory",
    },
    "M.Tech": {
      "Academic Qualification": "B.Tech/B.E. in relevant field",
      "Minimum Marks": "60% aggregate in graduation",
      "Entrance Exam": "GATE / University Entrance Test",
      Specialization: "Must match with undergraduate specialization",
    },
    "M.Sc": {
      "Academic Qualification": "Bachelor's degree in relevant field",
      "Minimum Marks": "55% aggregate in graduation",
      "Entrance Exam": "University Entrance Test",
      Specialization: "Must match with undergraduate field",
    },
    "Ph.D. Engineering": {
      "Academic Qualification": "M.Tech/M.E. in relevant field",
      "Minimum Marks": "60% aggregate in post-graduation",
      "Entrance Exam": "UGC NET / GATE / University Research Entrance Test",
      "Research Proposal": "Required",
    },
    "Ph.D. Science": {
      "Academic Qualification": "M.Sc in relevant field",
      "Minimum Marks": "55% aggregate in post-graduation",
      "Entrance Exam": "UGC NET / University Research Entrance Test",
      "Research Proposal": "Required",
    },
  } as const;

  type EligibilityProgram = keyof typeof eligibilityData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6">
              <ClipboardCheck className="w-4 h-4 mr-2" />
              Admission Requirements
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Eligibility Criteria
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Find detailed academic and admission requirements for all our
              programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] hover:bg-[var(--fsu-gold)]/90 text-black font-semibold"
                onClick={() => {
                  document.getElementById("program-finder")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Check Requirements
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

      {/* Main Content */}
      <section id="program-finder" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Finder */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-white shadow-lg border-2 border-gray-100">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-[var(--fsu-crimson)] mb-4">
                  Find Your Program Requirements
                </CardTitle>
                <p className="text-gray-600 text-lg">
                  Select your desired program level and course to view specific
                  eligibility criteria
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Level Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Program Level
                  </label>
                  <div className="relative">
                    <select
                      value={selectedLevel}
                      onChange={(e) => {
                        setSelectedLevel(
                          e.target.value as keyof typeof programLevels
                        );
                        setSelectedProgram("");
                      }}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-[var(--fsu-crimson)] focus:ring-0 appearance-none cursor-pointer"
                    >
                      <option value="">Select Program Level</option>
                      <option value="undergraduate">
                        Undergraduate Programs
                      </option>
                      <option value="postgraduate">
                        Postgraduate Programs
                      </option>
                      <option value="doctoral">Doctoral Programs</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Program Selection */}
                {selectedLevel && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Specific Program
                    </label>
                    <div className="relative">
                      <select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-[var(--fsu-crimson)] focus:ring-0 appearance-none cursor-pointer"
                      >
                        <option value="">Select Program</option>
                        {programLevels[selectedLevel].map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Eligibility Details */}
          {selectedProgram && selectedProgram in eligibilityData && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-white shadow-lg border-2 border-gray-100">
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-[var(--fsu-crimson)]/10 rounded-full text-[var(--fsu-crimson)] text-sm font-semibold mb-4">
                    Eligibility Requirements
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-[var(--fsu-crimson)] mb-4">
                    {selectedProgram} Program
                  </CardTitle>
                  <p className="text-gray-600 text-lg">
                    Complete eligibility criteria for admission
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {Object.entries(
                      eligibilityData[selectedProgram as EligibilityProgram]
                    ).map(([requirement, value], index) => (
                      <motion.div
                        key={requirement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[var(--fsu-crimson)] text-lg mb-2">
                            {requirement}
                          </h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            {value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-gray-100">
                    <Button
                      size="lg"
                      className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold px-8 py-3"
                      asChild
                    >
                      <Link href="/apply">Apply Now</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white font-semibold px-8 py-3"
                      asChild
                    >
                      <Link href="/programs">Explore Programs</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* General Information */}
          {!selectedProgram && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                  General Admission Guidelines
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Important information for all prospective students
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl flex items-center justify-center text-white mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-4">
                    Document Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Academic transcripts and certificates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Entrance exam scorecards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Identity and address proof
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Passport-size photographs
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--fsu-gold)] to-[#D4A017] rounded-2xl flex items-center justify-center text-white mb-6">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-4">
                    Special Considerations
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Reservation policies as per government norms
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Sports and cultural achievements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Military service recognition
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      NRI and international student criteria
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Need More Information?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/admissions/fees">View Fee Structure</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/admissions/scholarships">Explore Scholarships</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
