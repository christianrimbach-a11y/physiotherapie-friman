"use client";

import { SERVICE_TILES } from "@/data/services";
import ScrollRevealGrid from "@/components/sections/ScrollRevealGrid";

const STROKE = 2;

const ICONS: Record<string, React.ReactNode> = {
  Stethoscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0" />
      <path d="M19 10V7a2 2 0 0 0-2-2h-1" />
      <path d="M19 10v2a6 6 0 0 1-6 6v0" />
      <path d="M19 10a6 6 0 0 0-12 0v7" />
      <circle cx="13" cy="19" r="2" />
    </svg>
  ),
  Hand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
  Activity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  HeartPulse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  PersonStanding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 11v5" />
    </svg>
  ),
  ShieldPlus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  ),
};

export default function KeywordsGrid() {
  return (
    <ScrollRevealGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICE_TILES.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center p-7 rounded-[14px] bg-white border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        >
          <span className="text-gray-900" aria-hidden>
            {ICONS[item.icon]}
          </span>
          <div className="mt-4 flex flex-col items-center text-center">
            <span className="text-gray-900 font-semibold text-[0.95rem] leading-tight mb-2">
              {item.title}
            </span>
            <span className="text-gray-800 font-normal text-[0.95rem] leading-relaxed">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </ScrollRevealGrid>
  );
}
