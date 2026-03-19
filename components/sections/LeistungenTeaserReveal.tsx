"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { REVEAL_TRIGGER_AMOUNT, REVEAL_ROOT_MARGIN, HERO_REVEAL_DURATION_MS } from "@/lib/animationConfig";
import Reveal from "@/components/ui/Reveal";
import ScrollRevealGrid from "@/components/sections/ScrollRevealGrid";

/** Ein Observer: erst Wrapper/Heading, dann Karten mit Stagger, dann Button. */
const DELAY_WRAPPER_MS = 0;
const DELAY_CARDS_BASE_MS = 120;
const DELAY_BUTTON_MS = 750;

interface LeistungenTeaserRevealProps {
  heading: ReactNode;
  cards: ReactNode;
  button: ReactNode;
  gridClassName?: string;
}

export default function LeistungenTeaserReveal({
  heading,
  cards,
  button,
  gridClassName = "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
}: LeistungenTeaserRevealProps) {
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

  return (
    <div ref={ref}>
      <Reveal variant="fadeUp" delayMs={DELAY_WRAPPER_MS} durationMs={HERO_REVEAL_DURATION_MS} controlledInView={isInView}>
        <div className="text-center max-w-[880px] mx-auto mb-12">
          {heading}
        </div>
      </Reveal>
      <ScrollRevealGrid inView={isInView} baseDelayMs={DELAY_CARDS_BASE_MS} className={gridClassName}>
        {cards}
      </ScrollRevealGrid>
      <Reveal variant="fadeUp" delayMs={DELAY_BUTTON_MS} durationMs={HERO_REVEAL_DURATION_MS} controlledInView={isInView}>
        <div className="mt-10">
          {button}
        </div>
      </Reveal>
    </div>
  );
}
