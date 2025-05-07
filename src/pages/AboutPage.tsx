import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Brain, Lightbulb, Target, Shield, Zap, Code } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Cognifluenz';
  }, []);
  
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const values = [
    {
      title: 'Innovation',
      icon: <Lightbulb className="text-primary h-8 w-8" />,
      description: 'We push boundaries and embrace creative thinking to develop breakthrough solutions that transform industries.',
    },
    {
      title: 'Excellence',
      icon: <Target className="text-primary h-8 w-8" />,
      description: 'We strive for the highest standards in everything we do, from algorithm design to customer service.',
    },
    {
      title: 'Integrity',
      icon: <Shield className="text-primary h-8 w-8" />,
      description: 'We operate with complete transparency and ethical responsibility, earning trust through our actions.',
    },
    {
      title: 'Agility',
      icon: <Zap className="text-primary h-8 w-8" />,
      description: 'We adapt quickly to changes, embracing new challenges and evolving our solutions to meet emerging needs.',
    },
    {
      title: 'Collaboration',
      icon: <Brain className="text-primary h-8 w-8" />,
      description: 'We believe the best solutions emerge from diverse perspectives and cross-disciplinary teamwork.',
    },
    {
      title: 'Expertise',
      icon: <Code className="text-primary h-8 w-8" />,
      description: 'We maintain deep technical knowledge across multiple domains to deliver sophisticated, effective solutions.',
    },
  ];
  
  const technologies = [
    {
      title: 'Artificial Intelligence',
      description: 'At Cognifluenz, we develop advanced AI solutions that go beyond conventional machine learning approaches. Our proprietary neural network architectures are designed for specific industry applications, enabling unprecedented levels of accuracy and efficiency. We employ deep reinforcement learning for complex decision systems, unsupervised learning for pattern recognition, and hybrid approaches that combine symbolic and statistical AI methods to solve complex problems that traditional algorithms cannot address.',
    },
    {
      title: 'Computer Vision',
      description: 'Our computer vision technology enables machines to understand visual information with human-like comprehension. We specialize in advanced object detection and tracking, semantic segmentation, pose estimation, and 3D scene reconstruction from 2D images. Our solutions work across challenging environmental conditions including low light, high motion, and partial occlusion scenarios. Using transfer learning and domain adaptation, our systems require minimal training data to achieve exceptional performance.',
    },
    {
      title: 'Signal Processing',
      description: `Cognifluenz's signal processing expertise spans across time-domain, frequency-domain, and wavelet analysis to extract meaningful information from complex data streams. We implement adaptive filtering techniques that automatically adjust to changing signal characteristics, advanced time-frequency analysis for non-stationary signals, and multi-resolution approaches that can separate signal components across different scales. Our algorithms excel at noise reduction, feature extraction, and signal enhancement in challenging environments.`,
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-primary">
        <div className="container-custom py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              About Cognifluenz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-100 leading-relaxed mb-8"
            >
              Cognifluenz is a pioneering deeptech company at the intersection of artificial intelligence, computer vision, and signal processing. We develop intelligent algorithms that solve complex problems across industries, turning raw data into actionable insights and transformative solutions.
            </motion.p>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24.6667L60 24.6667C120 24.6667 240 24.6667 360 19.3333C480 13.5333 600 2.66667 720 16.6667C840 30.6667 960 69.3333 1080 74.6667C1200 80 1320 52 1380 38L1440 24.6667V74.6667H1380C1320 74.6667 1200 74.6667 1080 74.6667C960 74.6667 840 74.6667 720 74.6667C600 74.6667 480 74.6667 360 74.6667C240 74.6667 120 74.6667 60 74.6667H0V24.6667Z" fill="#F8F8FF"/>
          </svg>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-card p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To develop intelligent algorithms that transform complex data into meaningful insights, enabling organizations to solve their most challenging problems and make smarter decisions. We strive to make advanced AI, computer vision, and signal processing technologies accessible and practical for real-world applications.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-card p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in intelligent algorithm development, creating technologies that bridge the gap between theoretical research and practical implementation. We envision a world where AI, computer vision, and signal processing work seamlessly together to enhance human capabilities and create safer, more efficient systems across all industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section ref={valuesRef} className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600"
            >
              These core principles guide our approach to technology development and business relationships.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-lg shadow-card p-6"
              >
                <div className="mb-4 rounded-full w-14 h-14 bg-primary-100 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section ref={techRef} className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Our Technologies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600"
            >
              We specialize in advanced algorithms across three interconnected domains.
            </motion.p>
          </div>
          
          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="bg-white rounded-lg shadow-card overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-gradient-primary p-6 md:p-8 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center">{tech.title}</h3>
                  </div>
                  <div className="p-6 md:p-8 md:col-span-3">
                    <p className="text-gray-700 leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to explore our solutions?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Learn how our technologies can transform your operations and give you a competitive edge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Contact Us
              </Link>
              <Link to="/team" className="btn bg-white text-primary-dark hover:bg-gray-100">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;