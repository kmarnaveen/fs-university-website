"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Award,
  CheckCircle,
  ExternalLink,
  Star,
  Trophy,
  Shield,
  Building,
  FileCheck,
  Globe,
} from "lucide-react";
import accreditationsData from "@/data/accreditations.json";

// Icon mapping for rankings
const rankingIconMap = {
  Star,
  Award,
  CheckCircle,
  Trophy,
};

export default function AccreditationsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredAccreditation, setHoveredAccreditation] = useState<
    string | null
  >(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Professional Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
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

              {/* Header Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto bg-[var(--fsu-gold)] rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-[var(--fsu-crimson)]" />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {accreditationsData.hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-100 leading-relaxed mb-8">
                {accreditationsData.hero.subtitle}
              </p>

              <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-lg px-6 py-2">
                {accreditationsData.hero.badge}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                {accreditationsData.accreditations.title}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                {accreditationsData.accreditations.description}
              </p>
              <div className="w-24 h-1 bg-[var(--fsu-gold)] mx-auto mt-6"></div>
            </div>

            {/* Accreditations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {accreditationsData.accreditations.items.map((accreditation) => (
                <Card
                  className="group relative p-8 text-center border-2 transition-all duration-500 hover:-translate-y-3 shadow-2xl backdrop-blur-sm"
                  style={{
                    borderColor:
                      hoveredAccreditation === accreditation.id
                        ? "var(--fsu-gold)"
                        : accreditation.color + "40",
                    boxShadow:
                      hoveredAccreditation === accreditation.id
                        ? `0 0 50px ${accreditation.color}60, 0 25px 50px rgba(0,0,0,0.25)`
                        : `0 0 25px ${accreditation.color}30, 0 8px 32px rgba(0,0,0,0.15)`,
                  }}
                  onMouseEnter={() => setHoveredAccreditation(accreditation.id)}
                  onMouseLeave={() => setHoveredAccreditation(null)}
                >
                  <CardContent className="p-8 text-center">
                    {/* Logo */}
                    <div
                      className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center transition-all duration-500 border-2"
                      style={{
                        borderColor:
                          hoveredAccreditation === accreditation.id
                            ? accreditation.color
                            : accreditation.color + "30",
                        boxShadow:
                          hoveredAccreditation === accreditation.id
                            ? `0 0 30px ${accreditation.color}70, 0 8px 32px rgba(0,0,0,0.15)`
                            : `0 0 15px ${accreditation.color}40, 0 4px 15px rgba(0,0,0,0.1)`,
                      }}
                    >
                      <Image
                        src={accreditation.logo}
                        alt={`${accreditation.acronym} Logo`}
                        width={64}
                        height={64}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-2">
                      {accreditation.acronym}
                    </h3>

                    <h4 className="text-lg font-semibold text-neutral-700 mb-4">
                      {accreditation.name}
                    </h4>

                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {accreditation.description}
                    </p>

                    {/* Flip Card Effect */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fsu-crimson)] mb-6">
                {accreditationsData.rankings.title}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                {accreditationsData.rankings.description}
              </p>
              <div className="w-24 h-1 bg-[var(--fsu-gold)] mx-auto mt-6"></div>
            </div>

            {/* Featured Ranking */}
            <div className="mb-16">
              <Card className="border-4 border-[var(--fsu-gold)] shadow-2xl">
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <Trophy className="w-20 h-20 mx-auto text-[var(--fsu-gold)]" />
                  </div>
                  <h3 className="text-6xl font-bold text-[var(--fsu-crimson)] mb-4">
                    {accreditationsData.rankings.featured.rank}
                  </h3>
                  <p className="text-2xl font-semibold text-neutral-700 mb-4">
                    {accreditationsData.rankings.featured.title}
                  </p>
                  <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-lg px-6 py-2">
                    {accreditationsData.rankings.featured.source}
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Other Rankings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accreditationsData.rankings.others.map((ranking, index) => {
                const IconComponent =
                  rankingIconMap[ranking.icon as keyof typeof rankingIconMap];
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${ranking.color}20` }}
                      >
                        <IconComponent
                          className="w-8 h-8"
                          style={{ color: ranking.color }}
                        />
                      </div>

                      <h3 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-2">
                        {ranking.rank}
                      </h3>

                      <h4 className="text-lg font-semibold text-neutral-700 mb-4">
                        {ranking.title}
                      </h4>

                      <p className="text-sm text-neutral-600 mb-2">
                        {ranking.source}
                      </p>

                      <Badge
                        variant="outline"
                        className="border-[var(--fsu-gold)] text-[var(--fsu-gold)]"
                      >
                        {ranking.category}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              {accreditationsData.cta.title}
            </h2>
            <p className="text-xl lg:text-2xl text-neutral-100 mb-12 leading-relaxed">
              {accreditationsData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] text-xl px-10 py-6"
                asChild
              >
                <Link href={accreditationsData.cta.primaryButton.href}>
                  {accreditationsData.cta.primaryButton.text}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-xl px-10 py-6"
                asChild
              >
                <Link href={accreditationsData.cta.secondaryButton.href}>
                  {accreditationsData.cta.secondaryButton.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
