import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import { SocialLinks } from '@/components/SocialLinks'
import { projects } from '@/data/projects'
import { coreSkills, tools } from '@/data/skills'

type Metric = {
  label: string
  value: string
  description: string
}

type Experience = {
  title: string
  organisation: string
  timeframe: string
  description: string
  bullets: string[]
}

const metrics: Metric[] = [
  {
    label: 'Capstone showcased',
    value: '1',
    description: 'Led end-to-end development of a condo management platform used by multiple stakeholders.',
  },
  {
    label: 'Hours troubleshooting',
    value: '250+',
    description: 'Fielding hardware and software issues for classmates, family, and capstone teammates.',
  },
]

const experiences: Experience[] = [
  {
    title: 'Capstone Leader & Fullstack Developer',
    organisation: 'Pamantasan ng Lungsod ng Valenzuela',
    timeframe: '2025 - 4-month sprint',
    description:
      'Designed, built, and maintained CondoLink - a community management platform that centralises bookings, maintenance, and resident communications.',
    bullets: [
      'Drove requirements with property staff, translating pain points into user-friendly flows.',
      'Implemented responsive dashboards with React, JavaScript, and Tailwind; integrated PHP APIs.',
      'Set up MySQL schema.',
    ],
  },
  {
    title: 'IT Support & Device Specialist',
    organisation: 'Freelance / Campus Requests',
    timeframe: '2023 - Present',
    description:
      'Provides on-call troubleshooting for personal computers, printers, and campus lab equipment within the local community.',
    bullets: [
      'Diagnoses and resolves OS, connectivity, and driver issues under tight time constraints.',
      'Builds and reassembles custom PCs, validating thermals and performance with stress testing.',
      'Documents fixes to shorten repeat requests and to guide classmates through self-service.',
    ],
  },
]

const contactLinks = [
  { label: 'Email', value: '09roscaandrei@gmail.com', href: 'mailto:09roscaandrei@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/andrei-rosca-7666aa369', href: 'https://linkedin.com/in/andrei-rosca-7666aa369/' },
  { label: 'GitHub', value: 'github.com/iReaching', href: 'https://github.com/iReaching' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HighlightsSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
      <div className="container-px max-w-6xl mx-auto py-24 sm:py-32 grid gap-14 lg:grid-cols-[2fr,1fr] items-center relative">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-sky-300">
            Recent IT Graduate
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            I help communities run smoother with reliable software and friendly support.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            I'm Andrei Rosca - a builder who loves the blend of code and hands-on troubleshooting.
            From standing up management dashboards to fixing classroom hardware, I make sure people can rely
            on their tools when it matters.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Explore projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
            >
              Download resume
            </a>
          </div>
          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>
        <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/30 via-slate-900 to-blue-900/60 sm:h-72 sm:w-72">
          <div className="h-52 w-52 overflow-hidden rounded-full border border-white/10 sm:h-60 sm:w-60">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Portrait of Andrei Rosca"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function HighlightsSection() {
  return (
    <Section id="impact" title="Impact snapshots">
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-400/40 hover:bg-sky-500/10"
          >
            <p className="text-sm uppercase tracking-wide text-sky-300/90">{metric.label}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{metric.value}</p>
            <p className="mt-3 text-sm text-slate-300">{metric.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ExperienceSection() {
  return (
    <Section id="experience" title="Experience at a glance">
      <div className="space-y-8">
        {experiences.map((role) => (
          <article
            key={role.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-[0_30px_70px_-45px_rgba(56,189,248,0.45)]"
          >
            <header className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                <p className="text-sm text-slate-300/90">{role.organisation}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{role.timeframe}</p>
            </header>
            <p className="mt-4 text-slate-300">{role.description}</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
              {role.bullets.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-3 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

function ProjectsSection() {
  return (
    <Section id="projects" title="Projects that taught me the most">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-sky-400/40 hover:bg-slate-900/90"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/0 transition group-hover:via-sky-500/8 group-hover:to-sky-500/15" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{project.year}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm text-sky-300/90">{project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-200/80">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-700/70 bg-slate-950/60 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 transition hover:text-sky-200"
                  >
                    Visit live site -&gt;
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 transition hover:text-slate-200"
                  >
                    View source -&gt;
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function SkillsSection() {
  return (
    <Section id="skills" title="Tooling & strengths">
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          {coreSkills.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{group.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 rounded-full border border-slate-700/60 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    <span>{skill.name}</span>
                    {skill.level && <span className="ml-auto text-xs uppercase tracking-wide text-slate-400">{skill.level}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h3 className="text-lg font-semibold text-white">Toolbelt</h3>
          <p className="mt-2 text-sm text-slate-300">
            Platforms and services I reach for quickly when shipping and supporting projects.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-200">
            {tools.map((tool) => (
              <li key={tool} className="rounded-full border border-slate-700/60 px-3 py-2">
                {tool}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}

function ContactSection() {
  return (
    <Section id="contact" title="Let's collaborate">
      <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-slate-900/80 to-slate-950 p-6">
          <h3 className="text-xl font-semibold text-white">Tell me what you're building</h3>
          <p className="mt-3 text-sm text-slate-200">
            I'm looking for junior developer roles, IT support positions, or hybrid roles that mix both. I love fast-moving teams
            that value learning in public. Drop me a note with what you need and I'll reply within the day.
          </p>
          <a
            href="mailto:09roscaandrei@gmail.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Email me a brief
          </a>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h3 className="text-lg font-semibold text-white">Quick links</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-200">
            {contactLinks.map((item) => (
              <li key={item.label} className="flex flex-col gap-1">
                <span className="uppercase tracking-[0.2em] text-xs text-slate-500">{item.label}</span>
                <a href={item.href} className="text-sky-300 transition hover:text-sky-200">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
