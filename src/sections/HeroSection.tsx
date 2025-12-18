import type { About } from "../types/portfolio";
import { useTranslations } from "../i18n/useTranslations";

type HeroSectionProps = {
  about: About;
};

export function HeroSection({ about }: HeroSectionProps) {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="hero-title"
      className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
    >
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {about.title}
        </p>
        <h1
          id="hero-title"
          className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl"
        >
          {about.name}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          {about.summary}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft-glow backdrop-blur">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          {t.hero.focusLabel}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {t.hero.focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


