import React from 'react';
import ProgramCard from './ProgramCard';

interface Program {
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

interface ProgramGridProps {
  programs: Program[];
  columns?: 1 | 2 | 3 | 4;
  showFeatured?: boolean;
}

const ProgramGrid: React.FC<ProgramGridProps> = ({ 
  programs, 
  columns = 3,
  showFeatured = true 
}) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  // Sort programs to show featured first if enabled
  const sortedPrograms = showFeatured 
    ? [...programs].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    : programs;

  return (
    <div className={`grid ${gridClasses[columns]} gap-6`}>
      {sortedPrograms.map((program) => (
        <ProgramCard
          key={program.id}
          {...program}
        />
      ))}
    </div>
  );
};

export default ProgramGrid;
