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
    "Lernen Sie unser Team kennen: Physiotherapie Friman in Wutha-Farnroda mit persönlicher Betreuung, erfahrenen Physiotherapeuten und moderner Behandlung für Ihre Beweglichkeit.",
};

export default function UeberUnsPage() {
  return (
    <>
      <Hero
        title="Über uns"
        subtitle="Wir sind für Sie da, mit Erfahrung, Zeit und echtem Interesse an Ihrer Beweglichkeit."
        images={["/images/ueber-uns-team.jpg"]}
        imageObjectPositionsCss={["center 30%"]}
        showCta={false}
        compact
        scrollReveal
      />

      <SectionWrapper size="large" className="bg-offWhite !pt-12 pb-24 md:!pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-[860px]">
            <Reveal variant="fadeX" durationMs={1700}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Unsere Geschichte
              </h2>
            </Reveal>
            <Reveal variant="fadeX" delayMs={180} durationMs={1700}>
              <div>
                <p className="mt-8 text-gray-600 leading-relaxed">
                  Physiotherapie Friman ist unser Familienbetrieb. Der Betrieb entstand aus der gemeinsamen Leidenschaft von uns für Bewegung, Gesundheit und echte Nähe zu den Menschen, die zu uns kommen. Aus einem kleineren Ambiente wuchs der Wunsch, Sie noch umfassender und flexibler behandeln zu können.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Heute heißen wir Sie in größeren, hellen Räumen willkommen und können ein erweitertes Angebot an Behandlungen anbieten, mit mehr Platz für individuelle Therapie, aktive Rehabilitation und die Methoden, die sich für Sie gerade anbieten.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal variant="fadeX" delayMs={350} durationMs={1700}>
            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-card overflow-hidden bg-gray-200">
              <Image
                src="/images/ueber-uns-team.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                style={{ objectPosition: "60% center" }}
              />
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper size="large" className="bg-primary">
        <Reveal variant="fadeXLeft" durationMs={1700}>
          <div className="text-center mt-12 mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unser Team</h2>
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
