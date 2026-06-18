import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkGrid from "@/components/WorkGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ContactForm from "@/components/ContactForm";

// TODO: confirm these before launch — placeholders pending real profile URLs.
const SOCIALS = {
  email: "mailto:vinamrapandey22@gmail.com",
  linkedin: "#",
  github: "#",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkGrid />
      <SkillsGrid />

      <section id="connect" className="px-6 py-24 sm:px-10">
        <div className="mx-auto w-full max-w-content">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Connect
          </h2>
          <p className="mt-2 text-muted">
            Open to product, brand, vibe coding, and AI consulting work.
          </p>

          <div className="mt-10 grid gap-12 md:grid-cols-[1fr_280px]">
            <ContactForm />

            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Resume
                </h3>
                <a
                  href={`${basePath}/resume.pdf`}
                  download
                  className="mt-3 inline-block rounded-md border border-muted/40 px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Download résumé
                </a>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Elsewhere
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={SOCIALS.email} className="text-ink hover:text-accent">
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIALS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-accent"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIALS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-accent"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8 sm:px-10">
        <p className="mx-auto w-full max-w-content font-mono text-xs text-muted">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </main>
  );
}
