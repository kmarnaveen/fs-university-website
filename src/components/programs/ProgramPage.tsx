"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  Clock,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Download,
  Building2,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Target,
  Briefcase,
  DollarSign,
} from "lucide-react";
import PlacementStatsChart from "./PlacementStatsChart";

interface FacultyMember {
  name: string;
  designation: string;
  qualifications: string;
  specialization: string;
  experience: string;
  photo?: string;
}

interface CompanyLogo {
  name: string;
  logo: string;
}

interface ProgramData {
  // Basic Info
  title: string;
  level: "Diploma" | "Undergraduate" | "Postgraduate" | "Doctoral";
  duration: string;
  approvals: string[];

  // Key Info Bar
  intake: string;
  mode: string;

  // About Section
  description: string;
  highlights: string[];
  specializations?: string[];

  // Curriculum
  curriculum: {
    semester: string;
    subjects: string[];
  }[];
  syllabusDownload?: string;

  // Career Prospects
  careerProspects: {
    jobTitles: string[];
    averageSalary: string;
    placementRate: string;
    topRecruiters: CompanyLogo[];
    placementStats: {
      year: string;
      placed: number;
      total: number;
      percentage: string;
    }[];
  };

  // Eligibility & Fees
  eligibility: {
    academicRequirements: string[];
    entranceExam?: string;
    ageLimit?: string;
  };
  fees: {
    tuitionFee: string;
    examFee?: string;
    otherFees?: string;
    totalFee: string;
  };
  scholarships?: string[];

  // Faculty
  faculty: FacultyMember[];

  // Additional Info
  facilities?: string[];
  accreditations?: string[];
}

