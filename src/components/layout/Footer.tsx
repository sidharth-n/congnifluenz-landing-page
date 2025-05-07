import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github as GitHub } from 'lucide-react';
import { products } from '../../data/products';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo dark={false} />
            </div>
            <p className="text-gray-400 mb-4">
              Intelligent algorithms to solve deep problems. 
              Pioneering AI, Computer Vision, and Signal Processing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GitHub size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map(product => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} className="text-gray-400 hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@cognifluenz.tech" className="text-gray-400 hover:text-white transition-colors">
                  info@cognifluenz.tech
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Tech Avenue, Innovation District, San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-accent sm:mr-2 mb-2 sm:mb-0" 
                  required
                />
                <button type="submit" className="btn-accent whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {year} Cognifluenz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;