import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import HeroStyleReveal from "@/components/sections/HeroStyleReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTASectionReveal from "@/components/sections/CTASectionReveal";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { TREATMENTS } from "@/data/treatments";

const CTA_SLIDESHOW_IMAGES = [
  "/images/krankengymnastik.png",
  "/images/stosswellentherapie.jpg",
  "/images/manuelle-therapie.jpg",
  "/images/lymphdrainage.jpg",
  "/images/waerme-kaeltetherapie.jpg",
  "/images/massage-techniken.jpg",
];

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Physiotherapie Wutha-Farnroda: Bei uns erhalten Sie Krankengymnastik, manuelle Therapie, Massage, Lymphdrainage, Wärme-/Kältetherapie und Stoßwellentherapie zur Unterstützung bei Schmerzen, für Beweglichkeit, Rehabilitation und Prävention.",
};

export default function LeistungenPage() {
  return (
    <>
      <Hero
        title="Unsere Behandlungen im Überblick."
        subtitle="Wir kombinieren bewährte und moderne Verfahren, damit Sie sich wieder freier bewegen können und wir Sie bei der Linderung von Schmerzen unterstützen."
        images={CTA_SLIDESHOW_IMAGES}
        showCta={false}
        heightClassName="min-h-[70vh]"
        scrollReveal
      />

      <section className="w-full bg-offWhite py-20">
        <HeroStyleReveal className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="hero-style-reveal-title text-3xl md:text-4xl font-bold text-gray-900">
            Leistungsangebot
          </h2>
          <div className="hero-style-reveal-divider heading-divider mx-auto mt-4" aria-hidden="true" />
          <p className="hero-style-reveal-text mt-4 text-gray-600 leading-relaxed">
            Bei uns steht Ihre Behandlung im Mittelpunkt, von der Akutversorgung über gezielte Rehabilitation bis zur vorausschauenden Prävention. Wir begleiten Sie dabei, Beschwerden zu reduzieren, Beweglichkeit zu verbessern und Kraft für den Alltag aufzubauen.
          </p>
        </HeroStyleReveal>
      </section>

      <SectionWrapper size="large" className="bg-primary">
        <div className="space-y-24">
          {TREATMENTS.map((t, index) => {
            const fromLeft = index % 2 === 0;
            const variant = fromLeft ? "fadeXLeft" : "fadeX";
            return (
              <div
                key={t.slug}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <Reveal variant={variant} delayMs={0} durationMs={1700}>
                    <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
                    <div className="heading-divider" aria-hidden="true" />
                  </Reveal>
                  <Reveal variant={variant} delayMs={180} durationMs={1700}>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {t.shortDescription}
                    </p>
                    {t.hasDetailPage ? (
                      <Button
                        href={`/leistungen/${t.slug}`}
                        variant="primary"
                        showArrow
                        className="mt-6 border-0 hover:bg-gray-800 transition-all duration-300"
                      >
                        Mehr erfahren
                      </Button>
                    ) : null}
                  </Reveal>
                </div>
                <Reveal variant={variant} delayMs={350} durationMs={1700} className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-gray-200">
                    <Image
                      src={t.image ?? "/images/placeholder.svg"}
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
        </div>
      </SectionWrapper>

      <CTASectionReveal
        title="Gemeinsam den richtigen Weg für Ihre Therapie finden"
        subtitle="Jede Behandlung startet bei uns mit einem echten Gespräch: Wir hören zu, klären Ihre Beschwerden und erläutern die nächsten Schritte. Gemeinsam finden wir heraus, welche Therapie in Wutha-Farnroda für Sie am sinnvollsten ist, damit Sie Ihre Fortschritte nachvollziehen können."
        buttonText="03692127026"
        backgroundImages={[
          "/images/krankengymnastik.png",
          "/images/stosswellentherapie.jpg",
          "/images/manuelle-therapie.jpg",
          "/images/lymphdrainage.jpg",
          "/images/waerme-kaeltetherapie.jpg",
          "/images/massage-techniken.jpg",
        ]}
      />
    </>
  );
}
