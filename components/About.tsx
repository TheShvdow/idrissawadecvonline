'use client'
import { motion } from 'framer-motion'

interface AboutProps {
  id: string
}

export default function About({ id }: AboutProps) {
  return (
    <section id={id} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          À propos de moi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto"
        >
          Développeur full-stack avec expertise en PHP, Node.js, React et Laravel. 
          Spécialisé dans la création d'applications web performantes et la résolution 
          de problèmes complexes. Expérience en gestion de projets et en collaboration 
          avec des équipes techniques. Adaptable et engagé dans l'apprentissage continu 
          des technologies modernes.
        </motion.p>
      </div>
    </section>
  )
}

