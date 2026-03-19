"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type React from "react";

export interface ImageSliderImage {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  images: ImageSliderImage[];
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const minSwipeDistance = 50;
  const maxIndex = Math.max(0, images.length - 1);
  const clampedIndex = Math.min(currentIndex, maxIndex);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const t = window.setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 4500);
    return () => window.clearInterval(t);
  }, [isHovered, maxIndex, images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || touchEnd === null) return;
    const dist = touchStart - touchEnd;
    if (Math.abs(dist) > minSwipeDistance) {
      dist > 0 ? goNext() : goPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (images.length === 0) return null;

  const slideWidthPercent = 100 / images.length;
  const sliderWidthPercent = 100 * images.length;

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="overflow-hidden touch-pan-y rounded-card"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${clampedIndex * slideWidthPercent}%)`,
            width: `${sliderWidthPercent}%`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-card overflow-hidden bg-gray-200 h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <Image
                src={img.src}
                alt={img.alt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                quality={95}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          type="button"
          onClick={goPrev}
          className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 transition-colors"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2" aria-label="Slider-Punkte">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 ${
                i === clampedIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === clampedIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 transition-colors"
          aria-label="Nächstes Bild"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
