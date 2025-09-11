import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  BookOpen,
  Users,
  Wifi,
  Shield,
  Coffee,
  Heart,
  Dumbbell,
  Microscope,
  Music,
  Clock,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

const CampusFacilitiesPage = () => {
  const facilities = [
    {
      id: 1,
      name: 'Central Library',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'A state-of-the-art library with over 100,000 books, digital resources, and quiet study spaces for focused learning.',
      features: ['100,000+ Books', 'Digital Resources', '24/7 Access', 'Reading Rooms'],
      icon: BookOpen,
      category: 'Academic'
    },
    {
      id: 2,
      name: 'Main Auditorium',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'A modern auditorium with seating for 1,000 people, equipped with advanced audio-visual systems for events and ceremonies.',
      features: ['1,000 Seating', 'AV Systems', 'Air Conditioned', 'Stage Equipment'],
      icon: Users,
      category: 'Events'
    },
    {
      id: 3,
      name: 'Student Cafeteria',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Multiple dining options with nutritious meals, snacks, and beverages in a comfortable and hygienic environment.',
      features: ['Multiple Cuisines', 'Hygienic Food', 'Affordable Prices', 'Spacious Seating'],
      icon: Coffee,
      category: 'Dining'
    },
    {
      id: 4,
      name: 'Medical Center',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Fully equipped medical facility with qualified doctors and nurses providing 24/7 healthcare services to students and staff.',
      features: ['24/7 Service', 'Qualified Doctors', 'Emergency Care', 'Health Checkups'],
      icon: Heart,
      category: 'Healthcare'
    },
    {
      id: 5,
      name: 'Fitness Center & Gymnasium',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Modern gymnasium with latest fitness equipment, indoor courts, and facilities for various sports and physical activities.',
      features: ['Modern Equipment', 'Indoor Courts', 'Fitness Training', 'Sports Facilities'],
      icon: Dumbbell,
      category: 'Sports'
    },
    {
      id: 6,
      name: 'Research Laboratories',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Advanced laboratories equipped with cutting-edge instruments for research and practical learning across various disciplines.',
      features: ['Advanced Equipment', 'Research Facilities', 'Safety Protocols', 'Expert Supervision'],
      icon: Microscope,
      category: 'Academic'
    },
    {
      id: 7,
      name: 'Computer Center',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'High-speed internet connectivity and modern computer labs with latest software for academic and research purposes.',
      features: ['High-Speed Internet', 'Latest Software', '500+ Computers', 'Technical Support'],
      icon: Wifi,
      category: 'Technology'
    },
    {
      id: 8,
      name: 'Music & Arts Center',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Dedicated spaces for music, dance, and arts with professional equipment and studios for creative expression.',
      features: ['Music Studios', 'Dance Hall', 'Art Studios', 'Performance Spaces'],
      icon: Music,
      category: 'Arts'
    },
    {
      id: 9,
      name: 'Security & Safety',
      image: '/fs-university-logo1.png', // Placeholder
      description: 'Comprehensive security systems with CCTV surveillance, trained security personnel, and emergency response protocols.',
      features: ['24/7 Security', 'CCTV Surveillance', 'Emergency Response', 'Access Control'],
      icon: Shield,
      category: 'Security'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Academic': 'bg-blue-100 text-blue-800',
      'Events': 'bg-purple-100 text-purple-800',
      'Dining': 'bg-orange-100 text-orange-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Sports': 'bg-green-100 text-green-800',
      'Technology': 'bg-indigo-100 text-indigo-800',
      'Arts': 'bg-pink-100 text-pink-800',
      'Security': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const stats = [
    { number: '50+', label: 'Modern Facilities', icon: MapPin },
    { number: '24/7', label: 'Campus Security', icon: Shield },
    { number: '100%', label: 'Wi-Fi Coverage', icon: Wifi },
    { number: '1000+', label: 'Daily Users', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm opacity-90">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/campus-life" className="hover:underline">Campus Life</Link>
                <span>/</span>
                <span>Facilities</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Experience excellence in every corner of our campus with state-of-the-art facilities 
              designed to enhance your learning, living, and recreational experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)] px-8 py-3 text-lg font-semibold"
              >
                <Link href="/virtual-tour">
                  Take Virtual Tour
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Schedule Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Our Campus Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the comprehensive range of facilities that make FS University 
              a perfect place for learning, growth, and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => {
              const IconComponent = facility.icon;
              return (
                <Card key={facility.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
                  <div className="relative h-64">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(facility.category)}>
                        {facility.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-3 text-white">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">{facility.name}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {facility.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {facility.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Clock className="w-3 h-3 mr-2 text-[var(--fsu-crimson)]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Services */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Campus Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our main facilities, we offer various services to ensure a comfortable and enriching campus experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Banking Services</h4>
              <p className="text-sm text-gray-600">On-campus ATMs and banking facilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Convenience Store</h4>
              <p className="text-sm text-gray-600">Daily essentials and stationery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Free Wi-Fi</h4>
              <p className="text-sm text-gray-600">Campus-wide high-speed internet</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Student Support</h4>
              <p className="text-sm text-gray-600">Counseling and guidance services</p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Our Campus</h3>
          <p className="text-lg mb-6 opacity-90">
            See for yourself what makes FS University special. Schedule a campus visit or take our virtual tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Link href="/contact">
                Schedule Campus Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3 text-lg"
            >
              <Link href="/virtual-tour">
                Virtual Tour
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CampusFacilitiesPage;
