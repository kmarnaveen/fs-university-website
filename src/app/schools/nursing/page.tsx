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
  Heart,
  Activity,
  Stethoscope,
  Hospital,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Nursing | FS University",
  description:
    "Professional nursing education with clinical training, healthcare management, and modern nursing practices.",
};

export default function NursingSchoolPage() {
  const programs = [
    {
      title: "B.Sc Nursing",
      description:
        "Comprehensive nursing education covering medical-surgical nursing, community health, maternal health, and psychiatric nursing with extensive clinical training",
      duration: "4 Years",
      fees: "₹1,50,000/year",
      icon: <Heart className="w-6 h-6" />,
      highlights: [
        "Clinical Training",
        "Patient Care",
        "Medical-Surgical Nursing",
        "Community Health",
      ],
    },
  ];

  const specializations = [
    {
      name: "Medical-Surgical Nursing",
      description: "Critical care, surgical procedures, and patient management",
      icon: <Stethoscope className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Community Health Nursing",
      description: "Public health, preventive care, and community wellness",
      icon: <Users className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Maternal & Child Health",
      description: "Obstetric care, pediatric nursing, and family health",
      icon: <Heart className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      name: "Psychiatric Nursing",
      description: "Mental health care, behavioral therapy, and counseling",
      icon: <Activity className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const departments = [
    {
      name: "Medical-Surgical Nursing",
      head: "Dr. Priya Sharma",
      students: "200+",
      faculty: "8",
      specializations: [
        "Critical Care",
        "Surgical Nursing",
        "Emergency Care",
        "ICU Management",
      ],
    },
    {
      name: "Community Health Nursing",
      head: "Dr. Sunita Patel",
      students: "150+",
      faculty: "6",
      specializations: [
        "Public Health",
        "Preventive Care",
        "Health Education",
        "Epidemiology",
      ],
    },
    {
      name: "Maternal & Child Health",
      head: "Dr. Anjali Singh",
      students: "180+",
      faculty: "8",
      specializations: [
        "Obstetric Care",
        "Pediatric Nursing",
        "Neonatal Care",
        "Family Planning",
      ],
    },
    {
      name: "Psychiatric Nursing",
      head: "Dr. Rajesh Kumar",
      students: "170+",
      faculty: "8",
      specializations: [
        "Mental Health",
        "Behavioral Therapy",
        "Counseling",
        "Rehabilitation",
      ],
    },
  ];

  const clinicalPartners = [
    {
      name: "City General Hospital",
      type: "Multi-specialty Hospital",
      beds: "500+",
      specialties: ["Emergency", "Surgery", "ICU", "Pediatrics"],
    },
    {
      name: "Maternal Care Center",
      type: "Specialized Hospital",
      beds: "200+",
      specialties: ["Obstetrics", "Gynecology", "NICU", "Pediatrics"],
    },
    {
      name: "Community Health Centers",
      type: "Primary Healthcare",
      beds: "50+",
      specialties: ["General Medicine", "Preventive Care", "Health Education"],
    },
  ];

  const achievements = [
    {
      title: "RNCP Pass Rate",
      description: "95% first-time pass rate",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Clinical Partnerships",
      description: "10+ hospital partnerships",
      icon: <Hospital className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Graduate Employment",
      description: "98% employment rate within 6 months",
      icon: <UserCheck className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    { label: "Students", value: "700+", description: "Future nurses" },
    { label: "Faculty", value: "30", description: "Nursing experts" },
    {
      label: "Clinical Partners",
      value: "10",
      description: "Hospital partnerships",
    },
    { label: "Pass Rate", value: "95%", description: "RNCP success" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Healthcare Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of
              <span className="block text-[var(--fsu-gold)]">Nursing</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Caring through professional excellence with comprehensive nursing
              education, clinical training, healthcare management, and modern
              nursing practices.
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
              Nursing Program
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive Bachelor of Science in Nursing program with
              extensive clinical training and professional development.
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
              Nursing Specializations
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Four core nursing specializations providing comprehensive
              healthcare education and clinical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="text-center p-6 border-2 border-[var(--fsu-gold)]/20 hover:border-[var(--fsu-gold)]/50 transition-colors"
              >
                <div className="mb-4 flex justify-center">{spec.icon}</div>
                <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-3">
                  {spec.name}
                </h3>
                <p className="text-neutral-600">{spec.description}</p>
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
              Four specialized nursing departments with expert faculty and
              clinical training facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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

      {/* Clinical Partners Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Clinical Training Partners
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hands-on clinical experience at leading healthcare institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clinicalPartners.map((partner, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                    {partner.name}
                  </CardTitle>
                  <div className="text-sm text-neutral-600">{partner.type}</div>
                  <div className="text-sm font-semibold text-neutral-800">
                    {partner.beds} beds
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {partner.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
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
              Our Excellence
            </h2>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
              Leading nursing education with outstanding graduate outcomes and
              professional recognition.
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
            Ready to Care for Others?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join our community of compassionate healthcare professionals. Apply
            now to begin your journey in nursing and make a difference in
            people's lives.
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
