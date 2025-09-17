"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AccreditationItem {
  id: string;
  name: string;
  acronym: string;
  logo: string;
  color: string;
}

interface AccreditationMarqueeProps {
  className?: string;
}

export const AccreditationMarquee: React.FC<AccreditationMarqueeProps> = ({
  className,
}) => {
  const accreditations: AccreditationItem[] = [
    {
      id: "ugc",
      name: "University Grants Commission",
      acronym: "UGC",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/05/UGC_India_Logo.png",
      color: "#1E3A8A",
    },
    {
      id: "aicte",
      name: "All India Council for Technical Education",
      acronym: "AICTE",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/05/images.png",
      color: "#059669",
    },
    {
      id: "bci",
      name: "Bar Council of India",
      acronym: "BCI",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/Bar-Council-of-India-BCI.png",
      color: "#DC2626",
    },
    {
      id: "pci",
      name: "Pharmacy Council of India",
      acronym: "PCI",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/Pharmacy-Council-of-India-PCI.jpg",
      color: "#7C3AED",
    },
    {
      id: "ncte",
      name: "National Council for Teacher Education",
      acronym: "NCTE",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/National-Council-for-Teacher-Education-NCTE.jpg",
      color: "#EA580C",
    },
    {
      id: "inc",
      name: "Indian Nursing Council",
      acronym: "INC",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/Indian-Nursing-Council-INC.jpg",
      color: "#0891B2",
    },
    {
      id: "ccim",
      name: "Central Council of Indian Medicine",
      acronym: "CCIM",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/Central-Council-of-Indian-Medicine.jpg",
      color: "#16A34A",
    },
    {
      id: "ncism",
      name: "National Commission for Indian System of Medicine",
      acronym: "NCISM",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/National-Commission-for-Indian-System-of-Medicine.jpg",
      color: "#9333EA",
    },
    {
      id: "ayush",
      name: "Ministry of Ayush, Government of India",
      acronym: "AYUSH",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/Ministry-of-Ayush-Government-of-India.jpg",
      color: "#DC2626",
    },
    {
      id: "up-state",
      name: "UP State Government",
      acronym: "UP Govt",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/UP-State-Government-Act-no.-4-of-2021.png",
      color: "#0891B2",
    },
    {
      id: "up-medical",
      name: "UP State Medical Faculty",
      acronym: "UP Medical",
      logo: "https://fsu.edu.in/wp-content/uploads/2025/03/Established-by-UP-State-Medical-Faculty.jpg",
      color: "#7C2D12",
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedAccreditations = [...accreditations, ...accreditations];

  return (
    <section
      className={cn(
        "py-12 bg-gradient-to-r from-neutral-50 via-white to-neutral-50 border-y border-neutral-200",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-neutral-600 mb-2">
            Trusted & Accredited By
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--fsu-gold)] to-[var(--fsu-crimson)] mx-auto rounded-full"></div>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden p-2">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee Track */}
          <div className="flex animate-marquee hover:pause-marquee">
            {duplicatedAccreditations.map((accreditation, index) => (
              <div
                key={`${accreditation.id}-${index}`}
                className="flex-shrink-0 mx-6 group relative flex flex-col items-center"
              >
                {/* Outer decorative border - FS University brand styling */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-full opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>

                <div
                  className="relative w-20 h-20 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 group-hover:scale-110 group-hover:border-[var(--fsu-gold)]"
                  style={{
                    borderColor: "var(--fsu-gold)/30",
                    boxShadow:
                      "0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(162, 33, 40, 0.1)",
                  }}
                >
                  <Image
                    src={accreditation.logo}
                    alt={`${accreditation.acronym} Logo`}
                    width={56}
                    height={56}
                    className="object-contain transition-transform duration-300"
                  />
                </div>

                {/* Tooltip on hover - now shows full name */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="bg-[var(--fsu-crimson)] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-[var(--fsu-gold)] max-w-48">
                    {accreditation.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--fsu-crimson)]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
