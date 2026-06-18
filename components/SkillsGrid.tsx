const skillCategories = [
  {
    label: "AI/ML",
    skills: ["LLMs", "Prompt Engineering", "Agentic Systems", "Gemini Vision API"],
  },
  {
    label: "Engineering",
    skills: ["Python", "TypeScript/React", "Next.js", "Kotlin", "PyQt5"],
  },
  {
    label: "Design/Brand",
    skills: ["Figma", "Adobe Suite", "Brand Identity", "UI Systems"],
  },
  {
    label: "Tools",
    skills: ["Git", "Cloudflare", "Vercel", "Streamlit"],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-content">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Skills
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-surface px-3 py-1.5 text-sm text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
