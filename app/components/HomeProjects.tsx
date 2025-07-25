'use client'

import { motion } from 'framer-motion'
import { Home, Lightbulb, ToggleLeft, Server } from 'lucide-react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import { useInView } from 'react-intersection-observer'
import AnimatedCable from './ui/AnimatedCable'

const homeProjects = [
  {
    id: 1,
    title: 'Home Automation with Home Assistant',
    icon: Home,
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
    title: 'Smart Devices & Practical Work',
    icon: Lightbulb,
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
    icon: ToggleLeft,
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
    icon: Server,
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
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          Home Automation & Networking Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {homeProjects.map((project) => {
            const Icon = project.icon
            // Assign a unique hover color and background for each project
            let hoverColor = '';
            let hoverBg = '';
            if (project.icon === Home) {
              hoverColor = 'group-hover/card:text-sky-500';
              hoverBg = 'group-hover/card:bg-sky-100 dark:group-hover/card:bg-sky-900';
            }
            if (project.icon === Lightbulb) {
              hoverColor = 'group-hover/card:text-yellow-400';
              hoverBg = 'group-hover/card:bg-yellow-100 dark:group-hover/card:bg-yellow-900';
            }
            if (project.icon === ToggleLeft) {
              hoverColor = 'group-hover/card:text-pink-500';
              hoverBg = 'group-hover/card:bg-pink-100 dark:group-hover/card:bg-pink-900';
            }
            if (project.icon === Server) {
              hoverColor = 'group-hover/card:text-purple-500';
              hoverBg = 'group-hover/card:bg-purple-100 dark:group-hover/card:bg-purple-900';
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
                  <CardBody className="bg-card relative group/card hover:shadow-2xl hover:shadow-black/[0.1] dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-background w-[380px] h-auto rounded-xl p-6">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white w-full mb-4"
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className={`w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full transition-colors duration-300 ${hoverBg}`}>
                          <Icon className={`w-8 h-8 text-primary transition-colors duration-300 ${hoverColor}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="mt-4"
                    >
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        {project.details.map((detail, index) => (
                          <li key={index} className="flex items-center">
                            <span className="mr-2">•</span>
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