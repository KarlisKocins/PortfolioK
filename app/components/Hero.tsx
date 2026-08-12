import Reveal from './ui/reveal'

const statusRows = [
  {
    label: 'Currently building',
    value: (
      <>
        <a
          href="https://github.com/KarlisKocins/AutoWeb"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-accent/40 transition-colors hover:text-accent"
        >
          AutoWeb
        </a>{' '}
        — booking system for car workshops
      </>
    ),
  },
  { label: 'Core stack', value: 'Next.js · TypeScript · Node.js · PostgreSQL' },
  { label: 'Hardware side', value: 'Home Assistant · Zigbee · VLANs · Docker' },
  { label: 'Certified', value: 'CompTIA Network+' },
  { label: 'Education', value: 'BSc Datorsistēmas, Riga Technical University' },
]

const Hero = () => (
  <section
    id="top"
    className="mx-auto grid max-w-shell scroll-mt-20 grid-cols-1 items-start gap-14 px-6 pb-16 pt-20 md:px-8 lg:grid-cols-[1.35fr_0.95fr] lg:gap-[72px] lg:pb-[88px] lg:pt-[104px]"
  >
    <Reveal>
      <div className="mb-7 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
        Mārupe, Latvia · UTC+3
      </div>

      <h1 className="mb-7 text-pretty text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-[60px]">
        I build web apps end to end — and the parts that touch real hardware.
      </h1>

      <p className="mb-10 max-w-[56ch] text-pretty text-[17px] leading-[1.6] text-muted lg:text-[19px]">
        Kārlis Kociņš, full-stack developer. Next.js, TypeScript and PostgreSQL on the software
        side; Home Assistant, Zigbee devices and managed switches on the other. I like projects
        where the two meet.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-[9px] bg-accent px-[22px] py-3 text-[15px] font-medium text-background transition-colors hover:bg-accent-hover"
        >
          See selected work
        </a>
        <a
          href="https://github.com/KarlisKocins"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-[9px] border border-white/[0.14] px-[22px] py-3 text-[15px] font-medium transition-colors hover:border-white/[0.35]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1.1-.8 1.7-.1.6-.1 1.3 0 1.9v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          GitHub
        </a>
      </div>
    </Reveal>

    <Reveal delay={0.1} className="lg:mt-2">
      <div className="overflow-hidden rounded-[14px] border bg-surface">
        <div className="flex justify-between border-b px-[18px] py-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <span>Status</span>
          <span className="text-accent">Available</span>
        </div>
        <dl className="px-[18px] pb-[18px] pt-1.5">
          {statusRows.map((row, index) => (
            <div
              key={row.label}
              className={
                index === statusRows.length - 1
                  ? 'pb-1 pt-3.5'
                  : 'border-b border-white/[0.06] py-3.5'
              }
            >
              <dt className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                {row.label}
              </dt>
              <dd className="text-[15px]">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  </section>
)

export default Hero
