export function SocialLinks() {
  const links = [
    { href: 'https://linkedin.com/in/andrei-rosca-7666aa369/', label: 'LinkedIn' },
    { href: 'https://github.com/iReaching', label: 'GitHub' },
    { href: 'https://facebook.com/Rosca.Andrei.D/', label: 'Facebook' },
  ]
  return (
    <div className="flex flex-wrap gap-4 text-sm text-slate-300">
      {links.map((l) => (
        <a
          key={l.href}
          className="font-medium text-slate-200 underline-offset-4 transition hover:text-white hover:underline"
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}
