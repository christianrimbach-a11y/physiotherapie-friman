"use client";

import { useCallback, useEffect, useState } from "react";
import type React from "react";

export interface TreatmentRoomsCarouselImage {
  src: string;
  alt: string;
}

interface TreatmentRoomsCarouselProps {
  images: TreatmentRoomsCarouselImage[];
  intervalMs?: number;
}

export default function TreatmentRoomsCarousel({
  images,
  intervalMs = 3500,
}: TreatmentRoomsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const maxIndex = Math.max(0, images.length - 1);
  const clampedIndex = Math.min(currentIndex, maxIndex);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered) return;
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      goNext();
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [goNext, intervalMs, images.length, isHovered]);

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const dist = touchStartX - touchEndX;
    if (Math.abs(dist) < minSwipeDistance) return;

    dist > 0 ? goNext() : goPrev();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (images.length === 0) return null;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full overflow-hidden rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.12)] bg-gray-200 touch-pan-y"
        style={{ WebkitTapHighlightColor: "transparent" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-[300px] sm:h-[320px] md:h-[480px] lg:h-[560px] xl:h-[620px]">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/55 transition-colors text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hidden sm:flex items-center justify-center"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/55 transition-colors text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hidden sm:flex items-center justify-center"
            aria-label="Nächstes Bild"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {images.map((img, i) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-450 ease-in-out ${
                i === clampedIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading={i === clampedIndex ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                style={{
                  imageRendering: "auto",
                  // Reduziert das "zu stark gezoomt"-Gefühl bei manchen Raumfotos.
                  // Falls du wieder mehr von unten sehen willst: objectPosition entfernen oder auf "center" stellen.
                  objectPosition: "center top",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2" aria-label="Slider-Punkte">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === clampedIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === clampedIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

