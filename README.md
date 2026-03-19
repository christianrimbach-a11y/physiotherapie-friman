# Physiotherapie Frimann – Website

Next.js-Website für die Praxis Physiotherapie Frimann (App Router, TypeScript, Tailwind CSS).

## Starten

```bash
npm install
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Struktur

- **app/** – Seiten (Startseite, Über uns, Leistungen, Praxis, Kontakt, Buchung, Impressum, Datenschutz)
- **components/** – Wiederverwendbare Komponenten (Layout, Sektionen, Formulare, UI)
- **data/** – Inhalte (Behandlungen, Team, Testimonials)
- **lib/** – Konstanten (Kontakt, Navigation, Social Links)

## Anpassungen

- **Kontakt & Maps:** `lib/constants.ts` (Telefon, E-Mail, Adresse, Google-Maps-URL)
- **Behandlungen:** `data/treatments.ts`
- **Team:** `data/team.ts`
- **Bilder:** Platzhalter in `public/images/` durch eigene Bilder ersetzen (hero, CTA, Team, Leistungen, Praxis)
- **Rechtstexte:** Impressum und Datenschutz in `app/impressum/page.tsx` und `app/datenschutz/page.tsx` mit Ihren Angaben ergänzen

## Technik

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Formulare: react-hook-form, zod, @hookform/resolvers
- Font: Montserrat (next/font/google)
