import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Users, BookOpen } from 'lucide-react';

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Undergraduate' | 'Graduate' | 'Doctoral' | 'Certificate';
  department: string;
  fees?: string;
  studentsEnrolled?: number;
  featured?: boolean;
  image?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  title,
  description,
  duration,
  level,
  department,
  fees,
  studentsEnrolled,
  featured = false,
  image
}) => {
  const levelColors = {
    'Undergraduate': 'bg-blue-100 text-blue-800',
    'Graduate': 'bg-green-100 text-green-800',
    'Doctoral': 'bg-purple-100 text-purple-800',
    'Certificate': 'bg-orange-100 text-orange-800',
  };

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${featured ? 'ring-2 ring-[var(--fsu-gold)]' : ''}`}>
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {featured && (
            <Badge className="absolute top-3 right-3 bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]">
              Featured
            </Badge>
          )}
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Badge className={levelColors[level]} variant="secondary">
              {level}
            </Badge>
            <CardTitle className="mt-2 text-lg font-bold text-[var(--fsu-crimson)] line-clamp-2">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-neutral-600 mt-1">
              {department}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-neutral-700 text-sm line-clamp-3 mb-4">
          {description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-neutral-600">
            <Clock className="w-4 h-4 mr-2 text-[var(--fsu-crimson)]" />
            <span>{duration}</span>
          </div>
          
          {fees && (
            <div className="flex items-center text-sm text-neutral-600">
              <DollarSign className="w-4 h-4 mr-2 text-[var(--fsu-crimson)]" />
              <span>{fees}</span>
            </div>
          )}
          
          {studentsEnrolled && (
            <div className="flex items-center text-sm text-neutral-600">
              <Users className="w-4 h-4 mr-2 text-[var(--fsu-crimson)]" />
              <span>{studentsEnrolled} students enrolled</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex w-full space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
            asChild
          >
            <Link href={`/programs/${id}`}>
              <BookOpen className="w-4 h-4 mr-2" />
              View Details
            </Link>
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
            asChild
          >
            <Link href={`/apply?program=${id}`}>
              Apply Now
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
