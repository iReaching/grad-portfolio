import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  title?: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="container-px max-w-6xl mx-auto scroll-mt-24 py-16 sm:py-24">
      {title && (
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
