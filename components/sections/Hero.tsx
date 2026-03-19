"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { REVEAL_TRIGGER_AMOUNT, REVEAL_ROOT_MARGIN } from "@/lib/animationConfig";

interface HeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  images?: string[];
  showCta?: boolean;
  compact?: boolean;
  align?: "center" | "left";
  /** Homepage-Variant: kleinere Headline, links, max-width, kompaktere Abstände */
  variant?: "default" | "homepage";
  /** Scroll-Reveal wie Startseiten-Hero (bottom→top, einmal beim Sichtbarwerden) */
  scrollReveal?: boolean;
}

const DEFAULT_IMAGES = [
  "/images/placeholder.svg",
  "/images/placeholder.svg",
  "/images/placeholder.svg",
];

export default function Hero({
  title,
  subtitle,
  label,
  images = DEFAULT_IMAGES,
  showCta = true,
  compact = false,
  align = "center",
  variant = "default",
  scrollReveal = false,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollInView, setScrollInView] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasSlider = images.length > 1;

  useEffect(() => {
    if (!hasSlider) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hasSlider, images.length]);

  useEffect(() => {
    if (!scrollReveal || !contentRef.current) return;
    const el = contentRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setScrollInView((v) => v || true);
        });
      },
      { threshold: REVEAL_TRIGGER_AMOUNT, rootMargin: REVEAL_ROOT_MARGIN }
    );
    observer.observe(el);
    const t = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const viewHeight = typeof window !== "undefined" ? window.innerHeight : 0;
      if (rect.top < viewHeight * 0.95) setScrollInView((v) => v || true);
    }, 150);
    return () => {
      observer.disconnect();
      window.clearTimeout(t);
    };
  }, [scrollReveal]);

  return (
    <section
      className={`relative w-full overflow-hidden bg-gray-900 ${compact ? "min-h-[40vh]" : "min-h-[70vh]"} flex items-center justify-center`}
      aria-label="Hero-Bereich"
    >
      <div className="absolute inset-0">
        {hasSlider ? (
          images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
              }`}
              aria-hidden={i !== currentIndex}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                quality={95}
                priority={i === 0}
              />
            </div>
          ))
        ) : (
          <Image
            src={images[0]}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            quality={95}
            priority
          />
        )}
        <div
          className="absolute inset-0 bg-black/50 z-[1]"
          aria-hidden="true"
        />
      </div>

      <div
        className={`relative z-[2] max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 ${
          align === "left" ? "text-left" : "text-center"
        }`}
      >
        <div
          ref={contentRef}
          className={
            scrollReveal
              ? `hero-style-reveal ${scrollInView ? "in-view" : ""} ${variant === "homepage" ? "max-w-[820px]" : align === "left" ? "max-w-2xl" : ""}`
              : variant === "homepage"
                ? "max-w-[820px]"
                : align === "left"
                  ? "max-w-2xl"
                  : ""
          }
        >
          {label && variant !== "homepage" && !scrollReveal && (
            <p className="text-xs font-medium uppercase tracking-section text-white/80 mb-3">
              {label}
            </p>
          )}
          {label && variant !== "homepage" && scrollReveal && (
            <p className="hero-style-reveal-text text-xs font-medium uppercase tracking-section text-white/80 mb-3">
              {label}
            </p>
          )}
          <h1
            className={
              scrollReveal
                ? "hero-style-reveal-title text-hero font-bold text-white drop-shadow-sm"
                : variant === "homepage"
                  ? "text-[clamp(1.85rem,3.5vw,3rem)] font-bold text-white drop-shadow-sm leading-tight max-w-[720px] animate-hero-title"
                  : "text-hero font-bold text-white drop-shadow-sm"
            }
          >
            {title}
          </h1>
          {subtitle && (
            <>
              <p
                className={
                  scrollReveal
                    ? `hero-style-reveal-text mt-4 text-lg md:text-xl text-white/90 font-light ${align === "left" ? "max-w-xl" : "max-w-2xl mx-auto"}`
                    : variant === "homepage"
                      ? "mt-5 text-base md:text-lg text-white/90 font-light leading-relaxed max-w-[720px] animate-hero-subtitle"
                      : `mt-4 text-lg md:text-xl text-white/90 font-light ${
                          align === "left" ? "max-w-xl" : "max-w-2xl mx-auto"
                        }`
                }
              >
                {subtitle}
              </p>
              {variant !== "homepage" && (
                <div
                  className={`mt-4 w-12 border-t-2 border-white/70 ${align === "left" ? "" : "mx-auto"} ${scrollReveal ? "hero-style-reveal-divider" : ""}`}
                  aria-hidden="true"
                />
              )}
            </>
          )}
          {showCta && (
            <div className={scrollReveal ? "mt-8 hero-style-reveal-cta" : variant === "homepage" ? "mt-8 animate-hero-cta" : "mt-8"}>
              <Button
                href="/buchung"
                variant="primaryInvert"
                showArrow
                aria-label="Termin vereinbaren"
                className={variant === "homepage" ? "w-full sm:w-auto" : ""}
              >
                Termin vereinbaren
              </Button>
            </div>
          )}
        </div>
      </div>

      {hasSlider && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] flex gap-2"
          aria-label="Slider-Punkte"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                i === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1} anzeigen`}
              aria-current={i === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
