# Victoire Schubert – Portfolio

Personal portfolio built with **React**, **TypeScript**, and **Tailwind CSS**, focused on showcasing projects, professional experience, and providing an easy way to get in touch. The site supports **English** and **French** via a lightweight i18n system.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (bundler, dev server)
- **Tailwind CSS** (styling)
- Simple **JSON-based content** with i18n support

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm, pnpm, or yarn (examples below use npm)

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

Key folders and files:

- `src/main.tsx` – App entry point, wraps the app with the language provider.
- `src/App.tsx` – Top-level composition of layout + sections, pulls content from data.
- `src/components/layout/AppShell.tsx` – Global layout (header, navigation, language switcher, footer).
- `src/sections/` – Page sections:
  - `HeroSection.tsx`
  - `ProjectsSection.tsx`
  - `ExperienceSection.tsx`
  - `ContactSection.tsx`
- `src/styles/index.css` – Tailwind base and global styles.
- `src/types/portfolio.ts` – TypeScript models for portfolio content and localization.
- `src/data/portfolio.json` – Main content (about, experience, projects, contact) in English and French.
- `src/i18n/` – UI translations and language context:
  - `messages.ts` – Static UI strings for EN/FR (section titles, labels).
  - `LanguageContext.tsx` – Current language state + provider.
  - `useTranslations.ts` – Hook to access localized UI strings.

## Content editing

### Portfolio content (about, experience, projects, contact)

All main content lives in `src/data/portfolio.json` and is localized per language:

- `about.en` / `about.fr`
- `experience.en` / `experience.fr` (arrays of roles)
- `projects.en` / `projects.fr` (arrays of projects)
- `contact.en` / `contact.fr`

To edit or add content:

1. Update the relevant **EN** entry.
2. Mirror the change in the **FR** entry (or vice versa) to keep languages in sync.

For projects, useful fields include:

- `highlight: boolean` – visually marked as a key/featured project.
- `wip?: boolean` – optional flag that shows a yellow “WIP / En cours” badge.

### UI text (section titles, chips, labels)

Static UI strings (e.g. “Selected work”, “Experience”, “Contact”, “Highlight”, “WIP”) are defined in `src/i18n/messages.ts` under `en` and `fr`.  
Edit those if you want to adjust phrasing without touching the content JSON.

## i18n behavior

- The current language is managed via `LanguageContext`.
- The header exposes an `EN / FR` toggle:
  - Switches UI labels (from `messages.ts`).
  - Switches content slices (from `portfolio.json`) between English and French.

## Scripts

- `npm run dev` – Start dev server.
- `npm run build` – Build production bundle.
- `npm run preview` – Preview the production build.
- `npm run lint` – Run ESLint on `src/**/*.ts` and `src/**/*.tsx`.


