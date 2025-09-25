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
  Apple,
  Lightbulb,
  Monitor,
  Heart,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Education | FS University",
  description:
    "Teacher training programs with modern pedagogical methods, educational technology, and inclusive education practices.",
};

export default function EducationSchoolPage() {
  const programs = [
    {
      title: "Diploma in Elementary Education (D.El.Ed)",
      description:
        "Two-year diploma program for primary school teacher training with focus on child psychology and teaching methods",
      duration: "2 Years",
      fees: "₹50,000/year",
      icon: <Apple className="w-6 h-6" />,
      highlights: [
        "Primary Education",
        "Child Psychology",
        "Teaching Methods",
        "Classroom Management",
      ],
    },
    {
      title: "Bachelor of Education (B.Ed)",
      description:
        "Professional teaching qualification for secondary school teachers with modern pedagogical approaches",
      duration: "2 Years",
      fees: "₹75,000/year",
      icon: <GraduationCap className="w-6 h-6" />,
      highlights: [
        "Secondary Education",
        "Subject Specialization",
        "Pedagogical Training",
        "Teaching Practice",
      ],
    },
    {
      title: "Bachelor of Elementary Education (B.El.Ed)",
      description:
        "Integrated four-year program combining subject knowledge with elementary education pedagogy",
      duration: "4 Years",
      fees: "₹60,000/year",
      icon: <BookOpen className="w-6 h-6" />,
      highlights: [
        "Elementary Education",
        "Integrated Curriculum",
        "Subject Knowledge",
        "Practical Training",
      ],
    },
    {
      title: "Master of Education (M.Ed)",
      description:
        "Advanced studies in educational administration, curriculum development, and educational research",
      duration: "2 Years",
      fees: "₹90,000/year",
      icon: <Lightbulb className="w-6 h-6" />,
      highlights: [
        "Educational Administration",
        "Curriculum Development",
        "Research Methods",
        "Leadership Skills",
      ],
    },
    {
      title: "Ph.D Education",
      description:
        "Doctoral research in education with focus on educational innovation, policy, and teacher effectiveness",
      duration: "3-5 Years",
      fees: "₹1,50,000/year",
      icon: <Brain className="w-6 h-6" />,
      highlights: [
        "Educational Research",
        "Policy Studies",
        "Innovation in Education",
        "Teacher Effectiveness",
      ],
    },
  ];

  const departments = [
    {
      name: "Educational Psychology",
      head: "Dr. Meera Sharma",
      students: "250+",
      faculty: "12",
      specializations: [
        "Child Development",
        "Learning Psychology",
        "Behavioral Management",
        "Special Needs Education",
      ],
    },
    {
      name: "Curriculum Studies",
      head: "Dr. Rajesh Kumar",
      students: "300+",
      faculty: "15",
      specializations: [
        "Curriculum Design",
        "Assessment Methods",
        "Subject Pedagogy",
        "Educational Standards",
      ],
    },
    {
      name: "Educational Technology",
      head: "Dr. Priya Patel",
      students: "200+",
      faculty: "10",
      specializations: [
        "Digital Learning",
        "E-learning Platforms",
        "Educational Software",
        "Technology Integration",
      ],
    },
    {
      name: "Special Education",
      head: "Dr. Sunita Singh",
      students: "350+",
      faculty: "13",
      specializations: [
        "Inclusive Education",
        "Disability Studies",
        "Adaptive Teaching",
        "Special Needs Support",
      ],
    },
  ];

  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Technology-enabled classrooms for modern teaching",
      icon: <Monitor className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Teaching Practice Schools",
      description: "Partner schools for practical training",
      icon: <Users className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Resource Center",
      description: "Educational materials and research library",
      icon: <BookOpen className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const achievements = [
    {
      title: "Teacher Placement",
      description: "98% graduates placed in schools",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Innovation Awards",
      description: "25+ educational innovation awards",
      icon: <Lightbulb className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Community Impact",
      description: "500+ schools impacted by our graduates",
      icon: <Heart className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    { label: "Students", value: "1,100+", description: "Future educators" },
    { label: "Faculty", value: "50", description: "Education experts" },
    { label: "Programs", value: "5", description: "Teaching qualifications" },
    {
      label: "Placement Rate",
      value: "98%",
      description: "Teaching positions",
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
              Educational Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of
              <span className="block text-[var(--fsu-gold)]">Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Shaping future educators through comprehensive teacher training
              programs with modern pedagogical methods, educational technology,
              and inclusive education practices.
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
              Education Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive teacher education programs from diploma to doctoral
              levels preparing future educators.
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
              Four specialized departments focusing on different aspects of
              education and teacher development.
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

      {/* Facilities Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Training Facilities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Modern facilities for practical teacher training and educational
              research.
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
              Our Impact
            </h2>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
              Leading teacher education with outstanding graduate outcomes and
              educational innovation.
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
            Ready to Shape Future Minds?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join our community of dedicated educators and make a difference in
            students' lives. Apply now to begin your teaching career.
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
