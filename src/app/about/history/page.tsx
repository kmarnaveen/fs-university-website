"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ImageGalleryModal } from "@/components/ui/image-gallery-modal";
import {
  ArrowLeft,
  Calendar,
  Users,
  Building,
  Award,
  BookOpen,
  Globe,
  Lightbulb,
  GraduationCap,
  Star,
} from "lucide-react";
import historyData from "@/data/history.json";

// Icon mapping
const iconMap = {
  Building,
  BookOpen,
  Award,
  Lightbulb,
  Globe,
  Star,
  GraduationCap,
};

export default function HistoryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              {historyData.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {historyData.hero.title}
              <span className="block text-[var(--fsu-gold)]">2003-2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              {historyData.hero.subtitle} - Discover the milestones,
              achievements, and transformative moments that shaped our
              university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
                onClick={() => {
                  document
                    .getElementById("timeline-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Timeline
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                asChild
              >
                <Link href="/about">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to About
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="timeline-section" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                {historyData.timeline.title}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                {historyData.timeline.description}
              </p>
              <div className="w-24 h-1 bg-[var(--fsu-gold)] mx-auto mt-6"></div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-[var(--fsu-gold)]"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {historyData.timeline.events.map((event, index) => {
                  const IconComponent =
                    iconMap[event.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={event.year}
                      className="relative flex items-start gap-8 group"
                    >
                      {/* Timeline Node */}
                      <div
                        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: event.color }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content Card */}
                      <Card className="flex-1 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        <CardContent className="p-8">
                          <div className="grid lg:grid-cols-3 gap-6">
                            {/* Text Content */}
                            <div className="lg:col-span-2">
                              <div className="flex items-center gap-4 mb-4">
                                <Badge
                                  className="text-white text-lg px-4 py-1"
                                  style={{ backgroundColor: event.color }}
                                >
                                  {event.year}
                                </Badge>
                                <h3 className="text-2xl font-bold text-[var(--fsu-crimson)]">
                                  {event.title}
                                </h3>
                              </div>

                              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                                {event.description}
                              </p>

                              <p className="text-neutral-600 leading-relaxed">
                                {event.details}
                              </p>
                            </div>

                            {/* Image */}
                            <div className="lg:col-span-1">
                              <div
                                className="relative h-48 rounded-lg overflow-hidden cursor-pointer group-hover:shadow-xl transition-all duration-300"
                                onClick={() => setSelectedImage(event.image)}
                              >
                                <Image
                                  src={event.image}
                                  alt={`${event.title} - ${event.year}`}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-[var(--fsu-crimson)]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                {historyData.gallery.title}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                {historyData.gallery.description}
              </p>
              <div className="w-24 h-1 bg-[var(--fsu-gold)] mx-auto mt-6"></div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {historyData.gallery.images.map((imageData, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(imageData.src)}
                >
                  <Image
                    src={imageData.src}
                    alt={imageData.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-[var(--fsu-crimson)]" />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium bg-black/60 rounded px-3 py-1">
                      {imageData.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Next Chapter */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              {historyData.cta.title}
            </h2>
            <p className="text-xl lg:text-2xl text-neutral-100 mb-12 leading-relaxed">
              {historyData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] text-xl px-10 py-6"
                asChild
              >
                <Link href={historyData.cta.primaryButton.href}>
                  {historyData.cta.primaryButton.text}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-xl px-10 py-6"
                asChild
              >
                <Link href={historyData.cta.secondaryButton.href}>
                  {historyData.cta.secondaryButton.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedImage && (
        <ImageGalleryModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          images={[{ src: selectedImage, alt: "Historical Moment" }]}
          initialIndex={0}
        />
      )}
    </div>
  );
}
