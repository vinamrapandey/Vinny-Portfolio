const services = [
  {
    label: "Strategy",
    title: "Product & Strategy",
    items: [
      "Product Management",
      "Roadmapping",
      "User Research",
      "Market Analysis",
      "Copywriting",
    ],
    dark: false,
  },
  {
    label: "Build",
    title: "Engineering & AI",
    items: [
      "LLMs & Agentic Systems",
      "Prompt Engineering",
      "Python",
      "TypeScript / React / Next.js",
      "Kotlin · PyQt5",
    ],
    dark: true,
  },
  {
    label: "Brand",
    title: "Design & Brand",
    items: [
      "Brand Identity",
      "UI Systems",
      "Figma",
      "Adobe Suite",
      "No-code (Framer)",
    ],
    dark: false,
  },
];

function Check({ dark }: { dark: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-canvas" : "text-ink"}`}
      aria-hidden
    >
      <circle cx="10" cy="10" r="9" className="opacity-15" fill="currentColor" />
      <path
        d="M6 10.2l2.6 2.6L14 7.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-content">
        <p className="text-center font-accent text-xl italic text-muted">
          How I work
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          <span className="text-muted">Let&apos;s build something</span>
          <br />
          <span className="text-ink">great together.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                service.dark
                  ? "border-transparent bg-dark text-canvas"
                  : "border-line bg-surface text-ink"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    service.dark ? "bg-canvas" : "bg-ink"
                  }`}
                />
                <h3 className="font-display text-lg font-semibold">
                  {service.title}
                </h3>
              </div>

              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check dark={service.dark} />
                    <span className={service.dark ? "text-canvas/90" : ""}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <span
                className={`mt-8 font-accent text-2xl italic ${
                  service.dark ? "text-canvas/70" : "text-muted"
                }`}
              >
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
