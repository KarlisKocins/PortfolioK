import Reveal from './ui/reveal'

const featured = {
  href: 'https://github.com/KarlisKocins/homeassistant-addon-rustplusplus',
  kind: 'Home Assistant add-on',
  stars: '★ 4',
  title: 'rustplusplus',
  description:
    'A Home Assistant add-on that bridges the Rust+ companion app to Discord, with quality-of-life features layered on top. Packaged as a container so it installs like any other add-on.',
  tech: ['JavaScript', 'Docker', 'Home Assistant'],
  highlights: [
    'Rust+ events pushed into Discord channels',
    'Smart-device control from in-game to HA',
    'Runs as a supervised container add-on',
    'Most-starred repo on my profile',
  ],
}

const projects = [
  {
    href: 'https://github.com/KarlisKocins/tarkov-raidbrief',
    kind: 'Home Assistant add-on',
    title: 'tarkov-raidbrief',
    description:
      'A per-map raid brief for Escape from Tarkov, built from live TarkovTracker progress: what to carry in, which keys you need, what to bring out and what to do there.',
    tech: ['Python', 'Home Assistant'],
  },
  {
    href: 'https://github.com/KarlisKocins/AutoWeb',
    kind: 'Web application · in progress',
    title: 'AutoWeb',
    description:
      'Booking and management for car repair workshops: calendar-based scheduling, service management, user accounts and an admin dashboard behind it.',
    tech: ['Next.js', 'React', 'PostgreSQL'],
  },
  {
    href: 'https://github.com/KarlisKocins/Integracijas-Lemumu-Pienemsanas-Riks',
    kind: 'Decision tool · thesis work',
    title: 'Integration Decision Tool',
    description:
      'Weighted multi-criteria analysis for choosing a system integration strategy — custom criteria and weights, automatic normalisation, radar and weight charts, comparison reports.',
    tech: ['Python', 'Flask', 'NumPy'],
  },
  {
    href: 'https://github.com/KarlisKocins/BackupSimulator',
    kind: 'Teaching tool',
    title: 'BackupSimulator',
    description:
      'A browser-based simulator for comparing backup strategies — full, incremental and differential — and seeing what each costs in time and storage.',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
]

const cardClasses =
  'h-full rounded-[14px] border bg-surface transition-colors hover:border-accent/45 hover:bg-surface-hover'

const TechChip = ({ children }: { children: string }) => (
  <span className="rounded-md border border-white/[0.12] px-2.5 py-1 font-mono text-xs text-muted">
    {children}
  </span>
)

const Projects = () => (
  <section id="work" className="mx-auto max-w-shell scroll-mt-20 px-6 pb-8 pt-[88px] md:px-8">
    <Reveal>
      <div className="mb-9 flex items-baseline justify-between gap-6">
        <h2 className="font-mono text-[13px] font-normal uppercase tracking-[0.14em] text-muted">
          Selected work
        </h2>
        <a
          href="https://github.com/KarlisKocins?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          All repositories →
        </a>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Reveal className="sm:col-span-2">
        <a href={featured.href} target="_blank" rel="noopener noreferrer" className={`${cardClasses} grid grid-cols-1 gap-8 px-8 py-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-9 lg:py-[34px]`}>
          <div>
            <div className="mb-3.5 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                {featured.kind}
              </span>
              <span className="font-mono text-[11px] text-muted">{featured.stars}</span>
            </div>
            <h3 className="mb-3.5 text-2xl font-semibold tracking-[-0.02em] lg:text-[27px]">
              {featured.title}
            </h3>
            <p className="mb-[22px] text-pretty text-[15px] leading-[1.65] text-muted">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map((tech) => (
                <TechChip key={tech}>{tech}</TechChip>
              ))}
            </div>
          </div>
          <ul className="flex flex-col gap-3 self-center border-t pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            {featured.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm text-muted">
                <span className="text-accent">→</span>
                {highlight}
              </li>
            ))}
          </ul>
        </a>
      </Reveal>

      {projects.map((project, index) => (
        <Reveal key={project.href} delay={0.05 * (index % 2)}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardClasses} flex flex-col px-8 py-[30px]`}
          >
            <span className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
              {project.kind}
            </span>
            <h3 className="mb-3 text-[22px] font-semibold tracking-[-0.02em]">{project.title}</h3>
            <p className="mb-[22px] flex-1 text-pretty text-[15px] leading-[1.65] text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechChip key={tech}>{tech}</TechChip>
              ))}
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
)

export default Projects
