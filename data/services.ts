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
    description: "abgestimmt auf Ihre Beschwerden und persönlichen Ziele",
  },
  {
    id: "massage",
    icon: "Hand",
    title: "Massagetherapien",
    description: "zur Entspannung der Muskulatur und Förderung der Durchblutung",
  },
  {
    id: "schmerztherapie",
    icon: "Activity",
    title: "Gezielte Schmerztherapie",
    description: "für akute und chronische Beschwerden des Bewegungsapparates",
  },
  {
    id: "rehabilitation",
    icon: "HeartPulse",
    title: "Aktive Rehabilitation",
    description: "nach Verletzungen oder Operationen für eine sichere Rückkehr in Alltag und Sport",
  },
  {
    id: "bewegung",
    icon: "PersonStanding",
    title: "Funktionelles Bewegungstraining",
    description: "zur Verbesserung von Mobilität, Stabilität und Körpergefühl",
  },
  {
    id: "gesundheit",
    icon: "ShieldPlus",
    title: "Nachhaltige Prävention und Gesundheitsförderung",
    description: "für langfristige Beweglichkeit und Lebensqualität",
  },
];
