import BenefitBadge from "@/components/ui/BenefitBadge";

/** Zeigt maximal 3 Benefit-Badges für die Leistungs-Detailseite. */
export default function BenefitBadges({ badges }: { badges: string[] }) {
  const display = badges.slice(0, 3);
  if (display.length === 0) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
      {display.map((label) => (
        <BenefitBadge key={label}>{label}</BenefitBadge>
      ))}
    </div>
  );
}
