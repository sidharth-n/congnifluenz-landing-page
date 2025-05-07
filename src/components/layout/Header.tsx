import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../data/products';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu for mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Toggle products dropdown
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  // Close products dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('products-dropdown');
      const button = document.getElementById('products-button');
      if (
        dropdown &&
        button &&
        !dropdown.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-10">
          <Logo dark={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isScrolled || !isActive ? 'text-gray-400 hover:text-primary' : 'text-white hover:text-accent'
              } ${isActive ? 'font-semibold' : ''}`
            }
          >
            Home
          </NavLink>
          
          {/* Products Dropdown */}
          <div className="relative">
            <button 
              id="products-button"
              onClick={toggleProducts}
              className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-400 hover:text-primary' : 'text-white hover:text-accent'
              }`}
            >
              <span>Products</span>
              <ChevronDown 
                size={16} 
                className={`transform transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            <div
              id="products-dropdown"
              className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transform origin-top-left transition-all duration-300 ${
                isProductsOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {products.map(product => (
                <NavLink
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={() => setIsProductsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-50 transition-colors duration-300 ${
                      isActive ? 'bg-gray-50 text-primary font-semibold' : 'text-gray-800'
                    }`
                  }
                >
                  {product.name}
                </NavLink>
              ))}
            </div>
          </div>
          
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isScrolled || !isActive ? 'text-gray-400 hover:text-primary' : 'text-white hover:text-accent'
              } ${isActive ? 'font-semibold' : ''}`
            }
          >
            About
          </NavLink>
          
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isScrolled || !isActive ? 'text-gray-400 hover:text-primary' : 'text-white hover:text-accent'
              } ${isActive ? 'font-semibold' : ''}`
            }
          >
            Team
          </NavLink>
          
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isScrolled || !isActive ? 'text-gray-400 hover:text-primary' : 'text-white hover:text-accent'
              } ${isActive ? 'font-semibold' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>
        
        {/* CTA Button */}
        <Link to="/contact" className="hidden lg:block btn-accent z-10">
          Request Demo
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-10"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-white z-40"
            >
              <div className="container mx-auto px-4 py-20">
                <nav className="flex flex-col space-y-6">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-2xl font-montserrat ${isActive ? 'text-primary font-bold' : 'text-gray-800'}`
                    }
                  >
                    Home
                  </NavLink>
                  
                  {/* Mobile Products Dropdown */}
                  <div>
                    <button 
                      onClick={toggleProducts}
                      className="flex items-center justify-between w-full text-2xl font-montserrat text-gray-800"
                    >
                      <span>Products</span>
                      <ChevronDown size={20} className={isProductsOpen ? 'rotate-180 transform transition-transform' : 'transition-transform'} />
                    </button>
                    
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 ml-4 flex flex-col space-y-3"
                        >
                          {products.map(product => (
                            <NavLink
                              key={product.id}
                              to={`/products/${product.id}`}
                              className={({ isActive }) =>
                                `text-xl font-medium ${isActive ? 'text-primary' : 'text-gray-600'}`
                              }
                            >
                              {product.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-2xl font-montserrat ${isActive ? 'text-primary font-bold' : 'text-gray-800'}`
                    }
                  >
                    About
                  </NavLink>
                  
                  <NavLink
                    to="/team"
                    className={({ isActive }) =>
                      `text-2xl font-montserrat ${isActive ? 'text-primary font-bold' : 'text-gray-800'}`
                    }
                  >
                    Team
                  </NavLink>
                  
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `text-2xl font-montserrat ${isActive ? 'text-primary font-bold' : 'text-gray-800'}`
                    }
                  >
                    Contact
                  </NavLink>
                  
                  <Link to="/contact" className="btn-accent self-start mt-4">
                    Request Demo
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;