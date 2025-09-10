import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CompanyLogo } from "@/components/ui/company-logo";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import {
  Award,
  Building2,
  Target,
  BookOpen,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Filter,
  GraduationCap,
  Briefcase,
  Calendar,
} from "lucide-react";

export default function PlacementsPage() {
  const topRecruiters = [
    {
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
      industry: "IT",
    },
    {
      name: "Google",
      logo: "https://logo.clearbit.com/google.com",
      industry: "IT",
    },
    {
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      industry: "IT",
    },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com", industry: "IT" },
    {
      name: "Infosys",
      logo: "https://logo.clearbit.com/infosys.com",
      industry: "IT",
    },
    {
      name: "Wipro",
      logo: "https://logo.clearbit.com/wipro.com",
      industry: "IT",
    },
    {
      name: "Accenture",
      logo: "https://logo.clearbit.com/accenture.com",
      industry: "IT",
    },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", industry: "IT" },
    {
      name: "Deloitte",
      logo: "https://logo.clearbit.com/deloitte.com",
      industry: "Consulting",
    },
    {
      name: "KPMG",
      logo: "https://logo.clearbit.com/kpmg.com",
      industry: "Consulting",
    },
    {
      name: "PwC",
      logo: "https://logo.clearbit.com/pwc.com",
      industry: "Consulting",
    },
    {
      name: "EY",
      logo: "https://logo.clearbit.com/ey.com",
      industry: "Consulting",
    },
    {
      name: "HDFC Bank",
      logo: "https://logo.clearbit.com/hdfcbank.com",
      industry: "Banking",
    },
    {
      name: "ICICI Bank",
      logo: "https://logo.clearbit.com/icicibank.com",
      industry: "Banking",
    },
    {
      name: "SBI",
      logo: "https://logo.clearbit.com/sbi.co.in",
      industry: "Banking",
    },
    {
      name: "Axis Bank",
      logo: "https://logo.clearbit.com/axisbank.com",
      industry: "Banking",
    },
    {
      name: "Tata Motors",
      logo: "https://logo.clearbit.com/tatamotors.com",
      industry: "Manufacturing",
    },
    {
      name: "Mahindra",
      logo: "https://logo.clearbit.com/mahindra.com",
      industry: "Manufacturing",
    },
    {
      name: "L&T",
      logo: "https://logo.clearbit.com/larsentoubro.com",
      industry: "Manufacturing",
    },
    {
      name: "Reliance",
      logo: "https://logo.clearbit.com/ril.com",
      industry: "Manufacturing",
    },
    {
      name: "Sun Pharma",
      logo: "https://logo.clearbit.com/sunpharma.com",
      industry: "Pharma",
    },
    {
      name: "Dr. Reddy's",
      logo: "https://logo.clearbit.com/drreddys.com",
      industry: "Pharma",
    },
    {
      name: "Cipla",
      logo: "https://logo.clearbit.com/cipla.com",
      industry: "Pharma",
    },
    {
      name: "Lupin",
      logo: "https://logo.clearbit.com/lupin.com",
      industry: "Pharma",
    },
  ];

  const placementProcess = [
    {
      step: "1",
      title: "Career Counseling",
      description: "Individual guidance on career paths and industry insights",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Skill Development",
      description: "Workshops on technical and soft skills enhancement",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Resume Building",
      description: "Professional resume writing and portfolio development",
      icon: <Award className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Campus Drives",
      description: "Direct recruitment by top companies on campus",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      step: "5",
      title: "Job Offers",
      description: "Multiple offers and final placement confirmation",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const alumniTestimonials = [
    {
      name: "Priya Sharma",
      designation: "Software Engineer",
      company: "Microsoft",
      batch: "2023",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face",
      testimonial:
        "The placement cell at FS University provided exceptional support throughout my job search. The training sessions and mock interviews prepared me well for Microsoft's rigorous selection process.",
      package: "₹18 LPA",
    },
    {
      name: "Rahul Kumar",
      designation: "Business Analyst",
      company: "Deloitte",
      batch: "2022",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      testimonial:
        "FS University's industry connections and practical approach to education gave me the edge I needed. The placement team's guidance was instrumental in landing my dream job at Deloitte.",
      package: "₹12 LPA",
    },
    {
      name: "Sneha Patel",
      designation: "Data Scientist",
      company: "Amazon",
      batch: "2023",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      testimonial:
        "The comprehensive training program and personalized mentoring helped me secure a position at Amazon. The university's focus on emerging technologies prepared me perfectly for the industry.",
      package: "₹16 LPA",
    },
    {
      name: "Arjun Singh",
      designation: "Financial Analyst",
      company: "HDFC Bank",
      batch: "2022",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      testimonial:
        "The placement cell's network with leading banks opened doors I never imagined. The interview preparation and industry insights were invaluable in my journey to HDFC Bank.",
      package: "₹8 LPA",
    },
  ];

  const placementHighlights = [
    {
      year: "2024",
      totalOffers: "2,847",
      highestPackage: "₹19 LPA",
      averagePackage: "₹4.5 LPA",
      companiesVisited: "250+",
      placementRate: "90%",
    },
    {
      year: "2023",
      totalOffers: "2,654",
      highestPackage: "₹17.5 LPA",
      averagePackage: "₹4.2 LPA",
      companiesVisited: "235+",
      placementRate: "88%",
    },
    {
      year: "2022",
      totalOffers: "2,423",
      highestPackage: "₹16 LPA",
      averagePackage: "₹3.8 LPA",
      companiesVisited: "220+",
      placementRate: "85%",
    },
  ];

  const industries = [
    "All",
    "IT",
    "Consulting",
    "Banking",
    "Manufacturing",
    "Pharma",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Career Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Gateway to a
              <span className="block text-[var(--fsu-gold)]">
                Successful Career
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Dedicated training and placement support to connect you with top
              companies and launch your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
                asChild
              >
                <Link href="/placement-brochure">
                  Download Placement Brochure
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                asChild
              >
                <Link href="/contact-placement">Contact Placement Cell</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Top Recruiters */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our students are recruited by Fortune 500 companies and leading
              organizations across industries.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((filter) => (
              <Button
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                className={
                  filter === "All"
                    ? "bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                    : "border-[var(--fsu-crimson)] text-[var(--fsu-crimson)]"
                }
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {topRecruiters.map((company, index) => (
              <CompanyLogo
                key={index}
                name={company.name}
                logo={company.logo}
                tier={company.industry === "IT" ? "premium" : "standard"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              The Placement Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A comprehensive, step-by-step approach to ensure your career
              success.
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[var(--fsu-gold)] transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {placementProcess.map((process, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow relative bg-white"
                >
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative z-10">
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center text-[var(--fsu-crimson)] mx-auto mb-4">
                    {process.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-3">
                    {process.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {process.description}
                  </p>

                  {/* Arrow for larger screens */}
                  {index < placementProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-[var(--fsu-gold)]" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Success Stories from Our Alumni
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from our graduates who have built successful careers with
              leading organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {alumniTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.testimonial}
                author={testimonial.name}
                role={`${testimonial.designation} at ${testimonial.company}`}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Placement Highlights by Year */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Year-wise Placement Statistics
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Consistent growth in placement rates and package offerings over
              the years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {placementHighlights.map((year, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
                  {year.year}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-[var(--fsu-gold)]">
                      {year.totalOffers}
                    </div>
                    <div className="text-neutral-600">Total Offers</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[var(--fsu-crimson)]">
                      {year.highestPackage}
                    </div>
                    <div className="text-neutral-600">Highest Package</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[var(--fsu-crimson)]">
                      {year.averagePackage}
                    </div>
                    <div className="text-neutral-600">Average Package</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[var(--fsu-crimson)]">
                      {year.placementRate}
                    </div>
                    <div className="text-neutral-600">Placement Rate</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Placement Cell */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Connect with Our Placement Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get in touch for career guidance, placement support, or
              recruitment partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* For Students */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-2">
                  For Students
                </h3>
                <p className="text-neutral-600">
                  Career guidance and placement support
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--fsu-gold)]" />
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      Call Us
                    </div>
                    <div className="text-neutral-600">+91-1234567890</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--fsu-gold)]" />
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      Email Us
                    </div>
                    <div className="text-neutral-600">placements@fsu.ac.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--fsu-gold)]" />
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      Visit Us
                    </div>
                    <div className="text-neutral-600">
                      Placement Cell, Admin Block
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]">
                Schedule Counseling
              </Button>
            </Card>

            {/* For Recruiters */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center text-[var(--fsu-crimson)] mx-auto mb-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-2">
                  For Recruiters
                </h3>
                <p className="text-neutral-600">
                  Recruit talented graduates from FS University
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--fsu-gold)]" />
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      Corporate Relations
                    </div>
                    <div className="text-neutral-600">+91-1234567891</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--fsu-gold)]" />
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      Recruitment Team
                    </div>
                    <div className="text-neutral-600">recruiters@fsu.ac.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[var(--fsu-gold)]" />
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      Schedule Drive
                    </div>
                    <div className="text-neutral-600">
                      Book your recruitment slot
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017]">
                Partner With Us
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who started their journey at
            FS University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
              asChild
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
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
