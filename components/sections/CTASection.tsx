import Image from "next/image";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: string;
  className?: string;
}

const DEFAULT_BG = "/images/placeholder.svg";

export default function CTASection({
  title = "Bereit für Ihren Termin?",
  subtitle = "Vereinbaren Sie jetzt einen Termin in unserer Praxis. Wir freuen uns auf Sie.",
  buttonText = "Termin vereinbaren",
  backgroundImage = DEFAULT_BG,
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`relative w-full py-24 md:py-32 overflow-hidden ${className}`}
      aria-labelledby="cta-title"
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={95}
          priority={false}
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          <Button href="/buchung" variant="primaryInvert" showArrow aria-label={buttonText}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
