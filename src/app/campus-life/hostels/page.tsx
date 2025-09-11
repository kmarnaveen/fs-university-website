import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Shield,
  Wifi,
  Utensils,
  Users,
  Shirt,
  Home,
  Clock,
  MapPin,
  Check,
  Download,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

const HostelPage = () => {
  const amenities = [
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance and trained personnel ensuring student safety.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Wifi,
      title: 'High-Speed Wi-Fi',
      description: 'Complimentary high-speed internet connectivity throughout the hostel premises.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Utensils,
      title: 'Mess & Dining Hall',
      description: 'Nutritious meals with varied menu options prepared in hygienic conditions.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Users,
      title: 'Recreation Rooms',
      description: 'Common areas for socializing, games, and recreational activities for students.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shirt,
      title: 'Laundry Services',
      description: 'On-site laundry facilities with washing machines and drying areas.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Home,
      title: 'Housekeeping',
      description: 'Regular cleaning and maintenance services to ensure a comfortable living environment.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const roomTypes = [
    {
      id: 1,
      type: 'Single Occupancy',
      image: '/fs-university-logo1.png', // Placeholder
      price: '₹60,000/year',
      features: ['Private Room', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Wi-Fi'],
      popular: false
    },
    {
      id: 2,
      type: 'Double Occupancy',
      image: '/fs-university-logo1.png', // Placeholder
      price: '₹45,000/year',
      features: ['Shared Room', 'Shared Bathroom', '2 Study Tables', '2 Wardrobes', 'Wi-Fi'],
      popular: true
    },
    {
      id: 3,
      type: 'Triple Occupancy',
      image: '/fs-university-logo1.png', // Placeholder
      price: '₹35,000/year',
      features: ['Shared Room', 'Common Bathroom', '3 Study Tables', '3 Wardrobes', 'Wi-Fi'],
      popular: false
    },
    {
      id: 4,
      type: 'Apartment Style',
      image: '/fs-university-logo1.png', // Placeholder
      price: '₹80,000/year',
      features: ['2 Bedrooms', 'Kitchen', 'Living Area', 'Private Bathroom', 'Wi-Fi'],
      popular: false
    }
  ];

  const hostelRules = [
    'Entry and exit timing: 6:00 AM to 10:00 PM',
    'Visitors allowed only in designated areas',
    'No alcohol or smoking permitted in hostel premises',
    'Maintain cleanliness in rooms and common areas',
    'Respect fellow residents and maintain discipline',
    'Prior permission required for overnight absence',
    'Electrical appliances subject to approval',
    'Damage to hostel property will incur charges'
  ];

  const stats = [
    { number: '8', label: 'Hostel Blocks', icon: Home },
    { number: '2000+', label: 'Student Capacity', icon: Users },
    { number: '24/7', label: 'Security & Support', icon: Shield },
    { number: '100%', label: 'Wi-Fi Coverage', icon: Wifi }
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
                <span>Hostels</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              A Home Away From Home
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Experience comfortable and secure hostel accommodation designed to foster 
              academic excellence, personal growth, and lifelong friendships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)] px-8 py-3 text-lg font-semibold"
              >
                <Link href="/downloads">
                  Download Application Form
                  <Download className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Visit Hostel
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

        {/* Amenities & Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our hostels provide all the essential amenities and services to ensure 
              a comfortable and conducive living environment for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className={`w-16 h-16 ${amenity.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Room Gallery & Information */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Room Types & Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from various accommodation options designed to meet different 
              preferences and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200 relative">
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="h-48 bg-gray-200">
                  <img 
                    src={room.image} 
                    alt={room.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {room.type}
                  </h3>
                  <div className="text-2xl font-bold text-[var(--fsu-crimson)] mb-4">
                    {room.price}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-2 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${room.popular ? 
                      'bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white' : 
                      'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Select Room
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Rules & Regulations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
              Hostel Rules & Regulations
            </h3>
            <div className="space-y-3">
              {hostelRules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 text-[var(--fsu-crimson)] flex-shrink-0" />
                  <span className="text-gray-700">{rule}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Application Process
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Download Form</h4>
                  <p className="text-sm text-gray-600">Download and fill the hostel application form</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Submit Documents</h4>
                  <p className="text-sm text-gray-600">Submit form with required documents and fees</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Room Allocation</h4>
                  <p className="text-sm text-gray-600">Receive room allocation confirmation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Check-in</h4>
                  <p className="text-sm text-gray-600">Complete check-in process and move in</p>
                </div>
              </div>
            </div>
            
            <Button 
              asChild
              className="w-full mt-6 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
            >
              <Link href="/downloads">
                <Download className="w-4 h-4 mr-2" />
                Download Application Form
              </Link>
            </Button>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="p-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hostel Administration Office</h3>
              <p className="mb-6 opacity-90 leading-relaxed">
                For hostel-related queries, room allocation, or any assistance, 
                contact our dedicated hostel administration team.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>Hostel Office: +91 98765 43212</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hostel@fsuniversity.ac.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Hostel Block A, Ground Floor</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Office Hours: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button 
                asChild
                className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Contact Hostel Office
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HostelPage;
