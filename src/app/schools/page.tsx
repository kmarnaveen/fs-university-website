import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Schools & Faculties | FS University",
  description:
    "Explore our diverse schools and faculties offering world-class education and research opportunities.",
};

export default function SchoolsPage() {
  const schools = [
    {
      id: "engineering",
      name: "School of Engineering & Technology",
      tagline: "Building the Innovators of Tomorrow",
      description:
        "Cutting-edge programs in engineering disciplines with state-of-the-art labs and industry partnerships.",
      image: "/api/placeholder/600/400",
      programs: ["B.Tech", "M.Tech", "PhD"],
      href: "/schools/engineering",
    },
    {
      id: "business",
      name: "School of Business & Management",
      tagline: "Shaping Future Business Leaders",
      description:
        "Comprehensive business education with focus on entrepreneurship and global perspectives.",
      image: "/api/placeholder/600/400",
      programs: ["BBA", "MBA", "PhD"],
      href: "/schools/business",
    },
    {
      id: "law",
      name: "School of Law",
      tagline: "Justice Through Knowledge",
      description:
        "Excellence in legal education with moot courts and practical training opportunities.",
      image: "/api/placeholder/600/400",
      programs: ["LLB", "LLM", "PhD"],
      href: "/schools/law",
    },
    {
      id: "medicine",
      name: "School of Medicine & Health Sciences",
      tagline: "Healing Through Science",
      description:
        "Medical education with modern facilities and hospital partnerships for practical training.",
      image: "/api/placeholder/600/400",
      programs: ["MBBS", "MD", "MS"],
      href: "/schools/medicine",
    },
    {
      id: "arts",
      name: "School of Arts & Humanities",
      tagline: "Exploring Human Expression",
      description:
        "Liberal arts education fostering creativity, critical thinking, and cultural understanding.",
      image: "/api/placeholder/600/400",
      programs: ["BA", "MA", "PhD"],
      href: "/schools/arts",
    },
    {
      id: "science",
      name: "School of Pure & Applied Sciences",
      tagline: "Discovering the Natural World",
      description:
        "Research-driven programs in fundamental sciences with modern laboratory facilities.",
      image: "/api/placeholder/600/400",
      programs: ["BSc", "MSc", "PhD"],
      href: "/schools/science",
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
              Academic Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schools &
              <span className="block text-[var(--fsu-gold)]">Faculties</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Explore our diverse academic schools offering world-class
              education, cutting-edge research, and industry partnerships across
              multiple disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-6">
              Our Academic Schools
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Each school is dedicated to excellence in education, research, and
              service, providing students with comprehensive learning
              experiences that prepare them for global leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((school) => (
              <Card
                key={school.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-[var(--fsu-crimson)]/10 to-[var(--fsu-maroon)]/20 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--fsu-crimson)]/20 to-[var(--fsu-maroon)]/30"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {school.programs.map((program) => (
                        <Badge
                          key={program}
                          variant="secondary"
                          className="bg-white/90 text-[var(--fsu-crimson)] font-medium"
                        >
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-[var(--fsu-crimson)] group-hover:text-[var(--fsu-maroon)] transition-colors">
                    {school.name}
                  </CardTitle>
                  <p className="text-[var(--fsu-gold)] font-semibold italic text-lg">
                    {school.tagline}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {school.description}
                  </p>
                  <Link href={school.href}>
                    <Button className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold">
                      Explore School →
                    </Button>
                  </Link>
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
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the school that aligns with your passion and career goals.
            Our admissions team is here to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3"
              >
                Start Your Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
              >
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
