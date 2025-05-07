import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
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
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-100"
          >
            Have questions about our technology or interested in a demo? Contact us today.
          </motion.p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Send size={24} className="text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-100">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="product" className="block mb-2 text-sm font-medium">
                      Interested In
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="" className="bg-gray-800">Select a product</option>
                      <option value="neurostream" className="bg-gray-800">NeuroStream AI™</option>
                      <option value="skyvision" className="bg-gray-800">SkyVision 3D™</option>
                      <option value="spectracore" className="bg-gray-800">SpectraCore AI™</option>
                      <option value="general" className="bg-gray-800">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-accent w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Mail className="mt-1 text-accent mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium mb-1">Email Us</p>
                    <a href="mailto:info@cognifluenz.tech" className="text-gray-200 hover:text-accent transition-colors">
                      info@cognifluenz.tech
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="mt-1 text-accent mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="text-gray-200 hover:text-accent transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="mt-1 text-accent mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium mb-1">Visit Us</p>
                    <address className="text-gray-200 not-italic">
                      123 Tech Avenue<br />
                      Innovation District<br />
                      San Francisco, CA 94103
                    </address>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3">Working Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;