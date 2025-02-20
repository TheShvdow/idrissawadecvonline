"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface LanguagesProps {
  id: string
}

export default function Languages({ id }: LanguagesProps) {
  const languages = [
    { name: "Wolof", level: "Maternelle", percentage: 100, color: "from-blue-500 to-blue-600" },
    { name: "Français", level: "Courant", percentage: 100, color: "from-blue-500 to-blue-600" },
    { name: "Anglais", level: "Professionnel", percentage: 80, color: "from-green-500 to-green-600" },
    { name: "Arabe", level: "Notions", percentage: 30, color: "from-yellow-500 to-yellow-600" },
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
          Langues
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-white">{lang.name}</h3>
                    <span className="text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-300">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 sm:h-6 dark:bg-gray-700 overflow-hidden shadow-inner">
                    <motion.div
                      className={`h-4 sm:h-6 rounded-full bg-gradient-to-r ${lang.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      style={{
                        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
                        transform: "perspective(1000px) rotateX(5deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
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

