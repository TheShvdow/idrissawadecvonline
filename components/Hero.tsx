"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface HeroProps {
  id: string
}

export default function Hero({ id }: HeroProps) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-10 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Idrissa Wade
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">Développeur Full-Stack</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            Passionné par la création d'applications web performantes et la résolution de problèmes complexes.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Contactez-moi
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
        >
          <div className="relative w-[250px] h-[330px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] mx-auto">
            <Image
              src="https://github.com/TheShvdow/myportfolio/blob/main/assets/images/photo.jpeg?raw=true"
              alt="Idrissa Wade"
              fill
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

