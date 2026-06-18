const credentials = [
  "B.Tech, Computer Science — Gautam Buddha University (CGPA 8.35)",
  "CAT 2024 — 95.46th percentile",
  "Google Generative AI Specialization",
  "ZEDGE wallpaper portfolio — 300K+ downloads",
];

const openTo = ["Product", "Brand", "Vibe Coding", "AI Consulting"];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-content">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          About
        </h2>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <p className="text-lg leading-relaxed text-muted">
            I started in computer science, then spent years doing freelance
            design and web work before taking a full-stack role at Learning
            Jockey. That path — design instincts paired with engineering
            chops — is what led me to found{" "}
            <span className="text-ink">B6 AI</span>, where I now build AI
            products end to end: brand, frontend, backend, AI integration,
            and deployment, all under one roof.
          </p>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Credentials
            </h3>
            <ul className="mt-4 space-y-3">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent/40 pl-4 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted">
          Open to:{" "}
          {openTo.map((track, i) => (
            <span key={track}>
              <span className="text-accent">{track}</span>
              {i < openTo.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
