"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ExperienceProps {
  id: string
}

export default function Experience({ id }: ExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const experiences = [
    {
      title: "Développeur Fullstack",
      company: "SONATEL ACADEMY",
      location: "Dakar, Sénégal",
      period: "Février 2024 - Aujourd'hui",
      description:
        "Développement d'applications web et mobiles innovantes. Participation à des projets d'envergure utilisant les dernières technologies du marché. Collaboration étroite avec les équipes de design et de product management pour livrer des solutions de haute qualité.",
      skills: ["React", "Node.js", "Express", "MongoDB", "GraphQL", "Docker"],
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "Développeur Fullstack (Freelance)",
      company: "ASMARINE CONCEPTS",
      location: "Dakar, Sénégal",
      period: "Mai 2023 - Aujourd'hui",
      description:
        "Création et mise à jour du site ASMARINE CONCEPTS. Optimisation SEO, gestion du contenu et amélioration continue des performances. Implémentation de fonctionnalités personnalisées pour répondre aux besoins spécifiques du client.",
      skills: ["WordPress", "SEO", "PHP", "MySQL", "JavaScript", "CSS3"],
      color: "from-green-400 to-teal-600",
    },
    {
      title: "Technicien Informatique / Réseaux",
      company: "Edcom Services Sarl",
      location: "Dakar - Sénégal",
      period: "Décembre 2016 - Novembre 2019",
      description:
        "Installations et maintenance de réseaux d'entreprise. Configuration et administration de systèmes. Mise en place de solutions de sécurité et de systèmes de vidéosurveillance. Formation des utilisateurs sur les bonnes pratiques de sécurité informatique.",
      skills: ["Réseaux", "Sécurité", "Administration système", "CCTV", "Support technique"],
      color: "from-yellow-400 to-orange-600",
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

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
          Expérience Professionnelle
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-700 dark:text-gray-300 mb-4"
                        >
                          {exp.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(index)}
                      className="w-full flex items-center justify-center"
                    >
                      {expandedIndex === index ? (
                        <>
                          Moins de détails
                          <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Plus de détails
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

