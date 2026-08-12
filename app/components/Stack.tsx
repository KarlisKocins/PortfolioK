import Reveal from './ui/reveal'

const marqueeRows = [
  {
    words: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Linux', 'Home Assistant'],
    className: 'animate-drift-l text-white/[0.05]',
  },
  {
    words: ['Python', 'Flask', 'Tailwind', 'Prisma', 'Zigbee', 'VLAN', 'Bash', 'GitHub Actions'],
    className: 'animate-drift-r text-accent/[0.055]',
  },
  {
    words: ['JavaScript', 'Vite', 'Radix UI', 'NumPy', 'Vercel', 'Git', 'Framer Motion', 'Network+'],
    className: 'animate-drift-l-slow text-white/[0.04]',
  },
]

const groups = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'HTML & CSS', 'Bash'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Radix UI · Vite'] },
  { title: 'Backend & data', items: ['Node.js', 'PostgreSQL', 'Prisma', 'Flask', 'NumPy'] },
  { title: 'Infrastructure', items: ['Docker', 'Linux', 'Git · GitHub Actions', 'Vercel', 'Home Assistant'] },
]

const Stack = () => (
  <section id="stack" className="relative scroll-mt-20 overflow-hidden">
    <div
      aria-hidden="true"
      className="mask-edges pointer-events-none absolute inset-0 flex flex-col justify-center gap-6 opacity-50"
    >
      {marqueeRows.map((row) => (
        <div
          key={row.words[0]}
          className={`flex w-max gap-[52px] whitespace-nowrap font-mono text-[44px] tracking-[-0.02em] ${row.className}`}
        >
          {/* Duplicated so the -50% translate loops seamlessly. */}
          {[...row.words, ...row.words].map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </div>
      ))}
    </div>

    <div className="relative mx-auto max-w-shell px-6 pb-8 pt-20 md:px-8">
      <Reveal>
        <h2 className="mb-9 font-mono text-[13px] font-normal uppercase tracking-[0.14em] text-muted">
          Stack
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, index) => (
          <Reveal key={group.title} delay={0.05 * index}>
            <div className="h-full rounded-[14px] border bg-surface/70 px-6 py-[26px] backdrop-blur-[3px]">
              <div className="mb-[18px] text-[15px] font-semibold">{group.title}</div>
              <ul className="flex flex-col gap-2.5 font-mono text-[13px] text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Stack
