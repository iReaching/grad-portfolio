const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/90">
      <div className="container-px max-w-6xl mx-auto flex flex-col gap-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Copyright {currentYear} Andrei De Venecia Rosca - built with care.
        </p>
        <p className="text-slate-400">
          Crafted with{' '}
          <a className="text-sky-300 transition hover:text-sky-200" href="https://vitejs.dev" target="_blank" rel="noreferrer">
            Vite
          </a>
          ,{' '}
          <a className="text-sky-300 transition hover:text-sky-200" href="https://react.dev" target="_blank" rel="noreferrer">
            React
          </a>{' '}
          &{' '}
          <a className="text-sky-300 transition hover:text-sky-200" href="https://tailwindcss.com" target="_blank" rel="noreferrer">
            Tailwind
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
