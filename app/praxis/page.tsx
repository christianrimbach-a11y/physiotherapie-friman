import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ImageSlider from "@/components/sections/ImageSlider";
import TreatmentRoomsCarousel from "@/components/sections/TreatmentRoomsCarousel";
import Reveal from "@/components/ui/Reveal";
import { HERO_REVEAL_DURATION_MS } from "@/lib/animationConfig";

export const metadata: Metadata = {
  title: "Unsere Praxis",
  description:
    "Unsere Praxisräume – modern, hell und einladend. Lernen Sie unsere Behandlungsräume kennen.",
};

const GALLERY_IMAGES = [
  { src: "/images/praxis-rezeption-front.jpg", alt: "Empfangsbereich der Physiotherapie Friman" },
  { src: "/images/praxis-wartebereich-rot.jpg", alt: "Wartebereich mit roten Stühlen in der Praxis" },
  { src: "/images/praxis-behandlungsraum-fenster.jpg", alt: "Behandlungsraum mit Liege am Fenster" },
  { src: "/images/praxis-bereich-schwarze-wand.jpg", alt: "Moderner Praxisbereich mit schwarzer Wand und Pflanzen" },
];

export default function PraxisPage() {
  return (
    <>
      <Hero
        title="Unsere Praxis"
        subtitle="Ein Ort der Ruhe und professionellen Betreuung."
        images={["/images/placeholder.svg"]}
        showCta={false}
        compact
        scrollReveal
      />

      <section className="w-full bg-offWhite py-16 md:py-20 mt-16 md:mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
            <div className="text-center max-w-[900px] mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Allgemeine Praxisübersicht
              </h2>
              <div className="heading-divider mx-auto mt-4" aria-hidden="true" />
              <p className="mt-4 text-gray-600 leading-relaxed">
                Unsere Praxis ist modern und barrierefrei gestaltet. Wir legen
                Wert auf eine ruhige Atmosphäre, in der Sie sich wohlfühlen können.
              </p>
            </div>
          </Reveal>
          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS} delayMs={150}>
            <ImageSlider images={GALLERY_IMAGES} />
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-white py-16" aria-hidden="true" />

      <section className="w-full bg-offWhite">
        <SectionWrapper size="large">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal variant="fadeXLeft" delayMs={0} durationMs={1700}>
                <h2 className="text-2xl font-bold text-gray-900">
                  Behandlungsräume
                </h2>
                <div className="heading-divider" aria-hidden="true" />
              </Reveal>
              <Reveal variant="fadeXLeft" delayMs={180} durationMs={1700}>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Unsere Behandlungsräume sind hell, modern und einladend gestaltet. Hier finden krankengymnastische und manuelle Behandlungen, Massagen sowie Lymphdrainage in ruhiger Atmosphäre statt. Wir legen Wert auf eine Ausstattung, die eine professionelle und zugleich angenehme Therapie ermöglicht.
                </p>
              </Reveal>
            </div>
            <Reveal variant="fadeXLeft" delayMs={350} durationMs={1700}>
              <TreatmentRoomsCarousel
                images={[
                  {
                    src: "/images/praxis-behandlungsraum-fenster-gross.jpg",
                    alt: "Behandlungsraum mit großem Fenster und Liege",
                  },
                  {
                    src: "/images/praxis-behandlungsraum-warm-licht.jpg",
                    alt: "Moderner Behandlungsraum mit Pflanze und Liege (warm beleuchtet)",
                  },
                  {
                    src: "/images/praxis-behandlungsraum-schmal-bilder.jpg",
                    alt: "Schmaler Behandlungsraum mit Wandbildern",
                  },
                ]}
              />
            </Reveal>
          </div>
        </SectionWrapper>
      </section>

      <section className="w-full bg-white py-16" aria-hidden="true" />

      <section className="w-full bg-offWhite">
        <SectionWrapper size="large">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal variant="fadeX" delayMs={350} durationMs={1700} className="order-2 md:order-1">
              <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-gray-200">
                <Image
                  src="/images/placeholder.svg"
                  alt="Sportraum / Trainingsraum der Physiotherapie Friman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <div className="order-1 md:order-2">
              <Reveal variant="fadeX" delayMs={0} durationMs={1700}>
                <h2 className="text-2xl font-bold text-gray-900">
                  Sportraum
                </h2>
                <p className="mt-1 text-sm text-gray-500 font-medium">Trainingsraum</p>
                <div className="heading-divider" aria-hidden="true" />
              </Reveal>
              <Reveal variant="fadeX" delayMs={180} durationMs={1700}>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Unser Sport- bzw. Trainingsraum ist mit Geräten für Rehabilitation und gezieltes Aufbautraining ausgestattet. Hier unterstützen wir Sie bei der Wiederherstellung Ihrer Leistungsfähigkeit, beim Muskelaufbau und bei der Prävention – individuell angepasst an Ihre Ziele.
                </p>
              </Reveal>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
