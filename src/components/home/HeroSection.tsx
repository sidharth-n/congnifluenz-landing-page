import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import HeroBackground from "../hero/HeroBackground"

const HeroSection = () => {
  // Function to scroll to products section
  const scrollToProducts = () => {
    // Try to find the products section by ID
    const productsSection = document.getElementById("products-section")

    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If the element isn't found by ID, try to find it by a class or other means
      // This is a fallback in case the ID isn't correctly set
      const sections = document.querySelectorAll("section")
      let productSectionFound = false

      sections.forEach(section => {
        if (
          section
            .querySelector("h2")
            ?.textContent?.toLowerCase()
            .includes("product")
        ) {
          section.scrollIntoView({ behavior: "smooth" })
          productSectionFound = true
        }
      })

      // If we still can't find it, just scroll down a bit
      if (!productSectionFound) {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        })
      }
    }
  }

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
        <div className="container-custom px-5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-8 font-bold tracking-tight leading-tight"
            style={{ fontFamily: "Ebrima, sans-serif" }}
          >
            <span className="block whitespace-nowrap">
              Intelligent algorithms
            </span>
            <span className="block whitespace-nowrap">for deep problems</span>
          </motion.h1>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex items-center px-4 sm:px-6 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8 sm:mb-10 md:mb-12"
            >
              <span className="text-white font-mono tracking-wider text-xs sm:text-sm md:text-base">
                <span className="text-accent font-bold">AI</span> •{" "}
                <span className="text-blue-300 font-medium">
                  COMPUTER VISION
                </span>{" "}
                •{" "}
                <span className="text-cyan-300 font-medium">
                  SIGNAL PROCESSING
                </span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <button
                onClick={scrollToProducts}
                className="btn-accent py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 text-base sm:text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all"
                style={{ fontFamily: "Ebrima, sans-serif" }}
              >
                See Products
              </button>
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
          className="bg-opacity-20 backdrop-blur-sm bg-white rounded-full p-2 hover:bg-opacity-30 transition-all cursor-pointer"
          onClick={scrollToProducts}
        >
          <ChevronDown size={28} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
