import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';

const ProductShowcase = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Track hovered card
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            We develop cutting-edge technologies that transform how industries approach complex data problems.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-xl shadow-card h-[450px] transition-all duration-300 ${
                hoveredCard === product.id ? 'shadow-card-hover' : ''
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`absolute inset-0 w-full h-full transition-transform duration-300 ${
                  hoveredCard === product.id ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  background: product.gradient,
                }}
              />
              
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="mb-3 text-accent">
                    {product.icon}
                  </div>
                  <h3 className="mb-2">{product.name}</h3>
                  <p className="text-lg font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-100">{product.description}</p>
                </div>
                
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center text-accent font-medium hover:underline mt-6"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;