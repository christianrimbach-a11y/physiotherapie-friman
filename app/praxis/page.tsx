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
    "Bei Physiotherapie Friman in Wutha-Farnroda: moderne, helle Räume für Ihre Behandlung, von Krankengymnastik und manueller Therapie bis Rehabilitation und Training.",
};

const GALLERY_IMAGES = [
  { src: "/images/praxis-gallery-01-aussenansicht.png", alt: "Außenansicht des Praxisgebäudes" },
  { src: "/images/praxis-gallery-02-rezeption.png", alt: "Rezeption der Physiotherapie Friman" },
  { src: "/images/praxis-gallery-03-wartebereich.png", alt: "Wartebereich mit Fenster und Pflanzen" },
  { src: "/images/praxis-gallery-04-behandlungsraum-1.png", alt: "Behandlungsraum 1" },
  { src: "/images/praxis-gallery-05-behandlungsraum-2.png", alt: "Behandlungsraum 2" },
];

export default function PraxisPage() {
  return (
    <>
      <Hero
        title="Unsere Praxis"
        subtitle="Hier arbeiten wir ruhig, hell und aufmerksam, mit Blick auf Ihre Behandlung und Erholung."
        images={["/images/placeholder.svg"]}
        showCta={false}
        compact
        scrollReveal
        backgroundImageCss="/images/praxis-hero-neu.jpg"
        backgroundPositionCss="center 22%"
        backgroundSizeCss="cover"
        heightClassName="min-h-[420px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px]"
      />

      <section className="w-full bg-offWhite py-16 md:py-20 mt-16 md:mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
            <div className="text-center max-w-[900px] mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Ein Rundgang bei uns: Empfang, Warten, Behandlung
              </h2>
              <div className="heading-divider mx-auto mt-4" aria-hidden="true" />
              <p className="mt-4 text-gray-600 leading-relaxed">
                Bei uns treffen Sie auf hellen, barrierearmen Zugang und eine ruhige Atmosphäre. So können Sie sich vor und nach der Behandlung entspannt auf Ihre Physiotherapie in Wutha-Farnroda einlassen.
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
                  In unseren Behandlungsräumen arbeiten wir hell, modern und zurückhaltend im Design, damit der Fokus bei Ihnen und Ihrer Behandlung bleibt. Hier finden unter anderem Krankengymnastik, manuelle Therapie, Massagen und Lymphdrainage statt, immer in einem Rahmen, der professionell wirkt und sich zugleich gut anfühlt.
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
                  In unserem Trainingsbereich begleiten wir Sie bei Rehabilitation und kräftigendem Aufbautraining, mit Geräten und Übungen, die zu Ihrem Stand und Ihren Zielen passen. Gemeinsam arbeiten wir daran, Ihre Leistungsfähigkeit zu verbessern, Muskelkraft aufzubauen und langfristig präventiv vorzusorgen.
                </p>
              </Reveal>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
