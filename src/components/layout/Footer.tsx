import { Link } from "react-router-dom"
import Logo from "../common/Logo"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github as GitHub,
} from "lucide-react"
import { products } from "../../data/products"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo dark={false} />
            </div>
            <p className="text-gray-400 mb-6">
              Transforming complex challenges into intelligent solutions through
              cutting-edge algorithms and deep technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/cognifluenz"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/cognifluenz"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-white transition"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map(product => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  TC 17/2962/1, Jetavana, PLRA 25B, Panachamoodu Lane, Pattom,
                  Thiruvananthapuram, Kerala, India 695004
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                <div className="text-gray-400">
                  <a
                    href="tel:+919495303940"
                    className="hover:text-white transition block"
                  >
                    +91 9495 303 940
                  </a>
                  <a
                    href="tel:+918075589978"
                    className="hover:text-white transition block"
                  >
                    +91 8075 589 978
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                <a
                  href="mailto:ceo@cognifluenz.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  ceo@cognifluenz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>
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
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-500 text-sm text-center">
            &copy; {year} Cognifluenz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
