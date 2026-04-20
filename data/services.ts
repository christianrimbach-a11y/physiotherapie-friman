export interface ServiceTile {
  id: string;
  icon: "Stethoscope" | "Hand" | "Activity" | "HeartPulse" | "PersonStanding" | "ShieldPlus";
  title: string;
  description: string;
}

export const SERVICE_TILES: ServiceTile[] = [
  {
    id: "behandlung",
    icon: "Stethoscope",
    title: "Individuelle Behandlungen",
    description: "Wir stimmen Therapie und Übungen auf Ihre Beschwerden, Ihre Ziele und Ihren Alltag ab",
  },
  {
    id: "massage",
    icon: "Hand",
    title: "Massagetherapien",
    description: "Wir behandeln Verspannungen und fördern Durchblutung und Regeneration gezielt",
  },
  {
    id: "schmerztherapie",
    icon: "Activity",
    title: "Gezielte Schmerztherapie",
    description: "Wir helfen Ihnen, akute und chronische Beschwerden im Bewegungsapparat zu reduzieren",
  },
  {
    id: "rehabilitation",
    icon: "HeartPulse",
    title: "Aktive Rehabilitation",
    description: "Nach Verletzung oder OP begleiten wir Sie sicher zurück in Alltag, Beruf und Sport",
  },
  {
    id: "bewegung",
    icon: "PersonStanding",
    title: "Funktionelles Bewegungstraining",
    description: "Wir trainieren mit Ihnen Mobilität, Stabilität und ein gutes Körpergefühl im Alltag",
  },
  {
    id: "gesundheit",
    icon: "ShieldPlus",
    title: "Nachhaltige Prävention und Gesundheitsförderung",
    description: "Bleiben Sie langfristig beweglich: Wir unterstützen Sie mit vorausschauender Prävention",
  },
];
