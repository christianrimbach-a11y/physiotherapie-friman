import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export default function TreatmentDetailCTA() {
  return (
    <section
      className="w-full bg-[#F5F3EF] py-12 md:py-16"
      aria-labelledby="treatment-cta-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl w-full rounded-2xl bg-[#F5F3EF] p-8 md:p-10">
          <h2
            id="treatment-cta-title"
            className="text-xl md:text-2xl font-bold text-[#000]"
          >
            Sie möchten direkt mit der Behandlung beginnen?
          </h2>
          <p className="mt-4 text-[#000] leading-relaxed">
            Vereinbaren Sie gerne einen Termin in unserer Praxis in Wutha-Farnroda. Wir
            besprechen Ihre aktuellen Beschwerden und starten mit einer Therapie,
            die wirklich zu Ihnen passt.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <Button href="/buchung" variant="primary" showArrow>
              Termin vereinbaren
            </Button>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 text-[#000] font-medium hover:opacity-80 transition-opacity text-sm text-center"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
