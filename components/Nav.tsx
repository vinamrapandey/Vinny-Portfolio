const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-content items-center justify-between rounded-full border border-line bg-surface/80 py-2.5 pl-5 pr-2.5 backdrop-blur-md">
        <a
          href="#hero"
          className="font-display text-sm font-semibold tracking-tight"
        >
          Vinamra Pandey
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
        >
          Start a project
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>
      </nav>
    </header>
  );
}
