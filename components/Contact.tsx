"use client"
import { motion } from "framer-motion"
import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ContactProps {
  id: string
}

export default function Contact({ id }: ContactProps) {
  return (
    <section
      id={id}
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-800 dark:to-purple-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12"
        >
          Contactez-moi
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <a
                      href="mailto:derisswvde@gmail.com"
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      derisswvde@gmail.com
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <a
                      href="tel:+221781556228"
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      +221 78 155 62 28
                    </a>
                  </motion.div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/idrissa-wade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      idrissa wade
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <a
                      href="https://github.com/TheShvdow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      github.com/TheShavdow
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <a
                      href="https://portfolio-y9g8.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Portfolio
                    </a>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

