"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  Filter,
  Clock,
  Award,
  ArrowRight,
  Star,
  X,
} from "lucide-react";

// Program data with exact 29 programs from user specification
const allPrograms = [
  // Diploma Programs
  {
    id: "dpharm",
    title: "Diploma in Pharmacy",
    description:
      "Comprehensive pharmaceutical education covering drug preparation, dispensing, and patient care",
    duration: "2 Years",
    level: "Diploma",
    category: "Healthcare",
    school: "School of Pharmacy",
    fees: "₹1,20,000/year",
    eligibility: "12th Science with PCM/PCB",
    featured: true,
    slug: "dpharm",
  },
  {
    id: "deled",
    title: "Diploma in Elementary Education",
    description:
      "Teacher training program focused on primary education methods and child psychology",
    duration: "2 Years",
    level: "Diploma",
    category: "Education",
    school: "School of Education",
    fees: "₹60,000/year",
    eligibility: "12th Any Stream",
    featured: false,
    slug: "deled",
  },

  // Undergraduate Programs
  {
    id: "btech-cse",
    title: "B.Tech Computer Science & Engineering",
    description:
      "Cutting-edge computer science program with AI, ML, and software development focus",
    duration: "4 Years",
    level: "Undergraduate",
    category: "Technology",
    school: "School of Engineering & Technology",
    fees: "₹1,40,000/year",
    eligibility: "12th PCM with JEE/Entrance",
    featured: true,
    slug: "btech-computer-science",
  },
  {
    id: "btech-mech",
    title: "B.Tech Mechanical Engineering",
    description:
      "Core mechanical engineering with modern manufacturing and automation technologies",
    duration: "4 Years",
    level: "Undergraduate",
    category: "Technology",
    school: "School of Engineering & Technology",
    fees: "₹1,30,000/year",
    eligibility: "12th PCM with JEE/Entrance",
    featured: true,
    slug: "btech-mechanical-engineering",
  },
  {
    id: "btech-civil",
    title: "B.Tech Civil Engineering",
    description:
      "Infrastructure development, construction technology, and sustainable building practices",
    duration: "4 Years",
    level: "Undergraduate",
    category: "Technology",
    school: "School of Engineering & Technology",
    fees: "₹1,25,000/year",
    eligibility: "12th PCM with JEE/Entrance",
    featured: false,
    slug: "btech-civil-engineering",
  },
  {
    id: "btech-ece",
    title: "B.Tech Electronics & Communication",
    description:
      "Electronics, telecommunications, and digital communication systems",
    duration: "4 Years",
    level: "Undergraduate",
    category: "Technology",
    school: "School of Engineering & Technology",
    fees: "₹1,35,000/year",
    eligibility: "12th PCM with JEE/Entrance",
    featured: false,
    slug: "btech-electronics-communication",
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications",
    description:
      "Computer applications, programming, and software development fundamentals",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Technology",
    school: "School of Computer Science",
    fees: "₹90,000/year",
    eligibility: "12th Any Stream with Math",
    featured: false,
    slug: "bca",
  },
  {
    id: "bpharm",
    title: "Bachelor of Pharmacy",
    description:
      "Pharmaceutical sciences, drug development, and clinical pharmacy practice",
    duration: "4 Years",
    level: "Undergraduate",
    category: "Healthcare",
    school: "School of Pharmacy",
    fees: "₹1,50,000/year",
    eligibility: "12th PCB/PCM",
    featured: true,
    slug: "bpharm",
  },
  {
    id: "bba",
    title: "Bachelor of Business Administration",
    description:
      "Business management, entrepreneurship, and leadership development",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Business",
    school: "School of Business Management",
    fees: "₹1,00,000/year",
    eligibility: "12th Any Stream",
    featured: true,
    slug: "bba",
  },
  {
    id: "bcom",
    title: "Bachelor of Commerce",
    description: "Commerce, accounting, finance, and business fundamentals",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Business",
    school: "School of Commerce",
    fees: "₹60,000/year",
    eligibility: "12th Any Stream",
    featured: false,
    slug: "bcom",
  },
  {
    id: "ba",
    title: "Bachelor of Arts",
    description: "Liberal arts education with diverse specialization options",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Liberal Arts",
    school: "School of Liberal Arts",
    fees: "₹50,000/year",
    eligibility: "12th Any Stream",
    featured: false,
    slug: "ba",
  },
  {
    id: "bsc-math",
    title: "B.Sc Mathematics",
    description: "Pure and applied mathematics with computational focus",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Science",
    school: "School of Sciences",
    fees: "₹65,000/year",
    eligibility: "12th PCM",
    featured: false,
    slug: "bsc-mathematics",
  },
  {
    id: "bsc-physics",
    title: "B.Sc Physics",
    description:
      "Theoretical and experimental physics with modern applications",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Science",
    school: "School of Sciences",
    fees: "₹70,000/year",
    eligibility: "12th PCM",
    featured: false,
    slug: "bsc-physics",
  },
  {
    id: "bsc-chemistry",
    title: "B.Sc Chemistry",
    description:
      "Chemical sciences with laboratory research and industrial applications",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Science",
    school: "School of Sciences",
    fees: "₹75,000/year",
    eligibility: "12th PCM/PCB",
    featured: false,
    slug: "bsc-chemistry",
  },
  {
    id: "bsc-biology",
    title: "B.Sc Biology",
    description: "Life sciences, biotechnology, and biological research",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Science",
    school: "School of Life Sciences",
    fees: "₹80,000/year",
    eligibility: "12th PCB",
    featured: false,
    slug: "bsc-biology",
  },
  {
    id: "bsc-botany",
    title: "B.Sc Botany",
    description: "Plant sciences, ecology, and environmental biology",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Science",
    school: "School of Life Sciences",
    fees: "₹70,000/year",
    eligibility: "12th PCB",
    featured: false,
    slug: "bsc-botany",
  },
  {
    id: "bed",
    title: "Bachelor of Education",
    description: "Teacher preparation with modern pedagogical methods",
    duration: "2 Years",
    level: "Undergraduate",
    category: "Education",
    school: "School of Education",
    fees: "₹70,000/year",
    eligibility: "Graduation Required",
    featured: false,
    slug: "bachelor-education",
  },
  {
    id: "bped",
    title: "Bachelor of Physical Education",
    description: "Sports science, fitness training, and physical wellness",
    duration: "3 Years",
    level: "Undergraduate",
    category: "Sports",
    school: "School of Physical Education",
    fees: "₹80,000/year",
    eligibility: "12th Any Stream",
    featured: false,
    slug: "bachelor-physical-education",
  },

  // Postgraduate Programs
  {
    id: "mtech",
    title: "Master of Technology",
    description: "Advanced engineering specializations with research focus",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Technology",
    school: "School of Engineering & Technology",
    fees: "₹1,80,000/year",
    eligibility: "B.Tech/B.E. with GATE",
    featured: true,
    slug: "master-technology",
  },
  {
    id: "mca",
    title: "Master of Computer Applications",
    description: "Advanced computer applications and software engineering",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Technology",
    school: "School of Computer Science",
    fees: "₹1,40,000/year",
    eligibility: "BCA/B.Sc IT/Graduation with Math",
    featured: true,
    slug: "master-computer-applications",
  },
  {
    id: "mpharm",
    title: "Master of Pharmacy",
    description: "Advanced pharmaceutical research and drug development",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Healthcare",
    school: "School of Pharmacy",
    fees: "₹2,00,000/year",
    eligibility: "B.Pharm with GPAT",
    featured: false,
    slug: "master-pharmacy",
  },
  {
    id: "mba",
    title: "Master of Business Administration",
    description: "Strategic management and business leadership",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Business",
    school: "School of Business Management",
    fees: "₹3,85,000/year",
    eligibility: "Graduation with CAT/MAT/XAT",
    featured: true,
    slug: "master-business-administration",
  },
  {
    id: "mcom",
    title: "Master of Commerce",
    description: "Advanced commerce, finance, and accounting",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Business",
    school: "School of Commerce",
    fees: "₹80,000/year",
    eligibility: "B.Com/Graduation",
    featured: false,
    slug: "master-commerce",
  },
  {
    id: "ma",
    title: "Master of Arts",
    description: "Advanced liberal arts with specialization options",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Liberal Arts",
    school: "School of Liberal Arts",
    fees: "₹60,000/year",
    eligibility: "BA/Graduation",
    featured: false,
    slug: "master-arts",
  },
  {
    id: "msc-math",
    title: "M.Sc Mathematics",
    description: "Advanced mathematical research and applications",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Science",
    school: "School of Sciences",
    fees: "₹90,000/year",
    eligibility: "B.Sc Mathematics/PCM",
    featured: false,
    slug: "msc-mathematics",
  },
  {
    id: "msc-physics",
    title: "M.Sc Physics",
    description: "Advanced physics research and experimental methods",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Science",
    school: "School of Sciences",
    fees: "₹95,000/year",
    eligibility: "B.Sc Physics/PCM",
    featured: false,
    slug: "msc-physics",
  },
  {
    id: "msc-chemistry",
    title: "M.Sc Chemistry",
    description: "Advanced chemical research and industrial chemistry",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Science",
    school: "School of Sciences",
    fees: "₹1,00,000/year",
    eligibility: "B.Sc Chemistry/PCM/PCB",
    featured: false,
    slug: "msc-chemistry",
  },
  {
    id: "med",
    title: "Master of Education",
    description: "Advanced educational leadership and research",
    duration: "2 Years",
    level: "Postgraduate",
    category: "Education",
    school: "School of Education",
    fees: "₹90,000/year",
    eligibility: "B.Ed/Graduation",
    featured: false,
    slug: "med",
  },

  // Doctoral Programs
  {
    id: "phd-mgmt",
    title: "Ph.D Management",
    description:
      "Advanced research in business analytics, digital transformation, and organizational behavior",
    duration: "3-5 Years",
    level: "Doctoral",
    category: "Business",
    school: "School of Business Management",
    fees: "₹1,80,000/year",
    eligibility: "MBA/PGDM with NET/JRF",
    featured: false,
    slug: "phd-management",
  },
];

function ProgramsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Initialize filters based on URL parameters
  useEffect(() => {
    const levelParam = searchParams.get("level");
    if (levelParam) {
      // Capitalize first letter to match the data format
      const formattedLevel =
        levelParam.charAt(0).toUpperCase() + levelParam.slice(1).toLowerCase();
      setSelectedLevels([formattedLevel]);
      setShowFilters(true); // Show filters when URL parameter is present
    }
  }, [searchParams]);

  // Get unique values for filters
  const levels = [...new Set(allPrograms.map((p) => p.level))];
  const schools = [...new Set(allPrograms.map((p) => p.school))];
  const categories = [...new Set(allPrograms.map((p) => p.category))];

  // Filter programs based on search and selected filters
  const filteredPrograms = useMemo(() => {
    return allPrograms.filter((program) => {
      const matchesSearch =
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(program.level);
      const matchesSchool =
        selectedSchools.length === 0 ||
        selectedSchools.includes(program.school);
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(program.category);

      return matchesSearch && matchesLevel && matchesSchool && matchesCategory;
    });
  }, [searchTerm, selectedLevels, selectedSchools, selectedCategories]);

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedLevels([]);
    setSelectedSchools([]);
    setSelectedCategories([]);
  };

  // Remove specific filter
  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case "level":
        setSelectedLevels((prev) => prev.filter((l) => l !== value));
        break;
      case "school":
        setSelectedSchools((prev) => prev.filter((s) => s !== value));
        break;
      case "category":
        setSelectedCategories((prev) => prev.filter((c) => c !== value));
        break;
    }
  };

  const activeFiltersCount =
    selectedLevels.length + selectedSchools.length + selectedCategories.length;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect Program
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
              Discover from 29 comprehensive programs across all academic
              levels. Your journey to excellence starts here.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Interactive Program Finder */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-2">
                All Programs
              </h2>
              <p className="text-lg text-neutral-600">
                {filteredPrograms.length} of {allPrograms.length} programs
              </p>
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div
              className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}
            >
              <Card className="sticky top-4">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-[var(--fsu-crimson)]">
                      Filter Programs
                    </CardTitle>
                    {activeFiltersCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-neutral-500 hover:text-[var(--fsu-crimson)]"
                      >
                        Clear All
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Live Search */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Search Programs
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                      <Input
                        placeholder="Search by program name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Level Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Program Level
                    </label>
                    <div className="space-y-2">
                      {levels.map((level) => (
                        <div
                          key={level}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={level}
                            checked={selectedLevels.includes(level)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedLevels((prev) => [...prev, level]);
                              } else {
                                setSelectedLevels((prev) =>
                                  prev.filter((l) => l !== level)
                                );
                              }
                            }}
                          />
                          <label
                            htmlFor={level}
                            className="text-sm text-neutral-700 cursor-pointer"
                          >
                            {level} (
                            {
                              allPrograms.filter((p) => p.level === level)
                                .length
                            }
                            )
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* School Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      School/Department
                    </label>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {schools.map((school) => (
                        <div
                          key={school}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={school}
                            checked={selectedSchools.includes(school)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedSchools((prev) => [...prev, school]);
                              } else {
                                setSelectedSchools((prev) =>
                                  prev.filter((s) => s !== school)
                                );
                              }
                            }}
                          />
                          <label
                            htmlFor={school}
                            className="text-sm text-neutral-700 cursor-pointer leading-tight"
                          >
                            {school.replace("School of ", "")} (
                            {
                              allPrograms.filter((p) => p.school === school)
                                .length
                            }
                            )
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Active Filters Display */}
              {(selectedLevels.length > 0 ||
                selectedSchools.length > 0 ||
                selectedCategories.length > 0 ||
                searchTerm) && (
                <div className="mb-6 p-4 bg-white rounded-lg border">
                  <h3 className="text-sm font-medium text-neutral-700 mb-3">
                    Active Filters:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {searchTerm && (
                      <Badge
                        variant="secondary"
                        className="bg-[var(--fsu-gold)]/10 text-[var(--fsu-crimson)]"
                      >
                        Search: "{searchTerm}"
                        <X
                          className="w-3 h-3 ml-2 cursor-pointer"
                          onClick={() => setSearchTerm("")}
                        />
                      </Badge>
                    )}
                    {selectedLevels.map((level) => (
                      <Badge
                        key={level}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        Level: {level}
                        <X
                          className="w-3 h-3 ml-2 cursor-pointer"
                          onClick={() => removeFilter("level", level)}
                        />
                      </Badge>
                    ))}
                    {selectedSchools.map((school) => (
                      <Badge
                        key={school}
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {school.replace("School of ", "")}
                        <X
                          className="w-3 h-3 ml-2 cursor-pointer"
                          onClick={() => removeFilter("school", school)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Results Grid */}
              {filteredPrograms.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPrograms.map((program) => (
                    <Card
                      key={program.id}
                      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                variant="outline"
                                className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                              >
                                {program.level}
                              </Badge>
                              {program.featured && (
                                <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-xl text-[var(--fsu-crimson)] group-hover:text-[var(--fsu-maroon)] transition-colors leading-tight">
                              {program.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                          {program.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[var(--fsu-gold)]" />
                            <span className="text-neutral-700">
                              {program.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-[var(--fsu-gold)]" />
                            <span className="text-neutral-700">
                              {program.fees}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <Badge variant="secondary" className="text-xs">
                            {program.school.replace("School of ", "")}
                          </Badge>
                        </div>

                        <Button
                          className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] group-hover:bg-[var(--fsu-maroon)]"
                          asChild
                        >
                          <Link href={`/programs/${program.slug}`}>
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <div className="text-neutral-400 mb-4">
                    <Search className="w-16 h-16 mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                    No Programs Found
                  </h3>
                  <p className="text-neutral-500 mb-4">
                    Try adjusting your filters or search terms to find more
                    programs.
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearAllFilters}
                    className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                  >
                    Clear All Filters
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ProgramsPageWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading programs...
        </div>
      }
    >
      <ProgramsPage />
    </Suspense>
  );
}
