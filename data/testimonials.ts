export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating?: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Lina Eisenhuth",
    text: "Sehr empfehlenswerte Praxis! Rudolf hat mir mit einer erfolgreichen Stoßwellenbehandlung am Knie geholfen, Inna mit gezielten Behandlungen bei Rückenproblemen. Beide arbeiten professionell und nehmen sich Zeit. Tolles Team und angenehme Atmosphäre!",
    rating: 5,
  },
  {
    id: "2",
    name: "Jörg Uwe Schäfer",
    text: "Wer in Eisenach kompetente Hilfe sucht, ist bei Familie Friman genau richtig. Fachlich absolut top, die Therapie ist effektiv und die Atmosphäre in der Praxis ist sehr angenehm. Beide sind super freundlich und hilfsbereit.",
    rating: 5,
  },
  {
    id: "3",
    name: "Tina Engel",
    text: "Das Team ist superlieb, total professionell und fachlich wirklich top. Ich komme schon seit vielen Jahren hierher und fühle mich jedes Mal bestens betreut. Absolut empfehlenswert!",
    rating: 5,
  },
];
