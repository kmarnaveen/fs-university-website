import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatsCard } from '@/components/ui/stats-card';
import { 
  Award, 
  Users, 
  Building, 
  Globe, 
  Shield,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "2003", label: "Established", description: "Years of excellence" },
    { number: "100+", label: "Acre Campus", description: "Green & modern" },
    { number: "25,000+", label: "Students", description: "Current enrollment" },
    { number: "500+", label: "Faculty", description: "Expert educators" },
    { number: "95%", label: "Placement Rate", description: "Career success" },
    { number: "200+", label: "Industry Partners", description: "Global connections" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-6">
              About FS University
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pioneering Education Since
              <span className="block text-[var(--fsu-gold)]">2003</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Empowering minds, transforming lives, and building tomorrow&rsquo;s leaders through excellence in education, research, and innovation.
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
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                asChild
              >
                <Link href="/contact">Visit Campus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
            {/* History & Milestones */}

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Vision Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[var(--fsu-primary)] mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To be a globally recognized institution of higher learning that fosters innovation, 
                critical thinking, and leadership in all our students. We envision creating a 
                transformative educational ecosystem that bridges academic excellence with 
                real-world applications, preparing graduates who will shape the future of 
                their chosen fields and contribute meaningfully to society.
              </p>
            </div>

            {/* Mission Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[var(--fsu-primary)] mb-6">Our Mission</h2>
              <ul className="text-lg text-neutral-700 leading-relaxed space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--fsu-gold)] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Provide world-class education across diverse academic disciplines
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--fsu-gold)] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Foster research, innovation, and entrepreneurial thinking
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--fsu-gold)] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Develop ethical leaders with global perspectives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--fsu-gold)] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Create an inclusive environment that celebrates diversity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--fsu-gold)] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Partner with industry and community for societal impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section id="history" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Key milestones that have shaped FS University into the institution it is today.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[var(--fsu-gold)] h-full"></div>
            
            <div className="space-y-12">
              {[
                { year: "2003", title: "Foundation Laid", description: "FS University was established with a vision to provide quality education in rural India." },
                { year: "2008", title: "UGC Recognition", description: "Received official recognition from University Grants Commission." },
                { year: "2013", title: "Received University Status", description: "Elevated to full university status with autonomous degree-granting powers." },
                { year: "2018", title: "Campus Expansion", description: "Expanded to 100-acre campus with state-of-the-art facilities." },
                { year: "2020", title: "Introduced School of Agriculture", description: "Launched comprehensive agricultural sciences programs." },
                { year: "2024", title: "NAAC A+ Accreditation", description: "Achieved highest grade in National Assessment and Accreditation Council evaluation." }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3 justify-center">
                        <Calendar className="w-5 h-5 text-[var(--fsu-gold)]" />
                        <Badge className="bg-[var(--fsu-crimson)] text-white">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-[var(--fsu-gold)] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From the Leadership's Desk Section */}
      <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Professional headshot */}
            <div className="text-center md:text-left">
              <div className="relative inline-block">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                  alt="Chancellor Dr. Rajesh Kumar"
                  width={320}
                  height={320}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-xl mx-auto md:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">25+</span>
                </div>
              </div>
              <p className="text-sm text-neutral-500 mt-4 text-center md:text-left">
                Years of Leadership Excellence
              </p>
            </div>

            {/* Right - Message */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-primary)] mb-6">
                Message from the Chancellor
              </h2>
              <div className="prose prose-lg text-neutral-700">
                <p className="mb-4">
                  Welcome to FS University, where education transcends boundaries and dreams take flight. 
                  For over two decades, we have been committed to nurturing intellectual curiosity, 
                  fostering innovation, and developing leaders who will shape tomorrow&rsquo;s world.
                </p>
                <p className="mb-4">
                  Our institution stands as a beacon of academic excellence, where traditional values 
                  meet contemporary pedagogy. We believe that education is not just about acquiring 
                  knowledge, but about developing the wisdom to apply it meaningfully.
                </p>
                <p className="mb-4">
                  At FS University, we have built an ecosystem that encourages exploration, 
                  celebrates diversity, and promotes ethical leadership. Our faculty, drawn from 
                  the finest institutions globally, bring both theoretical depth and practical 
                  experience to the classroom.
                </p>
                <p className="mb-4">
                  As we look toward the future, we remain committed to our founding principles 
                  while embracing innovation in education. Our graduates don&rsquo;t just earn degrees; 
                  they become changemakers, entrepreneurs, and leaders in their respective fields.
                </p>
                <p className="mb-4">
                  I invite you to join our vibrant community of learners, thinkers, and innovators. 
                  Together, we will continue to pioneer education that makes a difference.
                </p>
                <p className="font-semibold">
                  Dr. Rajesh Kumar<br />
                  Chancellor, FS University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey (Timeline) */}
      <section id="history" className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Key milestones that have shaped FS University into the institution it is today.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[var(--fsu-gold)] h-full"></div>
            
            <div className="space-y-12">
              {[
                { year: "2003", title: "Foundation Laid", description: "FS University was established with a vision to provide quality education in rural India." },
                { year: "2008", title: "UGC Recognition", description: "Received official recognition from University Grants Commission." },
                { year: "2013", title: "Received University Status", description: "Elevated to full university status with autonomous degree-granting powers." },
                { year: "2018", title: "Campus Expansion", description: "Expanded to 100-acre campus with state-of-the-art facilities." },
                { year: "2020", title: "Introduced School of Agriculture", description: "Launched comprehensive agricultural sciences programs." },
                { year: "2024", title: "NAAC A+ Accreditation", description: "Achieved highest grade in National Assessment and Accreditation Council evaluation." }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3 justify-center">
                        <Calendar className="w-5 h-5 text-[var(--fsu-gold)]" />
                        <Badge className="bg-[var(--fsu-crimson)] text-white">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-[var(--fsu-gold)] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations and Approvals */}
      <section id="accreditations" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Recognized for Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Official approvals and accreditations that validate our commitment to quality education.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* UGC */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UGC</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-neutral-700">University Grants Commission</h3>
            </div>

            {/* BCI */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BCI</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-neutral-700">Bar Council of India</h3>
            </div>

            {/* PCI */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PCI</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-neutral-700">Pharmacy Council of India</h3>
            </div>

            {/* INC */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">INC</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-neutral-700">Indian Nursing Council</h3>
            </div>

            {/* AIU */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AIU</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-neutral-700">Association of Indian Universities</h3>
            </div>
          </div>

          {/* Additional certifications */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[var(--fsu-crimson)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-2">NAAC A+ Grade</h3>
              <p className="text-neutral-600 text-sm mb-2">National Assessment and Accreditation Council</p>
              <Badge className="bg-[var(--fsu-crimson)] text-white">2024</Badge>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[var(--fsu-crimson)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-2">NIRF Ranking</h3>
              <p className="text-neutral-600 text-sm mb-2">Top 50 Private Universities</p>
              <Badge className="bg-[var(--fsu-crimson)] text-white">2024</Badge>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[var(--fsu-crimson)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-2">ISO 9001:2015</h3>
              <p className="text-neutral-600 text-sm mb-2">Quality Management System</p>
              <Badge className="bg-[var(--fsu-crimson)] text-white">2022</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore Our Campus (CTA) */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop"
            alt="FS University Campus Aerial View"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--fsu-crimson)]/80 to-[var(--fsu-maroon)]/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Take a Virtual Tour of Our
            <span className="block text-[var(--fsu-gold)]">100-Acre Campus</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our world-class facilities, modern infrastructure, and vibrant campus life 
            from the comfort of your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold text-lg px-8 py-4"
              asChild
            >
              <Link href="/virtual-tour">
                Start Virtual Tour
                <span className="ml-2">🎥</span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-lg px-8 py-4"
              asChild
            >
              <Link href="/contact">
                Schedule Campus Visit
                <MapPin className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          {/* Campus highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-[var(--fsu-gold)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Infrastructure</h3>
              <p className="text-neutral-200">State-of-the-art laboratories, libraries, and classrooms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--fsu-gold)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vibrant Campus Life</h3>
              <p className="text-neutral-200">Sports facilities, cultural centers, and student activities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[var(--fsu-gold)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Green & Sustainable</h3>
              <p className="text-neutral-200">Eco-friendly campus with sustainable practices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
