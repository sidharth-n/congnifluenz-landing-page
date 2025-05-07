import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, Eye, Waves } from "lucide-react"

const technologies = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: <Brain size={48} className="text-accent" />,
    description:
      "Our advanced AI algorithms learn from data patterns to make intelligent decisions and predictions. We specialize in deep learning, reinforcement learning, and neural network optimization to create systems that continuously improve over time.",
    background: "bg-gradient-primary",
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: <Eye size={48} className="text-accent" />,
    description:
      "We develop systems that can interpret and understand visual information from the world, enabling machines to see and comprehend images and video streams with unprecedented accuracy and efficiency across diverse environments.",
    background: "bg-gradient-secondary",
  },
  {
    id: "sp",
    title: "Signal Processing",
    icon: <Waves size={48} className="text-accent" />,
    description:
      "Our signal processing technologies extract meaningful information from complex data streams, filtering noise and enhancing relevant patterns. We specialize in real-time analysis of sensor, and other time-series data.",
    background: "bg-gradient-tertiary",
  },
]

const TechnologySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="section-padding bg-gradient-primary text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Our Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-100"
          >
            At the core of our solutions are proprietary algorithms that combine
            cutting-edge techniques from multiple domains.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {technologies.map(tech => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              className="card bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-10"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-md"></div>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-200">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection
