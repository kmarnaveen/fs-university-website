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
  FlaskConical,
  Microscope,
  Pill,
  Heart,
  Building2,
  Beaker,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Pharmacy | FS University",
  description:
    "Pharmaceutical education with drug development research, clinical pharmacy, and industry partnerships for healthcare innovation.",
};

export default function PharmacySchoolPage() {
  const programs = [
    {
      title: "Diploma in Pharmacy (D.Pharm)",
      description:
        "Two-year diploma program providing fundamental pharmaceutical knowledge and practical training for pharmacy practice",
      duration: "2 Years",
      fees: "₹80,000/year",
      icon: <Pill className="w-6 h-6" />,
      highlights: [
        "Pharmaceutical Sciences",
        "Drug Dispensing",
        "Pharmacy Practice",
        "Healthcare Services",
      ],
    },
    {
      title: "Bachelor of Pharmacy (B.Pharm)",
      description:
        "Four-year undergraduate program covering pharmaceutical sciences, drug development, and clinical pharmacy",
      duration: "4 Years",
      fees: "₹1,20,000/year",
      icon: <FlaskConical className="w-6 h-6" />,
      highlights: [
        "Pharmaceutical Chemistry",
        "Pharmacology",
        "Drug Formulation",
        "Quality Control",
      ],
    },
    {
      title: "Master of Pharmacy (M.Pharm)",
      description:
        "Specialized postgraduate program in pharmaceutical research, drug development, and advanced clinical practice",
      duration: "2 Years",
      fees: "₹1,50,000/year",
      icon: <Microscope className="w-6 h-6" />,
      highlights: [
        "Pharmaceutical Research",
        "Drug Discovery",
        "Advanced Pharmacology",
        "Clinical Research",
      ],
    },
    {
      title: "Pharm.D (Doctor of Pharmacy)",
      description:
        "Six-year professional doctoral program for clinical pharmacy practice and patient care specialization",
      duration: "6 Years",
      fees: "₹2,00,000/year",
      icon: <Heart className="w-6 h-6" />,
      highlights: [
        "Clinical Pharmacy",
        "Patient Care",
        "Hospital Pharmacy",
        "Therapeutic Management",
      ],
    },
    {
      title: "Ph.D Pharmaceutical Sciences",
      description:
        "Doctoral research program in pharmaceutical innovation, drug development, and biotechnology applications",
      duration: "3-5 Years",
      fees: "₹2,50,000/year",
      icon: <Beaker className="w-6 h-6" />,
      highlights: [
        "Drug Discovery Research",
        "Pharmaceutical Biotechnology",
        "Nanotechnology",
        "Regulatory Sciences",
      ],
    },
  ];

  const departments = [
    {
      name: "Pharmaceutical Chemistry",
      head: "Dr. Arvind Kumar",
      students: "180+",
      faculty: "8",
      specializations: [
        "Drug Design & Synthesis",
        "Medicinal Chemistry",
        "Analytical Chemistry",
        "Quality Assurance",
      ],
    },
    {
      name: "Pharmacology & Toxicology",
      head: "Dr. Nisha Reddy",
      students: "200+",
      faculty: "10",
      specializations: [
        "Clinical Pharmacology",
        "Toxicology Studies",
        "Drug Safety",
        "Pharmacokinetics",
      ],
    },
    {
      name: "Pharmaceutics & Drug Delivery",
      head: "Dr. Suresh Patel",
      students: "150+",
      faculty: "7",
      specializations: [
        "Drug Formulation",
        "Novel Drug Delivery",
        "Nanotechnology",
        "Biopharmaceutics",
      ],
    },
    {
      name: "Clinical Pharmacy",
      head: "Dr. Kavita Sharma",
      students: "220+",
      faculty: "12",
      specializations: [
        "Hospital Pharmacy",
        "Community Pharmacy",
        "Pharmaceutical Care",
        "Drug Information",
      ],
    },
    {
      name: "Pharmaceutical Biotechnology",
      head: "Dr. Ramesh Singh",
      students: "160+",
      faculty: "9",
      specializations: [
        "Biopharmaceuticals",
        "Vaccine Development",
        "Protein Engineering",
        "Genetic Medicine",
      ],
    },
  ];

  const facilities = [
    {
      title: "Drug Research Laboratory",
      description:
        "Advanced facilities for pharmaceutical research and drug discovery",
      icon: <FlaskConical className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Clinical Pharmacy Units",
      description:
        "Hospital-based training in patient care and clinical practice",
      icon: <Heart className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Quality Control Labs",
      description: "State-of-the-art analytical and quality testing facilities",
      icon: <Microscope className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const achievements = [
    {
      title: "Industry Placement",
      description: "95% graduates placed in pharmaceutical companies",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Research Patents",
      description: "50+ patents filed in drug development",
      icon: <Beaker className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Clinical Partnerships",
      description: "200+ hospitals for clinical training",
      icon: <Building2 className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    { label: "Students", value: "910+", description: "Future pharmacists" },
    { label: "Faculty", value: "46", description: "Pharmacy experts" },
    { label: "Programs", value: "5", description: "Pharmaceutical degrees" },
    {
      label: "Placement Rate",
      value: "95%",
      description: "Industry placement",
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
              Healthcare Innovation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of
              <span className="block text-[var(--fsu-gold)]">Pharmacy</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Leading pharmaceutical education with cutting-edge research in
              drug development, clinical pharmacy practice, and healthcare
              innovation for improving patient outcomes.
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
              Pharmacy Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical education from diploma to doctoral
              levels preparing healthcare professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <CardTitle className="text-base text-[var(--fsu-crimson)]">
                        {program.title}
                      </CardTitle>
                      <div className="text-sm text-neutral-600">
                        {program.duration} • {program.fees}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-2 text-sm">
                        Key Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {program.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-[var(--fsu-gold)]/10 text-[var(--fsu-crimson)] text-xs"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                    size="sm"
                    asChild
                  >
                    <Link href="/apply">
                      Apply Now <ArrowRight className="w-3 h-3 ml-2" />
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
              Academic Departments
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Five specialized departments covering all aspects of
              pharmaceutical sciences and clinical practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-[var(--fsu-gold)] h-full"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                    {dept.name}
                  </CardTitle>
                  <div className="text-sm text-neutral-600">
                    Head: {dept.head}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[var(--fsu-crimson)]">
                        {dept.students}
                      </div>
                      <div className="text-xs text-neutral-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[var(--fsu-crimson)]">
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
              Research Facilities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Advanced laboratories and clinical facilities for pharmaceutical
              research and practice.
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
              Leading pharmaceutical education with industry recognition and
              research innovation.
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
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join our community of pharmaceutical innovators and make a
            difference in global healthcare. Apply now to begin your pharmacy
            career.
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
