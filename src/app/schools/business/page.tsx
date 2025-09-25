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
  DollarSign,
  TrendingUp,
  Calculator,
  CreditCard,
  PieChart,
  Banknote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Business | FS University",
  description:
    "Comprehensive business education with focus on finance, accounting, digital commerce, and business analytics.",
};

export default function BusinessSchoolPage() {
  const programs = [
    {
      title: "Bachelor of Commerce (B.Com)",
      description:
        "Comprehensive commerce education covering accounting, finance, taxation, business law, and economics with practical industry exposure",
      duration: "3 Years",
      fees: "₹75,000/year",
      icon: <DollarSign className="w-6 h-6" />,
      highlights: [
        "Accounting & Finance",
        "Taxation",
        "Business Law",
        "Digital Commerce",
      ],
    },
  ];

  const specializations = [
    {
      name: "Accounting & Finance",
      description: "Financial reporting, auditing, and corporate finance",
      icon: <Calculator className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Banking & Insurance",
      description:
        "Banking operations, insurance products, and risk management",
      icon: <Banknote className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Digital Commerce",
      description: "E-commerce, digital payments, and online business models",
      icon: <TrendingUp className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Business Analytics",
      description:
        "Data analysis, financial modeling, and business intelligence",
      icon: <PieChart className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Taxation",
      description: "Direct and indirect taxes, GST, and tax planning",
      icon: <CreditCard className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const departments = [
    {
      name: "Accounting & Finance",
      head: "Dr. Rajesh Agarwal",
      students: "400+",
      faculty: "15",
      specializations: [
        "Financial Accounting",
        "Cost Accounting",
        "Corporate Finance",
        "Investment Analysis",
      ],
    },
    {
      name: "Business Economics",
      head: "Dr. Priya Mathur",
      students: "300+",
      faculty: "12",
      specializations: [
        "Microeconomics",
        "Macroeconomics",
        "International Trade",
        "Business Statistics",
      ],
    },
    {
      name: "Banking & Insurance",
      head: "Dr. Sunil Kumar",
      students: "350+",
      faculty: "13",
      specializations: [
        "Banking Operations",
        "Insurance Products",
        "Risk Management",
        "Financial Services",
      ],
    },
    {
      name: "Digital Commerce",
      head: "Dr. Anita Sharma",
      students: "280+",
      faculty: "10",
      specializations: [
        "E-commerce",
        "Digital Marketing",
        "Online Payments",
        "Business Analytics",
      ],
    },
    {
      name: "Taxation",
      head: "Dr. Vikram Singh",
      students: "270+",
      faculty: "15",
      specializations: ["Income Tax", "GST", "Corporate Tax", "Tax Planning"],
    },
  ];

  const facilities = [
    {
      title: "Finance Lab",
      description: "Bloomberg terminals and financial software",
      icon: <TrendingUp className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Accounting Lab",
      description: "Tally, SAP, and other accounting software",
      icon: <Calculator className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Digital Commerce Lab",
      description: "E-commerce platforms and digital payment systems",
      icon: <DollarSign className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const achievements = [
    {
      title: "Professional Certifications",
      description: "80% students with industry certifications",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Placement Rate",
      description: "92% placement in top companies",
      icon: <Star className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Industry Partnerships",
      description: "25+ corporate tie-ups",
      icon: <Users className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    { label: "Students", value: "1,600+", description: "Business scholars" },
    { label: "Faculty", value: "65", description: "Industry experts" },
    { label: "Specializations", value: "5", description: "Career paths" },
    { label: "Placement Rate", value: "92%", description: "Industry success" },
  ];

  const careerOpportunities = [
    "Chartered Accountant",
    "Financial Analyst",
    "Tax Consultant",
    "Banking Professional",
    "Investment Advisor",
    "Business Analyst",
    "Digital Marketing Manager",
    "E-commerce Manager",
    "Insurance Advisor",
    "Corporate Finance Manager",
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
              School of
              <span className="block text-[var(--fsu-gold)]">Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Excellence in business education through comprehensive programs
              with focus on finance, accounting, digital commerce, and business
              analytics.
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
                asChild
              >
                <Link href="/downloads/prospectus">Download Prospectus</Link>
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

      {/* Program Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Business Program
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive Bachelor of Business program with multiple
              specializations and industry-relevant curriculum.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-2 border-[var(--fsu-gold)]/30 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-[var(--fsu-gold)]/10 rounded-xl">
                      {program.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-[var(--fsu-crimson)]">
                        {program.title}
                      </CardTitle>
                      <div className="text-lg text-neutral-600">
                        {program.duration} • {program.fees}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-3">
                        Key Highlights:
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
                  </div>
                  <Button
                    className="w-full mt-6 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                    asChild
                  >
                    <Link href="/apply">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
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
              Specialization Areas
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Five specialized tracks providing focused expertise in different
              areas of commerce and finance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="text-center p-6 border-2 border-[var(--fsu-gold)]/20 hover:border-[var(--fsu-gold)]/50 transition-colors h-full"
              >
                <div className="mb-4 flex justify-center">{spec.icon}</div>
                <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-3">
                  {spec.name}
                </h3>
                <p className="text-neutral-600 text-sm">{spec.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Five specialized departments with expert faculty and modern
              facilities for commerce education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-[var(--fsu-gold)] h-full"
              >
                <CardHeader>
                  <CardTitle className="text-base text-[var(--fsu-crimson)]">
                    {dept.name}
                  </CardTitle>
                  <div className="text-sm text-neutral-600">
                    Head: {dept.head}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--fsu-crimson)]">
                        {dept.students}
                      </div>
                      <div className="text-xs text-neutral-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--fsu-crimson)]">
                        {dept.faculty}
                      </div>
                      <div className="text-xs text-neutral-600">Faculty</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-2">
                      Specializations:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {dept.specializations.map((spec, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Modern Facilities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              State-of-the-art laboratories and facilities for practical
              commerce education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="text-center p-6 border-2 border-[var(--fsu-gold)]/20 hover:border-[var(--fsu-gold)]/50 transition-colors"
              >
                <div className="mb-4 flex justify-center">{facility.icon}</div>
                <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2">
                  {facility.title}
                </h3>
                <p className="text-neutral-600">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Career Opportunities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Diverse career paths in finance, commerce, and business sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-sm font-medium text-[var(--fsu-crimson)]">
                    {career}
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
              Excellence in commerce education with outstanding placement
              records and industry recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white text-center p-6"
              >
                <div className="mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-neutral-100">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
            Ready to Excel in Commerce?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join our community of future commerce professionals and financial
            experts. Apply now to begin your journey in business and finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)]"
              asChild
            >
              <Link href="/apply">Apply for Admission</Link>
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
