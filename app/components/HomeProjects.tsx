'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Terminal, Network } from 'lucide-react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import { useInView } from 'react-intersection-observer'
import AnimatedCable from './ui/AnimatedCable'

const homeProjects = [
  {
    id: 1,
    title: 'Lab Home Assistant',
    icon: Shield,
    description: 'Installed and configured Home Assistant to control and automate various smart devices throughout my home.',
    details: [
      'Integrated smart switches, lights, and sensors',
      'Created automations for daily routines (e.g., lights on at sunset, notifications for open windows)',
      'Remote access and mobile notifications',
      'Energy monitoring and optimization',
    ],
  },
  {
    id: 2,
    title: 'Smart Practical Work',
    icon: Lock,
    description: 'Hands-on experience with a variety of smart appliances, switches, lights, and sensors.',
    details: [
      'Configured Zigbee and Wi-Fi devices',
      'Automated lighting and climate control',
      'Enhanced home security with motion and door sensors',
      'Voice assistant integration',
    ],
  },
  {
    id: 3,
    title: 'Custom Automations',
    icon: Terminal,
    description: 'Developed custom automations to simplify everyday tasks and improve comfort.',
    details: [
      'Automated morning and night routines',
      'Presence-based lighting and heating',
      'Smart notifications for unusual activity',
      'Scene control for entertainment and relaxation',
    ],
  },
  {
    id: 4,
    title: 'Home Networking & VLANs',
    icon: Network,
    description: 'Installed and configured two managed switches with VLAN trunking to optimize home network performance.',
    details: [
      'Set up VLAN trunking to pass both internet and IPTV through a single cable to another room',
      'Segmented network for security and performance',
      'Configured switch management and monitoring',
      'Experience with troubleshooting and optimizing home network',
    ],
  },
]

const HomeProjects = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 })
  return (
    <section id="home-projects" className="py-20 bg-muted relative overflow-hidden" ref={ref}>
      {/* Animated Cable - only show when in view, animates every time */}
      {inView && <AnimatedCable className="z-0" key={Date.now()} />}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-primary font-terminal"
        >
          # ./homelab.sh --list // NETWORK_INFRASTRUCTURE
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {homeProjects.map((project) => {
            const Icon = project.icon
            // Assign a unique hover color and background for each project
            let hoverColor = '';
            let hoverBg = '';
            if (project.icon === Shield) {
              hoverColor = 'group-hover/card:text-primary';
              hoverBg = 'group-hover/card:bg-primary/10';
            }
            if (project.icon === Lock) {
              hoverColor = 'group-hover/card:text-primary';
              hoverBg = 'group-hover/card:bg-primary/10';
            }
            if (project.icon === Terminal) {
              hoverColor = 'group-hover/card:text-primary';
              hoverBg = 'group-hover/card:bg-primary/10';
            }
            if (project.icon === Network) {
              hoverColor = 'group-hover/card:text-primary';
              hoverBg = 'group-hover/card:bg-primary/10';
            }
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <CardContainer containerClassName="py-0">
                  <CardBody className="bg-card relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] dark:bg-background w-[380px] h-auto rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white w-full mb-4"
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className={`w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full transition-colors duration-300 border border-primary/20 ${hoverBg}`}>
                          <Icon className={`w-8 h-8 text-primary transition-colors duration-300 ${hoverColor}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground font-terminal">
                          [{project.title.split(' ')[0].toUpperCase()}]::{project.title.split(' ').slice(1).join('_').toUpperCase()}
                        </h3>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 font-terminal"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="mt-4"
                    >
                      <ul className="text-sm space-y-2 text-muted-foreground font-terminal">
                        {project.details.map((detail, index) => (
                          <li key={index} className="flex items-center">
                            <span className="mr-2 text-primary">&gt;&gt;</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeProjects