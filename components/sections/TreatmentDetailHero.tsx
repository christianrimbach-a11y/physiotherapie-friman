import { ReactNode } from "react";
import HeroImage from "@/components/ui/HeroImage";
import BenefitBadges from "@/components/sections/BenefitBadges";

const DEFAULT_BENEFITS = ["Schmerzlinderung", "Beweglichkeit", "Individuell"];

interface TreatmentDetailHeroProps {
  title: string;
  subtitle: ReactNode;
  /** Optional: bis zu 3 Badges. Fehlend = DEFAULT_BENEFITS. */
  benefits?: string[];
  /** Optional: Hero-Bild (z. B. .jpg). Fehlt oder .svg = neutraler Platzhalter. */
  heroImageSrc?: string | null;
  /** Alt-Text für das Hero-Bild. */
  heroImageAlt?: string;
}

export default function TreatmentDetailHero({
  title,
  subtitle,
  benefits = DEFAULT_BENEFITS,
  heroImageSrc,
  heroImageAlt = "",
}: TreatmentDetailHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <p className="section-label">Leistung</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
          {title}
        </h1>
        <div className="heading-divider mt-4" aria-hidden="true" />
        <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
          {subtitle}
        </p>
        <BenefitBadges badges={benefits} />
      </div>
      <div className="flex justify-center lg:justify-end">
        <HeroImage src={heroImageSrc} alt={heroImageAlt} />
      </div>
    </div>
  );
}
