"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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
  className,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Extract numeric value and suffix from the number string
  const extractNumber = (str: string) => {
    const match = str.match(/^(\d+(?:,\d+)*|\d+(?:\.\d+)?)/);
    if (match) {
      const numericPart = parseFloat(match[1].replace(/,/g, ""));
      const suffix = str.replace(match[1], "");
      return { value: numericPart, suffix };
    }
    return { value: 0, suffix: str };
  };

  const { value: targetValue, suffix } = extractNumber(number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(targetValue);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <div ref={cardRef} className="relative">
      {/* Outer decorative border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-xl opacity-20 blur-sm"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-xl opacity-15"></div>

      <div
        className={cn(
          "relative text-center p-6 rounded-lg border-2 border-[var(--fsu-gold)]/30 backdrop-blur-sm bg-white shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105",
          className
        )}
      >
        <div className="text-3xl md:text-4xl font-bold text-[var(--fsu-crimson)] mb-2 transition-all duration-300">
          <span className="inline-block tabular-nums">
            {formatNumber(count)}
          </span>
          <span className="text-[var(--fsu-gold)]">{suffix}</span>
        </div>
        <div className="text-lg font-semibold text-neutral-800 mb-1">
          {label}
        </div>
        {description && (
          <div className="text-sm text-neutral-600">{description}</div>
        )}

        {/* Number ticker indicator */}
      </div>
    </div>
  );
};
