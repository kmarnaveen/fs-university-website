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
  Atom,
  FlaskConical,
  Calculator,
  Microscope,
  Dna,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Basic Science | FS University",
  description:
    "Research-driven programs in fundamental sciences with modern laboratory facilities and interdisciplinary research opportunities.",
};

export default function BasicSciencePage() {
  const undergraduatePrograms = [
    {
      title: "B.Sc Physics",
      description:
        "Comprehensive physics education covering theoretical and experimental physics with modern research opportunities",
      duration: "3 Years",
      fees: "₹80,000/year",
      icon: <Atom className="w-6 h-6" />,
      highlights: [
        "Quantum Physics",
        "Nuclear Physics",
        "Astrophysics",
        "Research Projects",
      ],
    },
    {
      title: "B.Sc Chemistry",
      description:
        "Modern chemistry curriculum with organic, inorganic, physical chemistry and analytical techniques",
      duration: "3 Years",
      fees: "₹85,000/year",
      icon: <FlaskConical className="w-6 h-6" />,
      highlights: [
        "Organic Chemistry",
        "Analytical Chemistry",
        "Green Chemistry",
        "Laboratory Training",
      ],
    },
    {
      title: "B.Sc Mathematics",
      description:
        "Pure and applied mathematics with computational methods and statistical analysis",
      duration: "3 Years",
      fees: "₹75,000/year",
      icon: <Calculator className="w-6 h-6" />,
      highlights: [
        "Pure Mathematics",
        "Applied Mathematics",
        "Statistics",
        "Computational Methods",
      ],
    },
    {
      title: "B.Sc Biology",
      description:
        "Life sciences education covering botany, zoology, microbiology, and biotechnology",
      duration: "3 Years",
      fees: "₹90,000/year",
      icon: <Dna className="w-6 h-6" />,
      highlights: [
        "Molecular Biology",
        "Biotechnology",
        "Ecology",
        "Research Methods",
      ],
    },
  ];

  const postgraduatePrograms = [
    {
      title: "M.Sc Physics",
      description:
        "Advanced physics studies with specialization in theoretical physics, condensed matter, and nuclear physics",
      duration: "2 Years",
      fees: "₹1,20,000/year",
      level: "Postgraduate",
    },
    {
      title: "M.Sc Chemistry",
      description:
        "Advanced chemistry with research in organic synthesis, materials chemistry, and analytical methods",
      duration: "2 Years",
      fees: "₹1,25,000/year",
      level: "Postgraduate",
    },
    {
      title: "M.Sc Mathematics",
      description:
        "Advanced mathematical studies in algebra, analysis, topology, and applied mathematics",
      duration: "2 Years",
      fees: "₹1,10,000/year",
      level: "Postgraduate",
    },
    {
      title: "Ph.D Science",
      description:
        "Doctoral research in Physics, Chemistry, Mathematics, and Biology with cutting-edge research facilities",
      duration: "3-5 Years",
      fees: "₹1,50,000/year",
      level: "Doctoral",
    },
  ];

  const departments = [
    {
      name: "Department of Physics",
      head: "Dr. Rajesh Sharma",
      students: "450+",
      faculty: "20",
      specializations: [
        "Theoretical Physics",
        "Nuclear Physics",
        "Astrophysics",
        "Condensed Matter",
      ],
    },
    {
      name: "Department of Chemistry",
      head: "Dr. Priya Patel",
      students: "500+",
      faculty: "22",
      specializations: [
        "Organic Chemistry",
        "Physical Chemistry",
        "Analytical Chemistry",
        "Green Chemistry",
      ],
    },
    {
      name: "Department of Mathematics",
      head: "Dr. Amit Kumar",
      students: "400+",
      faculty: "18",
      specializations: [
        "Pure Mathematics",
        "Applied Mathematics",
        "Statistics",
        "Computational Math",
      ],
    },
    {
      name: "Department of Biology",
      head: "Dr. Sunita Singh",
      students: "450+",
      faculty: "15",
      specializations: [
        "Molecular Biology",
        "Biotechnology",
        "Ecology",
        "Microbiology",
      ],
    },
  ];

  const achievements = [
    {
      title: "Research Publications",
      description: "300+ papers in international journals",
      icon: <BookOpen className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Research Grants",
      description: "₹5 crores in funded research projects",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Modern Laboratories",
      description: "20 well-equipped research labs",
      icon: <Microscope className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    { label: "Students", value: "1,800+", description: "Future scientists" },
    { label: "Faculty", value: "75", description: "Research experts" },
    { label: "Programs", value: "8", description: "Science disciplines" },
    { label: "Research Labs", value: "20", description: "Modern facilities" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Scientific Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of Basic
              <span className="block text-[var(--fsu-gold)]">Science</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Discovering the natural world through research-driven education in
              fundamental sciences with modern laboratory facilities and
              interdisciplinary research opportunities.
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

      {/* Undergraduate Programs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Undergraduate Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Four comprehensive undergraduate science programs designed to
              prepare students for research and innovation in fundamental
              sciences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {undergraduatePrograms.map((program, index) => (
              <Card
                key={index}
                className="border-2 border-[var(--fsu-gold)]/30 hover:shadow-lg transition-all duration-300"
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

      {/* Other Programs Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Postgraduate & Doctoral Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Advanced programs in science with specialized research
              opportunities and cutting-edge facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {postgraduatePrograms.map((program, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">{program.level}</Badge>
                  <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                    {program.title}
                  </CardTitle>
                  <div className="text-sm text-neutral-600">
                    {program.duration} • {program.fees}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                    asChild
                  >
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                </CardContent>
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
              Four specialized departments with expert faculty and
              state-of-the-art research facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-[var(--fsu-gold)]"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--fsu-crimson)]">
                    {dept.name}
                  </CardTitle>
                  <div className="text-sm text-neutral-600">
                    Head: {dept.head}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--fsu-crimson)]">
                        {dept.students}
                      </div>
                      <div className="text-sm text-neutral-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--fsu-crimson)]">
                        {dept.faculty}
                      </div>
                      <div className="text-sm text-neutral-600">Faculty</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-2">
                      Specializations:
                    </div>
                    <div className="flex flex-wrap gap-2">
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

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
              Excellence in research, education, and scientific innovation.
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
            Ready to Explore Science?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join our community of future scientists and researchers. Apply now
            to begin your journey in scientific discovery and innovation.
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
