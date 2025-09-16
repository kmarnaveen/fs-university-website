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
        "Cutting-edge engineering programs with modern laboratory facilities and industry partnerships.",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
      programs: [
        "B.Tech Computer Science",
        "B.Tech Mechanical Engineering",
        "B.Tech Civil Engineering",
        "B.Tech Electronics & Communication",
        "BCA",
        "M.Tech",
        "MCA",
        "PhD Engineering",
      ],
      departments: [
        "Computer Science",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electronics & Communication",
      ],
      href: "/schools/engineering",
      studentCount: "3,000+",
      facultyCount: "120",
    },
    {
      id: "science",
      name: "School of Basic Science",
      tagline: "Discovering the Natural World",
      description:
        "Research-driven programs in fundamental sciences with modern laboratory facilities and interdisciplinary research opportunities.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      programs: [
        "B.Sc Physics, Chemistry, Mathematics",
        "B.Sc Biology",
        "M.Sc Physics",
        "M.Sc Chemistry",
        "M.Sc Mathematics",
        "PhD Science",
      ],
      departments: ["Physics", "Chemistry", "Mathematics", "Biology"],
      href: "/schools/science",
      studentCount: "1,800+",
      facultyCount: "75",
    },
    {
      id: "agriculture",
      name: "School of Agriculture",
      tagline: "Cultivating Sustainable Futures",
      description:
        "Modern agricultural education with focus on sustainable farming practices, precision agriculture, and agricultural technology.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
      programs: ["B.Sc Agriculture", "M.Sc Agriculture", "PhD Agriculture"],
      departments: [
        "Agronomy",
        "Plant Pathology",
        "Agricultural Engineering",
        "Soil Science",
        "Horticulture",
      ],
      href: "/schools/agriculture",
      studentCount: "1,200+",
      facultyCount: "45",
    },
    {
      id: "nursing",
      name: "School of Nursing",
      tagline: "Caring Through Professional Excellence",
      description:
        "Professional nursing education with clinical training, healthcare management, and modern nursing practices.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      programs: ["B.Sc Nursing"],
      departments: [
        "Medical-Surgical Nursing",
        "Community Health",
        "Maternal Health",
        "Psychiatric Nursing",
      ],
      href: "/schools/nursing",
      studentCount: "700+",
      facultyCount: "30",
    },
    {
      id: "commerce",
      name: "School of Commerce & Finance",
      tagline: "Excellence in Financial Education",
      description:
        "Comprehensive commerce education with focus on finance, accounting, digital commerce, and business analytics.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      programs: ["B.Com"],
      departments: [
        "Accounting & Finance",
        "Business Economics",
        "Banking",
        "Digital Commerce",
        "Taxation",
      ],
      href: "/schools/commerce",
      studentCount: "1,600+",
      facultyCount: "65",
    },
    {
      id: "business",
      name: "School of Business Management & Entrepreneurship",
      tagline: "Shaping Future Business Leaders",
      description:
        "Comprehensive business education with focus on entrepreneurship, digital transformation, and global business perspectives.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      programs: ["BBA", "MBA", "PhD Management"],
      departments: [
        "Finance",
        "Marketing",
        "Human Resources",
        "Operations",
        "Entrepreneurship",
      ],
      href: "/schools/business",
      studentCount: "2,500+",
      facultyCount: "80",
    },
    {
      id: "arts",
      name: "School of Art & Humanities",
      tagline: "Exploring Human Expression & Culture",
      description:
        "Liberal arts education fostering creativity, critical thinking, cultural understanding, and interdisciplinary research.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      programs: ["B.A", "M.A", "PhD Arts & Humanities"],
      departments: [
        "English Literature",
        "History",
        "Psychology",
        "Sociology",
        "Philosophy",
      ],
      href: "/schools/arts",
      studentCount: "1,500+",
      facultyCount: "60",
    },
    {
      id: "law",
      name: "School of Law",
      tagline: "Justice Through Knowledge",
      description:
        "Excellence in legal education with moot courts, legal aid clinics, and practical training opportunities.",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop",
      programs: ["LL.B", "B.A. LL.B", "LL.M", "PhD Law"],
      departments: [
        "Constitutional Law",
        "Criminal Law",
        "Corporate Law",
        "International Law",
        "Cyber Law",
      ],
      href: "/schools/law",
      studentCount: "900+",
      facultyCount: "40",
    },
    {
      id: "education",
      name: "School of Education",
      tagline: "Shaping Future Educators",
      description:
        "Teacher training programs with modern pedagogical methods, educational technology, and inclusive education practices.",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      programs: ["D.El.Ed", "B.Ed", "B.El.Ed", "M.Ed", "PhD Education"],
      departments: [
        "Educational Psychology",
        "Curriculum Studies",
        "Educational Technology",
        "Special Education",
      ],
      href: "/schools/education",
      studentCount: "1,100+",
      facultyCount: "50",
    },
    {
      id: "pharmacy",
      name: "School of Pharmacy",
      tagline: "Advancing Healthcare Through Pharmaceutical Sciences",
      description:
        "Comprehensive pharmaceutical education with modern labs, drug development research, and industry partnerships.",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
      programs: ["D.Pharm", "PhD Pharmacy"],
      departments: [
        "Pharmacology",
        "Pharmaceutical Chemistry",
        "Pharmacognosy",
        "Clinical Pharmacy",
      ],
      href: "/schools/pharmacy",
      studentCount: "800+",
      facultyCount: "35",
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
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--fsu-crimson)]/40 to-[var(--fsu-maroon)]/50"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {school.programs.slice(0, 3).map((program) => (
                        <Badge
                          key={program}
                          variant="secondary"
                          className="bg-white/90 text-[var(--fsu-crimson)] font-medium text-xs"
                        >
                          {program}
                        </Badge>
                      ))}
                      {school.programs.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-[var(--fsu-crimson)] font-medium text-xs"
                        >
                          +{school.programs.length - 3} more
                        </Badge>
                      )}
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
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {school.description}
                  </p>

                  {/* School Stats */}
                  <div className="flex justify-between items-center mb-4 p-3 bg-neutral-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--fsu-crimson)]">
                        {school.studentCount}
                      </div>
                      <div className="text-xs text-neutral-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--fsu-crimson)]">
                        {school.facultyCount}
                      </div>
                      <div className="text-xs text-neutral-600">Faculty</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--fsu-crimson)]">
                        {school.departments?.length || school.programs.length}
                      </div>
                      <div className="text-xs text-neutral-600">Depts</div>
                    </div>
                  </div>

                  {/* Departments */}
                  {school.departments && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[var(--fsu-crimson)] mb-2">
                        Key Departments:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {school.departments.slice(0, 3).map((dept) => (
                          <Badge
                            key={dept}
                            variant="outline"
                            className="text-xs border-[var(--fsu-gold)] text-[var(--fsu-crimson)]"
                          >
                            {dept}
                          </Badge>
                        ))}
                        {school.departments.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-[var(--fsu-gold)] text-[var(--fsu-crimson)]"
                          >
                            +{school.departments.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

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
