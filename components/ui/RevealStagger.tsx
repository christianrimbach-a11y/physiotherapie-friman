"use client";

import { Children, type ReactNode } from "react";
import { REVEAL_STAGGER_MS } from "@/lib/animationConfig";
import Reveal from "@/components/ui/Reveal";

interface RevealStaggerProps {
  children: ReactNode;
  /** Grid/Layout-Klasse für den Container */
  className?: string;
  /** Stagger pro Kind in ms (Standard aus Config) */
  staggerMs?: number;
  variant?: "fadeUp" | "fadeUpScale" | "fadeX" | "fadeXLeft";
}

export default function RevealStagger({
  children,
  className = "",
  staggerMs = REVEAL_STAGGER_MS,
  variant = "fadeUp",
}: RevealStaggerProps) {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal key={index} variant={variant} delayMs={index * staggerMs}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
