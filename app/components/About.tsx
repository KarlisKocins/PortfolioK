'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  FileJson, 
  Server, 
  Palette, 
  Globe,
  Database,
  Cpu,
  Box,
  Layout
} from 'lucide-react'

const About = () => {
  const row1 = [
    { name: 'React', icon: Code2 },
    { name: 'Next.js', icon: Globe },
    { name: 'TypeScript', icon: FileJson },
    { name: 'Node.js', icon: Server },
    { name: 'Tailwind', icon: Palette },
  ]

  const row2 = [
    { name: 'Spring', icon: Layout },
    { name: 'Java', icon: Cpu },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Git', icon: Box },
    { name: 'Express', icon: Server }
  ]

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-foreground"
        >
          What I work with
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
                      className="flex items-center gap-2 bg-secondary/50 rounded-lg p-4 min-w-[150px] backdrop-blur-sm"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold text-secondary-foreground whitespace-nowrap">
                        {skill.name}
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

