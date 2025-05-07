import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Download, ExternalLink } from 'lucide-react';
import { products } from '../data/products';

interface ProductPageProps {
  productId: string;
}

const ProductPage = ({ productId }: ProductPageProps) => {
  const navigate = useNavigate();
  
  // Find the product by ID
  const product = products.find(p => p.id === productId);
  
  // Redirect to home if product doesn't exist
  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);
  
  // Set page title
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Cognifluenz`;
    }
  }, [product]);
  
  // If product not found
  if (!product) {
    return null;
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-primary">
        <div className="container-custom py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-4">{product.name}</h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-6">
                {product.tagline}
              </p>
              <p className="text-gray-200 mb-8 max-w-xl">
                {product.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-accent">
                  Request Demo
                </a>
                <a href="#specifications" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-dark">
                  Technical Specs
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-accent opacity-20 blur-xl rounded-full"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 flex items-center justify-center h-80">
                  <div className="text-8xl text-accent">
                    {product.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24.6667L60 24.6667C120 24.6667 240 24.6667 360 19.3333C480 13.5333 600 2.66667 720 16.6667C840 30.6667 960 69.3333 1080 74.6667C1200 80 1320 52 1380 38L1440 24.6667V74.6667H1380C1320 74.6667 1200 74.6667 1080 74.6667C960 74.6667 840 74.6667 720 74.6667C600 74.6667 480 74.6667 360 74.6667C240 74.6667 120 74.6667 60 74.6667H0V24.6667Z" fill="#F8F8FF"/>
          </svg>
        </div>
      </section>
      
      {/* Challenge Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">The Challenge We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Current Limitations</h3>
                <ul className="space-y-3">
                  {product.challenges.map((challenge, index) => (
                    <li key={index} className="flex">
                      <ChevronRight size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p>{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Our Solution</h3>
                <ul className="space-y-3">
                  {product.solutions.map((solution, index) => (
                    <li key={index} className="flex">
                      <ChevronRight size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p>{solution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-card p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="section-title text-center mb-6">Applications</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {product.name} is transforming operations across multiple industries:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-card overflow-hidden"
              >
                <div className="h-40 bg-gradient-primary flex items-center justify-center">
                  <div className="text-4xl text-white">
                    {application.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{application.industry}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section id="specifications" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Technical Specifications</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">System Requirements</h3>
                <ul className="space-y-2">
                  {product.specifications.system.map((spec, index) => (
                    <li key={index} className="text-gray-600">- {spec}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">Capabilities</h3>
                <ul className="space-y-2">
                  {product.specifications.capabilities.map((spec, index) => (
                    <li key={index} className="text-gray-600">- {spec}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">Integrations</h3>
                <ul className="space-y-2">
                  {product.specifications.integrations.map((spec, index) => (
                    <li key={index} className="text-gray-600">- {spec}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 bg-gray-50 flex justify-between items-center">
              <span className="text-gray-600">Need more detailed specifications?</span>
              <a href="#" className="btn-outline flex items-center">
                <Download size={16} className="mr-2" />
                Download Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to experience {product.name}?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Transform your operations with our innovative solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-accent">
                Request Demo
              </a>
              <a href="#" className="btn bg-white text-primary-dark hover:bg-gray-100">
                <span>Contact Sales</span>
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;