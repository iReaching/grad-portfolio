const navLinks = [
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="container-px max-w-6xl mx-auto flex h-16 items-center justify-between gap-4">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200">
          Andrei Rosca
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium tracking-wide text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="flex flex-1 items-center justify-end gap-3 text-[12px] uppercase tracking-[0.35em] text-slate-500 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-sky-500/60 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200 transition hover:border-sky-400/80 hover:bg-sky-500/20 sm:inline-flex"
        >
          Let's talk
        </a>
      </div>
    </header>
  )
}
