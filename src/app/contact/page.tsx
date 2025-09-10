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
      phone: "+91-9876543210",
      email: "admissions@fsu.ac.in",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "General Inquiry",
      description: "For general questions and information about the university",
      phone: "+91-9876543200",
      email: "info@fsu.ac.in",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Main Campus",
      description: "Visit our beautiful 100-acre campus in Shikohabad",
      phone: "+91-9876543201",
      email: "campus@fsu.ac.in",
      address: "FS University, Shikohabad, Firozabad, UP - 283135"
    }
  ];

  const departmentContacts = [
    {
      department: "Examination Office",
      contact: "exam@fsu.ac.in",
      phone: "+91-9876543220",
      description: "Exam schedules, results, transcripts, and certificates"
    },
    {
      department: "Registrar's Office",
      contact: "registrar@fsu.ac.in",
      phone: "+91-9876543221",
      description: "Academic records, course registration, and official documents"
    },
    {
      department: "School of Engineering & Technology",
      contact: "engineering@fsu.ac.in",
      phone: "+91-9876543222",
      description: "Engineering programs, faculty, and research inquiries"
    },
    {
      department: "School of Management & Commerce",
      contact: "management@fsu.ac.in",
      phone: "+91-9876543223",
      description: "MBA, BBA, and commerce program information"
    },
    {
      department: "School of Medical Sciences",
      contact: "medical@fsu.ac.in",
      phone: "+91-9876543224",
      description: "Medical programs, MBBS, and healthcare courses"
    },
    {
      department: "School of Law",
      contact: "law@fsu.ac.in",
      phone: "+91-9876543225",
      description: "Law programs, LLB, LLM, and legal studies"
    },
    {
      department: "School of Arts & Sciences",
      contact: "arts@fsu.ac.in",
      phone: "+91-9876543226",
      description: "Liberal arts, sciences, and humanities programs"
    },
    {
      department: "School of Pharmacy",
      contact: "pharmacy@fsu.ac.in",
      phone: "+91-9876543227",
      description: "Pharmacy programs and pharmaceutical sciences"
    },
    {
      department: "Training & Placements",
      contact: "placements@fsu.ac.in",
      phone: "+91-9876543228",
      description: "Career services, campus recruitment, and industry partnerships"
    },
    {
      department: "International Affairs",
      contact: "international@fsu.ac.in",
      phone: "+91-9876543229",
      description: "Study abroad programs and international collaborations"
    },
    {
      department: "Student Affairs",
      contact: "students@fsu.ac.in",
      phone: "+91-9876543230",
      description: "Student services, hostel, and campus life support"
    },
    {
      department: "Finance Office",
      contact: "finance@fsu.ac.in",
      phone: "+91-9876543231",
      description: "Fee payments, scholarships, and financial assistance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in
              <span className="block text-[var(--fsu-gold)]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              We&apos;re here to help you with any questions about admissions, programs, campus life, and more. Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Main Contact Information
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Connect with the right department for quick and efficient assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainContacts.map((contact, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white mx-auto mb-6">
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
                    <span className="text-neutral-700">{contact.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--fsu-gold)]" />
                    <span className="text-neutral-700">{contact.email}</span>
                  </div>
                  
                  {contact.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[var(--fsu-gold)] mt-1" />
                      <span className="text-neutral-700">{contact.address}</span>
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

      {/* Map and Contact Form Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Interactive Map */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                Visit Our Campus
              </h3>
              
              <div className="relative h-96 bg-neutral-200 rounded-lg overflow-hidden shadow-lg mb-6">
                {/* Placeholder for Google Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[var(--fsu-crimson)] mx-auto mb-4" />
                    <p className="text-lg font-semibold text-[var(--fsu-crimson)]">Interactive Map</p>
                    <p className="text-neutral-600">FS University Campus Location</p>
                  </div>
                </div>
                
                {/* Map overlay with address */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--fsu-crimson)] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)]">FS University</h4>
                      <p className="text-sm text-neutral-600">
                        Shikohabad, Firozabad<br />
                        Uttar Pradesh - 283135, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--fsu-crimson)]">How to Reach</h4>
                <div className="space-y-2 text-neutral-700">
                  <p><strong>By Air:</strong> Nearest airport is Agra Airport (AGR) - 45 km</p>
                  <p><strong>By Train:</strong> Shikohabad Railway Station - 5 km</p>
                  <p><strong>By Road:</strong> Well connected via NH-2 and state highways</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        I am a... *
                      </label>
                      <select 
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                        required
                      >
                        <option value="">Please select...</option>
                        <option value="prospective-student">Prospective Student</option>
                        <option value="current-student">Current Student</option>
                        <option value="parent">Parent/Guardian</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="alumni">Alumni</option>
                        <option value="media">Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)] focus:border-transparent"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agree"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="agree" className="text-sm text-neutral-600">
                      I agree to receive communications from FS University and understand that I can unsubscribe at any time.
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white py-3 text-lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
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
              Specific Department Contacts
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Connect directly with specific departments for specialized assistance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {departmentContacts.map((dept, index) => (
                <Card key={index} className="overflow-hidden">
                  <details className="group">
                    <summary className="list-none cursor-pointer">
                      <CardHeader className="hover:bg-neutral-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Building className="w-6 h-6 text-[var(--fsu-crimson)]" />
                            <div>
                              <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                                {dept.department}
                              </CardTitle>
                              <p className="text-sm text-neutral-600 mt-1">
                                {dept.description}
                              </p>
                            </div>
                          </div>
                          <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" />
                        </div>
                      </CardHeader>
                    </summary>
                    
                    <CardContent className="pt-0 pb-6">
                      <div className="grid md:grid-cols-2 gap-6 ml-9">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[var(--fsu-gold)]" />
                            <span className="text-neutral-700">{dept.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[var(--fsu-gold)]" />
                            <span className="text-neutral-700">{dept.contact}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            size="sm"
                            variant="outline"
                            className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                            asChild
                          >
                            <Link href={`tel:${dept.phone}`}>Call Now</Link>
                          </Button>
                          <Button 
                            size="sm"
                            className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                            asChild
                          >
                            <Link href={`mailto:${dept.contact}`}>Send Email</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Additional Information */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-[var(--fsu-crimson)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-3">
                Office Hours
              </h3>
              <div className="space-y-2 text-neutral-700">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-[var(--fsu-crimson)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-3">
                Campus Visits
              </h3>
              <p className="text-neutral-700 mb-4">
                Schedule a guided campus tour to explore our facilities and meet our faculty.
              </p>
              <Button 
                className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                asChild
              >
                <Link href="/campus-tour">Book Tour</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <FileText className="w-12 h-12 text-[var(--fsu-crimson)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-3">
                Download Resources
              </h3>
              <p className="text-neutral-700 mb-4">
                Access brochures, application forms, and other important documents.
              </p>
              <Button 
                variant="outline"
                className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                asChild
              >
                <Link href="/downloads">View Downloads</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
            <p className="text-xl text-neutral-100 mb-6">
              For urgent matters and emergencies, please contact our 24/7 helpline
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[var(--fsu-gold)]" />
                <span className="text-xl font-semibold">+91-9876543199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[var(--fsu-gold)]" />
                <span className="text-xl font-semibold">emergency@fsu.ac.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Connect */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, news, and events from FS University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
              asChild
            >
              <Link href="/virtual-tour">Take Virtual Tour</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              asChild
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
