import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Trophy,
  Users,
  Calendar,
  MapPin,
  Clock,
  Star,
  Medal,
  Target,
  Activity,
  Heart,
  Timer,
  Zap,
  Shield
} from 'lucide-react';
import Link from 'next/link';

const SportsPage = () => {
  const sportsStats = [
    { number: '25+', label: 'Sports Disciplines', icon: Activity },
    { number: '500+', label: 'Active Athletes', icon: Users },
    { number: '50+', label: 'Annual Tournaments', icon: Trophy },
    { number: '15', label: 'State Champions', icon: Medal }
  ];

  const indoorSports = [
    {
      name: 'Basketball',
      facility: 'Indoor Basketball Court',
      description: 'Professional-grade court with modern equipment and lighting',
      features: ['Air-conditioned facility', 'Professional court dimensions', 'High-quality flooring', 'LED lighting'],
      category: 'Team Sport',
      popular: true
    },
    {
      name: 'Badminton',
      facility: 'Badminton Hall',
      description: 'Multi-court facility for competitive and recreational play',
      features: ['8 courts available', 'Premium wooden flooring', 'Tournament-grade nets', 'Spectator seating'],
      category: 'Racquet Sport',
      popular: true
    },
    {
      name: 'Table Tennis',
      facility: 'Table Tennis Hall',
      description: 'Dedicated space with professional tables and equipment',
      features: ['12 tables available', 'International standard tables', 'Proper lighting', 'Storage facilities'],
      category: 'Racquet Sport',
      popular: false
    },
    {
      name: 'Chess',
      facility: 'Chess Room',
      description: 'Quiet environment for strategic thinking and tournaments',
      features: ['Tournament boards', 'Digital clocks', 'Study materials', 'Tournament hosting'],
      category: 'Mind Sport',
      popular: false
    }
  ];

  const outdoorSports = [
    {
      name: 'Football',
      facility: 'Football Ground',
      description: 'Full-size field with natural grass and modern amenities',
      features: ['FIFA standard dimensions', 'Natural grass surface', 'Floodlights', 'Player facilities'],
      category: 'Team Sport',
      popular: true
    },
    {
      name: 'Cricket',
      facility: 'Cricket Ground',
      description: 'Well-maintained cricket field with practice nets',
      features: ['Full-size ground', 'Practice nets', 'Pavilion', 'Scoreboard'],
      category: 'Team Sport',
      popular: true
    },
    {
      name: 'Athletics',
      facility: 'Athletic Track',
      description: '400m synthetic track with field event facilities',
      features: ['400m synthetic track', 'Field event areas', 'High jump pit', 'Shot put circle'],
      category: 'Individual Sport',
      popular: false
    },
    {
      name: 'Tennis',
      facility: 'Tennis Courts',
      description: 'Professional courts for competitive and recreational play',
      features: ['4 courts available', 'All-weather surface', 'Floodlights', 'Equipment storage'],
      category: 'Racquet Sport',
      popular: false
    }
  ];

  const fitnessAmenities = [
    {
      icon: Zap,
      title: 'Modern Gym Equipment',
      description: 'State-of-the-art cardio and strength training equipment from leading brands.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Heart,
      title: 'Cardio Zone',
      description: 'Dedicated cardio area with treadmills, ellipticals, and stationary bikes.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Target,
      title: 'Strength Training',
      description: 'Complete range of free weights, machines, and functional training equipment.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Yoga, aerobics, Zumba, and other group fitness classes by certified instructors.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      title: 'Personal Training',
      description: 'Certified personal trainers available for customized fitness programs.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Timer,
      title: 'Extended Hours',
      description: 'Fitness center open from 5:00 AM to 10:00 PM for your convenience.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const achievements = [
    { event: 'Inter-University Basketball Championship', position: '1st Place', year: '2023' },
    { event: 'State Level Cricket Tournament', position: '2nd Place', year: '2023' },
    { event: 'Regional Athletic Meet', position: '3rd Place', year: '2023' },
    { event: 'Inter-College Football League', position: '1st Place', year: '2022' },
    { event: 'State Badminton Championship', position: '2nd Place', year: '2022' },
    { event: 'University Chess Championship', position: '1st Place', year: '2022' }
  ];

  const upcomingEvents = [
    { name: 'Annual Sports Meet', date: 'March 15-17, 2024', type: 'University Event' },
    { name: 'Inter-Department Cricket', date: 'February 20, 2024', type: 'Internal Tournament' },
    { name: 'Basketball League Finals', date: 'February 25, 2024', type: 'Competition' },
    { name: 'Fitness Challenge Week', date: 'March 1-7, 2024', type: 'Wellness Event' },
    { name: 'Tennis Open Tournament', date: 'March 10, 2024', type: 'Open Tournament' }
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
                <span>Sports</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Excellence in Sports
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Foster athletic excellence, promote healthy competition, and build character 
              through our comprehensive sports and fitness programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)] px-8 py-3 text-lg font-semibold"
              >
                <Link href="/enquiry">
                  Join Sports Program
                  <Trophy className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Visit Facilities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {sportsStats.map((stat, index) => {
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

        {/* Indoor Sports */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Indoor Sports Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art indoor facilities equipped with modern amenities 
              for year-round training and competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {indoorSports.map((sport, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200 relative">
                {sport.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] font-semibold">
                      Popular
                    </Badge>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {sport.name}
                    </h3>
                    <p className="text-sm text-[var(--fsu-crimson)] font-medium">
                      {sport.facility}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {sport.category}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {sport.description}
                </p>
                
                <div className="space-y-2">
                  {sport.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Star className="w-4 h-4 mr-2 text-[var(--fsu-gold)] fill-current" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-6 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                >
                  Book Facility
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Outdoor Sports */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Outdoor Sports Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expansive outdoor facilities with professional-grade infrastructure 
              for various sports and athletic activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outdoorSports.map((sport, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200 relative">
                {sport.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] font-semibold">
                      Popular
                    </Badge>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {sport.name}
                    </h3>
                    <p className="text-sm text-[var(--fsu-crimson)] font-medium">
                      {sport.facility}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {sport.category}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {sport.description}
                </p>
                
                <div className="space-y-2">
                  {sport.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Star className="w-4 h-4 mr-2 text-[var(--fsu-gold)] fill-current" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-6 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                >
                  Book Facility
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Fitness Center */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-4">
              Fitness Center & Wellness
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete fitness and wellness facilities designed to promote 
              physical health and mental well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fitnessAmenities.map((amenity, index) => {
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

        {/* Achievements & Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Recent Achievements */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
              Recent Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Trophy className="w-6 h-6 text-[var(--fsu-crimson)]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {achievement.event}
                    </h4>
                    <div className="flex items-center mt-1">
                      <Badge 
                        className={`text-xs mr-2 ${
                          achievement.position === '1st Place' ? 'bg-yellow-100 text-yellow-800' :
                          achievement.position === '2nd Place' ? 'bg-gray-100 text-gray-800' :
                          'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {achievement.position}
                      </Badge>
                      <span className="text-xs text-gray-500">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {event.name}
                    </h4>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-600 mr-2">{event.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              asChild
              className="w-full mt-6 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
            >
              <Link href="/academics/calendar">
                <Calendar className="w-4 h-4 mr-2" />
                View Sports Calendar
              </Link>
            </Button>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="p-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sports Department</h3>
              <p className="mb-6 opacity-90 leading-relaxed">
                Join our vibrant sports community and discover your potential. 
                Contact our sports department for training programs, facility bookings, 
                and tournament information.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Sports Complex, Main Campus</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Office Hours: 8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  <span>Coach Support: Available Daily</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button 
                asChild
                className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Contact Sports Department
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

export default SportsPage;
