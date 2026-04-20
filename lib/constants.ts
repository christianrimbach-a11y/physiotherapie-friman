export const SITE_NAME = "Physiotherapie Frimann";
export const LOGO_PATH = "/images/logo.png";

export const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen & Behandlungen" },
  { href: "/praxis", label: "Unsere Praxis" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const NAV_LINKS_FOOTER = [
  ...NAV_LINKS,
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://instagram.com", label: "Instagram", ariaLabel: "Instagram öffnen" },
  { href: "https://facebook.com", label: "Facebook", ariaLabel: "Facebook öffnen" },
] as const;

export const CONTACT = {
  phone: "03692127026",
  email: "info@physiotherapie-friman.de",
  address: "Ruhlaer Straße 121–123, 99848 Wutha-Farnroda",
  mapsUrl: "https://www.google.com/maps?q=Ruhlaer+Stra%C3%9Fe+121-123+99848+Wutha-Farnroda&z=16&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Ruhlaer+Straße+121-123+99848+Wutha-Farnroda",
  openingHours: [
    { days: "Montag", hours: "08:00 – 14:00" },
    { days: "Dienstag", hours: "09:00 – 18:00" },
    { days: "Mittwoch", hours: "Geschlossen" },
    { days: "Donnerstag", hours: "09:00 – 18:00" },
    { days: "Freitag", hours: "08:00 – 14:00" },
  ],
} as const;

/** Dezente einzeilige Anzeige für den Desktop-Header */
export const OPENING_HOURS_HEADER_DESKTOP_LINE =
  "Öffnungszeiten: Mo 8–14 · Di 9–18 · Mi geschlossen · Do 9–18 · Fr 8–14";
