"use client"
import { useState } from "react"
import type React from "react"
import Link from "next/link"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: "hero", label: "Accueil" },
    { id: "experience", label: "Expérience" },
    { id: "education", label: "Formation" },
    { id: "skills", label: "Compétences" },
    { id: "languages", label: "Langues" },
    { id: "contact", label: "Contact" },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Idrissa Wade
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex space-x-4 ${isMenuOpen ? "block absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md" : "hidden"}`}
          >
            {sections.map((section) => (
              <li key={section.id} className={isMenuOpen ? "border-b border-gray-200 dark:border-gray-700" : ""}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(e, section.id)}
                  className={`block py-2 px-4 text-sm font-medium ${
                    activeSection === section.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors duration-200`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

