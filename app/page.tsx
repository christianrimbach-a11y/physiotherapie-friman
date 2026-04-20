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

/** Homepage Hero-Slideshow: 1 Außenansicht, 2 Team, 3 Rezeption innen (Autoplay & Punkte über Hero bei images.length > 1). */
const HOME_HERO_BACKGROUND_IMAGES = [
  "/images/home-hero-01-aussenansicht.png",
  "/images/home-hero-02-team.png",
  "/images/home-hero-03-rezeption-innen.png",
] as const;

export default function HomePage() {
  const previewTreatments = TREATMENTS.slice(0, 6);
  const previewTestimonials = TESTIMONIALS.slice(0, 6);

  return (
    <>
      <Hero
        title="Physiotherapie Friman: Gemeinsam zurück zu mehr Beweglichkeit und Lebensqualität"
        subtitle="Wir begleiten Sie in Wutha-Farnroda als Physiotherapeuten persönlich und fachlich fundiert, mit moderner Behandlung, gezielter Unterstützung bei Schmerzen und einem klaren Fokus auf Ihre Beweglichkeit, Rehabilitation und langfristige Prävention."
        showCta
        align="left"
        variant="homepage"
        images={[...HOME_HERO_BACKGROUND_IMAGES]}
        imageObjectPositionsCss={["center 24%", "center center", "center 32%"]}
        heightClassName="min-h-[75vh]"
      />

      <SectionWrapper size="large" className="bg-offWhite">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal variant="fadeX" durationMs={1700}>
              <h2 className="text-3xl font-bold text-gray-900">Herzlich Willkommen</h2>
            </Reveal>
            <div className="heading-divider" aria-hidden="true" />
            <Reveal variant="fadeX" delayMs={250} durationMs={1700}>
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Herzlich willkommen! Bei uns in Wutha-Farnroda nehmen wir uns die Zeit, Ihre Beschwerden wirklich zu verstehen. Gemeinsam mit Ihnen entwickeln wir einen Behandlungsplan, der zu Ihrem Alltag passt: Wir unterstützen Sie dabei, Schmerzen zu lindern, Beweglichkeit zu verbessern und Ihre Kraft zu stärken.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Ob Rehabilitation nach einer Operation, akute Rücken- oder Gelenkbeschwerden oder bewusste Prävention: Wir stehen an Ihrer Seite und erklären jeden Schritt verständlich. Unser Team verbindet erprobte Methoden mit aktuellen Ansätzen der Physiotherapie, damit Sie sich wieder freier bewegen und sicher im Körper ankommen können.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Für uns geht es nicht nur um einzelne Termine, sondern um echte Hilfe zur Selbsthilfe: damit Sie Alltag, Arbeit und Freizeit wieder mit gutem Gefühl meistern können.
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
              <h2 className="text-3xl font-bold text-gray-900">Unser Leistungsangebot: Physiotherapie in Wutha-Farnroda, individuell für Sie</h2>
              <div className="heading-divider mx-auto mt-4" aria-hidden="true" />
              <p className="mt-4 text-gray-600">
                Bei uns erwartet Sie ein durchdachtes Spektrum moderner Behandlung, von Krankengymnastik und manueller Therapie bis zu weiteren Verfahren, die genau zu Ihrer Situation passen. Wir erstellen mit Ihnen ein klares Konzept: ob Sie akute Schmerzen lindern möchten, Ihre Beweglichkeit verbessern oder gezielt rehabilitieren und präventiv vorsorgen wollen.
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
                src="/images/home-team-section.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div className="order-1 md:order-2">
            <Reveal variant="fadeXLeft" delayMs={0} durationMs={1700}>
              <h2 className="text-3xl font-bold text-gray-900">Unser Team: erfahren, einfühlsam, für Sie da</h2>
              <div className="heading-divider" aria-hidden="true" />
            </Reveal>
            <Reveal variant="fadeXLeft" delayMs={180} durationMs={1700}>
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Wir sind Inna und Rudi Friman, zwei Physiotherapeuten, die Bewegung, Gesundheit und Menschen mit gleicher Leidenschaft verbinden. Wir führen die Physiotherapie Friman gemeinsam und sind direkt für Sie da: persönlich, erfahren und mit dem Ziel, Ihre Beweglichkeit zu fördern und Beschwerden zu lindern.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Fort- und Weiterbildungen sind für uns selbstverständlich, damit wir Sie in allen Bereichen unserer Arbeit kompetent unterstützen können, von klassischer Krankengymnastik und manueller Therapie bis zu spezialisierten Techniken, die Ihre Rehabilitation oder Prävention sinnvoll ergänzen.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Bei uns zählt Vertrauen: Sie erhalten eine Behandlung, die zu Ihnen passt, mit dem Ziel, Ihre Beweglichkeit zu verbessern und Sie in Ihrer Alltagsbelastbarkeit zu stärken.
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
              Ihr Feedback motiviert uns täglich. Hier lesen Sie, was Patientinnen und Patienten über ihre Behandlung bei uns erzählen.
            </p>
          </div>
          <TestimonialsSlider testimonials={previewTestimonials} />
        </Reveal>
      </SectionWrapper>

      <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
        <CTASection
          title="Bereit für den nächsten Schritt?"
          subtitle="Ob akute Beschwerden, gezielte Rehabilitation oder vorausschauende Prävention: Wir begleiten Sie in Wutha-Farnroda gern weiter. Rufen Sie uns an. Gemeinsam finden wir den passenden nächsten Schritt für Ihre Behandlung."
          backgroundImage="/images/cta-bereit-fuer-den-schritt.jpg"
        />
      </Reveal>
    </>
  );
}
