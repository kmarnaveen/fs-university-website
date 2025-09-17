"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageGalleryModal } from "@/components/ui/image-gallery-modal";
import {
  Calendar,
  Users,
  BookOpen,
  Building,
  Award,
  ArrowRight,
  Quote,
  Star,
  Lightbulb,
  Target,
  Globe,
} from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  achievements?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2004",
    title: "The Beginning of a Dream",
    description:
      "In 2004, Dr. Dilip Yadav took a step toward fulfilling his father's dream by establishing various institutes dedicated to education through the Fulan Singh Jan Kalyan Trust. This noble initiative ensured that Shikohabad, Uttar Pradesh, would become a center for learning and academic excellence, providing access to quality education for students from all walks of life.",
    achievements: [
      "Fulan Singh Jan Kalyan Trust established",
      "Various educational institutes founded",
      "Shikohabad positioned as educational hub",
      "Vision of Late (Shri) Fulan Singh Ji begins to materialize",
    ],
  },
  {
    year: "2013",
    title: "Achieved University Status",
    description:
      "A landmark year when FS University officially gained university status, marking our transition from individual institutes to a full-fledged university. This recognition validated our commitment to academic excellence and opened new horizons for comprehensive higher education in the region.",
    achievements: [
      "Official university status granted",
      "Expanded academic programs across disciplines",
      "Research departments established",
      "Enhanced infrastructure development",
    ],
  },
  {
    year: "2020",
    title: "Modern Education Era",
    description:
      "FS University embraced modern teaching methodologies and digital learning platforms while maintaining its core values. The university strengthened its focus on career-oriented courses and holistic education, combining academics with extracurricular activities and personality development programs.",
    achievements: [
      "Digital learning platforms implemented",
      "Modern teaching methodologies adopted",
      "Career-oriented programs expanded",
      "Holistic education approach enhanced",
    ],
  },
  {
    year: "Present",
    title: "A Hub of Opportunities",
    description:
      "Today, FS University stands as a beacon of quality education with a dedicated placement cell ensuring students secure positions in reputed companies. The institution continues to honor the legacy of Late (Shri) Fulan Singh Ji while shaping the future of aspiring students through comprehensive education and development programs.",
    achievements: [
      "Dedicated placement cell operational",
      "Strong industry partnerships established",
      "Comprehensive academic programs offered",
      "Legacy of visionary leadership continues",
    ],
  },
];

const pillars = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "An education at FS University has limitless possibilities. Our courses are taught by esteemed faculty members who are committed to academic excellence.",
  },
  {
    icon: BookOpen,
    title: "Affordability",
    description:
      "Our financial aid program makes FS University affordable for every family throughout the world, ensuring quality education is accessible to all.",
  },
  {
    icon: Building,
    title: "Inspiring Student Life",
    description:
      "Our residential system creates more opportunities for learning with peers and professors from different backgrounds, fostering holistic development.",
  },
];

