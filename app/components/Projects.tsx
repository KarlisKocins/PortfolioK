'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, LayoutDashboard, Calendar } from 'lucide-react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import AnimatedCable from './ui/AnimatedCable'
import { useInView } from 'react-intersection-observer'

const projects = [
  { 
    id: 1, 
    title: 'AutoWeb', 
    icon: Calendar,
    description: 'A modern auto repair shop management system with an informative homepage, booking system, and admin dashboard. Features calendar scheduling, user authentication, service management, and responsive design to streamline workshop operations and enhance customer experience.',
    repoUrl: 'https://github.com/KarlisKocins/AutoWeb',
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
    title: 'GymFlow', 
    icon: ShoppingCart,
    description: 'A modern workout tracking web app that lets users create, log, and analyze custom workouts and routines. Features a comprehensive exercise library, pre-made routines, progress analytics, and visualizations to help users track their fitness journey and achieve their goals.',
    techStack: ['Next.js', 'Prisma', 'TailwindCSS', 'TypeScript'],
    repoUrl: 'https://github.com/KarlisKocins/GymFlow',
    features: [
      'Workout tracking',
      'Progress visualization',
      'Exercise library',
      'Personalized routines',
      'User accounts'
    ],
  },
  { 
    id: 3, 
    title: 'Merger Helper', 
    icon: LayoutDashboard,
    description: 'Decision support tool for evaluating and selecting optimal system integration strategies using multi-criteria analysis.',
    techStack: ['Python', 'Excel'],
    repoUrl: 'https://github.com/KarlisKocins/Integracijas-Lemumu-Pienemsanas-Riks',
    features: [
      'Customizable evaluation criteria and weights',
      'Multiple integration strategy options',
      'Quantitative and qualitative scoring',
      'Automatic normalization and result calculation',
      'Visual analysis with radar and weight diagrams',
      'Detailed comparison tables and reports',
      'Web and desktop interfaces'
    ],
  },
]

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 })
  return (
    <section id="projects" className="py-20 bg-muted relative overflow-hidden" ref={ref}>
      {/* Animated Cable - different color, animates every time in view */}
      {inView && <AnimatedCable color="#a21caf" className="z-0" key={Date.now()} />}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                  <CardBody className="bg-card relative group/card hover:shadow-2xl hover:shadow-black/[0.1] dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-background w-[380px] min-h-[600px] h-auto rounded-xl p-6 flex flex-col justify-between">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white w-full mb-4"
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
                      {project.repoUrl ? (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="rounded-xl block w-full bg-black hover:bg-green-600 dark:bg-white dark:hover:bg-green-600 dark:text-black dark:hover:text-white text-white text-sm px-4 py-2 text-center relative overflow-hidden transition-colors duration-300"
                        >
                          <span className="relative">Learn More →</span>
                        </a>
                      ) : (
                        <div className={`rounded-xl block w-full bg-black dark:bg-white dark:text-black text-white text-sm px-4 py-2 text-center relative transition-colors duration-300 ${
                          project.title === 'GymFlow' 
                            ? 'hover:bg-red-600 dark:hover:bg-red-600' 
                            : 'hover:bg-orange-500 dark:hover:bg-orange-500'
                        } dark:hover:text-white`}>
                          <span className="relative">{project.title === 'GymFlow' ? 'Private' : 'In Progress'}</span>
                        </div>
                      )}
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

