import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Star,
  TrendingUp,
  Briefcase,
  DollarSign,
  BarChart3,
  Globe,
  Target,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Business Management & Entrepreneurship | FS University",
  description:
    "Excellence in business education with BBA and MBA programs focusing on entrepreneurship and modern business practices.",
};

export default function ManagementSchoolPage() {
  const programs = [
    {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "Management studies with leadership, entrepreneurship, digital marketing, and startup incubation",
      duration: "3 Years",
      fees: "₹1,00,000/year",
      level: "Undergraduate",
      icon: <Briefcase className="w-6 h-6" />,
      highlights: [
        "Leadership Development",
        "Entrepreneurship",
        "Digital Marketing",
        "Business Analytics",
      ],
      eligibility: "12th Any Stream",
      careers: [
        "Business Analyst",
        "Marketing Executive",
        "HR Coordinator",
        "Operations Manager",
      ],
    },
    {
      title: "Master of Business Administration (MBA)",
      description:
        "Comprehensive MBA program with specializations in finance, marketing, HR, operations, and digital business",
      duration: "2 Years",
      fees: "₹3,50,000/year",
      level: "Postgraduate",
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        "Finance",
        "Marketing",
        "Human Resources",
        "Operations",
        "Digital Business",
      ],
      eligibility: "Graduation with CAT/MAT/XAT",
      careers: [
        "Business Manager",
        "Financial Analyst",
        "Marketing Manager",
        "HR Manager",
        "Consultant",
      ],
    },
    {
      title: "Ph.D Management",
      description:
        "Advanced research in business analytics, digital transformation, sustainable business, and organizational behavior",
      duration: "3-5 Years",
      fees: "₹1,80,000/year",
      level: "Doctoral",
      icon: <BookOpen className="w-6 h-6" />,
      highlights: [
        "Business Analytics",
        "Digital Transformation",
        "Sustainable Business",
        "Organizational Behavior",
      ],
      eligibility: "MBA/PGDM with NET/JRF",
      careers: [
        "Research Scholar",
        "Professor",
        "Business Consultant",
        "Policy Advisor",
      ],
    },
  ];

  const specializations = [
    {
      name: "Finance",
      description:
        "Corporate finance, investment banking, financial markets, and fintech",
      icon: <DollarSign className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Marketing",
      description:
        "Digital marketing, brand management, consumer behavior, and market research",
      icon: <BarChart3 className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Human Resources",
      description:
        "Talent management, organizational development, and HR analytics",
      icon: <Users className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Operations",
      description:
        "Supply chain management, project management, and process optimization",
      icon: <Globe className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Entrepreneurship",
      description:
        "Startup incubation, innovation management, and venture capital",
      icon: <Star className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const facultyMembers = [
    {
      name: "Dr. Priya Sharma",
      designation: "Dean & Professor",
      specialization: "Strategic Management",
      experience: "20+ Years",
      qualifications: "Ph.D Finance, IIM Ahmedabad",
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor",
      specialization: "Digital Marketing",
      experience: "15+ Years",
      qualifications: "Ph.D Marketing, XLRI",
    },
    {
      name: "Dr. Anita Patel",
      designation: "Associate Professor",
      specialization: "Human Resource Management",
      experience: "12+ Years",
      qualifications: "Ph.D HRM, TISS Mumbai",
    },
    {
      name: "Prof. Suresh Gupta",
      designation: "Assistant Professor",
      specialization: "Entrepreneurship",
      experience: "10+ Years",
      qualifications: "MBA, Ex-Startup Founder",
    },
  ];

  const achievements = [
    {
      title: "Industry Partnerships",
      description: "40+ corporate partnerships for internships and placements",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Placement Success",
      description: "92% placement rate with average package ₹6.5 LPA",
      icon: <Star className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Startup Incubation",
      description: "25+ successful startups launched by alumni",
      icon: <TrendingUp className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Research Excellence",
      description: "150+ research papers in top business journals",
      icon: <BookOpen className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    {
      label: "Students",
      value: "2,500+",
      description: "Aspiring business leaders",
    },
    { label: "Faculty", value: "80", description: "Expert educators" },
    { label: "Programs", value: "3", description: "Comprehensive offerings" },
    {
      label: "Alumni Network",
      value: "5,000+",
      description: "Global professionals",
    },
  ];

  const undergraduatePrograms = [
    {
      name: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      intake: "120 Students",
      fees: "₹1,00,000/year",
      specializations: [
        "Finance",
        "Marketing",
        "HR",
        "Operations",
        "Entrepreneurship",
      ],
      href: "/programs/bba",
    },
    {
      name: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      intake: "100 Students",
      fees: "₹60,000/year",
      specializations: [
        "Accounting",
        "Banking",
        "Taxation",
        "Corporate Finance",
      ],
      href: "/programs/bcom",
    },
  ];

  const postgraduatePrograms = [
    {
      name: "Master of Business Administration (MBA)",
      duration: "2 Years",
      intake: "80 Students",
      fees: "₹2,33,000/year",
      specializations: [
        "Finance",
        "Marketing",
        "HR",
        "Operations",
        "Digital Business",
      ],
      href: "/programs/mba",
    },
    {
      name: "Master of Commerce (M.Com)",
      duration: "2 Years",
      intake: "60 Students",
      fees: "₹80,000/year",
      specializations: [
        "Advanced Accounting",
        "Financial Management",
        "Business Research",
      ],
      href: "/programs/mcom",
    },
    {
      name: "Post Graduate Diploma in Management (PGDM)",
      duration: "2 Years",
      intake: "60 Students",
      fees: "₹2,00,000/year",
      specializations: [
        "Digital Marketing",
        "International Business",
        "Analytics",
      ],
      href: "/programs/pgdm",
    },
  ];

  const doctoralPrograms = [
    {
      name: "Ph.D in Management",
      duration: "3-5 Years",
      intake: "15 Students",
      fees: "₹1,20,000/year",
      researchAreas: [
        "Strategic Management",
        "Finance",
        "Marketing",
        "Organizational Behavior",
      ],
      href: "/programs/phd-management",
    },
    {
      name: "Ph.D in Commerce",
      duration: "3-5 Years",
      intake: "10 Students",
      fees: "₹1,00,000/year",
      researchAreas: [
        "Accounting",
        "Economics",
        "Business Statistics",
        "International Trade",
      ],
      href: "/programs/phd-commerce",
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
              Business Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of Business Management &
              <span className="block text-[var(--fsu-gold)]">
                Entrepreneurship
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Shaping future business leaders through innovative education,
              entrepreneurship focus, and industry-aligned curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017]"
                asChild
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                asChild
              >
                <Link href="/admissions">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-neutral-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive business education from undergraduate to doctoral
              levels, designed to create tomorrow's business leaders and
              entrepreneurs.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-2 border-[var(--fsu-gold)]/30 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--fsu-gold)]/10 rounded-lg">
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl text-[var(--fsu-crimson)]">
                          {program.title}
                        </CardTitle>
                        <Badge variant="outline">{program.level}</Badge>
                      </div>
                      <div className="flex gap-6 text-sm text-neutral-600 mb-4">
                        <span>
                          <strong>Duration:</strong> {program.duration}
                        </span>
                        <span>
                          <strong>Fees:</strong> {program.fees}
                        </span>
                        <span>
                          <strong>Eligibility:</strong> {program.eligibility}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">{program.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-3">
                        Key Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-[var(--fsu-gold)]/10 text-[var(--fsu-crimson)]"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-3">
                        Career Opportunities
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {program.careers.map((career, idx) => (
                          <div key={idx} className="text-neutral-600">
                            • {career}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                      asChild
                    >
                      <Link href="/apply">
                        Apply for {program.title}{" "}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Specializations
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from diverse specializations designed to match industry
              demands and your career aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{spec.icon}</div>
                  <CardTitle className="text-xl text-[var(--fsu-crimson)]">
                    {spec.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Our Faculty
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Learn from industry experts and renowned academicians who bring
              real-world experience to the classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((faculty, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-[var(--fsu-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-[var(--fsu-gold)]" />
                  </div>
                  <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                    {faculty.name}
                  </CardTitle>
                  <div className="text-sm text-neutral-600">
                    {faculty.designation}
                  </div>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="space-y-2">
                    <div>
                      <strong>Specialization:</strong> {faculty.specialization}
                    </div>
                    <div>
                      <strong>Experience:</strong> {faculty.experience}
                    </div>
                    <div>
                      <strong>Qualifications:</strong> {faculty.qualifications}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
              Excellence in business education, research, and industry
              collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-neutral-200">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
            Ready to Shape Your Business Future?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Join FS University's School of Business Management &
            Entrepreneurship and become part of the next generation of business
            leaders and entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017]"
              asChild
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
