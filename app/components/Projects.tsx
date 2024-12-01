'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, LayoutDashboard, Calendar } from 'lucide-react'

const projects = [
  { 
    id: 1, 
    title: 'AutoWeb', 
    icon: Calendar,
    description: 'An auto repair shop appointment system with scheduling, service tracking, and customer management.'
  },
  { 
    id: 2, 
    title: 'E-commerce Platform', 
    icon: ShoppingCart,
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.'
  },
  { 
    id: 3, 
    title: 'Social Media Dashboard', 
    icon: LayoutDashboard,
    description: 'Analytics dashboard for social media metrics and engagement tracking.'
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

