const credentials = [
  "B.Tech, Computer Science — Gautam Buddha University (CGPA 8.35)",
  "CAT 2024 — 95.46th percentile",
  "Google Generative AI Specialization",
  "ZEDGE wallpaper portfolio — 300K+ downloads",
];

const openTo = ["Product", "Brand", "Vibe Coding", "AI Consulting"];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-content">
        <p className="font-accent text-xl italic text-muted">A little about me</p>

        <div className="mt-6 grid gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
          <div>
            <h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
              Hi.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I started in computer science, then spent years doing freelance
                design and web work before taking a full-stack role at Learning
                Jockey. That path — design instincts paired with engineering
                chops — is what led me to found{" "}
                <span className="text-ink">B6 AI</span>.
              </p>
              <p>
                There I build AI products end to end: brand, frontend, backend,
                AI integration, and deployment, all under one roof. One person,
                every layer — from the first blueprint to the shipped product.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
            >
              Say hi
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>

          {/* Right column stands in for the inspiration's photo — credentials instead. */}
          <div className="rounded-3xl border border-line bg-surface p-7">
            <p className="font-accent text-2xl italic text-ink">
              Product · Brand · AI · Code
            </p>
            <h3 className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Credentials
            </h3>
            <ul className="mt-4 space-y-3">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-ink/15 pl-4 text-sm leading-relaxed text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Open to
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {openTo.map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-line px-3 py-1 text-sm text-ink"
                >
                  {track}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
