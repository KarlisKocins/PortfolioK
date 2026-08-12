import Reveal from './ui/reveal'

const stats = [
  { value: '11', label: 'public repositories' },
  { value: '2', label: 'published Home Assistant add-ons' },
  { value: '2', label: 'managed switches, VLAN trunked' },
  { value: 'Network+', label: 'CompTIA certified · BSc from RTU' },
]

/** Two columns on small screens, four across from `lg` — with dividers only between cells. */
const cellBorders = (index: number, total: number) =>
  [
    index % 2 === 0 ? 'border-r' : '',
    index < total - 2 ? 'border-b' : '',
    'lg:border-b-0',
    index < total - 1 ? 'lg:border-r' : 'lg:border-r-0',
    index === 0 ? 'lg:pl-0' : '',
    index === total - 1 ? 'lg:pr-0' : '',
  ].join(' ')

const Stats = () => (
  <section className="border-y">
    <Reveal>
      <div className="mx-auto grid max-w-shell grid-cols-2 px-6 md:px-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`border-white/[0.07] px-4 py-[30px] sm:px-7 ${cellBorders(index, stats.length)}`}
          >
            <div className="mb-1.5 text-[26px] font-semibold tracking-[-0.02em] sm:text-[32px]">
              {stat.value}
            </div>
            <div className="text-[13px] text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
)

export default Stats
