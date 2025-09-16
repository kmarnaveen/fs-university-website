import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  location?: string;
  image?: string;
  href: string;
  featured?: boolean;
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  date,
  category,
  location,
  image,
  href,
  featured = false,
  className
}) => {
  return (
    <div className="relative">
      {/* Outer decorative border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-xl opacity-20 blur-sm"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-xl opacity-15"></div>

      <Card
        className={cn(
          "relative overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-[var(--fsu-gold)]/30 backdrop-blur-sm",
          featured && "ring-2 ring-[var(--fsu-gold)]",
          className
        )}
      >
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge
              variant="secondary"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)]"
            >
              {category}
            </Badge>
            {featured && (
              <Badge
                variant="outline"
                className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)]"
              >
                Featured
              </Badge>
            )}
          </div>

          <h3 className="text-xl font-semibold text-neutral-900 mb-3 line-clamp-2 hover:text-[var(--fsu-crimson)] transition-colors">
            <Link href={href}>{title}</Link>
          </h3>

          <p className="text-neutral-600 mb-4 line-clamp-3">{description}</p>

          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" className="w-full group" asChild>
            <Link href={href}>
              Read More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
