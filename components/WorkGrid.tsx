import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function WorkGrid() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-content">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Work
        </h2>
        <p className="mt-2 text-muted">
          Four shipped products. Every layer, one builder.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
