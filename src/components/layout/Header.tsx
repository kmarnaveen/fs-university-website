"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Search,
  User,
  GraduationCap
} from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const megaMenuData = {
    about: [
      { name: 'About FS University', href: '/about' },
      { name: 'Mission & Vision', href: '/about#mission-vision' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Accreditations & Rankings', href: '/about#accreditations' },
      { name: 'History & Milestones', href: '/about#history' },
      { name: 'Campus Tour', href: '/about/campus-tour' }
    ],
    admissions: [
      { name: 'Admissions Overview', href: '/admissions' },
      { name: 'How to Apply', href: '/admissions#admission-process' },
      { name: 'Programs Offered', href: '/admissions#programs' },
      { name: 'Eligibility Requirements', href: '/admissions#eligibility' },
      { name: 'Scholarships & Aid', href: '/admissions#scholarships' },
      { name: 'Important Dates', href: '/admissions#important-dates' },
      { name: 'Download Brochure', href: '/brochure' }
    ],
    schools: [
      { name: 'School of Engineering & Technology', href: '/schools/engineering' },
      { name: 'School of Management & Commerce', href: '/schools/management' },
      { name: 'School of Law', href: '/schools/law' },
      { name: 'School of Pharmacy', href: '/schools/pharmacy' },
      { name: 'School of Agriculture', href: '/schools/agriculture' },
      { name: 'School of Liberal Arts', href: '/schools/liberal-arts' },
      { name: 'School of Science', href: '/schools/science' },
      { name: 'All Departments', href: '/schools' }
    ],
    academics: [
      { name: 'Academic Calendar', href: '/academics/calendar' },
      { name: 'Examination', href: '/academics/examination' },
      { name: 'Departments', href: '/academics/departments' },
      { name: 'Library', href: '/academics/library' },
      { name: 'Research & Publications', href: '/academics/research' },
      { name: 'Faculty Directory', href: '/faculty' }
    ],
    campusLife: [
      { name: 'Hostel Life', href: '/campus-life/hostels' },
      { name: 'Sports & Fitness', href: '/campus-life/sports' },
      { name: 'Clubs & Societies', href: '/campus-life/clubs' },
      { name: 'Events & Festivals', href: '/campus-life/events' },
      { name: 'Medical Facilities', href: '/campus-life/medical' },
      { name: 'Student Support', href: '/campus-life/support' }
    ],
    placements: [
      { name: 'Placement Cell', href: '/placements' },
      { name: 'Our Recruiters', href: '/placements/recruiters' },
      { name: 'Placement Highlights', href: '/placements/highlights' },
      { name: 'Alumni Success', href: '/placements/alumni' },
      { name: 'Career Services', href: '/placements/careers' },
      { name: 'Internships', href: '/placements/internships' }
    ]
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-800 text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-5694-252525</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@fsuniversity.edu.in</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-6">
              <Link href="/news" className="hover:text-[var(--fsu-gold)] transition-colors">
                News & Media
              </Link>
              <Link href="/careers" className="hover:text-[var(--fsu-gold)] transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="hover:text-[var(--fsu-gold)] transition-colors">
                Contact Us
              </Link>
              
              {/* Login Portals */}
              <div className="flex items-center space-x-4 border-l border-neutral-600 pl-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-neutral-700 hover:text-[var(--fsu-gold)]">
                      <User className="w-4 h-4 mr-2" />
                      Student Login
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
                    <Button variant="ghost" size="sm" className="text-white hover:bg-neutral-700 hover:text-[var(--fsu-gold)]">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Faculty Login
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
                      <Link href="/faculty-portal/attendance">Mark Attendance</Link>
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
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-[var(--fsu-crimson)]">FS University</h1>
                <p className="text-xs text-neutral-600">Excellence in Education</p>
              </div>
            </Link>

            {/* Main Navigation - Desktop */}
            <nav className="hidden xl:flex items-center space-x-1">
              {/* About Us Mega Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-neutral-700 hover:bg-[var(--fsu-crimson)] hover:text-white flex items-center gap-1 px-4"
                  >
                    About Us
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>About FS University</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {megaMenuData.about.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
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
                    <DropdownMenuItem key={item.name} asChild>
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
                      <DropdownMenuItem key={item.name} asChild>
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
                    <DropdownMenuItem key={item.name} asChild>
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
                    <DropdownMenuItem key={item.name} asChild>
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
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-64 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-gold)] focus:border-transparent"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                    className="text-neutral-700 hover:bg-neutral-100"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                )}
              </div>

              {/* Apply Now CTA */}
              <Button 
                className="hidden sm:flex bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-6"
                asChild
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="xl:hidden text-neutral-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="xl:hidden border-t border-neutral-200 py-4">
              <nav className="flex flex-col space-y-2">
                <Link 
                  href="/about"
                  className="block px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/admissions"
                  className="block px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admissions
                </Link>
                <Link 
                  href="/schools"
                  className="block px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schools
                </Link>
                <Link 
                  href="/academics"
                  className="block px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Academics
                </Link>
                <Link 
                  href="/campus-life"
                  className="block px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Campus Life
                </Link>
                <Link 
                  href="/placements"
                  className="block px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Placements
                </Link>
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017]"
                    asChild
                  >
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
