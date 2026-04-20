import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben der Physiotherapie Friman.",
};

export default function ImpressumPage() {
  return (
    <SectionWrapper size="large" className="pt-12">
      <h1 className="text-3xl font-bold text-gray-900">Impressum</h1>
      <p className="mt-2 text-sm text-gray-600">
        Angaben gemäß § 5 TMG
      </p>

      <div className="mt-12 prose prose-gray max-w-none">
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Anbieter
          </h2>
          <p className="text-gray-600">
            Physiotherapie Friman
            <br />
            Ruhlaer Straße 121–123
            <br />
            99848 Wutha-Farnroda
            <br />
            Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Vertreten durch
          </h2>
          <p className="text-gray-600">
            Rudi Friman
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Kontakt
          </h2>
          <p className="text-gray-600">
            Telefon: {CONTACT.phone}
            <br />
            E-Mail: {CONTACT.email}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Steuernummer
          </h2>
          <p className="text-gray-600">
            155/220/05859
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Es wird keine Umsatzsteuer-ID verwendet, da es sich um eine freiberufliche Tätigkeit handelt.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-gray-600">
            Rudi Friman
            <br />
            Ruhlaer Straße 121–123, 99848 Wutha-Farnroda, Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <p className="text-gray-600">
            Berufsbezeichnung: Physiotherapeut / Physiotherapeutin
            <br />
            Zuständige Kammer: Thüringer Landesärztekammer (bzw. zuständige Kammer für Physiotherapie)
            <br />
            Verliehen in: Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            EU-Streitschlichtung
          </h2>
          <p className="text-gray-600">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Haftung für Inhalte
          </h2>
          <p className="text-gray-600">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Für die Inhalte dieser Seite sind die oben genannten
            Anbieter verantwortlich.
          </p>
        </section>
      </div>
    </SectionWrapper>
  );
}
