"use client"
import { motion } from "framer-motion"
import {
  FaPhp,
  FaNodeJs,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaJs,
  FaMobile,
  FaDocker,
  FaGit,
  FaGithub,
} from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiDart,
  SiVercel,
  SiHeroku,
  SiRender,
} from "react-icons/si"
import { SiNeo4J, SiMongodb, SiPrisma, SiZod } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { RiNextjsFill } from "react-icons/ri"
import { TbBrandReactNative } from "react-icons/tb"

interface SkillsProps {
  id: string
}

export default function Skills({ id }: SkillsProps) {
  const skills = [
    {
      category: "Backend",
      items: [
        { name: "PHP", icon: <FaPhp className="text-indigo-600" />, description: "Langage de script côté serveur" },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" />,
          description: "Environnement d'exécution JavaScript côté serveur",
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-300" />,
          description: "Framework web rapide et minimaliste pour Node.js",
        },
        {
          name: "Laravel",
          icon: <FaLaravel className="text-red-600" />,
          description: "Framework PHP pour le développement web",
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-orange-600" />,
          description: "Langages de balisage pour le web",
        },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, description: "Langage de style pour le web" },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-cyan-500" />,
          description: "Framework CSS utilitaire",
        },
        {
          name: "React",
          icon: <FaReact className="text-blue-500" />,
          description: "Bibliothèque JavaScript pour construire des interfaces utilisateur",
        },
        {
          name: "Angular",
          icon: <FaAngular className="text-red-600" />,
          description: "Framework pour la création d'applications web",
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500" />,
          description: "Langage de programmation pour le web",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          description: "Surensemble typé de JavaScript",
        },
        { name: "Next/js", icon: <RiNextjsFill />, description: "Framework fullstack de React" },
      ],
    },
    {
      category: "Base de données",
      items: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-700" />,
          description: "Système de gestion de base de données relationnelle",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-600" />,
          description: "Système de gestion de base de données relationnelle open-source",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-500" />,
          description: "Plateforme de développement d'applications mobiles et web",
        },
        {
          name: "Neon",
          icon: <SiNeo4J className="text-green-500" />,
          description: "Base de données PostgreSQL serverless",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
          description: "Base de données NoSQL orientée documents",
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="text-blue-500" />,
          description: "ORM moderne pour Node.js et TypeScript",
        },
        {
          name: "Zod",
          icon: <SiZod className="text-blue-600" />,
          description: "Bibliothèque de validation de schéma TypeScript-first",
        },
      ],
    },
    {
      category: "Mobile",
      items: [
        {
          name: "Dart",
          icon: <SiDart className="text-blue-500" />,
          description: "Langage de programmation optimisé pour le développement multi-plateforme",
        },
        {
          name: "Flutter",
          icon: <SiFlutter className="text-cyan-500" />,
          description: "Framework UI pour créer des applications natives multiplateformes",
        },
        {
          name: "React Native",
          icon: <TbBrandReactNative className="text-cyan-500" />,
          description: "Framework UI pour creer des application mobile cross-plateform nativement",
        },
        {
          name: "Mobile UI/UX",
          icon: <FaMobile className="text-gray-300" />,
          description: "Conception d'interfaces utilisateur pour applications mobiles",
        },
      ],
    },
    {
      category: "Déploiement",
      items: [
        {
          name: "Docker",
          icon: <FaDocker className="text-blue-600" />,
          description: "Plateforme de conteneurisation pour les applications",
        },
        {
          name: "Git",
          icon: <FaGit className="text-orange-600" />,
          description: "Système de contrôle de version distribué",
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-800" />,
          description: "Plateforme de développement collaboratif",
        },
        {
          name: "CI/CD",
          icon: <FaGithub className="text-green-600" />,
          description: "Intégration continue et déploiement continu",
        },
        {
          name: "Vercel",
          icon: <SiVercel className="text-black" />,
          description: "Plateforme de déploiement pour les applications web statiques et dynamiques",
        },
        {
          name: "Render",
          icon: <SiRender className="text-blue-500" />,
          description: "Plateforme cloud pour héberger des applications web",
        },
        {
          name: "Heroku",
          icon: <SiHeroku className="text-purple-600" />,
          description: "Plateforme cloud pour déployer, gérer et faire évoluer des applications",
        },
      ],
    },
  ]

  return (
    <section
      id={id}
      className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-800 dark:to-purple-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12"
        >
          Compétences
        </motion.h2>
        <TooltipProvider>
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
                {category.items.map((skill, skillIndex) => (
                  <Tooltip key={skillIndex}>
                    <TooltipTrigger>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          duration: 0.9,
                          delay: (categoryIndex * category.items.length + skillIndex) * 0.05,
                        }}
                        className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg max-w-xs">
                      <p className="font-semibold text-gray-800 dark:text-white mb-1">{skill.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </TooltipProvider>
      </div>
    </section>
  )
}

