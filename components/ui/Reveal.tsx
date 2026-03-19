"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import {
  REVEAL_DURATION_MS,
  REVEAL_EASING,
  REVEAL_Y_OFFSET,
  REVEAL_X_OFFSET,
  REVEAL_X_OFFSET_LEFT,
  REVEAL_SCALE_START,
  REVEAL_TRIGGER_AMOUNT,
  REVEAL_ROOT_MARGIN,
} from "@/lib/animationConfig";

type Variant = "fadeUp" | "fadeUpScale" | "fadeX" | "fadeXLeft";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delayMs?: number;
  durationMs?: number;
  className?: string;
  /** Überschreibt Trigger-Anteil (z. B. 0.25 = 25 % sichtbar) */
  amount?: number;
  /** Wenn gesetzt: kein eigener Observer, Animation wird von außen gesteuert (z. B. Section-Reveal) */
  controlledInView?: boolean;
}

const VARIANT_CLASS: Record<Variant, string> = {
  fadeUp: "reveal-fade-up",
  fadeUpScale: "reveal-fade-up-scale",
  fadeX: "reveal-fade-x",
  fadeXLeft: "reveal-fade-x-left",
};

export default function Reveal({
  children,
  variant = "fadeUp",
  delayMs = 0,
  durationMs = REVEAL_DURATION_MS,
  className = "",
  amount = REVEAL_TRIGGER_AMOUNT,
  controlledInView,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [internalInView, setInternalInView] = useState(false);

  useEffect(() => {
    if (controlledInView !== undefined) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInternalInView((v) => v || true);
        });
      },
      { threshold: amount, rootMargin: REVEAL_ROOT_MARGIN }
    );

    observer.observe(el);

    const t = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const viewHeight = typeof window !== "undefined" ? window.innerHeight : 0;
      if (rect.top < viewHeight * 0.95) setInternalInView((v) => v || true);
    }, 150);

    return () => {
      observer.disconnect();
      window.clearTimeout(t);
    };
  }, [amount, controlledInView]);

  const isInView = controlledInView !== undefined ? controlledInView : internalInView;

  const isX = variant === "fadeX" || variant === "fadeXLeft";
  const style = {
    ["--reveal-duration" as string]: `${durationMs}ms`,
    ["--reveal-ease" as string]: REVEAL_EASING,
    ["--reveal-delay" as string]: `${delayMs}ms`,
    ["--reveal-y" as string]: `${REVEAL_Y_OFFSET}px`,
    ["--reveal-x" as string]: `${REVEAL_X_OFFSET}px`,
    ["--reveal-x-left" as string]: `${REVEAL_X_OFFSET_LEFT}px`,
    ["--reveal-scale-start" as string]: REVEAL_SCALE_START,
  };

  return (
    <div
      ref={ref}
      className={`${VARIANT_CLASS[variant]} ${isInView ? "in-view" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
