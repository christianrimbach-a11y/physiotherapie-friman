/** Einzelnes Benefit-Badge (Feature-Pill) für alle Leistungs-Detailseiten. Globaler Stil. */
export default function BenefitBadge({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center rounded-[999px] bg-[#000] text-[#fff] text-sm font-medium py-[6px] px-[14px] whitespace-nowrap transition-colors hover:bg-[#222]"
    >
      {children}
    </span>
  );
}
