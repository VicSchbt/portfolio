import type { ExperienceItem } from "../types/portfolio";
import { useTranslations } from "../i18n/useTranslations";
import { ExperienceCard } from "../components/ExperienceCard";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
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
        >
          {t.experience.heading}
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          {t.experience.description}
        </p>
      </header>

      <ol className="space-y-4">
        {experience.map((item) => (
          <li key={item.id}>
            <ExperienceCard experience={item} />
          </li>
        ))}
      </ol>
    </section>
  );
};
