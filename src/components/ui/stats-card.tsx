import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  number: string;
  label: string;
  description?: string;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  number,
  label,
  description,
  className
}) => {
  return (
    <div className="relative">
      {/* Outer decorative border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-xl opacity-20 blur-sm"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-xl opacity-15"></div>

      <div
        className={cn(
          "relative text-center p-6 rounded-lg border-2 border-[var(--fsu-gold)]/30 backdrop-blur-sm bg-white shadow-sm hover:shadow-md transition-shadow",
          className
        )}
      >
        <div className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-2">
          {number}
        </div>
        <div className="text-lg font-semibold text-neutral-800 mb-1">
          {label}
        </div>
        {description && (
          <div className="text-sm text-neutral-600">{description}</div>
        )}
      </div>
    </div>
  );
};
