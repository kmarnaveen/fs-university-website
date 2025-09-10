"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  Users, 
  Award,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ApplyCTAProps {
  variant?: 'header' | 'footer' | 'sticky' | 'hero' | 'sidebar' | 'banner';
  deadline?: Date;
  showStats?: boolean;
  showBenefits?: boolean;
  program?: string;
  className?: string;
}

const ApplyCTA: React.FC<ApplyCTAProps> = ({
  variant = 'hero',
  deadline,
  showStats = false,
  showBenefits = false,
  program,
  className = ''
}) => {
  const stats = [
    { label: 'Programs', value: '150+' },
    { label: 'Students', value: '25,000+' },
    { label: 'Faculty', value: '1,200+' },
    { label: 'Placement Rate', value: '95%' }
  ];

  const benefits = [
    'World-class faculty',
    'Industry partnerships',
    'Research opportunities',
    'Global alumni network'
  ];

  const getDeadlineText = () => {
    if (!deadline) return null;
    const now = new Date();
    const diffTime = deadline.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0) {
      return `${diffDays} days left to apply`;
    }
    return 'Application deadline passed';
  };

  // Header variant - compact for navigation
  if (variant === 'header') {
    return (
      <Button 
        className={`bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold ${className}`}
        asChild
      >
        <Link href="/apply">Apply Now</Link>
      </Button>
    );
  }

  // Footer variant - similar to header
  if (variant === 'footer') {
    return (
      <Button 
        className={`bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold ${className}`}
        asChild
      >
        <Link href="/apply">Apply Today</Link>
      </Button>
    );
  }

  // Sticky mobile bottom bar
  if (variant === 'sticky') {
    return (
      <motion.div 
        className={`fixed bottom-0 left-0 right-0 z-40 p-4 bg-[var(--fsu-crimson)] shadow-lg md:hidden ${className}`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Button 
          className="w-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold py-3"
          asChild
        >
          <Link href="/apply">
            <GraduationCap className="w-5 h-5 mr-2" />
            Apply to FS University
          </Link>
        </Button>
      </motion.div>
    );
  }

  // Banner variant - full width notification
  if (variant === 'banner') {
    return (
      <motion.div 
        className={`bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white p-4 ${className}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-[var(--fsu-crimson)]" />
            </div>
            <div>
              <h3 className="font-semibold">Application Deadline Approaching!</h3>
              {deadline && (
                <p className="text-sm text-neutral-100">{getDeadlineText()}</p>
              )}
            </div>
          </div>
          <Button 
            className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
            asChild
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  // Sidebar variant - compact for sidebars
  if (variant === 'sidebar') {
    return (
      <Card className={`bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white border-0 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-[var(--fsu-crimson)]" />
          </div>
          <h3 className="font-bold text-lg mb-2">Ready to Join FS University?</h3>
          <p className="text-sm text-neutral-100 mb-4">Start your application today</p>
          {deadline && (
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              {getDeadlineText()}
            </Badge>
          )}
          <Button 
            className="w-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold"
            asChild
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Hero variant - full featured for main sections
  return (
    <motion.div 
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white border-0 overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center">
            <motion.div 
              className="w-20 h-20 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GraduationCap className="w-10 h-10 text-[var(--fsu-crimson)]" />
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-4">
              Start Your Journey at FS University
            </h2>
            
            <p className="text-xl text-neutral-100 mb-6 max-w-2xl mx-auto">
              {program 
                ? `Apply for ${program} and join thousands of successful graduates.`
                : "Join our community of learners, researchers, and future leaders."
              }
            </p>

            {deadline && (
              <div className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] rounded-lg p-4 mb-6 inline-block">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">{getDeadlineText()}</span>
                </div>
              </div>
            )}

            {showBenefits && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[var(--fsu-gold)] flex-shrink-0" />
                    <span className="text-neutral-100">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {showStats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-[var(--fsu-gold)]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold text-lg px-8"
                asChild
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] font-semibold text-lg px-8"
                asChild
              >
                <Link href="/programs">
                  Browse Programs
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ApplyCTA;
