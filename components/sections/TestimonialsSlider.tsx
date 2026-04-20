"use client";

import { useState, useEffect, useCallback } from "react";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
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

const CARDS_PER_VIEW = 1;

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const maxPage = Math.max(0, testimonials.length - CARDS_PER_VIEW);
  const clampedPage = Math.min(currentIndex, maxPage);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((i) => (i >= maxPage ? 0 : i + 1));
    }, 7000);
    return () => clearInterval(t);
  }, [maxPage]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxPage : i - 1));
  }, [maxPage]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= maxPage ? 0 : i + 1));
  }, [maxPage]);

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

  const cardWidthPercent = 100 / testimonials.length;
  const sliderWidthPercent = (100 * testimonials.length) / CARDS_PER_VIEW;
  const pageStepPercent = CARDS_PER_VIEW * cardWidthPercent;

  return (
    <div className="relative max-w-[900px] mx-auto">
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex gap-0 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${clampedPage * pageStepPercent}%)`,
            width: `${sliderWidthPercent}%`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 min-h-[240px] px-2 sm:px-4"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <TestimonialCard
                name={t.name}
                text={t.text}
                rating={t.rating}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={goPrev}
          className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 transition-colors"
          aria-label="Vorherige Rezension"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 transition-colors"
          aria-label="Nächste Rezension"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
