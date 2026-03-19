"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { REVEAL_TRIGGER_AMOUNT, REVEAL_ROOT_MARGIN, HERO_REVEAL_DURATION_MS } from "@/lib/animationConfig";

interface CTASectionRevealProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: string;
  backgroundImages?: string[];
  className?: string;
}

const DEFAULT_BG = "/images/placeholder.svg";

const CONTENT_DELAY_MS = 200;

export default function CTASectionReveal({
  title = "Bereit für Ihren Termin?",
  subtitle = "Vereinbaren Sie jetzt einen Termin in unserer Praxis. Wir freuen uns auf Sie.",
  buttonText = "Termin vereinbaren",
  backgroundImage = DEFAULT_BG,
  backgroundImages,
  className = "",
}: CTASectionRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideshowImages = backgroundImages && backgroundImages.length > 0 ? backgroundImages : [backgroundImage];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsInView((v) => v || true);
        });
      },
      { threshold: REVEAL_TRIGGER_AMOUNT, rootMargin: REVEAL_ROOT_MARGIN }
    );
    observer.observe(el);
    const t = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const viewHeight = typeof window !== "undefined" ? window.innerHeight : 0;
      if (rect.top < viewHeight * 0.95) setIsInView((v) => v || true);
    }, 150);
    return () => {
      observer.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!slideshowImages || slideshowImages.length <= 1) return;
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [slideshowImages]);

  return (
    <section
      ref={ref}
      className={`relative w-full py-24 md:py-32 overflow-hidden ${className}`}
      aria-labelledby="cta-title"
    >
      <Reveal
        variant="fadeUp"
        durationMs={HERO_REVEAL_DURATION_MS}
        controlledInView={isInView}
        className="absolute inset-0"
      >
        <div className="absolute inset-0">
          {slideshowImages.map((src, index) => (
            <div
              key={src + index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                quality={95}
                priority={false}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/60 md:bg-black/55" aria-hidden="true" />
        </div>
      </Reveal>
      <Reveal
        variant="fadeUp"
        delayMs={CONTENT_DELAY_MS}
        durationMs={HERO_REVEAL_DURATION_MS}
        controlledInView={isInView}
      >
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-8">
            <Button href="/buchung" variant="primaryInvert" showArrow aria-label={buttonText}>
              {buttonText}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
