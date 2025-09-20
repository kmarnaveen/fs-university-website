"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle,
  DollarSign,
  GraduationCap,
  Calculator,
  Star,
  BookOpen,
  Users,
} from "lucide-react";

export default function EligibilityFeesScholarships() {
  const [activeTab, setActiveTab] = useState("eligibility");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedFeeProgram, setSelectedFeeProgram] = useState("");

  const tabs = [
    {
      id: "eligibility",
      label: "Eligibility Criteria",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      id: "fees",
      label: "Fee Structure",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: "scholarships",
      label: "Scholarships",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const programLevels = {
    undergraduate: ["B.Tech", "B.Sc", "BBA", "B.Com", "BA"],
    postgraduate: ["M.Tech", "MBA", "M.Sc", "M.Com", "MA"],
    doctoral: ["Ph.D. Engineering", "Ph.D. Science", "Ph.D. Management"],
  };

  const eligibilityData = {
    "B.Tech": {
      "Academic Qualification": "10+2 with Physics, Chemistry, Mathematics",
      "Minimum Marks": "50% aggregate in 10+2",
      "Entrance Exam": "JEE Main / State CET / University Entrance Test",
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
  };

  const feeStructure = {
    "B.Tech": {
      "Tuition Fee (Per Semester)": "₹75,000",
      "Hostel & Mess Fee (Optional)": "₹45,000",
      "Examination Fee": "₹5,000",
      "Security Deposit (Refundable)": "₹25,000",
      "Total Annual Fee": "₹1,50,000 + Hostel",
    },
    MBA: {
      "Tuition Fee (Per Semester)": "₹1,25,000",
      "Hostel & Mess Fee (Optional)": "₹50,000",
      "Examination Fee": "₹8,000",
      "Security Deposit (Refundable)": "₹30,000",
      "Total Annual Fee": "₹2,50,000 + Hostel",
    },
    "M.Tech": {
      "Tuition Fee (Per Semester)": "₹85,000",
      "Hostel & Mess Fee (Optional)": "₹45,000",
      "Examination Fee": "₹6,000",
      "Security Deposit (Refundable)": "₹25,000",
      "Total Annual Fee": "₹1,70,000 + Hostel",
    },
  };

  const scholarships = [
    {
      name: "Merit-Based Scholarship",
      amount: "Up to 100% Tuition Fee Waiver",
      eligibility: "For students with 90%+ in 12th Grade",
      icon: <Star className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      name: "Need-Based Financial Aid",
      amount: "Up to 75% Fee Reduction",
      eligibility: "For students from economically weaker sections",
      icon: <Users className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
    {
      name: "Sports Excellence Scholarship",
      amount: "Up to 50% Tuition Fee Waiver",
      eligibility: "For state/national level sports achievers",
      icon: <Award className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      name: "Academic Excellence Scholarship",
      amount: "₹50,000 per year",
      eligibility: "For top 10% students in entrance exams",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
    {
      name: "Research Scholar Grant",
      amount: "₹75,000 per year + Research Support",
      eligibility: "For Ph.D. and research-oriented programs",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]",
    },
    {
      name: "International Student Scholarship",
      amount: "Up to 30% Fee Reduction",
      eligibility: "For international students with academic excellence",
      icon: <Star className="w-8 h-8" />,
      color: "from-[var(--fsu-gold)] to-[#D4A017]",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--fsu-crimson)]/10 rounded-full text-[var(--fsu-crimson)] text-sm font-semibold mb-6">
            Complete Information
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fsu-crimson)] mb-8 tracking-tight">
            Fees, Scholarships & Eligibility
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            All the information you need to plan your academic journey with us.
          </p>
        </div>

        {/* Sticky Tabbed Navigation */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 mb-12">
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                      : "text-gray-600 hover:text-[var(--fsu-crimson)] hover:bg-white"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Eligibility Criteria Tab */}
            {activeTab === "eligibility" && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
                    Check Your Eligibility
                  </h2>
                  <p className="text-lg text-gray-600">
                    Select your desired program to view specific admission
                    requirements
                  </p>
                </div>

                {/* Interactive Finder */}
                <Card className="mb-8 border-2 border-[var(--fsu-gold)]/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Step 1: Select Program Level
                        </label>
                        <select
                          value={selectedLevel}
                          onChange={(e) => {
                            setSelectedLevel(e.target.value);
                            setSelectedProgram("");
                          }}
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                        >
                          <option value="">Choose Program Level</option>
                          <option value="undergraduate">Undergraduate</option>
                          <option value="postgraduate">Postgraduate</option>
                          <option value="doctoral">Doctoral (Ph.D.)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Step 2: Select Program
                        </label>
                        <select
                          value={selectedProgram}
                          onChange={(e) => setSelectedProgram(e.target.value)}
                          disabled={!selectedLevel}
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent disabled:bg-gray-100"
                        >
                          <option value="">Choose Program</option>
                          {selectedLevel &&
                            programLevels[selectedLevel]?.map((program) => (
                              <option key={program} value={program}>
                                {program}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Display */}
                {selectedProgram && eligibilityData[selectedProgram] && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-2 border-green-200 bg-green-50/30">
                      <CardHeader>
                        <CardTitle className="text-2xl text-[var(--fsu-crimson)] flex items-center gap-2">
                          <CheckCircle className="text-green-500" />
                          Eligibility Requirements for {selectedProgram}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                  Requirement
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                  Details
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(
                                eligibilityData[selectedProgram]
                              ).map(([req, detail]) => (
                                <tr
                                  key={req}
                                  className="border-b border-gray-100"
                                >
                                  <td className="py-3 px-4 font-medium text-gray-800">
                                    {req}
                                  </td>
                                  <td className="py-3 px-4 text-gray-600">
                                    {detail}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            )}

            {/* Fee Structure Tab */}
            {activeTab === "fees" && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
                    Transparent Fee Structure
                  </h2>
                  <p className="text-lg text-gray-600">
                    Clear breakdown of all costs with no hidden charges
                  </p>
                </div>

                {/* Program Filter */}
                <Card className="mb-8 border-2 border-[var(--fsu-gold)]/20">
                  <CardContent className="p-6">
                    <div className="max-w-md mx-auto">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Select Program to View Fees
                      </label>
                      <select
                        value={selectedFeeProgram}
                        onChange={(e) => setSelectedFeeProgram(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                      >
                        <option value="">Choose Program</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value="M.Tech">M.Tech</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>

                {/* Fee Breakdown */}
                {selectedFeeProgram && feeStructure[selectedFeeProgram] && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-2 border-blue-200 bg-blue-50/30">
                      <CardHeader>
                        <CardTitle className="text-2xl text-[var(--fsu-crimson)] flex items-center gap-2">
                          <Calculator className="text-blue-500" />
                          Fee Structure for {selectedFeeProgram}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                  Fee Component
                                </th>
                                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                                  Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(
                                feeStructure[selectedFeeProgram]
                              ).map(([component, amount]) => (
                                <tr
                                  key={component}
                                  className={`border-b border-gray-100 ${
                                    component === "Total Annual Fee"
                                      ? "bg-[var(--fsu-gold)]/10 font-semibold"
                                      : ""
                                  }`}
                                >
                                  <td className="py-3 px-4 text-gray-800">
                                    {component}
                                  </td>
                                  <td className="py-3 px-4 text-right text-gray-600">
                                    {amount}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            )}

            {/* Scholarships Tab */}
            {activeTab === "scholarships" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
                    Scholarships & Financial Aid
                  </h2>
                  <p className="text-lg text-gray-600">
                    Supporting academic excellence and making education
                    accessible
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {scholarships.map((scholarship, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-[var(--fsu-gold)]/30">
                        <CardContent className="p-8">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${scholarship.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                          >
                            {scholarship.icon}
                          </div>
                          <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-3 text-center">
                            {scholarship.name}
                          </h3>
                          <div className="text-center mb-4">
                            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] px-3 py-1">
                              {scholarship.amount}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-center mb-6 leading-relaxed">
                            {scholarship.eligibility}
                          </p>
                          <Button
                            className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                            asChild
                          >
                            <Link href="/admissions/scholarships">
                              Learn More & Apply
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
