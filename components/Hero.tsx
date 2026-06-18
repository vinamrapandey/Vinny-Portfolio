import RoleRotator from "./RoleRotator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[90vh] flex-col items-start justify-center px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-content">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
          Vinamra Pandey
        </p>

        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          <RoleRotator />
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
          I take AI products from blueprint to shipped — alone.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-md bg-accent px-6 py-3 font-medium text-canvas transition-opacity hover:opacity-90"
          >
            See the work
          </a>
          <a
            href="#connect"
            className="rounded-md border border-muted/40 px-6 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
