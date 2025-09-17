"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryModalProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[var(--fsu-maroon)] via-black to-[var(--fsu-crimson)] bg-opacity-95">
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full max-w-7xl mx-auto p-2 sm:p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Previous Button - Only show if more than 1 image */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Next Button - Only show if more than 1 image */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative max-w-full max-h-full">
            {/* Enhanced border and shadow container */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl border-2 sm:border-4 border-[var(--fsu-gold)] bg-white p-1 sm:p-2 transform transition-all duration-300">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain"
                  priority
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Additional decorative shadow layers */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-full h-full bg-[var(--fsu-crimson)]/15 rounded-xl sm:rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full bg-[var(--fsu-gold)]/10 rounded-xl sm:rounded-2xl -z-20" />
            </div>
          </div>
        </div>

        {/* Image Counter - Only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg border border-[var(--fsu-gold)]/30 backdrop-blur-sm">
              <span className="text-[var(--fsu-gold)]">{currentIndex + 1}</span>
              <span className="mx-1 sm:mx-2">/</span>
              <span>{images.length}</span>
            </div>
          </div>
        )}

        {/* Thumbnail Navigation - Only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3 max-w-full overflow-x-auto px-2 sm:px-4">
            <div className="flex gap-2 sm:gap-3 bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-[var(--fsu-gold)]/20">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "relative w-12 h-9 sm:w-16 sm:h-12 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105",
                    index === currentIndex
                      ? "border-[var(--fsu-gold)] ring-2 ring-[var(--fsu-gold)] shadow-lg shadow-[var(--fsu-gold)]/25"
                      : "border-white/30 opacity-60 hover:opacity-80 hover:border-[var(--fsu-gold)]/50"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
