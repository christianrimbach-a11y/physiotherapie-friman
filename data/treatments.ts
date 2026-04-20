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
      "Die Krankengymnastik ist bei uns in Wutha-Farnroda ein zentraler Bestandteil der Physiotherapie: Wir unterstützen Sie dabei, Beweglichkeit zu verbessern, Schmerzen zu lindern und Stabilität im Alltag aufzubauen. Ihr Plan entsteht gemeinsam mit uns, abgestimmt auf Beschwerden, Belastbarkeit, Rehabilitation oder Prävention.",
    hasDetailPage: true,
    image: "/images/krankengymnastik.png",
    benefits: ["Schmerzlinderung", "Beweglichkeit", "Individuell"],
    detail: {
      whatIs:
        "Die Krankengymnastik verbindet aktive und passive Übungen zur Behandlung von Funktionsstörungen des Bewegungsapparates, etwa nach Verletzungen und Operationen oder bei chronischen Beschwerden. Bei uns können wir sinnvoll ergänzen: Faszientherapie, Triggerpunktbehandlung oder stabilisierendes Training.",
      howItWorks:
        "Nach einer ausführlichen Befundaufnahme entwickeln wir mit Ihnen ein Übungsprogramm, das zu Ihrem Alltag passt. Über Mobilisation, Kräftigung sowie Koordinations- und Haltungstraining unterstützen wir Sie dabei, Schritt für Schritt wieder belastbarer zu werden. Neben den aktuellen Symptomen berücksichtigen wir mit Ihnen auch zugrunde liegende Faktoren wie Haltung, Belastung und Alltagsbewegungen.",
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
      "Mit manueller Therapie arbeiten wir bei Ihnen gezielt an Blockaden und Bewegungseinschränkungen: präzise, schonend und zielorientiert, mit dem Ziel, Schmerzen zu lindern und Ihre Beweglichkeit in Wutha-Farnroda zu verbessern.",
    shortDescriptionEmphasize: ["Manuelle Therapie"],
    hasDetailPage: true,
    image: "/images/manuelle-therapie.jpg",
    benefits: ["Schmerzlinderung", "Beweglichkeit", "Individuell"],
    detail: {
      whatIs:
        "Die manuelle Therapie ist eine physiotherapeutische Methode zur Untersuchung und Behandlung von Gelenk-, Muskel- und Nervenfunktionen. Auf Wunsch und Befund ergänzen wir sie bei uns durch Verfahren wie CMD-Behandlungen, Faszientechniken oder Triggerpunkttherapie.",
      howItWorks:
        "Mit gezielten Mobilisationen und sanften Impulsen behandeln wir Bewegungseinschränkungen. Wir entspannen belastete Muskulatur, unterstützen stabile Gelenkführung und verbessern das Zusammenspiel Ihres Bewegungsapparates, damit Sie sich wieder freier bewegen können.",
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
      "Massage und Weichteiltechniken ergänzen Ihre physiotherapeutische Behandlung sinnvoll: Wir behandeln verspannte Strukturen, fördern die Durchblutung und unterstützen die Regeneration, damit Sie sich im Alltag entlasteter fühlen können.",
    hasDetailPage: true,
    image: "/images/massage-techniken.jpg",
    benefits: ["Entspannung", "Durchblutung", "Individuell"],
    detail: {
      whatIs:
        "Zum Einsatz kommen klassische Massagen, Bindegewebsmassagen sowie Triggerpunkt- und Faszienbehandlungen. Diese Techniken lösen Verspannungen, verbessern die Durchblutung und fördern den Stoffwechsel im Gewebe.",
      howItWorks:
        "Mit gezielten Grifftechniken lockern wir verhärtete Bereiche, reduzieren Schmerzen und verbessern die Elastizität Ihres Gewebes. So begleiten wir Sie sinnvoll vor oder nach weiteren Schritten Ihrer Therapie.",
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
      "Mit manueller Lymphdrainage begleiten wir Sie sanft bei der Entstauung von Ödemen, etwa nach Operationen oder Verletzungen, und unterstützen Ihr Gewebe mit einer ruhigen, gut abgestimmten Behandlung.",
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
      "Wärme und Kälte setzen wir gezielt ein, um Ihre physiotherapeutische Behandlung zu unterstützen: Wir bereiten Gewebe vor, lindern Beschwerden und können nachfolgende Therapieschritte sinnvoll ergänzen.",
    hasDetailPage: true,
    image: "/images/waerme-kaeltetherapie.jpg",
    benefits: ["Schmerzlinderung", "Durchblutung", "Individuell"],
    detail: {
      whatIs:
        "Anwendungen wie Heißluft, Fangopackungen, Elektrotherapie oder Ultraschall fördern die Durchblutung, entspannen die Muskulatur und unterstützen Heilungsprozesse.",
      howItWorks:
        "Wärme lockert das Gewebe und steigert die Durchblutung, Kälte kann entzündungshemmend wirken. Ergänzend setzen wir physikalische Therapien ein, um tiefer liegende Strukturen gezielt mit einzubeziehen, abgestimmt auf Ihre jeweilige Behandlung.",
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
      "Die Stoßwellentherapie ist eine moderne Behandlungsoption bei uns: Gezielt bei Beschwerden im Bewegungsapparat setzen wir hochenergetische Schallwellen ein, um körpereigene Regenerationsprozesse anzuregen und chronische Schmerzen zu mildern.",
    hasDetailPage: true,
    image: "/images/stosswellentherapie.jpg",
    benefits: ["Schmerzlinderung", "Regeneration", "Individuell"],
    detail: {
      whatIs:
        "Die Stoßwellentherapie nutzt gezielte Druckwellen, um schmerzhafte Bereiche im Körper zu behandeln. Sie fördert die Durchblutung, regt die Regeneration von Sehnen und Muskeln an und kann Verkalkungen oder hartnäckige Entzündungen positiv beeinflussen.",
      whatIsHeading: "Was ist Stoßwellentherapie?",
      howItWorks:
        "Während der Behandlung leiten wir Stoßwellen mit einem speziellen Gerät gezielt auf die betroffene Region. Die Impulse unterstützen die natürlichen Regenerationsprozesse Ihres Körpers. Viele Patientinnen und Patienten berichten von weniger Schmerzen und mehr Bewegungsfreiheit.",
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
