export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-[var(--foreground)]">Chaza</h1>
        <div className="flex gap-6 text-sm text-[var(--foreground-secondary)]">
          <a
            href="#projects"
            className="transition-colors hover:text-[var(--accent)]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-[var(--accent)]"
          >
            Contact
          </a>
          <a
            href="https://github.com/chazamohamad"
            target="_blank"
            className="transition-colors hover:text-[var(--accent)]"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
