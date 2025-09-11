import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Research', href: '/research' },
    { name: 'Career Services', href: '/careers' },
  ];

  const resources = [
    { name: 'Academic Calendar', href: '/calendar' },
    { name: 'Library', href: '/library' },
    { name: 'Course Catalog', href: '/catalog' },
    { name: 'Student Portal', href: '/portal' },
    { name: 'Faculty Directory', href: '/faculty' },
    { name: 'Campus Map', href: '/map' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Title IX', href: '/title-ix' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/fsuniversity' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/fsuniversity' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/fsuniversity' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/school/fsuniversity' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/fsuniversity' },
  ];

  return (
    <footer className="bg-[var(--fsu-maroon)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* University Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/fs-university-logo1.png"
                  alt="FS University Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">FS University</h2>
                <p className="text-neutral-100">Excellence in Education</p>
              </div>
            </div>

            <p className="text-neutral-100 mb-6 leading-relaxed">
              Building tomorrow&apos;s leaders today through excellence in
              education, research, and community engagement. Join our diverse
              community of learners, researchers, and innovators.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[var(--fsu-gold)]" />
                <a 
                  href="https://maps.google.com/maps?q=FS+University,+NH+19,+Agra+Road,+Near+Balaji+Mandir,+Shikohabad,+Firozabad,+Uttar+Pradesh+283135,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-100 hover:text-[var(--fsu-gold)] transition-colors cursor-pointer"
                >
                  NH 19, Agra Road, Near Balaji Mandir, Shikohabad, Firozabad, UP - 283135
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--fsu-gold)]" />
                <a href="tel:+915694252525" className="text-neutral-100 hover:text-[var(--fsu-gold)] transition-colors">
                  +91-5694-252525
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--fsu-gold)]" />
                <a href="mailto:info@fsuniversity.edu.in" className="text-neutral-100 hover:text-[var(--fsu-gold)] transition-colors">
                  info@fsuniversity.edu.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--fsu-gold)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-100 hover:text-[var(--fsu-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--fsu-gold)] mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-100 hover:text-[var(--fsu-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--fsu-gold)] mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-100 hover:text-[var(--fsu-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[var(--fsu-crimson)]" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-neutral-100 text-sm">
            © 2025 FS University. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-neutral-100 mr-2">Follow us:</span>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-neutral-100 hover:text-[var(--fsu-gold)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Apply CTA */}
          <Button
            className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
            asChild
          >
            <Link href="/apply">Apply Today</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
