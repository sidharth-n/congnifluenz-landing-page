import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Building2,
  Heart,
  Car,
  ShoppingCart,
  FlaskRound as Flask,
  Factory,
} from "lucide-react"

const useCases = [
  {
    id: "smart-cities",
    title: "Smart Cities",
    icon: <Building2 size={32} className="text-primary" />,
    description:
      "AI video analytics helps cities improve traffic flow, enhance public safety, and optimize resource allocation through intelligent monitoring and analysis.",
    image: "/images/smart_city.jpg",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <Heart size={32} className="text-primary" />,
    description:
      "Signal processing technology enables more accurate diagnostic imaging, patient monitoring, and medical data analysis for improved healthcare outcomes.",
    image: "/images/healthcare.jpg",
  },
  {
    id: "autonomous",
    title: "Autonomous Vehicles",
    icon: <Car size={32} className="text-primary" />,
    description:
      "Computer vision and AI systems provide real-time environmental perception and decision-making capabilities for safer autonomous transportation.",
    image: "/images/autonomous_vehicles.jpg",
  },
  {
    id: "retail",
    title: "Retail Analytics",
    icon: <ShoppingCart size={32} className="text-primary" />,
    description:
      "AI-powered video compression and analysis helps retailers understand customer behavior, optimize store layouts, and enhance the shopping experience.",
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "pharma",
    title: "Pharmaceutical Research",
    icon: <Flask size={32} className="text-primary" />,
    description:
      "Signal processing algorithms accelerate drug discovery by enhancing analytical instrument data quality and enabling more accurate compound identification.",
    image:
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: <Factory size={32} className="text-primary" />,
    description:
      "Computer vision technology enables real-time quality control, predictive maintenance, and process optimization in manufacturing facilities.",
    image: "/images/manufacturing.jpg",
  },
]

const UseCases = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="products-section" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Transforming Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Our intelligent solutions are driving innovation and efficiency
            across diverse sectors.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map(useCase => (
            <motion.div
              key={useCase.id}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-3">{useCase.icon}</div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default UseCases
