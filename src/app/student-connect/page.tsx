import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { 
  Users, 
  MessageCircle, 
  Video, 
  Calendar,
  Star,
  MapPin,
  GraduationCap,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Talk to Our Students - FS University',
  description: 'Connect with current FS University students to get real insights about campus life, academics, and the university experience.',
};

const studentAmbassadors = [
  {
    id: 1,
    name: 'Priya Sharma',
    program: 'Computer Science Engineering',
    year: '3rd Year',
    image: '/placeholder-student-1.jpg',
    rating: 4.9,
    specialties: ['Campus Life', 'Tech Programs', 'Placements'],
    location: 'Firozabad',
    bio: 'Passionate about technology and helping prospective students navigate their journey at FS University.',
    available: true
  },
  {
    id: 2,
    name: 'Rahul Verma',
    program: 'MBA - Marketing',
    year: '2nd Year',
    image: '/placeholder-student-2.jpg',
    rating: 4.8,
    specialties: ['Business Programs', 'Internships', 'Student Activities'],
    location: 'Agra',
    bio: 'Former engineer turned business student, happy to share insights about career transitions.',
    available: true
  },
  {
    id: 3,
    name: 'Ananya Patel',
    program: 'Law',
    year: '4th Year',
    image: '/placeholder-student-3.jpg',
    rating: 4.9,
    specialties: ['Law Programs', 'Moot Courts', 'Legal Internships'],
    location: 'Delhi',
    bio: 'Active in student government and legal societies, passionate about justice and advocacy.',
    available: false
  },
  {
    id: 4,
    name: 'Karthik Reddy',
    program: 'Pharmacy',
    year: '3rd Year',
    image: '/placeholder-student-4.jpg',
    rating: 4.7,
    specialties: ['Healthcare Programs', 'Research', 'Lab Experience'],
    location: 'Mathura',
    bio: 'Aspiring pharmacist with research experience, happy to discuss healthcare career paths.',
    available: true
  }
];

export default function StudentConnectPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Talk to Our Students
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get authentic insights about FS University directly from current students. Ask about academics, campus life, placements, and everything you want to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-3">
                <Video className="w-4 h-4 mr-2" />
                Video Call
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3">
                <MessageCircle className="w-4 h-4 mr-2" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Ambassadors */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Student Ambassadors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our student ambassadors are here to answer your questions and share their real experiences at FS University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {studentAmbassadors.map((student) => (
              <Card key={student.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.program}</p>
                        <p className="text-sm text-gray-500">{student.year}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{student.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{student.location}</span>
                      <Badge 
                        variant={student.available ? "default" : "secondary"}
                        className={student.available ? "bg-green-100 text-green-800" : ""}
                      >
                        {student.available ? 'Available' : 'Busy'}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{student.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {student.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        disabled={!student.available}
                        className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] disabled:opacity-50"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={!student.available}
                        className="disabled:opacity-50"
                      >
                        <Video className="w-4 h-4 mr-1" />
                        Video Call
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Multiple Ways to Connect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Video Call</h3>
                <p className="text-gray-600 mb-4">
                  Have a face-to-face conversation with our students via video call.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule Video Call
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Start an instant chat conversation with available students.
                </p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Q&A Sessions</h3>
                <p className="text-gray-600 mb-4">
                  Join scheduled group sessions to ask questions with other prospective students.
                </p>
                <Button variant="outline" className="w-full">
                  View Sessions
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs from Students */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Common Questions Students Answer
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Academic Experience</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• How challenging are the courses?</li>
                    <li>• What's the teaching quality like?</li>
                    <li>• How much practical learning is involved?</li>
                    <li>• Are professors approachable?</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Campus Life</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• What's hostel life like?</li>
                    <li>• How's the food on campus?</li>
                    <li>• What clubs and activities are available?</li>
                    <li>• How diverse is the student body?</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career & Placements</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• How good are the placement opportunities?</li>
                    <li>• What companies visit for recruitment?</li>
                    <li>• How does the career services help?</li>
                    <li>• What's the average salary package?</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Facilities & Infrastructure</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• How modern are the labs and equipment?</li>
                    <li>• Is the library well-equipped?</li>
                    <li>• What sports facilities are available?</li>
                    <li>• How's the WiFi and IT infrastructure?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
