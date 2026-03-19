import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import BookingForm from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Termin vereinbaren",
  description:
    "Vereinbaren Sie online einen Termin in der Physiotherapie Frimann. Wir melden uns zeitnah bei Ihnen.",
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
            Füllen Sie das Formular aus. Wir setzen uns in Kürze mit Ihnen in
            Verbindung, um Ihren Wunschtermin zu bestätigen.
          </p>
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
