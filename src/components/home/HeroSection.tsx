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
          {/* Main title is commented out as requested */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl mb-10 md:mb-12 font-light tracking-tight leading-tight"
          >
            Intelligent algorithms
            <br className="hidden sm:block" /> for deep problems
          </motion.h2>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex items-center px-6 py-2 bg-opacity-10 backdrop-blur-sm bg-white rounded-full mb-12 md:mb-16"
            >
              <span className="text-white font-mono tracking-wider text-sm md:text-base">
                <span className="text-accent font-medium">AI</span> •{" "}
                <span className="text-blue-300">COMPUTER VISION</span> •{" "}
                <span className="text-cyan-300">SIGNAL PROCESSING</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Link
                to="/contact"
                className="btn-accent py-3 px-8 text-lg font-medium shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
              >
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
          className="bg-opacity-20 backdrop-blur-sm bg-white rounded-full p-2 hover:bg-opacity-30 transition-all"
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
