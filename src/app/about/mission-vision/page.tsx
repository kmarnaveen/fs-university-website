"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
  BookOpen,
} from "lucide-react";
import missionVisionData from "@/data/mission-vision.json";

// Icon mapping
const iconMap = {
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
  BookOpen,
};

export default function MissionVisionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Vision */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]" />
          <div className="absolute inset-0 bg-black/40" />
          {/* Pattern overlay for texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Back Button */}
            <div className="mb-8">
              <Button
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

            {/* Vision Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-[var(--fsu-gold)] rounded-full flex items-center justify-center">
                <Eye className="w-12 h-12 text-[var(--fsu-crimson)]" />
              </div>
            </div>

            {/* Vision Statement */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              {missionVisionData.hero.title}
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light mb-8">
                {missionVisionData.hero.visionStatement}
              </p>

              <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-lg px-6 py-2">
                {missionVisionData.hero.badge}
              </Badge>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Discover Our Mission</span>
            <div className="w-1 h-8 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Mission */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fsu-crimson)]">
                      {missionVisionData.mission.title}
                    </h2>
                  </div>

                  <div className="w-24 h-1 bg-[var(--fsu-gold)] mb-8"></div>
                </div>

                <div className="space-y-6">
                  {missionVisionData.mission.statements.map(
                    (statement, index) => (
                      <p
                        key={index}
                        className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
                      >
                        {statement}
                      </p>
                    )
                  )}
                </div>

                <div className="pt-8">
                  <Button
                    className="bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)] text-lg px-8 py-4"
                    asChild
                  >
                    <Link href="/about">Learn More About FS University</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Core Values */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                    Our Core Values
                  </h3>
                  <div className="w-24 h-1 bg-[var(--fsu-gold)] mb-8"></div>
                </div>

                <div className="grid gap-6">
                  {missionVisionData.coreValues.map((value, index) => {
                    const IconComponent =
                      iconMap[value.icon as keyof typeof iconMap];
                    return (
                      <Card
                        key={value.title}
                        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[var(--fsu-gold)]"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[var(--fsu-crimson)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--fsu-crimson)] transition-colors duration-300">
                              <IconComponent className="w-6 h-6 text-[var(--fsu-crimson)] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-[var(--fsu-crimson)] mb-2">
                                {value.title}
                              </h4>
                              <p className="text-neutral-600 leading-relaxed">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              {missionVisionData.cta.title}
            </h2>
            <p className="text-xl lg:text-2xl text-neutral-100 mb-12 leading-relaxed">
              {missionVisionData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] text-xl px-10 py-6"
                asChild
              >
                <Link href={missionVisionData.cta.primaryButton.href}>
                  {missionVisionData.cta.primaryButton.text}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-xl px-10 py-6"
                asChild
              >
                <Link href={missionVisionData.cta.secondaryButton.href}>
                  {missionVisionData.cta.secondaryButton.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
