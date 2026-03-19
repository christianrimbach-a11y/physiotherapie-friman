import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS_FOOTER, SITE_NAME, CONTACT, LOGO_PATH } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-x-hidden" role="contentinfo">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex items-center">
            <Link
              href="/"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              aria-label="Startseite"
            >
              <Image
                src={LOGO_PATH}
                alt="Logo Physiotherapie Friman"
                width={200}
                height={56}
                className="h-12 sm:h-14 w-auto max-h-[56px] object-contain object-left"
              />
            </Link>
          </div>

          <nav aria-label="Footer Navigation">
            <p className="text-xs font-medium uppercase tracking-wider text-white/60 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS_FOOTER.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-white transition-colors break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              >
                {CONTACT.address}
              </a>
              <div className="space-y-1">
                {CONTACT.openingHours.map(({ days, hours }) => (
                  <p key={days}>{days}: {hours}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 w-screen relative left-1/2 -ml-[50vw] pr-4 sm:pr-6 lg:pr-8 pl-4 sm:pl-6 lg:pl-8">
          <div className="max-w-[1600px] mx-auto rounded-card overflow-hidden h-[220px] sm:h-[280px] md:h-[340px]">
            <iframe
              title="Standort Physiotherapie Friman Wutha-Farnroda auf Google Maps"
              src={CONTACT.mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        <p className="mt-8 text-xs text-white/60">
          © {new Date().getFullYear()} {SITE_NAME}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
