'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Hero from './Hero'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Languages from './Languages'
import Contact from './Contact'
import ThemeToggle from './ThemeToggle'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['hero', 'experience', 'education', 'skills', 'languages', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <Header activeSection={activeSection} />
      <main>
        <AnimatePresence>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Hero id="hero" />
            <Experience id="experience" />
            <Education id="education" />
            <Skills id="skills" />
            <Languages id="languages" />
            <Contact id="contact" />
          </motion.div>
        </AnimatePresence>
      </main>
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  )
}

