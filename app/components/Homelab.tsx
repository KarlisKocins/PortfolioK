import Reveal from './ui/reveal'

const areas = [
  {
    title: 'Home Assistant',
    items: [
      'Installed and configured from scratch',
      'Smart switches, lights and sensors integrated',
      'Remote access and mobile notifications',
      'Energy monitoring and optimisation',
    ],
  },
  {
    title: 'Devices & automations',
    items: [
      'Zigbee and Wi-Fi devices paired and tuned',
      'Morning, night and presence-based routines',
      'Motion and door sensors for security',
      'Voice assistant and scene control',
    ],
  },
  {
    title: 'Network',
    badge: 'CompTIA Network+',
    items: [
      'Two managed switches installed and configured',
      'VLAN trunking: internet + IPTV over one cable',
      'Segmentation for security and performance',
      'Switch management, monitoring, troubleshooting',
    ],
  },
  {
    title: 'Add-on development',
    items: [
      'Two published Home Assistant add-ons',
      'Containerised with Docker, supervised install',
      'External APIs bridged into the HA event bus',
      'Vaultwarden and other community add-ons run locally',
    ],
  },
]

const Homelab = () => (
  <section id="homelab" className="mx-auto max-w-shell scroll-mt-20 px-6 pb-8 pt-20 md:px-8">
    <Reveal>
      <h2 className="mb-3 font-mono text-[13px] font-normal uppercase tracking-[0.14em] text-muted">
        Homelab &amp; networking
      </h2>
      <p className="mb-9 max-w-[62ch] text-pretty text-[17px] leading-[1.6] lg:text-[19px]">
        Everything below runs in my own home. It is where I learn the parts of the stack a web
        project alone doesn&apos;t teach.
      </p>
    </Reveal>

    <div className="border-t">
      {areas.map((area, index) => (
        <Reveal key={area.title} delay={0.05 * index}>
          <div className="grid grid-cols-1 gap-4 border-b py-6 md:grid-cols-[210px_1fr] md:gap-10">
            <div className="text-base font-semibold">
              {area.title}
              {area.badge && (
                <div className="mt-1.5 font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-accent">
                  {area.badge}
                </div>
              )}
            </div>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-8">
              {area.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] text-muted">
                  <span className="text-accent">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
)

export default Homelab
