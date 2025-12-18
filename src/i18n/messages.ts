import type { SupportedLanguage } from "./types";

export const supportedLanguages: SupportedLanguage[] = ["en", "fr"];

export const defaultLanguage: SupportedLanguage = "en";

export const messages: Record<
  SupportedLanguage,
  {
    navigation: {
      work: string;
      experience: string;
      contact: string;
    };
    hero: {
      focusLabel: string;
      focusItems: string[];
    };
    projects: {
      heading: string;
      description: string;
      highlightLabel: string;
      wipLabel: string;
      liveLabel: string;
      codeLabel: string;
    };
    experience: {
      heading: string;
      description: string;
    };
    contact: {
      heading: string;
      emailIntro: string;
      ctaPrefix: string;
    };
  }
> = {
  en: {
    navigation: {
      work: "Work",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      focusLabel: "Focus",
      focusItems: [
        "Design-driven UI development",
        "Accessible, performant web experiences",
        "Clean, maintainable front-end architecture"
      ]
    },
    projects: {
      heading: "Some of my personal projects",
      description:
        "A few projects that represent how I think about product, design, and engineering.",
      highlightLabel: "Highlight",
      wipLabel: "WIP",
      liveLabel: "Live",
      codeLabel: "Code"
    },
    experience: {
      heading: "Experience",
      description:
        "A snapshot of the roles where I grew my craft, collaborated with teams, and shipped meaningful work."
    },
    contact: {
      heading: "Let’s work together",
      emailIntro: "Prefer email?",
      ctaPrefix: "Open to freelance opportunities (Frontend, Creative Development, Web Animation, Next.js)."
    }
  },
  fr: {
    navigation: {
      work: "Projets",
      experience: "Expérience",
      contact: "Contact"
    },
    hero: {
      focusLabel: "Focus",
      focusItems: [
        "Développement d’interfaces guidé par le design",
        "Expériences web accessibles et performantes",
        "Architecture front-end propre et maintenable"
      ]
    },
    projects: {
      heading: "Quelques projets personnels",
      description:
        "Quelques projets qui reflètent ma manière de penser produit, design et ingénierie.",
      highlightLabel: "À mettre en avant",
      wipLabel: "En cours",
      liveLabel: "En ligne",
      codeLabel: "Code"
    },
    experience: {
      heading: "Expérience",
      description:
        "Un aperçu des postes où j’ai développé ma pratique, collaboré avec les équipes et livré des produits concrets."
    },
    contact: {
      heading: "Travaillons ensemble",
      emailIntro: "Vous préférez l’email ?",
      ctaPrefix: "Ouverte à des missions freelance (Frontend, Creative Development, animation web, Next.js)."
    }
  }
};


