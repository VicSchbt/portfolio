import type { ProjectItem } from "../types/portfolio";

type ProjectCardLabels = {
  highlight: string;
  wip: string;
  live: string;
  code: string;
};

type ProjectCardProps = {
  project: ProjectItem;
  labels: ProjectCardLabels;
};

export function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-accent hover:bg-slate-900">
      <div>
        <header className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold text-slate-50">
            {project.name}
          </h3>
          <div className="flex gap-1">
            {project.highlight && (
              <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-accent">
                {labels.highlight}
              </span>
            )}
            {project.wip && (
              <span className="rounded-full border border-yellow-300/50 bg-yellow-400/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-yellow-300">
                {labels.wip}
              </span>
            )}
          </div>
        </header>
        <p className="mt-3 text-sm text-slate-300">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[0.7rem]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 text-xs text-accent">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accentMuted transition-colors"
            >
              {labels.live}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accentMuted transition-colors"
            >
              {labels.code}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
