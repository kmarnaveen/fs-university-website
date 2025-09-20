import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatsCard } from '@/components/ui/stats-card';
import { 
  Users, 
  Award,
  CheckCircle,
  AlertCircle,
  Download,
  DollarSign,
  Building,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  FileText
} from 'lucide-react';

export default function AdmissionsPage() {
  const keyDates = [
    { event: "Applications Open", date: "Oct 1, 2024", status: "completed" },
    { event: "Application Deadline", date: "Jun 15, 2025", status: "upcoming" },
    { event: "Classes Commence", date: "Aug 1, 2025", status: "upcoming" }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Explore Programs",
      description: "Discover your perfect course from our wide range of programs",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      step: "2", 
      title: "Check Eligibility",
      description: "Review requirements and ensure you meet the criteria",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Submit Online Application", 
      description: "Complete your application with all required documents",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Receive Offer Letter",
      description: "Get your admission confirmation and next steps",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const programLevels = [
    {
      title: "Undergraduate Programs",
      description: "Bachelor's degrees across Engineering, Business, Science, Arts, and more",
      duration: "3-4 Years",
      startingFrom: "₹1,50,000/year",
      link: "/programs?level=undergraduate",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Postgraduate Programs", 
      description: "Master's degrees and specialized programs for career advancement",
      duration: "2-3 Years",
      startingFrom: "₹2,50,000/year", 
      link: "/programs?level=postgraduate",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Doctoral (Ph.D.) Programs",
      description: "Research-focused programs for academic and industry leadership",
      duration: "3-5 Years", 
      startingFrom: "₹1,00,000/year",
      link: "/programs?level=doctoral",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Diploma Programs",
      description: "Specialized certificates and industry-focused skill programs", 
      duration: "6 months - 2 Years",
      startingFrom: "₹75,000/year",
      link: "/programs?level=diploma",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const essentialResources = [
    {
      title: "Eligibility Criteria",
      description: "Detailed requirements for all courses and programs",
      icon: <CheckCircle className="w-8 h-8" />,
      link: "/admissions/eligibility"
    },
    {
      title: "Fee Structure", 
      description: "Transparent breakdown of costs and payment options",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/admissions/fees"
    },
    {
      title: "Scholarships",
      description: "Financial aid and merit-based scholarship opportunities", 
      icon: <Award className="w-8 h-8" />,
      link: "/admissions/scholarships"
    },
    {
      title: "Download Prospectus",
      description: "Complete university brochure with all program details",
      icon: <Download className="w-8 h-8" />,
      link: "/downloads/prospectus"
    }
  ];

  const faqs = [
    {
      question: "What is the application deadline for 2025 admissions?",
      answer: "The application deadline is June 15, 2025. We recommend applying early to ensure your application is processed on time."
    },
    {
      question: "Can I apply for multiple programs?",
      answer: "Yes, you can apply for up to 3 programs in a single application. You'll need to indicate your preference order."
    },
    {
      question: "What documents do I need for my application?",
      answer: "Required documents include academic transcripts, ID proof, passport-size photographs, entrance exam scores (if applicable), and recommendation letters for postgraduate programs."
    },
    {
      question: "Is there an application fee?",
      answer: "Yes, the application fee is ₹1,500 for domestic students and $50 for international students. This fee is non-refundable."
    },
    {
      question: "When will I receive my admission decision?",
      answer: "Admission decisions are typically communicated within 4-6 weeks of application submission, provided all required documents are received."
    },
    {
      question: "Do you offer scholarships for international students?",
      answer: "Yes, we offer various scholarships including merit-based awards, need-based aid, and special scholarships for international students from specific regions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Welcome & Key Info */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Admissions 2025: 
              <span className="block text-[var(--fsu-gold)]">Your Future Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-12">
              Join thousands of students who have transformed their dreams into reality at FS University.
            </p>

            {/* Key Dates Timeline */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-[var(--fsu-gold)]">Important Dates</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {keyDates.map((date, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${
                      date.status === 'completed' ? 'bg-green-400' : 'bg-[var(--fsu-gold)]'
                    }`}></div>
                    <div className="font-semibold text-white">{date.event}</div>
                    <div className="text-neutral-200 text-sm">{date.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold text-lg px-8 py-4"
              asChild
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process - Step-by-Step Guide */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              A Simple Path to Admission
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Follow these four straightforward steps to begin your journey at FS University.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow relative">
                <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center text-[var(--fsu-crimson)] mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-[var(--fsu-gold)]"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Levels - Guided Pathways */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Find Your Program
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore our comprehensive range of programs designed for students at every academic level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programLevels.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-3">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)]">
                        Starting from {program.startingFrom}
                      </Badge>
                    </div>
                    <Button 
                      className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                      asChild
                    >
                      <Link href={program.link}>
                        Explore {program.title.split(' ')[0]} Programs →
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Resources */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Essential Information
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Access key resources to help you through the admission process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {essentialResources.map((resource, index) => (
              <Link key={index} href={resource.link}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center text-[var(--fsu-crimson)] mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about admissions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50 transition-colors">
                      <h3 className="text-lg font-semibold text-[var(--fsu-crimson)] pr-4">
                        {faq.question}
                      </h3>
                      <div className="w-6 h-6 text-[var(--fsu-crimson)] transition-transform group-open:rotate-180">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help you every step of the way. Start your application today or get in touch for personalized guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold text-lg px-8 py-4"
              asChild
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] text-lg px-8 py-4"
              asChild
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
