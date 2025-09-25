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
  Scale,
  Gavel,
  Building2,
  Globe,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Law | FS University",
  description:
    "Excellence in legal education with moot courts, legal aid clinics, and practical training opportunities.",
};

export default function LawSchoolPage() {
  const programs = [
    {
      title: "Bachelor of Laws (LL.B)",
      description:
        "Three-year law program covering constitutional law, criminal law, civil law, and legal procedures with practical training",
      duration: "3 Years",
      fees: "₹1,80,000/year",
      icon: <Scale className="w-6 h-6" />,
      highlights: [
        "Constitutional Law",
        "Criminal Law",
        "Civil Procedures",
        "Moot Court Training",
      ],
    },
    {
      title: "B.A. LL.B (Integrated)",
      description:
        "Five-year integrated program combining liberal arts education with comprehensive legal studies",
      duration: "5 Years",
      fees: "₹1,60,000/year",
      icon: <BookOpen className="w-6 h-6" />,
      highlights: [
        "Integrated Curriculum",
        "Liberal Arts Foundation",
        "Legal Specialization",
        "Research Opportunities",
      ],
    },
    {
      title: "Master of Laws (LL.M)",
      description:
        "Advanced legal studies with specialization in corporate law, international law, and human rights",
      duration: "1 Year",
      fees: "₹2,50,000/year",
      icon: <Gavel className="w-6 h-6" />,
      highlights: [
        "Corporate Law",
        "International Law",
        "Human Rights",
        "Advanced Research",
      ],
    },
    {
      title: "Ph.D Law",
      description:
        "Doctoral research in legal studies with focus on contemporary legal issues and jurisprudence",
      duration: "3-5 Years",
      fees: "₹2,00,000/year",
      icon: <Shield className="w-6 h-6" />,
      highlights: [
        "Legal Research",
        "Jurisprudence",
        "Contemporary Issues",
        "Scholarly Publication",
      ],
    },
  ];

  const departments = [
    {
      name: "Constitutional Law",
      head: "Dr. Rajesh Khanna",
      students: "200+",
      faculty: "8",
      specializations: [
        "Fundamental Rights",
        "Judicial Review",
        "Federal Structure",
        "Constitutional Amendments",
      ],
    },
    {
      name: "Criminal Law",
      head: "Dr. Priya Sharma",
      students: "180+",
      faculty: "7",
      specializations: [
        "Criminal Procedure",
        "Evidence Law",
        "Forensic Science",
        "Victim Rights",
      ],
    },
    {
      name: "Corporate Law",
      head: "Dr. Amit Gupta",
      students: "220+",
      faculty: "10",
      specializations: [
        "Company Law",
        "Securities Law",
        "Banking Law",
        "Mergers & Acquisitions",
      ],
    },
    {
      name: "International Law",
      head: "Dr. Sunita Patel",
      students: "150+",
      faculty: "8",
      specializations: [
        "Public International Law",
        "Private International Law",
        "Human Rights Law",
        "Trade Law",
      ],
    },
    {
      name: "Cyber Law",
      head: "Dr. Vikram Singh",
      students: "150+",
      faculty: "7",
      specializations: [
        "Information Technology Law",
        "Data Protection",
        "Cyber Crime",
        "E-commerce Law",
      ],
    },
  ];

  const facilities = [
    {
      title: "Moot Court Hall",
      description: "State-of-the-art courtroom for practical training",
      icon: <Gavel className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Legal Aid Clinic",
      description: "Free legal services to the community",
      icon: <Users className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Law Library",
      description: "Comprehensive legal database and resources",
      icon: <BookOpen className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const achievements = [
    {
      title: "Bar Exam Pass Rate",
      description: "95% students pass bar examination",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Moot Court Championships",
      description: "15+ national moot court victories",
      icon: <Star className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Legal Aid Cases",
      description: "1000+ pro bono cases handled",
      icon: <Scale className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    { label: "Students", value: "900+", description: "Future lawyers" },
    { label: "Faculty", value: "40", description: "Legal experts" },
    { label: "Programs", value: "4", description: "Degree levels" },
    { label: "Pass Rate", value: "95%", description: "Bar exam success" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Legal Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of
              <span className="block text-[var(--fsu-gold)]">Law</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Justice through knowledge with excellence in legal education, moot
              courts, legal aid clinics, and practical training opportunities
              for future legal professionals.
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

      {/* Programs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Law Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive legal education from undergraduate to doctoral
              levels with practical training opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-2 border-[var(--fsu-gold)]/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[var(--fsu-gold)]/10 rounded-lg">
                      {program.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[var(--fsu-crimson)]">
                        {program.title}
                      </CardTitle>
                      <div className="text-sm text-neutral-600">
                        {program.duration} • {program.fees}
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-2">
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

      {/* Departments Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Legal Departments
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Five specialized departments covering all major areas of legal
              study and practice.
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Legal Facilities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              State-of-the-art facilities for practical legal training and
              community service.
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

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Excellence
            </h2>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
              Leading legal education with outstanding academic and practical
              achievements.
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
            Ready to Serve Justice?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join our community of future legal professionals and advocates for
            justice. Apply now to begin your journey in law.
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
