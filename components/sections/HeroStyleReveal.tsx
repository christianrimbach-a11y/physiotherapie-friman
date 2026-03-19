"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { REVEAL_TRIGGER_AMOUNT, REVEAL_ROOT_MARGIN } from "@/lib/animationConfig";

/**
 * Wrapper für Section-Header: gleiche Einblend-Animation wie Hero (fade + translateY + scale).
 * Löst einmal aus beim Scrollen (Intersection Observer). Stagger: Titel, Divider, Text.
 */
interface HeroStyleRevealProps {
  children: ReactNode;
  className?: string;
}

export default function HeroStyleReveal({ children, className = "" }: HeroStyleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewHeight = typeof window !== "undefined" ? window.innerHeight : 0;
        if (rect.top < viewHeight * 0.9) setIsInView((v) => v || true);
      });
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`hero-style-reveal ${isInView ? "in-view" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
