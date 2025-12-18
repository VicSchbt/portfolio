import type { About } from "../types/portfolio";
import { useTranslations } from "../i18n/useTranslations";
import ProfilePicture from "../components/ProfilePicture";

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
      <div className="flex flex-col items-center justify-center">
        <p className="font-yellowtail text-pink-600 text-8xl">Hello</p>
        <h1
          id="hero-title"
          className="font-mono mt-4 font-semibold tracking-tight text-xl"
        >
          {about.name}
        </h1>
        {/* <p className="text-sm font-medium uppercase tracking-[0.2em] ">
          {about.title}
        </p>
        <p className="text-sm font-medium  mt-2">{about.location}</p> */}

        <p className="font-mono mt-6 max-w-xl text-sm leading-relaxed  md:text-base text-center">
          {about.summary}
        </p>
      </div>

      <ProfilePicture />

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft-glow backdrop-blur">
        <p className="text-xs font-medium uppercase tracking-[0.2em] ">
          {t.hero.focusLabel}
        </p>
        <ul className="mt-4 space-y-2 text-sm ">
          {t.hero.focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
