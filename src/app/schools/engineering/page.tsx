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
  Building,
  Laptop,
  Cog,
  Zap,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Engineering & Technology | FS University",
  description:
    "Leading engineering education with B.Tech programs in Computer Science, Mechanical, Civil, and Electronics & Communication Engineering.",
};

export default function EngineeringSchoolPage() {
  const undergraduatePrograms = [
    {
      title: "B.Tech Computer Science",
      description:
        "Leading-edge curriculum in AI, Machine Learning, Data Science, and Software Development with industry collaborations",
      duration: "4 Years",
      fees: "₹2,50,000/year",
      icon: <Laptop className="w-6 h-6" />,
      highlights: [
        "AI & Machine Learning",
        "Software Development",
        "Data Science",
        "Industry Projects",
      ],
    },
    {
      title: "B.Tech Mechanical Engineering",
      description:
        "Comprehensive mechanical engineering with focus on design, manufacturing, robotics, and sustainable technologies",
      duration: "4 Years",
      fees: "₹2,40,000/year",
      icon: <Cog className="w-6 h-6" />,
      highlights: [
        "Manufacturing",
        "Robotics",
        "Design Engineering",
        "Sustainable Tech",
      ],
    },
    {
      title: "B.Tech Civil Engineering",
      description:
        "Infrastructure development, smart cities, earthquake engineering, and sustainable construction techniques",
      duration: "4 Years",
      fees: "₹2,30,000/year",
      icon: <Building className="w-6 h-6" />,
      highlights: [
        "Smart Cities",
        "Infrastructure",
        "Sustainable Construction",
        "Project Management",
      ],
    },
    {
      title: "B.Tech Electronics & Communication",
      description:
        "Advanced electronics, 5G communication, IoT, embedded systems, and semiconductor technology",
      duration: "4 Years",
      fees: "₹2,45,000/year",
      icon: <Radio className="w-6 h-6" />,
      highlights: [
        "5G Technology",
        "IoT Systems",
        "Embedded Systems",
        "Semiconductor Design",
      ],
    },
  ];

  const otherPrograms = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      description:
        "Computer programming, software development, mobile app development, and emerging technologies",
      duration: "3 Years",
      fees: "₹90,000/year",
      level: "Undergraduate",
    },
    {
      title: "Master of Technology (M.Tech)",
      description:
        "Advanced engineering studies with specialized research in various engineering disciplines",
      duration: "2 Years",
      fees: "₹2,80,000/year",
      level: "Postgraduate",
    },
    {
      title: "Master of Computer Applications (MCA)",
      description:
        "Advanced programming, software architecture, mobile app development, and emerging technologies",
      duration: "2 Years",
      fees: "₹2,20,000/year",
      level: "Postgraduate",
    },
    {
      title: "Ph.D Engineering",
      description:
        "Advanced research in Computer Science, Mechanical, Civil, Electronics & Communication Engineering and emerging technologies",
      duration: "3-5 Years",
      fees: "₹1,50,000/year",
      level: "Doctoral",
    },
  ];

  const departments = [
    {
      name: "Computer Science & Engineering",
      head: "Dr. Rajesh Kumar",
      students: "800+",
      faculty: "35",
      specializations: [
        "Artificial Intelligence",
        "Machine Learning",
        "Cybersecurity",
        "Software Engineering",
      ],
    },
    {
      name: "Mechanical Engineering",
      head: "Dr. Priya Sharma",
      students: "700+",
      faculty: "30",
      specializations: [
        "Robotics",
        "Manufacturing",
        "Thermal Engineering",
        "Design Engineering",
      ],
    },
    {
      name: "Civil Engineering",
      head: "Dr. Amit Patel",
      students: "600+",
      faculty: "28",
      specializations: [
        "Structural Engineering",
        "Transportation",
        "Environmental Engineering",
        "Geotechnical",
      ],
    },
    {
      name: "Electronics & Communication",
      head: "Dr. Sunita Verma",
      students: "500+",
      faculty: "27",
      specializations: [
        "Communication Systems",
        "VLSI Design",
        "Signal Processing",
        "Embedded Systems",
      ],
    },
  ];

  const achievements = [
    {
      title: "Industry Partnerships",
      description: "50+ MoUs with leading technology companies",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Placement Record",
      description: "95% placement rate with top companies",
      icon: <Star className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Research Publications",
      description: "200+ papers in international journals",
      icon: <BookOpen className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Innovation Labs",
      description: "15 specialized labs with modern equipment",
      icon: <Zap className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    { label: "Students", value: "3,000+", description: "Active learners" },
    { label: "Faculty", value: "120", description: "Experienced educators" },
    { label: "Programs", value: "8", description: "Comprehensive offerings" },
    { label: "Placement Rate", value: "95%", description: "Industry success" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Engineering Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of Engineering &
              <span className="block text-[var(--fsu-gold)]">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Building the innovators of tomorrow through cutting-edge
              engineering education, research excellence, and industry
              partnerships.
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

      {/* B.Tech Programs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              B.Tech Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Four comprehensive undergraduate engineering programs designed to
              prepare students for the challenges of modern technology and
              innovation.
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
                      <div className="flex gap-4 text-sm text-neutral-600">
                        <span>{program.duration}</span>
                        <span>{program.fees}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  <Button
                    className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
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
              Other Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Additional programs in computer applications, advanced engineering
              studies, and research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherPrograms.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                    {program.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {program.level}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 mb-4">
                    {program.description}
                  </p>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{program.duration}</span>
                    <span className="text-[var(--fsu-gold)]">
                      {program.fees}
                    </span>
                  </div>
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
              state-of-the-art facilities.
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
              Excellence in education, research, and industry collaboration.
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
            Ready to Start Your Engineering Journey?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Join FS University's School of Engineering & Technology and become
            part of the next generation of innovators.
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
