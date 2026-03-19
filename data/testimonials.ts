export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating?: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Maria K.",
    text: "Sehr kompetent und einfühlsam. Nach meiner Knie-OP hat mich die Therapie schnell wieder mobil gemacht. Kann ich nur empfehlen!",
    rating: 5,
  },
  {
    id: "2",
    name: "Thomas S.",
    text: "Endlich jemand, der sich Zeit nimmt und die Ursache angeht – nicht nur die Symptome. Die Manuelle Therapie hat mir sehr geholfen.",
    rating: 5,
  },
  {
    id: "3",
    name: "Anna L.",
    text: "Angenehme Atmosphäre, professionelles Team. Ich fühle mich gut aufgehoben und habe meine Beschwerden deutlich verbessern können.",
    rating: 5,
  },
  {
    id: "4",
    name: "Peter M.",
    text: "Von der ersten Behandlung an ein vertrauensvoller Kontakt. Die Lymphdrainage wurde genau erklärt und hat spürbar geholfen.",
    rating: 5,
  },
  {
    id: "5",
    name: "Sabine W.",
    text: "Prävention wird hier großgeschrieben. Ich komme regelmäßig zur Vorbeugung und fühle mich bestens betreut.",
    rating: 5,
  },
];
