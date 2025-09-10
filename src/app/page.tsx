import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatsCard } from '@/components/ui/stats-card';
import { NewsCard } from '@/components/ui/news-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { CompanyLogo } from '@/components/ui/company-logo';
import ProgramCard from '@/components/programs/ProgramCard';
import ApplyCTA from '@/components/fsu-specific/ApplyCTA';
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  Globe, 
  Star,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Award,
  Play
} from 'lucide-react';

export default function HomePage() {
  const stats = [
    { number: "25,000+", label: "Students", description: "Active learners" },
    { number: "500+", label: "Faculty", description: "Expert educators" },
    { number: "95%", label: "Placement Rate", description: "Career success" },
    { number: "200+", label: "Global Partners", description: "Industry connections" }
  ];

  const programs = [
    {
      title: "Computer Science & Engineering",
      description: "Leading-edge curriculum in AI, Machine Learning, and Software Development",
      duration: "4 Years",
      level: "B.Tech",
      fees: "₹2,50,000/year",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop"
    },
    {
      title: "Business Administration",
      description: "Comprehensive MBA program with industry internships and global exposure",
      duration: "2 Years", 
      level: "MBA",
      fees: "₹3,50,000/year",
      category: "Management",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop"
    },
    {
      title: "Pharmacy",
      description: "Advanced pharmaceutical sciences with research opportunities",
      duration: "4 Years",
      level: "B.Pharm",
      fees: "₹1,80,000/year",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop"
    }
  ];

  const whyChoosePoints = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "NAAC A+ Accredited",
      description: "Recognized for academic excellence and quality education standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Expert Faculty",
      description: "Learn from professionals with real-world experience and academic expertise"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Partnerships",
      description: "Exchange programs and collaborations with universities worldwide"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research Excellence",
      description: "State-of-the-art labs and research facilities for innovation"
    }
  ];

  const news = [
    {
      title: "FS University Ranks Among Top 50 Engineering Colleges in India",
      description: "National ranking survey recognizes FS University's academic excellence and innovation in engineering education.",
      date: "March 15, 2024",
      category: "Rankings",
      href: "/news/ranking-announcement",
      featured: true,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
    },
    {
      title: "International Conference on AI and Machine Learning",
      description: "Three-day conference bringing together global experts to discuss latest trends in artificial intelligence.",
      date: "March 20-22, 2024",
      category: "Events",
      location: "Main Auditorium",
      href: "/events/ai-conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      title: "New Research Center for Sustainable Technology Inaugurated",
      description: "State-of-the-art facility dedicated to developing eco-friendly technological solutions.",
      date: "March 10, 2024",
      category: "Research",
      href: "/news/research-center",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      quote: "FS University provided me with not just education, but a complete transformation. The faculty's guidance and industry exposure helped me land my dream job at Google.",
      author: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "The MBA program at FS University gave me the leadership skills and business acumen needed to start my own company. The entrepreneurship support was exceptional.",
      author: "Rahul Gupta",
      role: "CEO & Founder",
      company: "TechStart Solutions"
    },
    {
      quote: "The research opportunities and modern labs at FS University helped me publish papers in international journals. It's truly a world-class institution.",
      author: "Dr. Anjali Patel",
      role: "Research Scientist",
      company: "ISRO"
    }
  ];

  const recruiters = [
    { name: "Google", logo: "https://logo.clearbit.com/google.com", tier: "premium" as const },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", tier: "premium" as const },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", tier: "premium" as const },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com", tier: "standard" as const },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com", tier: "standard" as const },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com", tier: "standard" as const },
    { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com", tier: "premium" as const },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", tier: "standard" as const }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-sm font-semibold px-4 py-1">
                  NAAC A+ Accredited University
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Shape Your Future at
                  <span className="block text-[var(--fsu-gold)]">FS University</span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
                  Where Excellence Meets Innovation. Join 25,000+ students in a journey of academic excellence and career success.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/apply">
                    Apply Now 2025
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/virtual-tour">
                    <Play className="mr-2 w-5 h-5" />
                    Virtual Campus Tour
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--fsu-gold)] text-[var(--fsu-gold)]" />
                  ))}
                </div>
                <span className="text-neutral-200">Rated 4.9/5 by students</span>
              </div>
            </div>
            
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&crop=faces"
                  alt="FS University Campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">25,000+</div>
                    <div className="text-sm text-neutral-600">Active Students</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-[var(--fsu-crimson)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">95%</div>
                    <div className="text-sm text-neutral-600">Placement Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="py-12 bg-neutral-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Programs Showcase */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Academic Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore our diverse range of undergraduate, postgraduate, and doctoral programs designed to meet industry demands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <ProgramCard 
                key={index} 
                id={`program-${index}`}
                title={program.title}
                description={program.description}
                duration={program.duration}
                level={program.level as 'Undergraduate' | 'Graduate' | 'Doctoral' | 'Certificate'}
                department={program.category}
                fees={program.fees}
                image={program.image}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white" asChild>
              <Link href="/programs">
                View All Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose FSU */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
                Why Choose FS University
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Excellence in Every Aspect of Education
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                With over two decades of educational excellence, FS University stands as a beacon of quality education, research innovation, and industry partnerships.
              </p>
              
              <div className="space-y-6">
                {whyChoosePoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center text-white">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-neutral-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&crop=faces"
                  alt="FS University Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Visual Showcase */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Campus Life
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Life Beyond Academics
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experience a vibrant campus life with modern facilities, diverse communities, and endless opportunities for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" alt="Modern Library" fill className="object-cover" />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop" alt="Sports Complex" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=200&fit=crop" alt="Research Labs" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop" alt="Student Hostels" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop" alt="Auditorium" fill className="object-cover" />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=200&fit=crop" alt="Cafeteria" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop" alt="Campus Gardens" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop" alt="Campus Events" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white" asChild>
              <Link href="/campus-life">
                Explore Campus Life
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Placements & Recruiters */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Placements & Careers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Your Gateway to Global Careers
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              With 95% placement rate and partnerships with top global companies, your dream career is within reach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-[var(--fsu-crimson)] mb-2">₹12 LPA</div>
                <div className="text-lg font-semibold mb-1">Average Package</div>
                <div className="text-neutral-600">Class of 2024</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-[var(--fsu-crimson)] mb-2">₹45 LPA</div>
                <div className="text-lg font-semibold mb-1">Highest Package</div>
                <div className="text-neutral-600">International Offer</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-[var(--fsu-crimson)] mb-2">500+</div>
                <div className="text-lg font-semibold mb-1">Company Partners</div>
                <div className="text-neutral-600">Global Recruiters</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">Our Recruiting Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {recruiters.map((recruiter, index) => (
                <CompanyLogo key={index} {...recruiter} />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]" asChild>
              <Link href="/placements">
                View Placement Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              News & Events
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Stay Updated with Campus Life
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Keep up with the latest news, events, and achievements from the FS University community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {news.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white" asChild>
              <Link href="/news">
                View All News
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Student Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from our alumni who are making their mark in various industries around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[var(--fsu-maroon)] to-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are building their future at FS University. Your success story starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/apply">
                Apply for Admission 2025
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">
                Talk to Counselor
              </Link>
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-neutral-200 mb-4">Admissions Open for 2025-26 Academic Year</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Easy Online Application</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Scholarship Opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Industry-Ready Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA Component */}
      <ApplyCTA variant="sticky" />
    </div>
  );
}
