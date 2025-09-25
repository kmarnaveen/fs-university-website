"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  DollarSign,
  Calculator,
  GraduationCap,
  ArrowLeft,
  ChevronDown,
  Download,
  Info,
  CreditCard,
} from "lucide-react";

export default function FeesPage() {
  const [selectedFeeProgram, setSelectedFeeProgram] = useState("");

  const feeStructure = {
    "B.Tech": {
      "Tuition Fee (Per Semester)": "₹75,000",
      "Hostel & Mess Fee (Optional)": "₹45,000",
      "Laboratory Fee": "₹15,000",
      "Library Fee": "₹5,000",
      "Examination Fee": "₹5,000",
      "Security Deposit (Refundable)": "₹25,000",
      "Total Annual Fee": "₹1,50,000 + Hostel",
    },
    "B.Sc": {
      "Tuition Fee (Per Semester)": "₹40,000",
      "Hostel & Mess Fee (Optional)": "₹40,000",
      "Laboratory Fee": "₹10,000",
      "Library Fee": "₹3,000",
      "Examination Fee": "₹3,000",
      "Security Deposit (Refundable)": "₹15,000",
      "Total Annual Fee": "₹80,000 + Hostel",
    },
    BBA: {
      "Tuition Fee (Per Semester)": "₹50,000",
      "Hostel & Mess Fee (Optional)": "₹40,000",
      "Computer Lab Fee": "₹8,000",
      "Library Fee": "₹4,000",
      "Examination Fee": "₹4,000",
      "Security Deposit (Refundable)": "₹20,000",
      "Total Annual Fee": "₹1,00,000 + Hostel",
    },
    MBA: {
      "Tuition Fee (Per Semester)": "₹1,25,000",
      "Hostel & Mess Fee (Optional)": "₹50,000",
      "Case Study Material Fee": "₹15,000",
      "Industry Visit Fee": "₹10,000",
      "Library Fee": "₹8,000",
      "Examination Fee": "₹8,000",
      "Security Deposit (Refundable)": "₹30,000",
      "Total Annual Fee": "₹2,50,000 + Hostel",
    },
    "M.Tech": {
      "Tuition Fee (Per Semester)": "₹85,000",
      "Hostel & Mess Fee (Optional)": "₹45,000",
      "Research & Lab Fee": "₹20,000",
      "Thesis Guidance Fee": "₹15,000",
      "Library Fee": "₹6,000",
      "Examination Fee": "₹6,000",
      "Security Deposit (Refundable)": "₹25,000",
      "Total Annual Fee": "₹1,70,000 + Hostel",
    },
    "M.Sc": {
      "Tuition Fee (Per Semester)": "₹60,000",
      "Hostel & Mess Fee (Optional)": "₹40,000",
      "Research & Lab Fee": "₹15,000",
      "Project Work Fee": "₹10,000",
      "Library Fee": "₹5,000",
      "Examination Fee": "₹5,000",
      "Security Deposit (Refundable)": "₹20,000",
      "Total Annual Fee": "₹1,20,000 + Hostel",
    },
    "Ph.D.": {
      "Registration Fee (One-time)": "₹25,000",
      "Annual Research Fee": "₹50,000",
      "Thesis Submission Fee": "₹15,000",
      "Viva-Voce Fee": "₹10,000",
      "Library Fee": "₹5,000",
      "Security Deposit (Refundable)": "₹20,000",
      "Total Annual Fee": "₹50,000",
    },
  } as const;

  type FeeProgram = keyof typeof feeStructure;

  const paymentPlans = [
    {
      title: "Annual Payment",
      discount: "5% Discount",
      description: "Pay the entire year's fee upfront and save 5%",
      benefits: [
        "5% fee discount",
        "No payment deadlines to track",
        "Priority registration",
      ],
    },
    {
      title: "Semester Payment",
      discount: "Standard Rate",
      description: "Pay fees at the beginning of each semester",
      benefits: [
        "Manageable payment amounts",
        "Standard processing",
        "Flexible planning",
      ],
    },
    {
      title: "Monthly Installments",
      discount: "Processing Fee: ₹500/month",
      description: "Spread payments across 10 monthly installments",
      benefits: [
        "Easy monthly payments",
        "Better cash flow",
        "EMI facility available",
      ],
    },
  ];

  const additionalInfo = [
    {
      title: "Late Payment Policy",
      content:
        "A late fee of ₹1,000 per month will be charged after the due date. Students with pending fees for more than 3 months may face academic restrictions.",
    },
    {
      title: "Refund Policy",
      content:
        "Security deposits are fully refundable upon course completion. Tuition fees are non-refundable after the academic year begins, except in exceptional circumstances.",
    },
    {
      title: "Fee Concessions",
      content:
        "Merit-based scholarships, need-based financial aid, and various government schemes are available. Contact the financial aid office for more details.",
    },
    {
      title: "Payment Methods",
      content:
        "Fees can be paid online via net banking, UPI, debit/credit cards, or through demand drafts. Cash payments are accepted only at the campus finance office.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6">
              <CreditCard className="w-4 h-4 mr-2" />
              Fee Information
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fee Structure
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Transparent and comprehensive breakdown of all academic fees
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] hover:bg-[var(--fsu-gold)]/90 text-black font-semibold"
                onClick={() => {
                  document.getElementById("fee-calculator")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Calculate Fees
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
      <section id="fee-calculator" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fee Calculator */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-white shadow-lg border-2 border-gray-100">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <Calculator className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-[var(--fsu-crimson)] mb-4">
                  Fee Calculator
                </CardTitle>
                <p className="text-gray-600 text-lg">
                  Select your program to view detailed fee structure
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Program
                  </label>
                  <div className="relative">
                    <select
                      value={selectedFeeProgram}
                      onChange={(e) => setSelectedFeeProgram(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-[var(--fsu-crimson)] focus:ring-0 appearance-none cursor-pointer"
                    >
                      <option value="">Select a Program</option>
                      <option value="B.Tech">B.Tech (Engineering)</option>
                      <option value="B.Sc">B.Sc (Science)</option>
                      <option value="BBA">BBA (Business Administration)</option>
                      <option value="MBA">MBA (Business Administration)</option>
                      <option value="M.Tech">M.Tech (Engineering)</option>
                      <option value="M.Sc">M.Sc (Science)</option>
                      <option value="Ph.D.">Ph.D. (Research)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fee Breakdown */}
          {selectedFeeProgram && selectedFeeProgram in feeStructure && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <Card className="bg-white shadow-lg border-2 border-gray-100">
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-[var(--fsu-crimson)]/10 rounded-full text-[var(--fsu-crimson)] text-sm font-semibold mb-4">
                    Fee Breakdown
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-[var(--fsu-crimson)] mb-4">
                    {selectedFeeProgram} Program Fees
                  </CardTitle>
                  <p className="text-gray-600 text-lg">
                    Complete fee structure for the academic year
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {Object.entries(
                      feeStructure[selectedFeeProgram as FeeProgram]
                    ).map(([feeType, amount], index) => (
                      <motion.div
                        key={feeType}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex justify-between items-center p-4 rounded-xl border ${
                          feeType === "Total Annual Fee"
                            ? "bg-gradient-to-r from-[var(--fsu-crimson)]/10 to-[var(--fsu-gold)]/10 border-[var(--fsu-crimson)]/20"
                            : "bg-gray-50 border-gray-100"
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            feeType === "Total Annual Fee"
                              ? "text-[var(--fsu-crimson)] text-lg"
                              : "text-gray-700"
                          }`}
                        >
                          {feeType}
                        </span>
                        <span
                          className={`font-bold ${
                            feeType === "Total Annual Fee"
                              ? "text-[var(--fsu-crimson)] text-xl"
                              : "text-gray-900 text-lg"
                          }`}
                        >
                          {amount}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-gray-100">
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
                      className="border-2 border-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-gold)] hover:text-[var(--fsu-crimson)] font-semibold px-8 py-3"
                      asChild
                    >
                      <Link href="/downloads">
                        <Download className="w-4 h-4 mr-2" />
                        Download Fee Structure
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Payment Plans */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                Flexible Payment Options
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Choose a payment plan that suits your financial preferences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {paymentPlans.map((plan, index) => (
                <Card
                  key={index}
                  className="p-8 border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-red-50/30 group-hover:from-red-50/50 group-hover:to-[var(--fsu-gold)]/10 transition-all duration-500"></div>

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl flex items-center justify-center text-white mb-6">
                      <DollarSign className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2">
                      {plan.title}
                    </h3>

                    <Badge
                      className={`mb-4 ${
                        index === 0
                          ? "bg-green-100 text-green-800"
                          : index === 1
                          ? "bg-blue-100 text-blue-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {plan.discount}
                    </Badge>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <ul className="space-y-2">
                      {plan.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-[var(--fsu-gold)] rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                Important Information
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Essential policies and guidelines regarding fee payments
              </p>
            </div>

            <div className="grid gap-6">
              {additionalInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-[var(--fsu-gold)]/30 transition-colors"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                        <Info className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--fsu-crimson)] text-lg mb-3">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Looking for Financial Support?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/admissions/scholarships">Explore Scholarships</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] font-semibold px-8 py-3"
              asChild
            >
              <Link href="/contact">Contact Finance Office</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
