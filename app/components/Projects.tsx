'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, LayoutDashboard, Calendar } from 'lucide-react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'

const projects = [
  { 
    id: 1, 
    title: 'AutoWeb', 
    icon: Calendar,
    description: 'Auto repair shop management system featuring appointment scheduling, admin dashboard, and service management.',
    repoUrl: 'https://github.com/QQumber/Programmaturas-izstr',
    techStack: ['Next.js', 'React', 'PostgreSQL', 'CSS Modules'],
    features: [
      'Calendar-based scheduling',
      'Admin dashboard',
      'Service management',
      'User authentication',
      'Responsive design'
    ]
  },
  { 
    id: 2, 
    title: 'E-commerce Platform', 
    icon: ShoppingCart,
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    techStack: ['Next.js', 'Prisma', 'Stripe', 'TailwindCSS', 'TypeScript'],
    features: [
      'Shopping cart functionality',
      'Secure payment processing',
      'Product management',
      'Order tracking',
      'User accounts'
    ]
  },
  { 
    id: 3, 
    title: 'Social Media Dashboard', 
    icon: LayoutDashboard,
    description: 'Analytics dashboard for social media metrics and engagement tracking.',
    techStack: ['React', 'Redux', 'Chart.js', 'Material-UI', 'Firebase'],
    features: [
      'Real-time analytics',
      'Data visualization',
      'Multi-platform integration',
      'Custom reporting',
      'Performance metrics'
    ]
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon
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
                      className="text-xl font-bold text-neutral-600 dark:text-white w-full"
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                          <Icon className="w-8 h-8 text-primary" />
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
                        {project.features?.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardItem>
                    
                    <CardItem translateZ="100" className="w-full mt-4 space-y-4">
                      <div className="text-xs text-muted-foreground flex flex-wrap gap-2 justify-center">
                        {project.techStack?.map((tech, index) => (
                          <span key={index} className="bg-muted px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="rounded-xl block w-full bg-black dark:bg-white dark:text-black text-white text-sm px-4 py-2 text-center hover:opacity-90 transition-opacity"
                      >
                        Learn More →
                      </a>
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

export default Projects

