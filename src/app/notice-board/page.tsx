import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Notice Board | FS University",
  description:
    "Stay updated with the latest announcements, notices, and important information from FS University.",
};

export default function NoticeBoardPage() {
  // Sample notices data - in a real app, this would come from an API
  const notices = [
    {
      id: 1,
      title: "Mid-Semester Examination Schedule Released",
      date: "2025-09-10",
      category: "Examinations",
      tags: ["Exam", "B.Tech", "M.Tech"],
      type: "pdf",
      isNew: true,
      description:
        "The mid-semester examination schedule for all undergraduate and postgraduate programs has been released.",
      downloadUrl: "/notices/mid-sem-schedule.pdf",
    },
    {
      id: 2,
      title: "Admission Open for Academic Year 2025-26",
      date: "2025-09-09",
      category: "Admissions",
      tags: ["Admission", "UG", "PG"],
      type: "details",
      isNew: true,
      description:
        "Applications are now open for undergraduate and postgraduate programs. Last date to apply: October 15, 2025.",
      detailsUrl: "/admissions/apply",
    },
    {
      id: 3,
      title: 'Annual Technical Fest "TechnoVision 2025"',
      date: "2025-09-08",
      category: "Events",
      tags: ["Event", "Technical", "Competition"],
      type: "details",
      isNew: true,
      description:
        "Join us for the biggest technical festival of the year featuring competitions, workshops, and guest lectures.",
      detailsUrl: "/events/technovision-2025",
    },
    {
      id: 4,
      title: "Library Timings Modified for Examination Period",
      date: "2025-09-07",
      category: "General",
      tags: ["Library", "General", "Students"],
      type: "details",
      isNew: false,
      description:
        "Library will remain open 24/7 during the examination period from September 15 to October 5, 2025.",
      detailsUrl: "/library/timings",
    },
    {
      id: 5,
      title: "Tender Notice for Campus Infrastructure Development",
      date: "2025-09-06",
      category: "Tenders",
      tags: ["Tender", "Infrastructure", "Procurement"],
      type: "pdf",
      isNew: false,
      description:
        "Invitation for bids for campus infrastructure development projects. Submission deadline: September 30, 2025.",
      downloadUrl: "/tenders/infrastructure-development.pdf",
    },
    {
      id: 6,
      title: "Holiday Notice - Gandhi Jayanti",
      date: "2025-09-05",
      category: "General",
      tags: ["Holiday", "General"],
      type: "details",
      isNew: false,
      description:
        "The university will remain closed on October 2, 2025, on account of Gandhi Jayanti.",
      detailsUrl: "/notices/gandhi-jayanti-holiday",
    },
    {
      id: 7,
      title: "Scholarship Applications for Merit Students",
      date: "2025-09-04",
      category: "Admissions",
      tags: ["Scholarship", "Merit", "Financial Aid"],
      type: "pdf",
      isNew: false,
      description:
        "Merit-based scholarship applications are now open. Apply before September 25, 2025.",
      downloadUrl: "/scholarships/merit-scholarship-form.pdf",
    },
    {
      id: 8,
      title: 'Workshop on "AI and Machine Learning in Engineering"',
      date: "2025-09-03",
      category: "Events",
      tags: ["Workshop", "AI", "Engineering"],
      type: "details",
      isNew: false,
      description:
        "Three-day workshop on AI and ML applications in engineering. Registration required.",
      detailsUrl: "/workshops/ai-ml-engineering",
    },
    {
      id: 9,
      title: "Result Declaration - End Semester Examinations",
      date: "2025-09-02",
      category: "Examinations",
      tags: ["Results", "Exam", "All Programs"],
      type: "details",
      isNew: false,
      description:
        "End semester examination results for all programs have been declared. Check student portal.",
      detailsUrl: "/results/end-semester",
    },
    {
      id: 10,
      title: "New Faculty Recruitment - Multiple Positions",
      date: "2025-09-01",
      category: "General",
      tags: ["Recruitment", "Faculty", "Jobs"],
      type: "pdf",
      isNew: false,
      description:
        "Applications invited for faculty positions across various departments. Apply online.",
      downloadUrl: "/recruitment/faculty-positions.pdf",
    },
  ];

  const categories = [
    "All",
    "Examinations",
    "Admissions",
    "Events",
    "General",
    "Tenders",
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Examinations":
        return "bg-red-100 text-red-800";
      case "Admissions":
        return `bg-[var(--fsu-crimson)]/10 text-[var(--fsu-crimson)]`;
      case "Events":
        return "bg-green-100 text-green-800";
      case "General":
        return "bg-neutral-100 text-neutral-800";
      case "Tenders":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-neutral-100 text-neutral-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              University Announcements
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Announcements &
              <span className="block text-[var(--fsu-gold)]">Notices</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
              Stay updated with the latest information from the university.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-neutral-50 py-6 sticky top-0 z-10 shadow-sm border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <Input
                type="search"
                placeholder="Search notices by keyword or title..."
                className="w-full border-neutral-300 focus:border-[var(--fsu-gold)] focus:ring-[var(--fsu-gold)]"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-neutral-700 whitespace-nowrap">
                  Filter by:
                </label>
                <select className="border border-neutral-300 rounded-md px-3 py-2 text-sm bg-white min-w-[140px] focus:border-[var(--fsu-gold)] focus:ring-[var(--fsu-gold)]">
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Filter */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-neutral-700 whitespace-nowrap">
                  Date:
                </label>
                <input
                  type="date"
                  className="border border-neutral-300 rounded-md px-3 py-2 text-sm bg-white focus:border-[var(--fsu-gold)] focus:ring-[var(--fsu-gold)]"
                />
                <span className="text-neutral-500">to</span>
                <input
                  type="date"
                  className="border border-neutral-300 rounded-md px-3 py-2 text-sm bg-white focus:border-[var(--fsu-gold)] focus:ring-[var(--fsu-gold)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {notices.map((notice) => (
              <Card
                key={notice.id}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Notice Content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        {/* Date */}
                        <div className="text-center min-w-[80px]">
                          <div className="bg-[var(--fsu-crimson)]/10 text-[var(--fsu-crimson)] px-3 py-1 rounded-lg text-sm font-medium">
                            {formatDate(notice.date)}
                          </div>
                        </div>

                        {/* Title and Details */}
                        <div className="flex-1">
                          <div className="flex items-start gap-2 mb-2">
                            <h3 className="text-lg font-bold text-[var(--fsu-crimson)] flex-1">
                              {notice.title}
                            </h3>
                            {notice.isNew && (
                              <Badge className="bg-red-500 text-white text-xs">
                                NEW
                              </Badge>
                            )}
                          </div>

                          <p className="text-neutral-600 mb-3 leading-relaxed">
                            {notice.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge
                              variant="outline"
                              className={getCategoryColor(notice.category)}
                            >
                              {notice.category}
                            </Badge>
                            {notice.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-neutral-600 border-neutral-300"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="lg:min-w-[140px]">
                      {notice.type === "pdf" ? (
                        <a
                          href={notice.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white font-semibold">
                            📄 Download PDF
                          </Button>
                        </a>
                      ) : (
                        <Link href={notice.detailsUrl!}>
                          <Button
                            variant="outline"
                            className="w-full border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)]/5 font-semibold"
                          >
                            View Details →
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="px-3 py-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              >
                «« Previous
              </Button>
              <Button
                variant="outline"
                className="px-3 py-2 bg-[var(--fsu-crimson)] text-white border-[var(--fsu-crimson)]"
              >
                1
              </Button>
              <Button
                variant="outline"
                className="px-3 py-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="px-3 py-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              >
                3
              </Button>
              <span className="px-3 py-2 text-neutral-500">...</span>
              <Button
                variant="outline"
                className="px-3 py-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              >
                10
              </Button>
              <Button
                variant="outline"
                className="px-3 py-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              >
                Next »»
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Important Links
            </h2>
            <p className="text-xl text-neutral-100">
              Quick access to frequently needed resources and portals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/student-portal">
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 font-semibold"
              >
                Student Portal
              </Button>
            </Link>
            <Link href="/academic-calendar">
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 font-semibold"
              >
                Academic Calendar
              </Button>
            </Link>
            <Link href="/examination">
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 font-semibold"
              >
                Examination Section
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 font-semibold"
              >
                Admissions Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
