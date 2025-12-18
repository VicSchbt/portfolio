import type { ExperienceItem } from "../types/portfolio";
import { Card } from "./Card";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="space-y-1">
          <p className="text-md font-alfa text-pink-400">
            {experience.role}
          </p>
          <p className="text-sm">
            {experience.company} · {experience.location}
          </p>
        </div>
        <p className="text-xs">{experience.period}</p>
      </header>

      <p className="mt-3 text-sm">{experience.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2 text-[0.7rem]">
        {experience.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-slate-800/80 px-2 py-0.5"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Card>
  );
}
