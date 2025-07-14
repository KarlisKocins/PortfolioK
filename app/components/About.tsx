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
  Layout,
  GraduationCap,
  Briefcase,
  User
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
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                <li>Full-stack developer</li>
                <li>Smart home & automation enthusiast</li>
                <li>Networking and custom automation experience</li>
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                <li>Bachelor's degree in Datorsistēmas</li>
                <li>Riga Technical University</li>
                <li>Graduated</li>
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                <li>Academic Projects</li>
                <li>Client Projects & Private Orders</li>
                <li>Personal Portfolio Projects</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
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

