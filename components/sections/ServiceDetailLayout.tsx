import type { ReactNode, ReactElement } from "react";
import type { Treatment, TreatmentDetailGoalsItem } from "@/data/treatments";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContentCard from "@/components/ui/ContentCard";
import Reveal from "@/components/ui/Reveal";
import TreatmentDetailHero from "@/components/sections/TreatmentDetailHero";
import TreatmentDetailCTA from "@/components/sections/TreatmentDetailCTA";
import { HERO_REVEAL_DURATION_MS } from "@/lib/animationConfig";

function renderWithEmphasis(text: string, terms: string[]): ReactNode {
  let parts: (string | ReactElement)[] = [text];
  terms.forEach((term) => {
    parts = parts.flatMap((p): (string | ReactElement)[] =>
      typeof p === "string"
        ? p.split(term).flatMap((seg, i) =>
            i > 0 ? [<strong key={term} className="font-semibold text-gray-800">{term}</strong>, seg] : [seg]
          )
        : [p]
    );
  });
  return <>{parts}</>;
}

function renderGoalsItem(item: TreatmentDetailGoalsItem): ReactNode {
  if (item.emphasize && item.text.includes(item.emphasize)) {
    const [before, after] = item.text.split(item.emphasize);
    return (
      <>
        {before}
        <strong className="font-semibold text-gray-800">{item.emphasize}</strong>
        {after}
      </>
    );
  }
  return item.text;
}

interface ServiceDetailLayoutProps {
  treatment: Treatment;
}

/** Einheitliches Layout für alle Leistungs-Detailseiten unter /leistungen/[slug]. */
export default function ServiceDetailLayout({ treatment }: ServiceDetailLayoutProps) {
  const d = treatment.detail!;
  const subtitle =
    treatment.shortDescriptionEmphasize
      ? renderWithEmphasis(
          treatment.shortDescription,
          treatment.shortDescriptionEmphasize
        )
      : treatment.shortDescription;

  const heroImageSrc = treatment.heroImageSrc ?? treatment.image ?? null;

  return (
    <>
      <SectionWrapper size="large" className="pt-12 pb-16 md:pb-20 bg-primary">
        <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
          <TreatmentDetailHero
            title={treatment.title}
            subtitle={subtitle}
            benefits={treatment.benefits}
            heroImageSrc={heroImageSrc}
            heroImageAlt={treatment.title}
          />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper size="large" className="pb-24 md:pb-32">
        <div className="space-y-16 md:space-y-20">
          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
            <ContentCard title={d.whatIsHeading ?? "Was ist diese Behandlung?"}>
              <p>
                {d.whatIsEmphasize
                  ? renderWithEmphasis(d.whatIs, d.whatIsEmphasize)
                  : d.whatIs}
              </p>
            </ContentCard>
          </Reveal>

          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS} delayMs={80}>
            <ContentCard title="Wie funktioniert sie?">
              <p>{d.howItWorks}</p>
            </ContentCard>
          </Reveal>

          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS} delayMs={160}>
            <ContentCard title={d.forWhomHeading ?? "Für wen geeignet?"}>
              <p>{d.forWhom}</p>
            </ContentCard>
          </Reveal>

          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS} delayMs={240}>
            <ContentCard title={d.goalsHeading ?? "Welche Ziele?"}>
              {d.goalsList ? (
                <ul className="mt-5 list-disc pl-6 space-y-2 list-outside" role="list">
                  {d.goalsList.map((item, i) => (
                    <li key={i} className="pl-1">
                      {renderGoalsItem(item)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{d.goals}</p>
              )}
            </ContentCard>
          </Reveal>
        </div>
      </SectionWrapper>

      <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
        <TreatmentDetailCTA />
      </Reveal>
    </>
  );
}
