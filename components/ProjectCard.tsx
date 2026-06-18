import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative rounded-lg border border-white/5 bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        <span className="text-accent">{project.shipped}</span>
        <span
          className={
            project.status === "Live"
              ? "rounded-full border border-accent/40 px-2 py-0.5 text-accent"
              : "rounded-full border border-amber/40 px-2 py-0.5 text-amber"
          }
        >
          {project.status}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-semibold">
        {project.name}
      </h3>
      <p className="mt-2 text-base text-ink">{project.tagline}</p>

      <div className="mt-6 space-y-4 text-sm text-muted">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted/70">
            Problem
          </p>
          <p className="mt-1 text-ink/90">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted/70">
            Approach
          </p>
          <p className="mt-1 text-ink/90">{project.approach}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-canvas px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
        <p className="font-mono text-lg text-amber">{project.metric}</p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            View live →
          </a>
        )}
        {!project.liveUrl && project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            View repo →
          </a>
        )}
      </div>
    </article>
  );
}