const OurStoryPage = () => {
  const [activeTimelineEvent, setActiveTimelineEvent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  // Portrait images for gallery
  const portraitImages = [
    {
      src: "https://fsu.edu.in/wp-content/uploads/2024/12/Fulan-Singh-Ji-FS-University.png",
      alt: "Late (Shri) Fulan Singh Ji - Visionary Founder of FS University",
    },
    // Additional historical images can be added here
  ];

  const openGallery = (index: number) => {
    setGalleryInitialIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section: The Opening Statement */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--fsu-maroon)]/80 via-[var(--fsu-crimson)]/70 to-[var(--fsu-maroon)]/80 z-10" />
          <Image
            src="/fs-university-logo1.png"
            alt="FS University Campus"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4 sm:mb-6 text-sm sm:text-lg px-3 py-1.5 sm:px-4 sm:py-2">
              Est. 2004
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              A Legacy of
              <span className="text-[var(--fsu-gold)]">
                {" "}
                Knowledge and Vision
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-100 mb-6 sm:mb-8 leading-relaxed px-2">
              FS University stands as a beacon of quality education, founded
              with a deep commitment to empowering future generations
            </p>
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] text-lg sm:text-xl px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("timeline")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Discover Our Journey
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* The Visionary Section: The Human Element */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Portrait */}
              <div className="relative order-1 lg:order-none">
                <div
                  className="relative h-80 sm:h-96 lg:h-[500px] cursor-pointer transform transition-all duration-300 hover:scale-105 group mx-4 sm:mx-0"
                  onClick={() => openGallery(0)}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl border-4 border-[var(--fsu-gold)] bg-white p-2 hover:border-[#D4A017]">
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="https://fsu.edu.in/wp-content/uploads/2024/12/Fulan-Singh-Ji-FS-University.png"
                        alt="Late (Shri) Fulan Singh Ji - Founder and Visionary of FS University"
                        fill
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                      {/* Elegant overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Additional decorative shadow */}
                <div className="absolute -top-3 -left-3 w-full h-full bg-[var(--fsu-crimson)]/15 rounded-2xl -z-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 mx-4 sm:mx-0" />
                {/* Second shadow layer */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-[var(--fsu-gold)]/10 rounded-2xl -z-20 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 mx-4 sm:mx-0" />
              </div>

              {/* Content */}
              <div className="order-2 lg:order-none px-4 sm:px-0">
                <Badge className="bg-[var(--fsu-crimson)] text-white mb-4 sm:mb-6 text-sm sm:text-lg px-3 py-1.5 sm:px-4 sm:py-2">
                  Late (Shri) Fulan Singh Ji (1935-2020)
                </Badge>

                {/* Quote */}
                <div className="relative mb-6 sm:mb-8">
                  <Quote className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 text-[var(--fsu-gold)]/30" />
                  <blockquote className="text-lg sm:text-2xl lg:text-3xl font-medium text-[var(--fsu-crimson)] leading-relaxed italic pl-6 sm:pl-8">
                    "Education should empower future generations and provide
                    knowledge, wisdom, and opportunities for students from all
                    walks of life."
                  </blockquote>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                    FS University stands as a realization of the vision of Late
                    (Shri) Fulan Singh Ji (1935-2020), whose dream was to
                    establish an institution that provides knowledge, wisdom,
                    and opportunities for students from all walks of life.
                  </p>
                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                    The Fraternity of FS University pays tribute to our esteemed
                    patron, whose values and ideals continue to inspire us. His
                    unwavering belief in the power of education has shaped the
                    foundation of our institution, and his legacy lives on in
                    every student who walks through the gates of FS University.
                  </p>
                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                    In 2004, Dr. Dilip Yadav set out to fulfill the vision of
                    his beloved father by establishing institutions dedicated to
                    providing quality education through the Fulan Singh Jan
                    Kalyan Trust, making Shikohabad, Uttar Pradesh, a recognized
                    hub for knowledge seekers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline: The Journey */}
      <section id="timeline" className="py-12 sm:py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-4 sm:mb-6 px-2">
              Our Journey Through Time
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-2">
              From the visionary dream of Late (Shri) Fulan Singh Ji to the
              dedicated efforts of Dr. Dilip Yadav - explore the key milestones
              that shaped FS University into a beacon of quality education.
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center px-4">
              {timelineEvents.map((event, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimelineEvent(index)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeTimelineEvent === index
                      ? "bg-[var(--fsu-crimson)] text-white"
                      : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                  }`}
                >
                  {event.year}
                </button>
              ))}
            </div>
          </div>

          {/* Active Timeline Event */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl mx-4 sm:mx-0">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-sm sm:text-lg mb-3 sm:mb-4">
                      {timelineEvents[activeTimelineEvent].year}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--fsu-crimson)] mb-4 sm:mb-6">
                      {timelineEvents[activeTimelineEvent].title}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                      {timelineEvents[activeTimelineEvent].description}
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      {timelineEvents[activeTimelineEvent].achievements?.map(
                        (achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--fsu-gold)] mt-0.5 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-neutral-700">
                              {achievement}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="relative h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--fsu-gold)]/20 to-[var(--fsu-crimson)]/20 flex items-center justify-center">
                    <Calendar className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[var(--fsu-crimson)]/30" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Pillars Section: The Proof of Growth */}
      <section className="py-12 sm:py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-4 sm:mb-6 px-2">
              Our Pillars of Excellence
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-2">
              The foundation stones that have supported our growth and continue
              to drive our commitment to educational excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-none bg-white mx-4 sm:mx-0"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--fsu-gold)] to-[var(--fsu-crimson)] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--fsu-crimson)] mb-3 sm:mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A Glimpse of Our Journey: The Visual Story */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)] mb-4 sm:mb-6 px-2">
              A Glimpse of Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-2">
              Visual memories that capture the essence of our growth, community,
              and the vibrant life at FS University.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-4 sm:px-0">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden group cursor-pointer ${
                  index % 4 === 0 ? "col-span-2 row-span-2" : ""
                } ${index % 3 === 0 && index % 4 !== 0 ? "row-span-2" : ""}`}
              >
                <div className="aspect-square bg-gradient-to-br from-[var(--fsu-gold)]/20 to-[var(--fsu-crimson)]/20 flex items-center justify-center">
                  <Globe className="w-8 h-8 sm:w-12 sm:h-12 text-[var(--fsu-crimson)]/30" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-sm sm:text-base">
                    Campus Life
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action: The Next Chapter */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6 sm:mb-8 text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3">
              Join Our Legacy
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-2">
              Be a Part of Our
              <span className="text-[var(--fsu-gold)]"> Future</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-100 mb-8 sm:mb-12 leading-relaxed px-2">
              Your story begins here. Join thousands of students who have chosen
              FS University to shape their future and make their mark on the
              world.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto px-4 sm:max-w-none sm:px-0">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] text-lg sm:text-xl px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto"
                asChild
              >
                <Link href="/programs">
                  Discover Our Programs
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-lg sm:text-xl px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto"
                asChild
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 opacity-10">
          <Lightbulb className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[var(--fsu-gold)]" />
        </div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 opacity-10">
          <Target className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-[var(--fsu-gold)]" />
        </div>
      </section>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={portraitImages}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        initialIndex={galleryInitialIndex}
      />
    </div>
  );
};

export default OurStoryPage;