interface ProgramPageProps {
  programData: ProgramData;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ programData }) => {
  const [activeTab, setActiveTab] = useState("about");

  const {
    title,
    level,
    duration,
    approvals,
    intake,
    mode,
    description,
    highlights,
    specializations,
    curriculum,
    syllabusDownload,
    careerProspects,
    eligibility,
    fees,
    scholarships,
    faculty,
    facilities,
    accreditations,
  } = programData;

  return (
    <div className="min-h-screen">
      {/* Sticky Apply CTA - Fixed Position - Mobile Optimized */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="w-14 h-14 lg:w-16 lg:h-16 bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse rounded-full p-0"
          asChild
        >
          <Link href={`/apply?program=${encodeURIComponent(title)}`}>
            <ArrowRight className="w-7 h-7 lg:w-8 lg:h-8" />
            <span className="sr-only">Apply Now</span>
          </Link>
        </Button>
      </div>

      {/* The Hook: Above the Fold - Mobile-First Hero */}
      <section className="bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto">
          {/* Breadcrumb - Mobile Optimized */}
          <nav className="mb-6 lg:mb-8">
            <div className="flex items-center space-x-2 text-sm lg:text-base text-neutral-200">
              <Link href="/" className="hover:text-white truncate">
                Home
              </Link>
              <span>/</span>
              <Link href="/programs" className="hover:text-white truncate">
                Programs
              </Link>
              <span>/</span>
              <span className="text-[var(--fsu-gold)] truncate max-w-32 sm:max-w-none">
                {title}
              </span>
            </div>
          </nav>

          {/* Program Header */}
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-sm sm:text-base">
                {level}
              </Badge>
              {accreditations?.map((acc, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-white text-white text-xs sm:text-sm"
                >
                  {acc}
                </Badge>
              ))}
            </div>

            <h1 className="fluid-text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>

            {/* Key Info Bar - Mobile-First Responsive Grid */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--fsu-gold)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-neutral-200">
                      Duration
                    </div>
                    <div className="font-semibold text-sm sm:text-base truncate">
                      {duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--fsu-gold)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-neutral-200">
                      Level
                    </div>
                    <div className="font-semibold text-sm sm:text-base truncate">
                      {level}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--fsu-gold)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-neutral-200">
                      Intake
                    </div>
                    <div className="font-semibold text-sm sm:text-base truncate">
                      {intake}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--fsu-gold)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-neutral-200">
                      Mode
                    </div>
                    <div className="font-semibold text-sm sm:text-base truncate">
                      {mode}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 col-span-2 md:col-span-1">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--fsu-gold)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-neutral-200">
                      Approvals
                    </div>
                    <div className="font-semibold text-xs sm:text-sm truncate">
                      {approvals.join(", ")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 col-span-2 md:col-span-1">
                  <DollarSign className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--fsu-gold)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-neutral-200">
                      Total Fees
                    </div>
                    <div className="font-semibold text-sm sm:text-base truncate">
                      {fees.totalFee}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA - Mobile-First Stacked */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xs mx-auto sm:max-w-none sm:mx-0">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] fluid-text-xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                asChild
              >
                <Link href={`/apply?program=${encodeURIComponent(title)}`}>
                  Apply Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] fluid-text-xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">Get More Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Proof: Tabbed Information Interface - Mobile-First */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Mobile-First Tab Navigation with Scrollable Container */}
            <div className="relative mb-6 sm:mb-8">
              <TabsList className="scrollable-tabs md:grid md:grid-cols-5 w-full h-auto p-1 bg-neutral-100 rounded-lg">
                <TabsTrigger
                  value="about"
                  className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap data-[state=active]:bg-[var(--fsu-crimson)] data-[state=active]:text-white flex-shrink-0 md:flex-shrink"
                >
                  About Program
                </TabsTrigger>
                <TabsTrigger
                  value="curriculum"
                  className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap data-[state=active]:bg-[var(--fsu-crimson)] data-[state=active]:text-white flex-shrink-0 md:flex-shrink"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="careers"
                  className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap data-[state=active]:bg-[var(--fsu-crimson)] data-[state=active]:text-white flex-shrink-0 md:flex-shrink"
                >
                  Career Prospects
                </TabsTrigger>
                <TabsTrigger
                  value="eligibility"
                  className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap data-[state=active]:bg-[var(--fsu-crimson)] data-[state=active]:text-white flex-shrink-0 md:flex-shrink"
                >
                  Eligibility & Fees
                </TabsTrigger>
                <TabsTrigger
                  value="faculty"
                  className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap data-[state=active]:bg-[var(--fsu-crimson)] data-[state=active]:text-white flex-shrink-0 md:flex-shrink"
                >
                  Faculty
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1: About the Program - Mobile-First Layout */}
            <TabsContent value="about" className="mt-6 sm:mt-8">
              <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                {/* Main Content - Full width on mobile, 2/3 on desktop */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="fluid-text-3xl text-[var(--fsu-crimson)]">
                        Why Choose This Program?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="fluid-text-xl text-neutral-600 leading-relaxed mb-6">
                        {description}
                      </p>

                      <h3 className="fluid-text-2xl font-semibold text-[var(--fsu-crimson)] mb-4">
                        Program Highlights
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {highlights?.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700 text-sm sm:text-base">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {specializations && (
                        <>
                          <h3 className="fluid-text-2xl font-semibold text-[var(--fsu-crimson)] mb-4 mt-8">
                            Specializations Available
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {specializations?.map((spec, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="bg-[var(--fsu-gold)]/10 text-[var(--fsu-crimson)] text-xs sm:text-sm"
                              >
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar - Below main content on mobile, 1/3 on desktop */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="fluid-text-2xl text-[var(--fsu-crimson)]">
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button
                        className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] py-3"
                        asChild
                      >
                        <Link
                          href={`/apply?program=${encodeURIComponent(title)}`}
                        >
                          Apply Now
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full py-3" asChild>
                        <Link href="/downloads">
                          Download Brochure{" "}
                          <Download className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full py-3" asChild>
                        <Link href="/contact">
                          Contact Admissions <Phone className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {facilities && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="fluid-text-2xl text-[var(--fsu-crimson)]">
                          Facilities Available
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {facilities?.map((facility, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Building2 className="w-4 h-4 text-[var(--fsu-gold)] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-neutral-600">
                                {facility}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Tab 2: Curriculum & Syllabus - Mobile-First */}
            <TabsContent value="curriculum" className="mt-6 sm:mt-8">
              <Card>
                <CardHeader>
                  <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="fluid-text-3xl text-[var(--fsu-crimson)]">
                      Curriculum Structure
                    </CardTitle>
                    {syllabusDownload && (
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto"
                        asChild
                      >
                        <Link href={syllabusDownload}>
                          <span className="hidden sm:inline">
                            Download Full Syllabus
                          </span>
                          <span className="sm:hidden">Download Syllabus</span>
                          <Download className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {curriculum?.map((sem, index) => (
                      <div key={index} className="border rounded-lg p-4 sm:p-6">
                        <h3 className="fluid-text-2xl font-semibold text-[var(--fsu-crimson)] mb-4">
                          {sem.semester}
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {sem.subjects?.map((subject, subIndex) => (
                            <div
                              key={subIndex}
                              className="flex items-start gap-2"
                            >
                              <BookOpen className="w-4 h-4 text-[var(--fsu-gold)] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-neutral-700">
                                {subject}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Career Prospects & Placements - Mobile-First */}
            <TabsContent value="careers" className="mt-6 sm:mt-8">
              <div className="space-y-8">
                {/* Placement Statistics */}
                <PlacementStatsChart
                  stats={careerProspects.placementStats}
                  placementRate={careerProspects.placementRate}
                  averageSalary={careerProspects.averageSalary}
                />

                {/* Top Recruiters */}
                <Card>
                  <CardHeader>
                    <CardTitle className="fluid-text-3xl text-[var(--fsu-crimson)]">
                      Top Recruiting Companies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                      {careerProspects.topRecruiters?.map((company, index) => (
                        <div
                          key={index}
                          className="bg-white border border-neutral-200 rounded-lg p-3 sm:p-4 flex items-center justify-center hover:shadow-md transition-shadow min-h-[80px] sm:min-h-[100px]"
                        >
                          <div className="text-center">
                            <div className="font-bold text-xs sm:text-sm text-neutral-800 leading-tight">
                              {company.name}
                            </div>
                            <div className="text-xs text-neutral-500 mt-1 hidden sm:block">
                              Recruiter Partner
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Career Opportunities */}
                <Card>
                  <CardHeader>
                    <CardTitle className="fluid-text-3xl text-[var(--fsu-crimson)]">
                      Career Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {careerProspects.jobTitles?.map((job, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 sm:p-4 border rounded-lg hover:shadow-sm transition-shadow"
                        >
                          <Briefcase className="w-5 h-5 text-[var(--fsu-gold)] flex-shrink-0" />
                          <span className="font-medium text-neutral-700 text-sm sm:text-base">
                            {job}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab 4: Eligibility & Fees - Mobile-First Stacked Layout */}
            <TabsContent value="eligibility" className="mt-6 sm:mt-8">
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
                {/* Eligibility - Full width on mobile, left column on desktop */}
                <Card>
                  <CardHeader>
                    <CardTitle className="fluid-text-3xl text-[var(--fsu-crimson)]">
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[var(--fsu-crimson)] mb-3 text-lg">
                          Academic Requirements
                        </h4>
                        <div className="space-y-3">
                          {eligibility.academicRequirements?.map(
                            (req, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-700 text-sm sm:text-base">
                                  {req}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {eligibility.entranceExam && (
                        <div>
                          <h4 className="font-semibold text-[var(--fsu-crimson)] mb-2 text-lg">
                            Entrance Examination
                          </h4>
                          <p className="text-neutral-700 text-sm sm:text-base">
                            {eligibility.entranceExam}
                          </p>
                        </div>
                      )}

                      {eligibility.ageLimit && (
                        <div>
                          <h4 className="font-semibold text-[var(--fsu-crimson)] mb-2 text-lg">
                            Age Limit
                          </h4>
                          <p className="text-neutral-700 text-sm sm:text-base">
                            {eligibility.ageLimit}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Fees - Below eligibility on mobile, right column on desktop */}
                <Card>
                  <CardHeader>
                    <CardTitle className="fluid-text-3xl text-[var(--fsu-crimson)]">
                      Fee Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between py-3 border-b">
                          <span className="text-neutral-700 text-sm sm:text-base">
                            Tuition Fee
                          </span>
                          <span className="font-semibold text-sm sm:text-base">
                            {fees.tuitionFee}
                          </span>
                        </div>
                        {fees.examFee && (
                          <div className="flex justify-between py-3 border-b">
                            <span className="text-neutral-700 text-sm sm:text-base">
                              Examination Fee
                            </span>
                            <span className="font-semibold text-sm sm:text-base">
                              {fees.examFee}
                            </span>
                          </div>
                        )}
                        {fees.otherFees && (
                          <div className="flex justify-between py-3 border-b">
                            <span className="text-neutral-700 text-sm sm:text-base">
                              Other Fees
                            </span>
                            <span className="font-semibold text-sm sm:text-base">
                              {fees.otherFees}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between py-4 border-t-2 border-[var(--fsu-crimson)] text-lg font-bold">
                          <span className="text-[var(--fsu-crimson)]">
                            Total Fee
                          </span>
                          <span className="text-[var(--fsu-crimson)]">
                            {fees.totalFee}
                          </span>
                        </div>
                      </div>

                      {scholarships && (
                        <div>
                          <h4 className="font-semibold text-[var(--fsu-crimson)] mb-3 text-lg">
                            Scholarships Available
                          </h4>
                          <div className="space-y-3">
                            {scholarships?.map((scholarship, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <Star className="w-4 h-4 text-[var(--fsu-gold)] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-neutral-700">
                                  {scholarship}
                                </span>
                              </div>
                            ))}
                          </div>
                          <Button
                            variant="outline"
                            className="mt-4 w-full sm:w-auto"
                            asChild
                          >
                            <Link href="/scholarships">
                              <span className="hidden sm:inline">
                                Learn More About Scholarships
                              </span>
                              <span className="sm:hidden">
                                View Scholarships
                              </span>
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab 5: Faculty - Mobile-First Grid */}
            <TabsContent value="faculty" className="mt-6 sm:mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="fluid-text-3xl text-[var(--fsu-crimson)]">
                    Our Expert Faculty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {faculty &&
                      faculty.map((member, index) => (
                        <div
                          key={index}
                          className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="text-center mb-4">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[var(--fsu-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--fsu-gold)]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[var(--fsu-crimson)]">
                              {member.name}
                            </h3>
                            <p className="text-sm text-neutral-600">
                              {member.designation}
                            </p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium">
                                Qualifications:
                              </span>
                              <span className="text-neutral-600 ml-1 block sm:inline">
                                {member.qualifications}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium">
                                Specialization:
                              </span>
                              <span className="text-neutral-600 ml-1 block sm:inline">
                                {member.specialization}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium">Experience:</span>
                              <span className="text-neutral-600 ml-1 block sm:inline">
                                {member.experience}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* The Action: Final CTA Section - Mobile-First */}
      <section className="py-16 lg:py-24 bg-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="fluid-text-4xl font-bold mb-4 sm:mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="fluid-text-xl text-neutral-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Join thousands of successful graduates who started their career
            journey with {title} at FS University.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] fluid-text-xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              asChild
            >
              <Link href={`/apply?program=${encodeURIComponent(title)}`}>
                Apply Now
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] fluid-text-xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;
