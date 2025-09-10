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
    <div className={cn(
      "text-center p-6 rounded-lg border border-neutral-100 bg-white shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      <div className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-2">
        {number}
      </div>
      <div className="text-lg font-semibold text-neutral-800 mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-neutral-600">
          {description}
        </div>
      )}
    </div>
  );
};
