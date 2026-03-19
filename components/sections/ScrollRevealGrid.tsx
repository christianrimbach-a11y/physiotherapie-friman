"use client";

import { useRef, useState, useEffect, Children, type ReactNode } from "react";
import {
  REVEAL_STAGGER_MS,
  REVEAL_TRIGGER_AMOUNT,
  REVEAL_ROOT_MARGIN,
  REVEAL_DURATION_MS,
  REVEAL_EASING,
} from "@/lib/animationConfig";

interface ScrollRevealGridProps {
  children: ReactNode;
  className?: string;
  /** Wenn gesetzt: Sichtbarkeit von außen (z. B. Section-Reveal), kein eigener Observer */
  inView?: boolean;
  /** Basis-Delay in ms vor dem Stagger (z. B. 120), damit Karten nach Wrapper/Heading starten */
  baseDelayMs?: number;
}

export default function ScrollRevealGrid({ children, className = "", inView: controlledInView, baseDelayMs = 0 }: ScrollRevealGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [internalInView, setInternalInView] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    if (controlledInView !== undefined) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInternalInView((v) => v || true);
        });
      },
      { threshold: REVEAL_TRIGGER_AMOUNT, rootMargin: REVEAL_ROOT_MARGIN }
    );

    observer.observe(el);

    const t = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const viewHeight = typeof window !== "undefined" ? window.innerHeight : 0;
      if (rect.top < viewHeight * 0.9) setInternalInView((v) => v || true);
    }, 150);

    return () => {
      observer.disconnect();
      window.clearTimeout(t);
    };
  }, [controlledInView]);

  const isInView = controlledInView !== undefined ? controlledInView : internalInView;
  const delayMs = (i: number) => baseDelayMs + i * REVEAL_STAGGER_MS;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ["--card-duration" as string]: `${REVEAL_DURATION_MS}ms`,
        ["--card-ease" as string]: REVEAL_EASING,
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`service-card-anim-wrap ${isInView ? "in-view" : ""}`}
          style={{ ["--card-delay" as string]: `${delayMs(index)}ms` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
