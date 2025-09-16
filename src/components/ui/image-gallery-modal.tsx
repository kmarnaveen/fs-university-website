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
      <div className="relative z-10 flex items-center justify-center w-full h-full max-w-7xl mx-auto p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 rounded-full bg-[var(--fsu-crimson)] text-white hover:bg-[var(--fsu-maroon)] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-20 p-4 rounded-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 z-20 p-4 rounded-full bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative max-w-full max-h-full p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--fsu-gold)]/30 shadow-2xl">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-[var(--fsu-gold)]/30 backdrop-blur-sm">
            <span className="text-[var(--fsu-gold)]">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{images.length}</span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 max-w-full overflow-x-auto px-4">
          <div className="flex gap-3 bg-black/20 backdrop-blur-sm rounded-2xl p-3 border border-[var(--fsu-gold)]/20">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105",
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
      </div>
    </div>
  );
};
