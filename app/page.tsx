import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/sections/ServiceCard";
import LeistungenTeaserReveal from "@/components/sections/LeistungenTeaserReveal";
import Reveal from "@/components/ui/Reveal";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import KeywordsGrid from "@/components/sections/KeywordsGrid";
import Button from "@/components/ui/Button";
import { TREATMENTS } from "@/data/treatments";
import { TESTIMONIALS } from "@/data/testimonials";
import Image from "next/image";
import { HERO_REVEAL_DURATION_MS } from "@/lib/animationConfig";

export default function HomePage() {
  const previewTreatments = TREATMENTS.slice(0, 6);
  const previewTestimonials = TESTIMONIALS.slice(0, 6);

  return (
    <>
      <Hero
        title="Physiotherapie Friman – Gemeinsam zurück zu mehr Beweglichkeit und Lebensqualität"
        subtitle="Ihre erfahrenen Physiotherapeuten in Wutha-Farnroda begleiten Sie individuell, persönlich und mit modernen Behandlungsmethoden. Von der akuten Beschwerde bis zur nachhaltigen Prävention."
        showCta
        align="left"
        variant="homepage"
      />

      <SectionWrapper size="large" className="bg-offWhite">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal variant="fadeX" durationMs={1700}>
              <h2 className="text-3xl font-bold text-gray-900">Willkommen in unserer Praxis für Physiotherapie in Wutha-Farnroda</h2>
            </Reveal>
            <div className="heading-divider" aria-hidden="true" />
            <Reveal variant="fadeX" delayMs={250} durationMs={1700}>
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Herzlich willkommen bei Physiotherapie Friman! Als erfahrene Physiotherapeuten in Wutha-Farnroda nehmen wir uns Zeit, Ihre Beschwerden genau zu verstehen und gemeinsam mit Ihnen einen individuellen Behandlungsplan zu entwickeln. Unser Ziel ist es, Schmerzen zu lindern, Beweglichkeit wiederherzustellen und langfristig Ihre Gesundheit zu stärken.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Ganz gleich, ob Sie nach einer Operation Unterstützung benötigen, unter Rücken- oder Gelenkbeschwerden leiden oder präventiv etwas für Ihren Körper tun möchten: Wir begleiten Sie Schritt für Schritt auf dem Weg zurück zu mehr Aktivität und Wohlbefinden. Dabei verbinden wir fundiertes physiotherapeutisches Fachwissen mit modernen Therapieansätzen und einer persönlichen, vertrauensvollen Betreuung.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Physiotherapie bedeutet für uns nicht nur Behandlung, sondern Hilfe zur Selbsthilfe, damit Sie sich auch im Alltag wieder sicher und beweglich fühlen.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal variant="fadeX" delayMs={350} durationMs={1700}>
            <div className="relative aspect-video w-full mx-auto md:mx-0 rounded-[16px] overflow-hidden bg-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/praxis-rezeption.png"
                alt="Empfangsbereich der Physiotherapie Friman"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={95}
              />
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper size="large" className="border-t border-gray-200 bg-primary">
        <KeywordsGrid />
      </SectionWrapper>

      <SectionWrapper size="large" className="bg-offWhite">
        <LeistungenTeaserReveal
          heading={
            <>
              <h2 className="text-3xl font-bold text-gray-900">Unser Leistungsangebot – Physiotherapie in Wutha-Farnroda individuell auf Sie abgestimmt</h2>
              <div className="heading-divider mx-auto mt-4" aria-hidden="true" />
              <p className="mt-4 text-gray-600">
                In unserer Praxis für Physiotherapie erwartet Sie ein breites Spektrum moderner Behandlungsmethoden. Unsere Physiotherapeuten entwickeln für jeden Patienten ein persönliches Therapiekonzept – abgestimmt auf Beschwerden, Lebenssituation und Behandlungsziel. Ob akute Schmerzen, Rehabilitation oder Prävention: Wir begleiten Sie mit fachlicher Kompetenz auf Ihrem Weg zurück zu mehr Beweglichkeit und Lebensqualität.
              </p>
            </>
          }
          cards={previewTreatments.map((t) => (
            <ServiceCard
              key={t.slug}
              title={t.title}
              description={t.shortDescription}
              href={t.hasDetailPage ? `/leistungen/${t.slug}` : "/leistungen"}
              image={t.image}
            />
          ))}
          button={
            <Button href="/leistungen" variant="secondary" showArrow>
              Alle Leistungen
            </Button>
          }
        />
      </SectionWrapper>

      <SectionWrapper size="large" className="bg-primary">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal variant="fadeXLeft" delayMs={350} durationMs={1700} className="order-2 md:order-1">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-gray-200">
              <Image
                src="/images/placeholder.svg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div className="order-1 md:order-2">
            <Reveal variant="fadeXLeft" delayMs={0} durationMs={1700}>
              <h2 className="text-3xl font-bold text-gray-900">Unser Team – Kompetenz, Erfahrung und Einfühlungsvermögen</h2>
              <div className="heading-divider" aria-hidden="true" />
            </Reveal>
            <Reveal variant="fadeXLeft" delayMs={180} durationMs={1700}>
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Unser Team besteht aus den beiden Physiotherapeuten Inna und Rudi Friman, die ihre fachliche Kompetenz mit echter Leidenschaft für Bewegung und Gesundheit verbinden. Als Praxisinhaber begleiten sie ihre Patientinnen und Patienten persönlich und mit viel Erfahrung auf dem Weg zu mehr Beweglichkeit und Wohlbefinden.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Durch regelmäßige Fort- und Weiterbildungen sowie zusätzliche Qualifikationen in verschiedenen physiotherapeutischen Behandlungsmethoden verfügen beide über fundierte Kenntnisse in den Therapiebereichen unserer Praxis. Von der Krankengymnastik über manuelle Therapie bis hin zu weiteren modernen Behandlungstechniken.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Bei uns erwartet Sie eine individuelle Behandlung in vertrauensvoller Atmosphäre, mit dem Ziel, Ihre Beweglichkeit nachhaltig zu verbessern und Ihre Gesundheit langfristig zu stärken.
                </p>
              </div>
            </Reveal>
            <Reveal variant="fadeXLeft" delayMs={350} durationMs={1700}>
              <Button href="/ueber-uns" variant="secondary" showArrow className="mt-6">
                Mehr über uns
              </Button>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper size="large" className="bg-offWhite">
        <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Das sagen unsere Patientinnen und Patienten</h2>
            <div className="heading-divider mx-auto mt-4" aria-hidden="true" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Vertrauen und Zufriedenheit stehen bei uns an erster Stelle.
            </p>
          </div>
          <TestimonialsSlider testimonials={previewTestimonials} />
        </Reveal>
      </SectionWrapper>

      <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
        <CTASection
          title="Bereit für den nächsten Schritt?"
          subtitle="Ob akute Beschwerden, Rehabilitation oder präventive Behandlung – wir sind für Sie da. Vereinbaren Sie jetzt Ihren Termin in unserer Praxis für Physiotherapie in Wutha-Farnroda."
          backgroundImage="/images/cta-bereit-fuer-den-schritt.jpg"
        />
      </Reveal>
    </>
  );
}
