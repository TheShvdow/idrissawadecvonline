"use client"
import { motion } from "framer-motion"
import { GraduationCap, Book, School, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface EducationProps {
  id: string
}

export default function Education({ id }: EducationProps) {
  const education = [
    {
      degree: "Développement Web/Mobile",
      school: "Sonatel Academy",
      period: "Fev 2024 - Nov 2024",
      description: "Formation intensive en développement web et mobile",
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      degree: "Licence Génie Informatique",
      school: "Université Dakar-Bourguiba",
      period: "2018 - 2022",
      description: "Spécialisation en génie logiciel et systèmes d'information",
      icon: <Book className="w-6 h-6 text-green-500" />,
      color: "bg-green-100 dark:bg-green-900",
    },
    {
      degree: "Baccalauréat L2",
      school: "Lycée Cheikh Omar Tall de SAINT-LOUIS",
      period: "2013 - 2016",
      description: "Formation générale avec spécialisation en littérature",
      icon: <School className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-100 dark:bg-purple-900",
    },
    {
      degree: "BFEM",
      school: "CEM ANDRE PEYTAVIN de SAINT-LOUIS",
      period: "2010 - 2013",
      description: "Brevet de Fin d'Études Moyennes",
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      color: "bg-yellow-100 dark:bg-yellow-900",
    },
  ]

  return (
    <section
      id={id}
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 sm:mb-16"
        >
          Parcours Académique
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
              </div>
              <Card className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl">
                <CardContent className="p-0">
                  <div className={`w-12 h-12 rounded-full ${edu.color} flex items-center justify-center mb-4`}>
                    {edu.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-xl mb-1">{edu.degree}</h3>
                  <p className="text-sm text-blue-500 dark:text-blue-400 mb-2">{edu.school}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{edu.period}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

