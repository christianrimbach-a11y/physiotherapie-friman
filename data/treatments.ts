export interface TreatmentDetailGoalsItem {
  text: string;
  emphasize?: string;
}

export interface TreatmentDetail {
  whatIs: string;
  howItWorks: string;
  forWhom: string;
  goals: string;
  forWhomHeading?: string;
  goalsHeading?: string;
  whatIsHeading?: string;
  goalsList?: TreatmentDetailGoalsItem[];
  whatIsEmphasize?: string[];
}

export interface Treatment {
  slug: string;
  title: string;
  shortDescription: string;
  shortDescriptionEmphasize?: string[];
  hasDetailPage: boolean;
  detail?: TreatmentDetail;
  image?: string;
  /** Hero-Bild für die Detailseite (z. B. .jpg). Fehlt = neutraler Platzhalter. */
  heroImageSrc?: string;
  /** Bis zu 3 Benefit-Badges für die Detailseite (z. B. Schmerzlinderung, Beweglichkeit, Individuell). */
  benefits?: string[];
}

export const TREATMENTS: Treatment[] = [
  {
    slug: "krankengymnastik",
    title: "Krankengymnastik",
    shortDescription:
      "Die Krankengymnastik ist ein zentraler Bestandteil der modernen Physiotherapie. In unserer Praxis für Physiotherapie in Wutha-Farnroda setzen wir sie gezielt ein, um Beweglichkeit zu verbessern, Schmerzen zu lindern und den Körper wieder in ein natürliches Gleichgewicht zu bringen. Jeder Therapieplan wird individuell auf Ihre Beschwerden, Ihre Belastbarkeit und Ihre persönlichen Ziele abgestimmt.",
    hasDetailPage: true,
    image: "/images/krankengymnastik.png",
    benefits: ["Schmerzlinderung", "Beweglichkeit", "Individuell"],
    detail: {
      whatIs:
        "Die Krankengymnastik umfasst aktive und passive Übungen zur Behandlung von Funktionsstörungen des Bewegungsapparates. Sie kommt nach Verletzungen, Operationen oder bei chronischen Beschwerden zum Einsatz. Ergänzend können Techniken wie Faszientherapie, Triggerpunktbehandlung oder stabilisierende Trainingsübungen integriert werden.",
      howItWorks:
        "Nach einer ausführlichen Befundaufnahme erstellen wir ein individuelles Übungsprogramm. Durch Mobilisation, Kräftigung, Koordinations- und Haltungstraining wird der Körper Schritt für Schritt wieder belastbarer. Ziel ist es, nicht nur Symptome zu behandeln, sondern die Ursachen nachhaltig zu verbessern.",
      forWhom:
        "Für Menschen mit Rücken- oder Gelenkbeschwerden, nach Operationen oder Unfällen, bei Fehlhaltungen, Bewegungseinschränkungen oder zur Prävention neuer Beschwerden.",
      forWhomHeading: "Für wen ist Krankengymnastik geeignet?",
      goals: "Wiederherstellung natürlicher Bewegungsabläufe. Verbesserung von Kraft und Stabilität. Reduktion von Schmerzen. Vermeidung von Fehlbelastungen im Alltag.",
      goalsHeading: "Welche Ziele verfolgt die Behandlung?",
      goalsList: [
        { text: "Wiederherstellung natürlicher Bewegungsabläufe", emphasize: "natürlicher Bewegungsabläufe" },
        { text: "Verbesserung von Kraft und Stabilität", emphasize: "Kraft und Stabilität" },
        { text: "Reduktion von Schmerzen", emphasize: "Schmerzen" },
        { text: "Vermeidung von Fehlbelastungen im Alltag", emphasize: "Fehlbelastungen" },
      ],
      whatIsEmphasize: ["Faszientherapie", "Triggerpunktbehandlung", "stabilisierende Trainingsübungen"],
    },
  },
  {
    slug: "manuelle-therapie",
    title: "Manuelle Therapie",
    shortDescription:
      "Die Manuelle Therapie ist eine spezialisierte Behandlung zur gezielten Lösung von Blockaden und Funktionsstörungen. Durch präzise Handgrifftechniken verbessern wir die Beweglichkeit von Gelenken und reduzieren Schmerzen effektiv und schonend.",
    shortDescriptionEmphasize: ["Manuelle Therapie"],
    hasDetailPage: true,
    image: "/images/manuelle-therapie.jpg",
    benefits: ["Schmerzlinderung", "Beweglichkeit", "Individuell"],
    detail: {
      whatIs:
        "Sie ist eine physiotherapeutische Methode zur Untersuchung und Behandlung von Gelenk-, Muskel- und Nervenfunktionen. Auch ergänzende Verfahren wie CMD-Behandlungen, Faszientechniken oder Triggerpunkttherapie können Bestandteil sein.",
      howItWorks:
        "Durch gezielte Mobilisationen und sanfte Impulse werden Bewegungseinschränkungen gelöst. Muskeln werden entspannt, Gelenke stabilisiert und das Zusammenspiel des Bewegungsapparates verbessert.",
      forWhom:
        "Bei Rücken-, Schulter- oder Nackenbeschwerden, Kieferproblemen, Bewegungseinschränkungen oder nach Verletzungen.",
      forWhomHeading: "Für wen ist die Manuelle Therapie geeignet?",
      goals:
        "Schmerzlinderung. Verbesserung der Gelenkbeweglichkeit. Wiederherstellung natürlicher Funktionen. Nachhaltige Stabilisierung des Bewegungsapparates.",
      goalsHeading: "Welche Ziele verfolgt die Behandlung?",
      goalsList: [
        { text: "Schmerzlinderung", emphasize: "Schmerzlinderung" },
        { text: "Verbesserung der Gelenkbeweglichkeit", emphasize: "Gelenkbeweglichkeit" },
        { text: "Wiederherstellung natürlicher Funktionen", emphasize: "natürlicher Funktionen" },
        { text: "Nachhaltige Stabilisierung des Bewegungsapparates", emphasize: "Stabilisierung" },
      ],
      whatIsEmphasize: ["CMD-Behandlungen", "Faszientechniken", "Triggerpunkttherapie"],
    },
  },
  {
    slug: "massage-weichteiltechniken",
    title: "Massage / Weichteiltechniken",
    shortDescription:
      "Massagen sind ein wichtiger Bestandteil der physiotherapeutischen Behandlung und dienen weit mehr als nur der Entspannung. Sie unterstützen gezielt die Regeneration von Muskeln und Gewebe.",
    hasDetailPage: true,
    image: "/images/massage-techniken.jpg",
    benefits: ["Entspannung", "Durchblutung", "Individuell"],
    detail: {
      whatIs:
        "Zum Einsatz kommen klassische Massagen, Bindegewebsmassagen sowie Triggerpunkt- und Faszienbehandlungen. Diese Techniken lösen Verspannungen, verbessern die Durchblutung und fördern den Stoffwechsel im Gewebe.",
      howItWorks:
        "Durch gezielte Grifftechniken werden verhärtete Muskelbereiche gelockert, Schmerzen reduziert und die Elastizität des Gewebes verbessert.",
      forWhom:
        "Bei muskulären Verspannungen, stressbedingten Beschwerden, Fehlhaltungen oder zur Unterstützung anderer Therapien.",
      forWhomHeading: "Wann sind Massage- und Weichteiltechniken geeignet?",
      goals:
        "Lockerung der Muskulatur. Förderung der Durchblutung. Schmerzlinderung. Verbesserung der Regeneration.",
      goalsHeading: "Welche Ziele verfolgt die Behandlung?",
      goalsList: [
        { text: "Lockerung der Muskulatur", emphasize: "Muskulatur" },
        { text: "Förderung der Durchblutung", emphasize: "Durchblutung" },
        { text: "Schmerzlinderung", emphasize: "Schmerzlinderung" },
        { text: "Verbesserung der Regeneration", emphasize: "Regeneration" },
      ],
      whatIsEmphasize: ["klassische Massagen", "Bindegewebsmassagen", "Triggerpunkt- und Faszienbehandlungen"],
    },
  },
  {
    slug: "lymphdrainage",
    title: "Lymphdrainage",
    shortDescription:
      "Die manuelle Lymphdrainage ist eine besonders sanfte Therapieform zur Entstauung von Gewebe und zur Unterstützung des Heilungsprozesses nach Operationen oder Verletzungen.",
    hasDetailPage: true,
    image: "/images/lymphdrainage.jpg",
    benefits: ["Entstauung", "Heilung", "Individuell"],
    detail: {
      whatIs:
        "Eine spezielle Technik, die den Lymphfluss anregt und den Abtransport von Gewebeflüssigkeit unterstützt. Häufig wird sie mit Kompressionsmaßnahmen kombiniert.",
      howItWorks:
        "Mit rhythmischen, kreisenden Griffen wird das Lymphsystem aktiviert, sodass Schwellungen reduziert und die Gewebespannung verbessert werden.",
      forWhom:
        "Bei Ödemen, nach Operationen, Verletzungen oder bei chronischen Schwellungszuständen.",
      forWhomHeading: "Wann ist die Lymphdrainage geeignet?",
      goals:
        "Abbau von Schwellungen. Förderung der Heilung. Verbesserung des Stoffwechsels. Schmerzlinderung.",
      goalsHeading: "Welche Ziele verfolgt die Behandlung?",
      goalsList: [
        { text: "Abbau von Schwellungen", emphasize: "Schwellungen" },
        { text: "Förderung der Heilung", emphasize: "Heilung" },
        { text: "Verbesserung des Stoffwechsels", emphasize: "Stoffwechsels" },
        { text: "Schmerzlinderung", emphasize: "Schmerzlinderung" },
      ],
      whatIsEmphasize: ["Lymphfluss", "Kompressionsmaßnahmen"],
    },
  },
  {
    slug: "waerme-kaeltetherapie",
    title: "Wärme-/Kältetherapie",
    shortDescription:
      "Thermotherapien unterstützen die physiotherapeutische Behandlung gezielt und bereiten Muskeln und Gewebe optimal auf weitere Maßnahmen vor.",
    hasDetailPage: true,
    image: "/images/waerme-kaeltetherapie.jpg",
    benefits: ["Schmerzlinderung", "Durchblutung", "Individuell"],
    detail: {
      whatIs:
        "Anwendungen wie Heißluft, Fangopackungen, Elektrotherapie oder Ultraschall fördern die Durchblutung, entspannen die Muskulatur und unterstützen Heilungsprozesse.",
      howItWorks:
        "Wärme lockert das Gewebe und steigert die Durchblutung, während Kälte entzündungshemmend wirkt. Physikalische Therapien erreichen zusätzlich tieferliegende Strukturen.",
      forWhom:
        "Bei Muskelverspannungen, Gelenkbeschwerden, Reizzuständen oder zur Vorbereitung weiterer Therapien.",
      forWhomHeading: "Wann ist eine Wärme- oder Kältetherapie geeignet?",
      goals:
        "Schmerzlinderung. Muskelentspannung. Förderung der Heilung. Verbesserung der Beweglichkeit.",
      goalsHeading: "Welche Ziele verfolgt die Behandlung?",
      goalsList: [
        { text: "Schmerzlinderung durch gezielte thermische Reize", emphasize: "Schmerzlinderung" },
        { text: "Entspannung der Muskulatur und Verbesserung der Durchblutung", emphasize: "Muskulatur" },
        { text: "Unterstützung von Heilungsprozessen im Gewebe", emphasize: "Heilungsprozessen" },
        { text: "Vorbereitung des Körpers auf weitere physiotherapeutische Maßnahmen", emphasize: "physiotherapeutische Maßnahmen" },
      ],
      whatIsEmphasize: ["Heißluft", "Fangopackungen", "Elektrotherapie", "Ultraschall"],
    },
  },
  {
    slug: "stosswellentherapie",
    title: "Stoßwellentherapie",
    shortDescription:
      "Die Stoßwellentherapie ist eine moderne Behandlungsmethode zur gezielten Behandlung von Schmerzen im Bewegungsapparat. Durch hochenergetische Schallwellen werden Heilungsprozesse im Gewebe angeregt und chronische Beschwerden effektiv behandelt.",
    hasDetailPage: true,
    image: "/images/stosswellentherapie.jpg",
    benefits: ["Schmerzlinderung", "Regeneration", "Individuell"],
    detail: {
      whatIs:
        "Die Stoßwellentherapie nutzt gezielte Druckwellen, um schmerzhafte Bereiche im Körper zu behandeln. Sie fördert die Durchblutung, regt die Regeneration von Sehnen und Muskeln an und kann Verkalkungen oder hartnäckige Entzündungen positiv beeinflussen.",
      whatIsHeading: "Was ist Stoßwellentherapie?",
      howItWorks:
        "Während der Behandlung werden Stoßwellen über ein spezielles Gerät auf die betroffene Körperregion übertragen. Die Impulse regen die natürlichen Heilungsprozesse des Körpers an und können Schmerzen deutlich reduzieren.",
      forWhom:
        "Bei chronischen Schmerzen im Bewegungsapparat, Sehnenbeschwerden, Verspannungen oder zur Unterstützung der Heilung nach Verletzungen.",
      forWhomHeading: "Für wen ist die Stoßwellentherapie geeignet?",
      goals:
        "Linderung chronischer Schmerzen. Förderung der Heilung von Sehnen und Muskeln. Verbesserung der Durchblutung im Gewebe. Unterstützung der natürlichen Regeneration.",
      goalsHeading: "Welche Ziele verfolgt die Behandlung?",
      goalsList: [
        { text: "Linderung chronischer Schmerzen", emphasize: "chronischer Schmerzen" },
        { text: "Förderung der Heilung von Sehnen und Muskeln", emphasize: "Heilung von Sehnen und Muskeln" },
        { text: "Verbesserung der Durchblutung im Gewebe", emphasize: "Durchblutung" },
        { text: "Unterstützung der natürlichen Regeneration", emphasize: "Regeneration" },
      ],
      whatIsEmphasize: ["Druckwellen", "Durchblutung", "Regeneration"],
    },
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getTreatmentsWithDetailPage(): Treatment[] {
  return TREATMENTS.filter((t) => t.hasDetailPage);
}
