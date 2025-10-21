'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Terminal, 
  Database,
  Cpu,
  Network,
  Layout,
  GraduationCap,
  Briefcase,
  User,
  CheckCircle
} from 'lucide-react'

const About = () => {
  const row1 = [
    { name: 'React', icon: Shield },
    { name: 'Next.js', icon: Terminal },
    { name: 'TypeScript', icon: Lock },
    { name: 'Node.js', icon: Network },
    { name: 'Tailwind', icon: Layout },
  ]

  const row2 = [
    { name: 'Spring', icon: Database },
    { name: 'Java', icon: Cpu },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Git', icon: Terminal },
    { name: 'Express', icon: Network }
  ]

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary font-terminal">
            # whoami // SYSTEM_PROFILE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/50 rounded-lg p-6 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold font-terminal">[USER_INFO]::PROFILE</h3>
              </div>
              <ul className="list-none space-y-2 text-muted-foreground font-terminal">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Full-stack developer
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Smart home & automation enthusiast
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Networking and custom automation experience
                </li>
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card/50 rounded-lg p-6 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold font-terminal">[CREDENTIALS]::VERIFIED</h3>
              </div>
              <ul className="list-none space-y-2 text-muted-foreground font-terminal">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Bachelor&apos;s degree in Datorsistēmas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Riga Technical University
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Status: GRADUATED
                </li>
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card/50 rounded-lg p-6 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold font-terminal">[ACCESS_LEVEL]::SENIOR</h3>
              </div>
              <ul className="list-none space-y-2 text-muted-foreground font-terminal">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Academic Projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Client Projects & Private Orders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Personal Portfolio Projects
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-primary font-terminal"
        >
          $ ls /usr/local/stack/
        </motion.h2>
        <div className="flex flex-col gap-4">
          {[row1, row2].map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden w-full">
              <motion.div 
                className="flex gap-4 py-4"
                animate={{
                  x: rowIndex % 2 === 0 ? [0, "-25%"] : ["-25%", 0]
                }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
                style={{
                  width: "max-content"
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {[...row, ...row].map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-card/50 rounded-lg p-4 min-w-[150px] backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold text-card-foreground whitespace-nowrap font-terminal">
                        &gt; {skill.name}
                      </span>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

