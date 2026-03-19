import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Physiotherapie Frimann.",
};

export default function DatenschutzPage() {
  return (
    <SectionWrapper size="large" className="pt-12">
      <h1 className="text-3xl font-bold text-gray-900">Datenschutzerklärung</h1>
      <p className="mt-2 text-sm text-gray-600">
        Stand: Platzhalter – bitte durch aktuelles Datum ersetzen.
      </p>

      <div className="mt-12 space-y-10 text-gray-600">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Physiotherapie Friman, {CONTACT.address}, Deutschland. Kontakt:
            {CONTACT.email}, Telefon: {CONTACT.phone}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. Kontakt
          </h2>
          <p>
            Bei Fragen zum Datenschutz können Sie sich an die oben genannte
            Kontaktadresse wenden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. Verarbeitungszwecke und Rechtsgrundlagen
          </h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur für die angegebenen
            Zwecke (z. B. Terminvereinbarung, Kontaktanfragen, Vertragserfüllung)
            und auf Grundlage von Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
            Vertrag (Art. 6 Abs. 1 lit. b DSGVO) oder berechtigtem Interesse
            (Art. 6 Abs. 1 lit. f DSGVO). Eine Weitergabe an Dritte erfolgt nur,
            soweit gesetzlich vorgesehen oder Sie eingewilligt haben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Cookies
          </h2>
          <p>
            Diese Website setzt nur technisch notwendige Cookies ein, soweit
            erforderlich für den Betrieb der Seite. Es werden keine
            Tracking- oder Marketing-Cookies ohne Ihre Einwilligung verwendet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Google Maps
          </h2>
          <p>
            Auf unserer Website kann eine Karte von Google Maps eingebunden
            sein. Dabei können Daten an Google (USA) übertragen werden. Bitte
            beachten Sie die Datenschutzerklärung von Google. Die Einbindung
            erfolgt auf Grundlage unseres berechtigten Interesses an der
            Darstellung unseres Standorts (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
            (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der
            Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO)
            und Widerspruch (Art. 21 DSGVO). Sie können sich bei einer
            Aufsichtsbehörde beschweren (Art. 77 DSGVO). Sofern die
            Verarbeitung auf Einwilligung beruht, haben Sie das Recht, die
            Einwilligung jederzeit zu widerrufen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            7. Speicherdauer
          </h2>
          <p>
            Wir speichern Ihre Daten nur so lange, wie es für die
            Erfüllung der Zwecke erforderlich ist oder gesetzliche
            Aufbewahrungsfristen bestehen.
          </p>
        </section>

        <p className="text-sm text-gray-500 pt-4">
          Bitte ersetzen Sie diese Platzhaltertexte durch eine von einem
          Anwalt geprüfte, auf Ihre Praxis zugeschnittene
          Datenschutzerklärung.
        </p>
      </div>
    </SectionWrapper>
  );
}
