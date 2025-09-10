import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CompanyLogoProps {
  name: string;
  logo: string;
  tier?: 'premium' | 'standard';
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  name,
  logo,
  tier = 'standard',
  className
}) => {
  return (
    <div className={cn(
      "relative group bg-white rounded-lg border border-neutral-100 p-6 hover:shadow-md transition-all duration-300 hover:scale-105",
      tier === 'premium' && "ring-2 ring-[var(--fsu-gold)]",
      className
    )}>
      {tier === 'premium' && (
        <Badge className="absolute -top-2 left-4 bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-xs">
          Premium Recruiter
        </Badge>
      )}
      
      <div className="relative h-16 w-full flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={120}
          height={60}
          className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      
      <div className="text-center mt-3">
        <span className="text-sm font-medium text-neutral-700 group-hover:text-[var(--fsu-crimson)] transition-colors">
          {name}
        </span>
      </div>
    </div>
  );
};
