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
  Wheat,
  Tractor,
  Sprout,
  TreePine,
  Bug,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School of Agriculture | FS University",
  description:
    "Modern agricultural education with focus on sustainable farming practices, precision agriculture, and agricultural technology.",
};

export default function AgricultureSchoolPage() {
  const programs = [
    {
      title: "B.Sc Agriculture",
      description:
        "Comprehensive agricultural education covering crop production, soil science, plant protection, and sustainable farming practices",
      duration: "4 Years",
      fees: "₹1,20,000/year",
      icon: <Wheat className="w-6 h-6" />,
      highlights: [
        "Crop Production",
        "Soil Science",
        "Plant Protection",
        "Sustainable Farming",
      ],
    },
    {
      title: "M.Sc Agriculture",
      description:
        "Advanced agricultural studies with specialization in agronomy, horticulture, plant pathology, and agricultural engineering",
      duration: "2 Years",
      fees: "₹1,80,000/year",
      icon: <Sprout className="w-6 h-6" />,
      highlights: [
        "Agronomy",
        "Horticulture",
        "Plant Breeding",
        "Research Methods",
      ],
    },
    {
      title: "Ph.D Agriculture",
      description:
        "Doctoral research in agricultural sciences with focus on sustainable agriculture, precision farming, and biotechnology",
      duration: "3-5 Years",
      fees: "₹1,50,000/year",
      icon: <BookOpen className="w-6 h-6" />,
      highlights: [
        "Research Excellence",
        "Sustainable Agriculture",
        "Precision Farming",
        "Biotechnology",
      ],
    },
  ];

  const departments = [
    {
      name: "Department of Agronomy",
      head: "Dr. Ramesh Kumar",
      students: "300+",
      faculty: "12",
      specializations: [
        "Crop Production",
        "Soil Management",
        "Irrigation",
        "Fertilizer Management",
      ],
    },
    {
      name: "Department of Plant Pathology",
      head: "Dr. Sunita Sharma",
      students: "250+",
      faculty: "10",
      specializations: [
        "Plant Diseases",
        "Pest Management",
        "Biological Control",
        "Disease Diagnosis",
      ],
    },
    {
      name: "Department of Agricultural Engineering",
      head: "Dr. Vijay Patel",
      students: "200+",
      faculty: "8",
      specializations: [
        "Farm Machinery",
        "Irrigation Engineering",
        "Post-Harvest Technology",
        "Renewable Energy",
      ],
    },
    {
      name: "Department of Soil Science",
      head: "Dr. Anita Singh",
      students: "180+",
      faculty: "7",
      specializations: [
        "Soil Chemistry",
        "Soil Physics",
        "Soil Fertility",
        "Soil Conservation",
      ],
    },
    {
      name: "Department of Horticulture",
      head: "Dr. Manoj Gupta",
      students: "270+",
      faculty: "8",
      specializations: [
        "Fruit Production",
        "Vegetable Science",
        "Floriculture",
        "Post-Harvest Management",
      ],
    },
  ];

  const facilities = [
    {
      title: "Research Farm",
      description: "100-acre experimental farm with modern facilities",
      icon: <Tractor className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Greenhouse Complex",
      description: "Climate-controlled greenhouse for research",
      icon: <TreePine className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Plant Clinic",
      description: "Disease diagnosis and pest management center",
      icon: <Bug className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const achievements = [
    {
      title: "Crop Varieties Developed",
      description: "15+ high-yielding varieties released",
      icon: <Wheat className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Research Projects",
      description: "₹3 crores in funded research",
      icon: <Award className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
    {
      title: "Farmer Training",
      description: "5000+ farmers trained annually",
      icon: <Users className="w-8 h-8 text-[var(--fsu-gold)]" />,
    },
  ];

  const stats = [
    {
      label: "Students",
      value: "1,200+",
      description: "Future agriculturalists",
    },
    { label: "Faculty", value: "45", description: "Agricultural experts" },
    { label: "Research Farm", value: "100", description: "Acres" },
    { label: "Placement Rate", value: "90%", description: "Industry success" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Agricultural Innovation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School of
              <span className="block text-[var(--fsu-gold)]">Agriculture</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Cultivating sustainable futures through modern agricultural
              education with focus on sustainable farming practices, precision
              agriculture, and agricultural technology.
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
              Agricultural Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive agricultural education programs designed to prepare
              students for modern farming and agricultural innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              Our Departments
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Five specialized departments with expert faculty and modern
              agricultural facilities.
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
              State-of-the-art agricultural research facilities for hands-on
              learning and innovation.
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
              Leading agricultural education and research with meaningful impact
              on farming communities.
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
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join our community of future agriculturalists and contribute to
            sustainable farming practices. Apply now to begin your journey in
            agricultural innovation.
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
