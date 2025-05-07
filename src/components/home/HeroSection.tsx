import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import HeroBackground from "../hero/HeroBackground"

const HeroSection = () => {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #050a14, #0a101e)" }}
    >
      {/* Three.js background */}
      <HeroBackground />

      <div
        className="absolute inset-0 flex items-center justify-center text-center"
        style={{ zIndex: 10 }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-white inline-block mr-2 md:mr-3">
              Cognifluenz
            </h1>
            <span className="text-accent font-montserrat text-2xl md:text-3xl">
              deeptech
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-xl md:text-3xl mb-8 md:mb-10 font-medium"
          >
            Intelligent algorithms for deep problems
          </motion.h2>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white font-mono tracking-wider mb-10 md:mb-12"
            >
              AI • COMPUTER VISION • SIGNAL PROCESSING
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <Link to="/contact" className="btn-accent">
                Request Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        style={{ zIndex: 20 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
