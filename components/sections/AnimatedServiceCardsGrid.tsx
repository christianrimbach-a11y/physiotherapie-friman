"use client";

import type { ReactNode } from "react";
import ScrollRevealGrid from "@/components/sections/ScrollRevealGrid";

/** Leistungs-Karten mit Scroll-Reveal-Animation (gleiche Werte wie ScrollRevealGrid). */
interface AnimatedServiceCardsGridProps {
  children: ReactNode;
}

export default function AnimatedServiceCardsGrid({ children }: AnimatedServiceCardsGridProps) {
  return (
    <ScrollRevealGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </ScrollRevealGrid>
  );
}
