"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Search,
  User,
  GraduationCap,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null
  );

  const toggleMobileSubmenu = (menu: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const megaMenuData = {
    about: [
      {
        name: "Leadership",
        href: "#",
        isSubmenu: true,
        submenu: [
          { name: "Hon'ble Governor", href: "/leadership/governor" },
          { name: "Chancellor's Message", href: "/leadership/chancellor" },
          {
            name: "Pro Chancellor's Message",
            href: "/leadership/pro-chancellor",
          },
          { name: "Trustee Message", href: "/leadership/trustee" },
          { name: "Trustee's Message", href: "/leadership/trustees" },
          { name: "Secretary's Message", href: "/leadership/secretary" },
          {
            name: "Vice Chancellor Message",
            href: "/leadership/vice-chancellor",
          },
          {
            name: "Director General's Message",
            href: "/leadership/director-general",
          },
        ],
      },
      { name: "Our History", href: "/about/history" },
      { name: "Mission & Vision", href: "/about/mission-vision" },
      { name: "Accreditations & Rankings", href: "/about/accreditations" },
      { name: "About FS University", href: "/about" },
    ],
    admissions: [
      { name: "Admissions Overview", href: "/admissions" },
      { name: "How to Apply", href: "/apply" },
      { name: "Programs Offered", href: "/programs" },
      { name: "Eligibility Requirements", href: "/admissions/eligibility" },
      { name: "Fee Structure", href: "/admissions/fees" },
      { name: "Scholarships & Aid", href: "/admissions/scholarships" },
      { name: "Download Prospectus", href: "/downloads/prospectus" },
    ],
    schools: [
      {
        name: "School of Engineering & Technology",
        href: "/schools/engineering",
      },
      {
        name: "School of Basic Science",
        href: "/schools/science",
      },
      {
        name: "School of Agriculture",
        href: "/schools/agriculture",
      },
      { name: "School of Nursing", href: "/schools/nursing" },
      { name: "School of Business", href: "/schools/business" },
      { name: "School of Art & Humanities", href: "/schools/arts" },
      { name: "School of Law", href: "/schools/law" },
      { name: "School of Education", href: "/schools/education" },
      { name: "School of Pharmacy", href: "/schools/pharmacy" },
      { name: "All Schools", href: "/schools" },
    ],
    academics: [
      { name: "Academic Calendar", href: "/academics/calendar" },
      { name: "Programs", href: "/programs" },
      { name: "Schools", href: "/schools" },
      { name: "Faculty Portal", href: "/faculty-portal" },
    ],
    campusLife: [
      { name: "Hostel Life", href: "/campus-life/hostels" },
      { name: "Sports & Fitness", href: "/campus-life/sports" },
      { name: "Facilities", href: "/campus-life/facilities" },
      { name: "Campus Life Overview", href: "/campus-life" },
    ],
    placements: [
      { name: "Placement Cell", href: "/placements" },
      { name: "Career Opportunities", href: "/careers" },
      { name: "Alumni Network", href: "/our-story" },
    ],
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-800 text-white text-sm py-2 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 xl:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+915694252525"
                  className="hidden md:inline hover:text-[var(--fsu-gold)] transition-colors"
                >
                  +91-5694-252525
                </a>
                <span className="md:hidden">Call Us</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@fsuniversity.edu.in"
                  className="hidden md:inline hover:text-[var(--fsu-gold)] transition-colors"
                >
                  info@fsuniversity.edu.in
                </a>
                <span className="md:hidden">Email</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-3 xl:space-x-6">
              <Link
                href="/news"
                className="hover:text-[var(--fsu-gold)] transition-colors hidden lg:inline"
              >
                News & Media
              </Link>
              <Link
                href="/careers"
                className="hover:text-[var(--fsu-gold)] transition-colors hidden lg:inline"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="hover:text-[var(--fsu-gold)] transition-colors"
              >
                Contact
              </Link>

              {/* Login Portals */}
              <div className="flex items-center space-x-2 xl:space-x-4 border-l border-neutral-600 pl-3 xl:pl-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-neutral-700 hover:text-[var(--fsu-gold)] text-xs xl:text-sm"
                    >
                      <User className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                      <span className="hidden sm:inline">Student</span>
                      <span className="sm:hidden">Login</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/student-portal">Student Portal</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/student-portal/results">View Results</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/student-portal/attendance">Attendance</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-neutral-700 hover:text-[var(--fsu-gold)] text-xs xl:text-sm"
                    >
                      <GraduationCap className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                      <span className="hidden sm:inline">Faculty</span>
                      <span className="sm:hidden">Staff</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/faculty-portal">Faculty Portal</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/faculty-portal/courses">My Courses</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/faculty-portal/attendance">
                        Mark Attendance
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                <Image
                  src="/fs-university-logo1.png"
                  alt="FS University Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="hidden xs:block">
                <div className="text-sm sm:text-base font-bold text-[var(--fsu-crimson)] leading-tight">
                  FS University
                </div>
                {/* <p className="text-xs text-neutral-600 hidden sm:block">
                  Excellence in Education
                </p> */}
              </div>
            </Link>

            {/* Main Navigation - Desktop */}
            <nav className="hidden xl:flex items-center space-x-1">
              {/* About Us Mega Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white flex items-center gap-1 px-3 xl:px-4 h-10"
                  >
                    About Us
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-80">
                  <DropdownMenuLabel>About FS University</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {megaMenuData.about.slice(1).map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                    >
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>University Leadership</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {megaMenuData.about[0].isSubmenu ? (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white">
                        {megaMenuData.about[0].name}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        {megaMenuData.about[0].submenu?.map((subItem) => (
                          <DropdownMenuItem
                            key={subItem.name}
                            asChild
                            className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                          >
                            <Link href={subItem.href} className="w-full">
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  ) : (
                    <DropdownMenuItem
                      key={megaMenuData.about[0].name}
                      asChild
                      className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                    >
                      <Link
                        href={megaMenuData.about[0].href}
                        className="w-full"
                      >
                        {megaMenuData.about[0].name}
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Admissions Mega Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white flex items-center gap-1 px-4"
                  >
                    Admissions
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Admissions 2025</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {megaMenuData.admissions.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                    >
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Schools Mega Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white flex items-center gap-1 px-4"
                  >
                    Schools
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-80">
                  <DropdownMenuLabel>Academic Schools</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="grid grid-cols-1 gap-1">
                    {megaMenuData.schools.map((item) => (
                      <DropdownMenuItem
                        key={item.name}
                        asChild
                        className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                      >
                        <Link href={item.href} className="w-full">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Academics */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white flex items-center gap-1 px-4"
                  >
                    Academics
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Academic Resources</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {megaMenuData.academics.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                    >
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Campus Life */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white flex items-center gap-1 px-4"
                  >
                    Campus Life
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Student Life</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {megaMenuData.campusLife.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                    >
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Placements */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white flex items-center gap-1 px-4"
                  >
                    Placements
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Career Services</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {megaMenuData.placements.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="hover:bg-[var(--fsu-crimson)] hover:text-white focus:bg-[var(--fsu-crimson)] focus:text-white"
                    >
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Notice Board */}
              <Link href="/notice-board">
                <Button
                  variant="ghost"
                  className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white px-4"
                >
                  Notice Board
                </Button>
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search - Hidden on mobile */}
              <div className="relative hidden sm:block">
                {isSearchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-48 lg:w-64 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-gold)] focus:border-transparent text-sm"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                    className="text-neutral-700 hover:bg-neutral-100 h-9 w-9 p-0"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                )}
              </div>

              {/* Apply Now CTA - Responsive */}
              <Button
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold hidden sm:inline-flex text-sm px-4 lg:px-6"
                asChild
              >
                <Link href="/apply">
                  <span className="hidden lg:inline">Apply Now</span>
                  <span className="lg:hidden">Apply</span>
                </Link>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="xl:hidden text-neutral-700 hover:bg-neutral-100 h-10 w-10 p-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 xl:hidden">
              {/* Background Overlay */}
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Slide-in Menu */}
              <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
                  isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)]">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/fs-university-logo1.png"
                      alt="FS University"
                      width={40}
                      height={40}
                      className="bg-white rounded-lg p-1"
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        FS University
                      </h3>
                      <p className="text-white/80 text-xs">
                        Excellence in Education
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:bg-white/20 h-10 w-10 p-0"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Search Bar */}
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search university..."
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent text-sm bg-white shadow-sm"
                    />
                  </div>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-200px)] mobile-menu-scroll">
                  <nav className="space-y-2 pb-4">
                    {/* Extra bottom padding for better scrolling */}
                    {/* About Us */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleMobileSubmenu("about")}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">
                          About Us
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            expandedMobileMenu === "about" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMobileMenu === "about" && (
                        <div className="border-t border-gray-200 bg-gray-50">
                          {megaMenuData.about.map((item, index) =>
                            item.isSubmenu ? (
                              <div
                                key={index}
                                className="border-b border-gray-100 last:border-b-0"
                              >
                                <div className="px-6 py-3 font-medium text-gray-900 bg-gray-100">
                                  {item.name}
                                </div>
                                {item.submenu?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block px-8 py-2 text-sm text-gray-600 hover:bg-white hover:text-[var(--fsu-crimson)] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <Link
                                key={index}
                                href={item.href}
                                className="block px-6 py-3 text-sm text-gray-700 hover:bg-white hover:text-[var(--fsu-crimson)] transition-colors border-b border-gray-100 last:border-b-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    {/* Admissions */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleMobileSubmenu("admissions")}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">
                          Admissions
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            expandedMobileMenu === "admissions"
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {expandedMobileMenu === "admissions" && (
                        <div className="border-t border-gray-200 bg-gray-50">
                          {megaMenuData.admissions.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-white hover:text-[var(--fsu-crimson)] transition-colors border-b border-gray-100 last:border-b-0"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Schools */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleMobileSubmenu("schools")}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">
                          Schools & Programs
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            expandedMobileMenu === "schools" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMobileMenu === "schools" && (
                        <div className="border-t border-gray-200 bg-gray-50">
                          {megaMenuData.schools.map((school, index) => (
                            <Link
                              key={index}
                              href={school.href}
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-white hover:text-[var(--fsu-crimson)] transition-colors border-b border-gray-100 last:border-b-0"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {school.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Direct Links */}
                    <Link
                      href="/campus-life"
                      className="block p-4 text-gray-900 font-semibold hover:bg-gray-50 transition-colors border border-gray-200 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Campus Life
                    </Link>

                    <Link
                      href="/placements"
                      className="block p-4 text-gray-900 font-semibold hover:bg-gray-50 transition-colors border border-gray-200 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Placements
                    </Link>

                    <Link
                      href="/news"
                      className="block p-4 text-gray-900 font-semibold hover:bg-gray-50 transition-colors border border-gray-200 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      News & Media
                    </Link>

                    <Link
                      href="/careers"
                      className="block p-4 text-gray-900 font-semibold hover:bg-gray-50 transition-colors border border-gray-200 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Careers
                    </Link>

                    <Link
                      href="/notice-board"
                      className="block p-4 text-gray-900 font-semibold hover:bg-gray-50 transition-colors border border-gray-200 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Notice Board
                    </Link>

                    {/* Bottom Action Section - Now inside scrollable area */}
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                      {/* Primary CTA */}
                      <Button
                        className="w-full bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white hover:from-[var(--fsu-maroon)] hover:to-[var(--fsu-crimson)] font-semibold py-4 text-base rounded-xl shadow-lg"
                        asChild
                      >
                        <Link
                          href="/apply"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          🎓 Apply Now
                        </Link>
                      </Button>

                      {/* Portal Access */}
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white py-3 text-sm rounded-xl transition-all duration-200"
                          asChild
                        >
                          <Link
                            href="/student-portal"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <User className="w-4 h-4 mr-2" />
                            Student Portal
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white py-3 text-sm rounded-xl transition-all duration-200"
                          asChild
                        >
                          <Link
                            href="/faculty-portal"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Faculty Portal
                          </Link>
                        </Button>
                      </div>

                      {/* Contact Information */}
                      <div className="pt-4 border-t border-gray-300">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                          Quick Contact
                        </h4>
                        <div className="space-y-3">
                          <a
                            href="tel:+915694252525"
                            className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="w-10 h-10 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center mr-3">
                              <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Call Us
                              </p>
                              <p className="text-xs text-gray-600">
                                +91-5694-252525
                              </p>
                            </div>
                          </a>
                          <a
                            href="mailto:info@fsuniversity.edu.in"
                            className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="w-10 h-10 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center mr-3">
                              <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Email Us
                              </p>
                              <p className="text-xs text-gray-600">
                                info@fsuniversity.edu.in
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
