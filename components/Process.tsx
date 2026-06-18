const steps = [
  {
    ordinal: "The first one",
    icon: "◇",
    title: "Discovery & Strategy",
    body: "Understand the problem, the users, and what 'shipped' actually means before a line of code is written.",
  },
  {
    ordinal: "Second",
    icon: "✳",
    title: "Design",
    body: "Brand, UI, and flows designed together — clear, fast, and memorable, not bolted on at the end.",
  },
  {
    ordinal: "Third",
    icon: "⬡",
    title: "Build & Ship",
    body: "Frontend, backend, AI integration, and deployment — all under one roof, all by one builder.",
  },
  {
    ordinal: "Fourth",
    icon: "↻",
    title: "Iterate",
    body: "Measure against real usage, refine, and keep shipping so the product compounds over time.",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-content">
        <p className="text-center font-accent text-xl italic text-muted">
          Approach
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          <span className="text-muted">A four-step process</span>
          <br />
          <span className="text-ink">built for results.</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-line bg-surface p-7"
            >
              <span className="absolute right-6 top-6 font-accent text-xl italic text-muted">
                {step.ordinal}
              </span>
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-lg text-canvas"
              >
                {step.icon}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
