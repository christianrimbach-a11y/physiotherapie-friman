import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";
import { HERO_REVEAL_DURATION_MS } from "@/lib/animationConfig";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Physiotherapie Friman Wutha-Farnroda: Telefon, E-Mail, Adresse und Öffnungszeiten. Wir beantworten Ihre Fragen zur Behandlung und Terminvereinbarung gern persönlich.",
};

export default function KontaktPage() {
  return (
    <>
      <SectionWrapper size="large" className="pt-12 bg-primary">
        <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS}>
          <p className="section-label">Kontakt</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">So erreichen Sie uns</h1>
          <div className="heading-divider" aria-hidden="true" />
          <p className="mt-4 text-gray-600 max-w-2xl">
            Wir freuen uns, von Ihnen zu hören. Ob kurze Rückfrage zur Behandlung oder Terminwunsch: Rufen Sie uns an, schreiben Sie uns oder nutzen Sie das Formular. Wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-16">
          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS} delayMs={150}>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Kontaktdaten
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <span className="font-medium text-gray-800">Telefon:</span>{" "}
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-button"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-gray-800">E-Mail:</span>{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-button"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Adresse:</span>{" "}
                  <a
                    href={CONTACT.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-button"
                  >
                    {CONTACT.address}
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
                <ul className="space-y-1 text-gray-600">
                  {CONTACT.openingHours.map(({ days, hours }) => (
                    <li key={days}>
                      {days}: {hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" durationMs={HERO_REVEAL_DURATION_MS} delayMs={280}>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Nachricht senden
              </h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
}
