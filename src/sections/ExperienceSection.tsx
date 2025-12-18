import type { ExperienceItem } from "../types/portfolio";
import { useTranslations } from "../i18n/useTranslations";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const t = useTranslations();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="space-y-6"
    >
      <header className="space-y-2">
        <h2
          id="experience-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl"
        >
          {t.experience.heading}
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          {t.experience.description}
        </p>
      </header>

      <ol className="space-y-4">
        {experience.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 md:p-6"
          >
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-100">
                  {item.role}
                </p>
                <p className="text-xs text-slate-400">
                  {item.company} · {item.location}
                </p>
              </div>
              <p className="text-xs text-slate-400">{item.period}</p>
            </header>

            <p className="mt-3 text-sm text-slate-300">
              {item.summary}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
              {item.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-slate-800/80 px-2 py-0.5"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}


