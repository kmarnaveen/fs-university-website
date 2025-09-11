"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Users,
  GraduationCap,
  Building,
  FileText,
  MessageSquare,
  ChevronDown
} from 'lucide-react';

export default function ContactPage() {
  const mainContacts = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Admissions Inquiry",
      description: "Get information about programs, applications, and admission process",
      phone: "+91-5694-252525",
      email: "admissions@fsuniversity.edu.in",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "General Inquiry",
      description: "For general questions and information about the university",
      phone: "+91-5694-252526",
      email: "info@fsuniversity.edu.in",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Main Campus",
      description: "Visit our beautiful campus on NH 19, Agra Road",
      phone: "+91-5694-252525",
      email: "campus@fsuniversity.edu.in",
      address: "FS University, NH 19, Agra Road, Near Balaji Mandir, Shikohabad, Firozabad, UP - 283135"
    }
  ];

  const departmentContacts = [
    {
      department: "Examination Office",
      contact: "exam@fsuniversity.edu.in",
      phone: "+91-5694-252530",
      description: "Exam schedules, results, transcripts, and certificates"
    },
    {
      department: "Registrar's Office",
      contact: "registrar@fsuniversity.edu.in",
      phone: "+91-5694-252531",
      description: "Academic records, course registration, and official documents"
    },
    {
      department: "School of Engineering & Technology",
      contact: "engineering@fsuniversity.edu.in",
      phone: "+91-5694-252532",
      description: "Engineering programs, faculty, and research inquiries"
    },
    {
      department: "School of Management & Commerce",
      contact: "management@fsuniversity.edu.in",
      phone: "+91-5694-252533",
      description: "MBA, BBA, and commerce program information"
    },
    {
      department: "Training & Placements",
      contact: "placements@fsuniversity.edu.in",
      phone: "+91-5694-252538",
      description: "Career services, campus recruitment, and industry partnerships"
    },
    {
      department: "Student Affairs",
      contact: "students@fsuniversity.edu.in",
      phone: "+91-5694-252540",
      description: "Student services, hostel, and campus life support"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              We're here to help you with all your questions and concerns. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3">
                <Link href="/enquiry">Quick Enquiry</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3">
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose the best way to reach us based on your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainContacts.map((contact, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="text-[var(--fsu-crimson)] mb-6 flex justify-center">
                  {contact.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-3">
                  {contact.title}
                </h3>
                
                <p className="text-neutral-600 mb-6">
                  {contact.description}
                </p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--fsu-gold)]" />
                    <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} className="text-neutral-700 hover:text-[var(--fsu-crimson)] transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--fsu-gold)]" />
                    <a href={`mailto:${contact.email}`} className="text-neutral-700 hover:text-[var(--fsu-crimson)] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  
                  {contact.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[var(--fsu-gold)] mt-1" />
                      <a 
                        href="https://maps.google.com/maps?q=FS+University,+NH+19,+Agra+Road,+Near+Balaji+Mandir,+Shikohabad,+Firozabad,+Uttar+Pradesh+283135,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 hover:text-[var(--fsu-crimson)] transition-colors cursor-pointer"
                      >
                        {contact.address}
                      </a>
                    </div>
                  )}
                  
                  {contact.hours && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[var(--fsu-gold)]" />
                      <span className="text-neutral-700">{contact.hours}</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Visit Our Campus
            </h2>
            <p className="text-xl text-neutral-600">
              FS University is conveniently located on NH 19, Agra Road
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="relative h-96 bg-neutral-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.8234567890123!2d78.5869!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA3OMKwMzUnMTIuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=FS+University,+NH+19,+Agra+Road,+Shikohabad,+Firozabad,+Uttar+Pradesh"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FS University Location"
              ></iframe>
              
              {/* Map overlay with address */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--fsu-crimson)] mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--fsu-crimson)]">FS University</h4>
                    <a 
                      href="https://maps.google.com/maps?q=FS+University,+NH+19,+Agra+Road,+Near+Balaji+Mandir,+Shikohabad,+Firozabad,+Uttar+Pradesh+283135,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-600 hover:text-[var(--fsu-crimson)] transition-colors cursor-pointer"
                    >
                      NH 19, Agra Road, Near Balaji Mandir<br />
                      Shikohabad, Firozabad, UP - 283135, India
                    </a>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017]"
                    onClick={() => window.open('https://maps.google.com/maps?q=FS+University,+NH+19,+Agra+Road,+Near+Balaji+Mandir,+Shikohabad,+Firozabad,+Uttar+Pradesh+283135,+India', '_blank')}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Directions & Transport */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-4">How to Reach</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--fsu-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--fsu-crimson)] font-bold text-sm">🚗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">By Road</h4>
                      <p className="text-sm text-gray-600">
                        Located on NH 19. Well connected to Delhi (190 km), Agra (45 km), and other major cities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--fsu-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--fsu-crimson)] font-bold text-sm">🚊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">By Train</h4>
                      <p className="text-sm text-gray-600">
                        Nearest railway station: Shikohabad (5 km). Well connected to major cities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--fsu-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--fsu-crimson)] font-bold text-sm">✈️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">By Air</h4>
                      <p className="text-sm text-gray-600">
                        Nearest airport: Agra Airport (45 km). Delhi Airport is 190 km away.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[var(--fsu-gold)]/10 to-[var(--fsu-gold)]/5">
                <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-4">Distance from Major Cities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-1">45 km</div>
                    <div className="text-gray-600">Agra</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-1">190 km</div>
                    <div className="text-gray-600">Delhi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-1">25 km</div>
                    <div className="text-gray-600">Firozabad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-1">5 km</div>
                    <div className="text-gray-600">Shikohabad</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-neutral-600">
              Direct contact information for specific departments and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentContacts.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-[var(--fsu-crimson)] mb-2">
                  {dept.department}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[var(--fsu-gold)]" />
                    <a href={`tel:${dept.phone.replace(/[^+\d]/g, '')}`} className="text-sm text-neutral-700 hover:text-[var(--fsu-crimson)] transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[var(--fsu-gold)]" />
                    <a href={`mailto:${dept.contact}`} className="text-sm text-neutral-700 hover:text-[var(--fsu-crimson)] transition-colors">
                      {dept.contact}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Emergency Contacts
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 p-6 text-center">
                <h3 className="font-bold mb-2">Emergency Helpline</h3>
                <a href="tel:+915694252500" className="text-[var(--fsu-gold)] font-bold text-lg hover:text-white transition-colors">
                  +91-5694-252500
                </a>
                <p className="text-sm text-white/80 mt-2">24/7</p>
              </Card>
              <Card className="bg-white/10 border-white/20 p-6 text-center">
                <h3 className="font-bold mb-2">Security Office</h3>
                <a href="tel:+915694252501" className="text-[var(--fsu-gold)] font-bold text-lg hover:text-white transition-colors">
                  +91-5694-252501
                </a>
                <p className="text-sm text-white/80 mt-2">24/7</p>
              </Card>
              <Card className="bg-white/10 border-white/20 p-6 text-center">
                <h3 className="font-bold mb-2">Medical Emergency</h3>
                <a href="tel:+915694252502" className="text-[var(--fsu-gold)] font-bold text-lg hover:text-white transition-colors">
                  +91-5694-252502
                </a>
                <p className="text-sm text-white/80 mt-2">24/7</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}