import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function WorkGrid() {
  return (
    <section id="work" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-content">
        <p className="text-center font-accent text-xl italic text-muted">
          Recent works
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          <span className="text-muted">Products built</span>
          <br />
          <span className="text-ink">end to end.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-sm text-muted">
          Products spanning brand, frontend, backend, AI, and deployment — all
          by one builder.
        </p>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
