import type { ProjectItem } from "../types/portfolio";
import { useTranslations } from "../i18n/useTranslations";
import { ProjectCard } from "../components/ProjectCard";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const t = useTranslations();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="space-y-6"
    >
      <header className="space-y-2">
        <h2
          id="projects-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl"
        >
          {t.projects.heading}
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          {t.projects.description}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            labels={{
              highlight: t.projects.highlightLabel,
              wip: t.projects.wipLabel,
              live: t.projects.liveLabel,
              code: t.projects.codeLabel,
            }}
          />
        ))}
      </div>
    </section>
  );
}
