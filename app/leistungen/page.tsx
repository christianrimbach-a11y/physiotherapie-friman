import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import HeroStyleReveal from "@/components/sections/HeroStyleReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTASectionReveal from "@/components/sections/CTASectionReveal";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { TREATMENTS } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Behandlungen: Krankengymnastik, Manuelle Therapie, Massage, Lymphdrainage, Wärme-/Kältetherapie, Stoßwellentherapie.",
};

export default function LeistungenPage() {
  return (
    <>
      <Hero
        title="Unsere Behandlungen im Überblick."
        subtitle="Therapien für Ihre Gesundheit und Mobilität."
        images={["/images/placeholder.svg"]}
        showCta={false}
        compact
        scrollReveal
      />

      <section className="w-full bg-offWhite py-20">
        <HeroStyleReveal className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="hero-style-reveal-title text-3xl md:text-4xl font-bold text-gray-900">
            Leistungsangebot
          </h2>
          <div className="hero-style-reveal-divider heading-divider mx-auto mt-4" aria-hidden="true" />
          <p className="hero-style-reveal-text mt-4 text-gray-600 leading-relaxed">
            Wir bieten ein breites Spektrum an physiotherapeutischen Behandlungen –
            von der Akutbehandlung bis zur langfristigen Rehabilitation und
            Prävention.
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
        subtitle="Jede Behandlung beginnt mit einem persönlichen Gespräch. Wir nehmen uns Zeit für Ihre Beschwerden, Ihre Fragen und Ihre Ziele. Lassen Sie uns gemeinsam herausfinden, welche Therapie Sie am besten unterstützt."
        buttonText="Termin anfragen"
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
