import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Quote, Star, Mail, Phone } from "lucide-react";
import leadershipData from "@/data/leadership.json";

interface LeadershipMember {
  title: string;
  name: string;
  position: string;
  image: string;
  message: string;
  achievements: string[];
}

// Generate static params for all leadership members
export async function generateStaticParams() {
  const slugs = Object.keys(leadershipData);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function LeadershipPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Get the leadership data based on the slug
  const leaderData: LeadershipMember | undefined = (
    leadershipData as Record<string, LeadershipMember>
  )[slug];

  if (!leaderData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-4">
            Leadership Member Not Found
          </h1>
          <p className="text-neutral-600 mb-6">
            The requested leadership profile could not be found.
          </p>
          <Button asChild>
            <Link href="/about">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="transition-all duration-1000 transform translate-y-0 opacity-100">
              {/* Back Button */}
              <div className="mb-6">
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

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {leaderData.title}
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-100 leading-relaxed">
                {leaderData.position}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Portrait */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--fsu-gold)] bg-white p-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={leaderData.image}
                      alt={leaderData.name}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    {/* Elegant overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Additional decorative shadow */}
                <div className="absolute -top-3 -left-3 w-full h-full bg-[var(--fsu-crimson)]/15 rounded-2xl -z-10" />
                {/* Second shadow layer */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-[var(--fsu-gold)]/10 rounded-2xl -z-20" />
              </div>

              {/* Content */}
              <div>
                <Badge className="bg-[var(--fsu-crimson)] text-white mb-6 text-lg px-4 py-2">
                  {leaderData.name}
                </Badge>

                <h2 className="text-2xl lg:text-3xl font-bold text-[var(--fsu-crimson)] mb-6">
                  {leaderData.position}
                </h2>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[var(--fsu-crimson)] mb-4">
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {leaderData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-[var(--fsu-gold)] mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information (if needed) */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Office
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[var(--fsu-gold)] text-[var(--fsu-gold)] hover:bg-[var(--fsu-gold)] hover:text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
                    Message from {leaderData.name}
                  </h2>
                  <div className="w-24 h-1 bg-[var(--fsu-gold)] mx-auto"></div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[var(--fsu-gold)]/30" />
                  <blockquote className="text-lg lg:text-xl text-neutral-700 leading-relaxed italic pl-8">
                    {leaderData.message}
                  </blockquote>
                </div>

                <div className="mt-8 text-right">
                  <p className="text-[var(--fsu-crimson)] font-semibold">
                    — {leaderData.name}
                  </p>
                  <p className="text-neutral-600">{leaderData.position}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Connect with FS University Leadership
            </h2>
            <p className="text-xl text-neutral-100 mb-8 leading-relaxed">
              Our leadership team is committed to excellence and is always
              available to engage with students, faculty, and the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] text-lg px-8 py-4"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-lg px-8 py-4"
                asChild
              >
                <Link href="/about">Learn More About FS University</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
