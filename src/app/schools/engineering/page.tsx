import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "School of Engineering & Technology | FS University",
  description:
    "Building the Innovators of Tomorrow - Explore our cutting-edge engineering programs and state-of-the-art facilities.",
};

export default function EngineeringSchoolPage() {
  const undergraduatePrograms = [
    {
      name: "B.Tech in Computer Science & Engineering",
      duration: "4 Years",
      href: "/programs/btech-cse",
    },
    {
      name: "B.Tech in Civil Engineering",
      duration: "4 Years",
      href: "/programs/btech-civil",
    },
    {
      name: "B.Tech in Mechanical Engineering",
      duration: "4 Years",
      href: "/programs/btech-mechanical",
    },
    {
      name: "B.Tech in Electrical Engineering",
      duration: "4 Years",
      href: "/programs/btech-electrical",
    },
    {
      name: "B.Tech in Electronics & Communication",
      duration: "4 Years",
      href: "/programs/btech-ece",
    },
  ];

  const postgraduatePrograms = [
    {
      name: "M.Tech in Computer Science & Engineering",
      duration: "2 Years",
      href: "/programs/mtech-cse",
    },
    {
      name: "M.Tech in Structural Engineering",
      duration: "2 Years",
      href: "/programs/mtech-structural",
    },
    {
      name: "M.Tech in Thermal Engineering",
      duration: "2 Years",
      href: "/programs/mtech-thermal",
    },
    {
      name: "M.Tech in Power Systems",
      duration: "2 Years",
      href: "/programs/mtech-power",
    },
  ];

  const doctoralPrograms = [
    {
      name: "PhD in Engineering Sciences",
      duration: "3-5 Years",
      href: "/programs/phd-engineering",
    },
    {
      name: "PhD in Computer Science",
      duration: "3-5 Years",
      href: "/programs/phd-cs",
    },
    {
      name: "PhD in Civil Engineering",
      duration: "3-5 Years",
      href: "/programs/phd-civil",
    },
  ];

  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & HOD",
      expertise: "Artificial Intelligence & Machine Learning",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      expertise: "Structural Engineering & Seismic Design",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Dr. Amit Patel",
      designation: "Assistant Professor",
      expertise: "Renewable Energy Systems",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Dr. Sunita Reddy",
      designation: "Professor",
      expertise: "VLSI Design & Embedded Systems",
      image: "/api/placeholder/200/200",
    },
  ];

  const achievements = [
    {
      title: "Smart City IoT Project",
      description:
        "Final year students developed an award-winning IoT solution for smart traffic management, recognized at National Innovation Contest 2024.",
      category: "Student Project",
    },
    {
      title: "Earthquake-Resistant Buildings",
      description:
        "Research paper on innovative earthquake-resistant building design published in International Journal of Civil Engineering.",
      category: "Research Publication",
    },
    {
      title: "Robotics Competition Victory",
      description:
        "Our robotics team secured first place at the Inter-University Robotics Championship 2024.",
      category: "Competition Win",
    },
  ];

  const facilities = [
    "Advanced Computer Labs with Latest Software",
    "Civil Engineering Materials Testing Lab",
    "Mechanical Workshop with CNC Machines",
    "Electronics & Communication Lab",
    "Robotics & Automation Lab",
    "CAD/CAM Design Studio",
    "Renewable Energy Research Center",
    "Structural Testing Laboratory",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Engineering Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of Engineering &
              <span className="block text-[var(--fsu-gold)]">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8 font-light">
              Building the Innovators of Tomorrow
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions">
                <Button
                  size="lg"
                  className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
                >
                  Apply Now
                </Button>
              </Link>
              <Link href="#programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Dean */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-[var(--fsu-crimson)]/10 to-[var(--fsu-maroon)]/20 rounded-full mb-6 flex items-center justify-center shadow-lg">
                <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-6xl">👨‍🏫</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
                A Welcome from the Dean
              </h2>
              <div className="text-lg text-neutral-700 leading-relaxed space-y-4">
                <p>
                  Welcome to the School of Engineering &amp; Technology at FS
                  University. Our mission is to nurture innovative minds and
                  create solutions for tomorrow&apos;s challenges.
                </p>
                <p>
                  With state-of-the-art facilities, world-class faculty, and
                  strong industry partnerships, we provide our students with the
                  knowledge, skills, and experience needed to excel in their
                  chosen fields.
                </p>
                <p>
                  Join us in shaping the future of technology and engineering.
                </p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-[var(--fsu-crimson)] text-lg">
                  Dr. Rajesh Kumar
                </p>
                <p className="text-[var(--fsu-gold)] font-medium">
                  Dean, School of Engineering & Technology
                </p>
                <Link href="/faculty/rajesh-kumar">
                  <Button
                    variant="link"
                    className="p-0 text-[var(--fsu-crimson)] font-semibold"
                  >
                    View Full Profile →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section id="programs" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Our Academic Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of engineering programs
              designed to meet industry demands and future challenges.
            </p>
          </div>

          {/* Undergraduate Programs */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--fsu-crimson)] mb-8 flex items-center">
              <span className="w-10 h-10 bg-[var(--fsu-crimson)]/10 text-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-sm font-bold mr-4">
                UG
              </span>
              Undergraduate Programs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {undergraduatePrograms.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                      {program.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="w-fit bg-[var(--fsu-gold)]/10 text-[var(--fsu-crimson)]"
                    >
                      {program.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href={program.href}>
                      <Button className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] font-semibold">
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--fsu-crimson)] mb-8 flex items-center">
              <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                PG
              </span>
              Postgraduate Programs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {postgraduatePrograms.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                      {program.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="w-fit bg-green-100 text-green-700"
                    >
                      {program.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href={program.href}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 font-semibold">
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Doctoral Programs */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--fsu-crimson)] mb-8 flex items-center">
              <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                PhD
              </span>
              Doctoral Programs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctoralPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                      {program.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="w-fit bg-purple-100 text-purple-700"
                    >
                      {program.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href={program.href}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 font-semibold">
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* State-of-the-Art Facilities */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Labs & Infrastructure
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art facilities provide students with hands-on
              experience using the latest technology and equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[var(--fsu-crimson)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <p className="font-medium text-[var(--fsu-crimson)]">
                    {facility}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Facility Gallery Placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-video bg-gradient-to-br from-[var(--fsu-crimson)]/10 to-[var(--fsu-maroon)]/20 rounded-lg flex items-center justify-center shadow-lg">
              <p className="text-[var(--fsu-crimson)] font-medium">
                Computer Lab
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center shadow-lg">
              <p className="text-green-700 font-medium">Mechanical Workshop</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-violet-200 rounded-lg flex items-center justify-center shadow-lg">
              <p className="text-purple-700 font-medium">Electronics Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Faculty */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Meet Our Faculty
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Learn from industry experts and renowned researchers who are
              passionate about shaping the next generation of engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[var(--fsu-crimson)]/10 to-[var(--fsu-maroon)]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <h3 className="font-bold text-[var(--fsu-crimson)] mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-[var(--fsu-gold)] text-sm mb-2 font-medium">
                    {faculty.designation}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {faculty.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faculty">
              <Button
                variant="outline"
                className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)]/5 font-semibold"
              >
                View All Faculty
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Achievements & Research */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Innovation in Action
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Discover the groundbreaking projects, research, and achievements
              that showcase our students&apos; and faculty&apos;s excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                    >
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[var(--fsu-crimson)]">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Engineering Journey?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our community of innovators and problem-solvers. Apply now to
            become part of the next generation of engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
              >
                Apply for Admission
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
