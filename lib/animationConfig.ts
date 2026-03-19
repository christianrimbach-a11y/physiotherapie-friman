/**
 * Zentrale Konfiguration für alle Scroll-Reveal-Animationen.
 * Hier Duration, Easing, Trigger und Stagger anpassen – wirkt projektweit.
 */

/** Easing: ruhig, kein Bounce (easeOut-ähnlich) */
export const REVEAL_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Dauer Standard-Reveal (Karten, Abschnitte) in ms – 0.8–1.2s */
export const REVEAL_DURATION_MS = 1100;

/** Dauer Hero-Style (Titel/Text-Staffel) in ms – etwas langsamer */
export const HERO_REVEAL_DURATION_MS = 1400;

/** Stagger-Abstand zwischen Karten/Elementen in ms (z. B. 80–120) */
export const REVEAL_STAGGER_MS = 100;

/** Vertikaler Offset beim Einblenden (translateY in px) */
export const REVEAL_Y_OFFSET = 50;

/** Horizontaler Offset (z. B. Willkommen von rechts) in px */
export const REVEAL_X_OFFSET = 60;

/** Horizontaler Offset von links (z. B. Bild) in px */
export const REVEAL_X_OFFSET_LEFT = 60;

/** Scale Startwert für „von innen nach außen“ (Hero, Hero-Style) */
export const REVEAL_SCALE_START = 0.98;

/** Intersection Observer: ab welchem Sichtbarkeitsanteil triggern (0 = sobald 1 Pixel sichtbar) */
export const REVEAL_TRIGGER_AMOUNT = 0;

/** Root-Margin für früheres Späteres Triggern (oben/unten in px) */
export const REVEAL_ROOT_MARGIN = "80px 0px 80px 0px";

/** Stagger für Hero-Style: Titel, Divider, Text (Delays in ms) */
export const HERO_STAGGER = {
  title: 0,
  divider: 200,
  text: 350,
  cta: 700,
} as const;
