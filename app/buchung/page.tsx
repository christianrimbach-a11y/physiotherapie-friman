import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import BookingForm from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Termin vereinbaren",
  description:
    "Terminanfrage bei Physiotherapie Friman in Wutha-Farnroda: Füllen Sie das Formular aus. Wir melden uns zeitnah und besprechen mit Ihnen die nächsten Schritte Ihrer Behandlung.",
};

export default function BuchungPage() {
  return (
    <>
      <SectionWrapper size="large" className="pt-12 bg-primary">
        <div className="max-w-xl mx-auto">
          <p className="section-label">Buchung</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Termin vereinbaren</h1>
          <div className="heading-divider" aria-hidden="true" />
          <p className="mt-4 text-gray-600">
            Füllen Sie die Felder aus. Wir melden uns in Kürze bei Ihnen, um Ihren Wunschtermin zu klären und kurz über Ihre Behandlung zu sprechen.
          </p>
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
