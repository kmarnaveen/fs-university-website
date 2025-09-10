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
  const admissionStats = [
    { number: "50,000+", label: "Applications", description: "Received annually" },
    { number: "95%", label: "Success Rate", description: "Graduate employment" },
    { number: "85%", label: "Scholarship", description: "Students receive aid" },
    { number: "120+", label: "Countries", description: "International students" }
  ];

  const programs = [
    {
      category: "Engineering & Technology",
      icon: <Building className="w-6 h-6" />,
      duration: "4 Years",
      degrees: ["B.Tech", "M.Tech", "PhD"],
      specializations: ["Computer Science", "Mechanical", "Electrical", "Civil", "Electronics"],
      fees: "₹2,50,000/year",
      seats: "2,400"
    },
    {
      category: "Management & Business",
      icon: <TrendingUp className="w-6 h-6" />,
      duration: "2-3 Years",
      degrees: ["MBA", "BBA", "PhD"],
      specializations: ["Finance", "Marketing", "HR", "Operations", "Strategy"],
      fees: "₹3,50,000/year",
      seats: "600"
    },
    {
      category: "Medical & Health Sciences",
      icon: <Shield className="w-6 h-6" />,
      duration: "4-6 Years",
      degrees: ["MBBS", "BDS", "BAMS", "MD", "MS"],
      specializations: ["General Medicine", "Surgery", "Pediatrics", "Dermatology"],
      fees: "₹8,50,000/year",
      seats: "300"
    },
    {
      category: "Arts & Sciences",
      icon: <BookOpen className="w-6 h-6" />,
      duration: "3-4 Years",
      degrees: ["BA", "BSc", "MA", "MSc", "PhD"],
      specializations: ["Literature", "Physics", "Chemistry", "Mathematics", "Psychology"],
      fees: "₹1,50,000/year",
      seats: "1,200"
    },
    {
      category: "Law & Legal Studies",
      icon: <Award className="w-6 h-6" />,
      duration: "3-5 Years",
      degrees: ["LLB", "LLM", "BA LLB"],
      specializations: ["Corporate Law", "Criminal Law", "International Law"],
      fees: "₹2,00,000/year",
      seats: "300"
    },
    {
      category: "Pharmacy",
      icon: <Star className="w-6 h-6" />,
      duration: "4 Years",
      degrees: ["B.Pharm", "M.Pharm", "PharmD"],
      specializations: ["Pharmaceutics", "Pharmacology", "Clinical Pharmacy"],
      fees: "₹2,75,000/year",
      seats: "240"
    }
  ];

  const admissionProcess = [
    {
      step: "1",
      title: "Application Submission",
      description: "Complete online application form with required documents",
      deadline: "March 31, 2025",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Entrance Examination",
      description: "Appear for FS-SET or accept JEE/NEET/CAT scores",
      deadline: "April 15, 2025",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Merit List & Counseling",
      description: "Check merit list and attend counseling sessions",
      deadline: "May 10, 2025",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Document Verification",
      description: "Submit original documents for verification",
      deadline: "May 20, 2025",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: "5",
      title: "Fee Payment & Admission",
      description: "Pay admission fees and confirm your seat",
      deadline: "May 31, 2025",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      amount: "Up to 100%",
      criteria: "Academic excellence (95%+ in 12th)",
      applicable: "All programs"
    },
    {
      name: "Sports Scholarship",
      amount: "Up to 75%",
      criteria: "State/National level sports achievements",
      applicable: "All programs"
    },
    {
      name: "Need-based Aid",
      amount: "Up to 50%",
      criteria: "Family income below ₹5 lakhs",
      applicable: "All programs"
    },
    {
      name: "Alumni Legacy",
      amount: "25%",
      criteria: "Children of FS University alumni",
      applicable: "All programs"
    },
    {
      name: "Girl Child Scholarship",
      amount: "20%",
      criteria: "Female students in Engineering",
      applicable: "Engineering only"
    },
    {
      name: "Rural Area Scholarship",
      amount: "30%",
      criteria: "Students from rural backgrounds",
      applicable: "All programs"
    }
  ];

  const importantDates = [
    { event: "Application Opens", date: "December 1, 2024", status: "completed" },
    { event: "Application Deadline", date: "March 31, 2025", status: "upcoming" },
    { event: "FS-SET Exam", date: "April 15, 2025", status: "upcoming" },
    { event: "Results Declaration", date: "May 1, 2025", status: "upcoming" },
    { event: "Counseling Begins", date: "May 10, 2025", status: "upcoming" },
    { event: "Classes Commence", date: "July 15, 2025", status: "upcoming" }
  ];

  const eligibilityRequirements = [
    {
      program: "Engineering (B.Tech)",
      qualification: "12th with PCM",
      percentage: "75%",
      exam: "JEE Main/FS-SET"
    },
    {
      program: "Medical (MBBS)",
      qualification: "12th with PCB",
      percentage: "85%",
      exam: "NEET"
    },
    {
      program: "Management (MBA)",
      qualification: "Bachelor's Degree",
      percentage: "60%",
      exam: "CAT/MAT/FS-SET"
    },
    {
      program: "Law (LLB)",
      qualification: "Bachelor's Degree",
      percentage: "55%",
      exam: "CLAT/FS-SET"
    },
    {
      program: "Arts/Science",
      qualification: "12th in relevant stream",
      percentage: "60%",
      exam: "FS-SET/Merit"
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
              Admissions 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Gateway to
              <span className="block text-[var(--fsu-gold)]">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              Join thousands of students who have transformed their dreams into reality at FS University. Apply now for 2025 admissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
                asChild
              >
                <Link href="/apply-now">Apply Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                asChild
              >
                <Link href="/brochure">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {admissionStats.map((stat, index) => (
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

      {/* Quick Application Alert */}
      <section className="py-6 bg-[var(--fsu-gold)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-[var(--fsu-crimson)]" />
              <div>
                <span className="font-bold text-[var(--fsu-crimson)]">
                  Application Deadline: March 31, 2025
                </span>
                <span className="text-[var(--fsu-crimson)] ml-2">
                  | Only 45 days remaining!
                </span>
              </div>
            </div>
            <Button 
              className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
              asChild
            >
              <Link href="/apply-now">Apply Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section id="programs" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Programs Offered
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of undergraduate, postgraduate, and doctoral programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center text-white">
                      {program.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                        {program.category}
                      </CardTitle>
                      <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]">
                        {program.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-2">Degrees:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.degrees.map((degree, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {degree}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-2">Specializations:</h4>
                      <p className="text-sm text-neutral-600">
                        {program.specializations.join(", ")}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <div className="text-sm text-neutral-500">Annual Fees</div>
                        <div className="font-bold text-[var(--fsu-crimson)]">{program.fees}</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500">Seats</div>
                        <div className="font-bold text-[var(--fsu-crimson)]">{program.seats}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admission-process" className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Simple and transparent admission process designed for your convenience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {admissionProcess.map((process, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <div className="w-12 h-12 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center text-[var(--fsu-crimson)] mx-auto mb-4">
                  {process.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-2">
                  {process.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-3">
                  {process.description}
                </p>
                <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]">
                  {process.deadline}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section id="eligibility" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Eligibility Requirements
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Check if you meet the eligibility criteria for your desired program.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[var(--fsu-crimson)] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-left">Qualification</th>
                  <th className="px-6 py-4 text-left">Min. Percentage</th>
                  <th className="px-6 py-4 text-left">Entrance Exam</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityRequirements.map((req, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-[var(--fsu-crimson)]">
                      {req.program}
                    </td>
                    <td className="px-6 py-4 text-neutral-700">
                      {req.qualification}
                    </td>
                    <td className="px-6 py-4 text-neutral-700">
                      {req.percentage}
                    </td>
                    <td className="px-6 py-4">
                      <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]">
                        {req.exam}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We believe in making quality education accessible. Explore various scholarship opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-[var(--fsu-crimson)]">
                      {scholarship.name}
                    </CardTitle>
                    <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] font-bold">
                      {scholarship.amount}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-1">Criteria:</h4>
                      <p className="text-neutral-600 text-sm">
                        {scholarship.criteria}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--fsu-crimson)] mb-1">Applicable to:</h4>
                      <Badge variant="outline">
                        {scholarship.applicable}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="important-dates" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Important Dates
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Mark your calendar with these crucial admission dates.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                {importantDates.map((date, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
                    date.status === 'completed' ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${
                        date.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold text-[var(--fsu-crimson)]">
                          {date.event}
                        </h3>
                        <p className="text-neutral-600 text-sm">
                          {date.date}
                        </p>
                      </div>
                    </div>
                    <Badge className={
                      date.status === 'completed' 
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 text-white'
                    }>
                      {date.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Support */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Need Help with Your Application?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our admissions team is here to support you throughout the process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2">
                Call Us
              </h3>
              <p className="text-neutral-600 mb-4">
                Speak with our admissions counselors
              </p>
              <Button variant="outline" className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)]">
                +91-1234567890
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center text-[var(--fsu-crimson)] mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2">
                Email Us
              </h3>
              <p className="text-neutral-600 mb-4">
                Get detailed information via email
              </p>
              <Button variant="outline" className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)]">
                admissions@fsu.ac.in
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--fsu-crimson)] mb-2">
                Visit Us
              </h3>
              <p className="text-neutral-600 mb-4">
                Schedule a campus visit
              </p>
              <Button variant="outline" className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)]">
                Book Visit
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-4">
              Download Resources
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Access important documents and forms for your admission process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "University Brochure", size: "PDF, 2.5 MB" },
              { name: "Application Form", size: "PDF, 450 KB" },
              { name: "Fee Structure", size: "PDF, 320 KB" },
              { name: "Scholarship Guide", size: "PDF, 1.2 MB" }
            ].map((resource, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center text-[var(--fsu-crimson)] mx-auto mb-4">
                  <Download className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[var(--fsu-crimson)] mb-2">
                  {resource.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {resource.size}
                </p>
                <Button 
                  className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] w-full"
                  size="sm"
                >
                  Download
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful alumni who started their journey at FS University. Your future begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
              asChild
            >
              <Link href="/apply-now">Start Application</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
              asChild
            >
              <Link href="/contact">Get Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
