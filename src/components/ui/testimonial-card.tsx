import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
  className
}) => {
  return (
    <Card className={cn(
      "bg-white border border-neutral-100 hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      <CardContent className="p-6">
        <Quote className="w-8 h-8 text-[var(--fsu-gold)] mb-4" />
        
        <blockquote className="text-neutral-700 mb-6 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        
        <div className="flex items-center gap-4">
          {image ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={image}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {author.charAt(0)}
              </span>
            </div>
          )}
          
          <div>
            <div className="font-semibold text-neutral-900">{author}</div>
            <div className="text-sm text-neutral-600">
              {role}
              {company && (
                <>
                  <span className="mx-1">•</span>
                  <span className="text-[var(--fsu-crimson)]">{company}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
