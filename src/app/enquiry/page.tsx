import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Navigation,
  ExternalLink,
  Car,
  Train
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enquiry - FS University',
  description: 'Have questions about FS University? Get in touch with our admissions team for personalized guidance and support.',
};

export default function EnquiryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Have Questions? We're Here to Help
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get instant answers to your questions about admissions, programs, campus life, and everything you need to know about FS University.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-gold)] focus:border-transparent">
                      <option value="">Select a program</option>
                      <option value="engineering">Engineering & Technology</option>
                      <option value="management">Management & Commerce</option>
                      <option value="law">Law</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="science">Science</option>
                      <option value="liberal-arts">Liberal Arts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-gold)] focus:border-transparent"
                      placeholder="Tell us about your questions or interests..."
                      required
                    ></textarea>
                  </div>

                  <Button className="w-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold py-3">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91-5694-252525</p>
                      <p className="text-gray-600">+91-5694-252526</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">admissions@fsuniversity.edu.in</p>
                      <p className="text-gray-600">info@fsuniversity.edu.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        FS University, NH 19, Agra Road<br />
                        Near Balaji Mandir, Shikohabad<br />
                        Firozabad, Uttar Pradesh – 283135, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[var(--fsu-gold)]/10 to-[var(--fsu-gold)]/5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Our admissions team typically responds to enquiries within 2-4 hours during business hours.
                </p>
                <Button variant="outline" className="w-full border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white">
                  Schedule a Call
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Map
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FS University is conveniently located on NH 19, Agra Road, making it easily accessible from major cities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="p-4 h-96">
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
              </Card>
            </div>

            {/* Directions & Transport */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Directions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold justify-start"
                    onClick={() => window.open('https://maps.google.com/maps?q=FS+University,+NH+19,+Agra+Road,+Shikohabad,+Firozabad,+Uttar+Pradesh+283135', '_blank')}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Google Maps
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://maps.apple.com/?q=FS+University+NH+19+Agra+Road+Shikohabad+Firozabad+Uttar+Pradesh+283135', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apple Maps
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Reach</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">By Road</p>
                      <p className="text-sm text-gray-600">
                        Located on NH 19 (Agra Road). Well connected to Delhi (190 km), Agra (45 km), and other major cities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Train className="w-5 h-5 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">By Train</p>
                      <p className="text-sm text-gray-600">
                        Nearest railway station: Shikohabad (5 km). Well connected to Delhi, Mumbai, and other major cities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Navigation className="w-5 h-5 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">By Air</p>
                      <p className="text-sm text-gray-600">
                        Nearest airport: Agra Airport (45 km). Delhi Airport is 190 km away.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[var(--fsu-gold)]/10 to-[var(--fsu-gold)]/5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Campus Shuttle</h3>
                <p className="text-gray-600 mb-4">
                  Free shuttle service available from Shikohabad railway station and major bus stops. Contact us for shuttle timings.
                </p>
                <Button variant="outline" className="w-full border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Shuttle Info
                </Button>
              </Card>
            </div>
          </div>

          {/* Distance Information */}
          <div className="mt-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Distance from Major Cities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      </section>
    </div>
  );
}
