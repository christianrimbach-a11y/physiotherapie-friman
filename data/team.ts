export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Inna Friman",
    role: "Physiotherapeut (B.Sc.) / Manuelle Therapie",
    description:
      "Langjährige Erfahrung in der manuellen Therapie und der Behandlung von Wirbelsäulen- und Gelenkbeschwerden. Fokus auf eine ganzheitliche, patientenorientierte Betreuung.",
    image: "/images/placeholder.svg",
  },
  {
    name: "Rudi Friman",
    role: "Physiotherapeutin / Rehabilitation & Prävention",
    description:
      "Spezialisiert auf Rehabilitation nach Verletzungen und Operationen sowie präventive Maßnahmen. Ihr Anliegen ist es, Patienten zurück in einen aktiven Alltag zu begleiten.",
    image: "/images/placeholder.svg",
  },
];
