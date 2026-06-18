import { projects } from "@/data/projects";

export default function LogoMarquee() {
  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const items = [...projects, ...projects];

  return (
    <section
      aria-label="Products"
      className="overflow-hidden border-y border-line bg-surface/40 py-5"
    >
      <div className="flex w-max animate-marquee gap-4 px-2">
        {items.map((project, i) => (
          <div
            key={`${project.slug}-${i}`}
            className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-6 py-4"
          >
            <span
              aria-hidden
              className="h-8 w-8 shrink-0 rounded-xl"
              style={{
                backgroundImage: `linear-gradient(150deg, ${project.color}, #111)`,
              }}
            />
            <span className="whitespace-nowrap font-display text-lg font-semibold">
              {project.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
