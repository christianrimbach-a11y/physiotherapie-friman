import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTASectionReveal from "@/components/sections/CTASectionReveal";
import Reveal from "@/components/ui/Reveal";
import { TEAM } from "@/data/team";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie das Team der Physiotherapie Frimann kennen – erfahrene Therapeuten für Ihre Gesundheit.",
};

export default function UeberUnsPage() {
  return (
    <>
      <Hero
        title="Über uns"
        subtitle="Unser Team – Ihr Ansprechpartner für Bewegung und Gesundheit."
        images={["/images/placeholder.svg"]}
        showCta={false}
        compact
        scrollReveal
      />

      <SectionWrapper size="large" className="bg-offWhite">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-[860px]">
            <Reveal variant="fadeX" durationMs={1700}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Willkommen bei der Physiotherapie Friman
              </h2>
            </Reveal>
            <Reveal variant="fadeX" delayMs={180} durationMs={1700}>
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Schön, dass Sie da sind. In unserer Praxis in Wutha-Farnroda begleiten wir Sie mit moderner Physiotherapie, persönlicher Betreuung und einem klaren Ziel: mehr Beweglichkeit, weniger Schmerzen und ein gutes Körpergefühl im Alltag.
                </p>
                <h3 className="mt-8 text-lg font-semibold text-gray-900">
                  Unsere Geschichte
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Die Physiotherapie Friman ist ein Familienbetrieb, der aus der gemeinsamen Leidenschaft von Inna und Rudi Friman für Bewegung, Gesundheit und persönliche Betreuung entstanden ist. Bereits zuvor bestand eine kleinere Praxis, aus der sich mit der Zeit der Wunsch entwickelte, Patientinnen und Patienten noch umfassender behandeln zu können.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Mit der neuen, größeren Praxis wurde dieser Schritt verwirklicht. Heute bietet die Physiotherapie Friman ein erweitertes Spektrum moderner Behandlungsmethoden und mehr Raum für individuelle Therapie und aktive Rehabilitation.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Trotz des Wachstums bleibt eines unverändert: die persönliche Atmosphäre einer familiengeführten Praxis, in der sich Zeit für jeden einzelnen Patienten genommen wird und die Behandlung individuell auf die jeweiligen Bedürfnisse abgestimmt ist.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal variant="fadeX" delayMs={350} durationMs={1700}>
            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-card overflow-hidden bg-gray-200">
              <Image
                src="/images/placeholder.svg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
              />
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper size="large" className="bg-primary">
        <Reveal variant="fadeXLeft" durationMs={1700}>
          <div className="text-center mt-12 mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unser Team – Kompetenz, Erfahrung und Einfühlungsvermögen</h2>
            <div className="heading-divider mx-auto mt-4" aria-hidden="true" />
          </div>
        </Reveal>
        {TEAM.map((member, index) => {
          const fromRight = index % 2 === 1;
          const xVariant = fromRight ? "fadeX" : "fadeXLeft";
          return (
            <div
              key={member.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${index > 0 ? "mt-24" : "mt-16"}`}
            >
              <div className={fromRight ? "md:order-2" : ""}>
                <Reveal variant={xVariant} delayMs={0} durationMs={1700}>
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-2 text-gray-600 font-medium">{member.role}</p>
                </Reveal>
                <Reveal variant={xVariant} delayMs={180} durationMs={1700}>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </Reveal>
              </div>
              <Reveal variant={xVariant} delayMs={350} durationMs={1700} className={fromRight ? "md:order-1" : ""}>
                <div
                  className="relative aspect-[3/4] rounded-card overflow-hidden bg-gray-200 max-w-sm md:max-w-md mx-auto w-full"
                >
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={95}
                  />
                </div>
              </Reveal>
            </div>
          );
        })}
      </SectionWrapper>

      <CTASectionReveal backgroundImage="/images/cta-bereit-fuer-den-schritt.jpg" />
    </>
  );
}
