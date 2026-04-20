import Button from "@/components/ui/Button";

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
            Möchten Sie mit Ihrer Behandlung starten?
          </h2>
          <p className="mt-4 text-[#000] leading-relaxed">
            Rufen Sie uns gern an. Bei uns in Wutha-Farnroda besprechen wir Ihre Beschwerden verständlich und ehrlich und legen gemeinsam fest, wie wir Sie unterstützen können, etwa bei der Schmerzlinderung, der Verbesserung der Beweglichkeit oder bei der Rehabilitation.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <Button href="tel:03692127026" variant="primary" showArrow>
              03692127026
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
