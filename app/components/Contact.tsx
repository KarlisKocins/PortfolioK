import Reveal from './ui/reveal'

const details = [
  { label: 'Phone', value: '+371 27 090 500', href: 'tel:+37127090500' },
  { label: 'GitHub', value: 'KarlisKocins', href: 'https://github.com/KarlisKocins', external: true },
  {
    label: 'LinkedIn',
    value: 'Kārlis Kociņš',
    href: 'https://www.linkedin.com/in/karlis-kocins-888bb4336/',
    external: true,
  },
  { label: 'X', value: '@kocins36', href: 'https://x.com/kocins36', external: true },
  { label: 'Based in', value: 'Mārupe, Latvia' },
]

const Contact = () => (
  <section id="contact" className="mx-auto max-w-shell scroll-mt-20 px-6 pb-24 pt-20 md:px-8">
    <Reveal>
      <div className="grid grid-cols-1 items-center gap-12 rounded-2xl border bg-surface px-8 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-14">
        <div>
          <h2 className="mb-4 text-pretty text-[28px] font-semibold tracking-[-0.03em] lg:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mb-7 max-w-[44ch] text-pretty text-[17px] leading-[1.6] text-muted">
            Open to full-stack work, freelance projects and collaborating on open source —
            especially anything involving Home Assistant.
          </p>
          <a
            href="mailto:kocins36@gmail.com"
            className="inline-block rounded-[9px] bg-accent px-6 py-3.5 text-[15px] font-medium text-background transition-colors hover:bg-accent-hover"
          >
            kocins36@gmail.com
          </a>
        </div>

        <ul className="border-t border-white/[0.08]">
          {details.map((detail) => (
            <li
              key={detail.label}
              className="flex items-center justify-between gap-4 border-b border-white/[0.08] py-[15px]"
            >
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {detail.label}
              </span>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.external ? '_blank' : undefined}
                  rel={detail.external ? 'noopener noreferrer' : undefined}
                  className="text-[15px] transition-colors hover:text-accent"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="text-[15px]">{detail.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
)

export default Contact
