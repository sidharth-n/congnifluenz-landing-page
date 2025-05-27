import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin } from "lucide-react"

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            Have questions about our technology or interested in a demo? Contact
            us today.
          </motion.p>
        </div>

        <div ref={ref} className="flex justify-center mt-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} // Added a small delay
            className="flex flex-col justify-center w-full max-w-lg" // Added max-width
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <ul className="space-y-5">
                <li className="flex items-start">
                  <Mail
                    className="mt-1 text-accent mr-4 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium mb-1">Email Us</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ceo@cognifluenz.com"
                      className="text-gray-200 hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ceo@cognifluenz.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone
                    className="mt-1 text-accent mr-4 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium mb-1">Call Us</p>
                    <a
                      href="tel:+919495303940"
                      className="text-gray-200 hover:text-accent transition-colors block"
                    >
                      +91 9495 303 940
                    </a>
                    <a
                      href="tel:+918075589978"
                      className="text-gray-200 hover:text-accent transition-colors block"
                    >
                      +91 8075 589 978
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin
                    className="mt-1 text-accent mr-4 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium mb-1">Visit Us</p>
                    <address className="text-gray-200 not-italic">
                      TC 17/2962/1, Jetavana, PLRA 25B,
                      <br />
                      Panachamoodu Lane, Pattom,
                      <br />
                      Thiruvananthapuram, Kerala, India 695004
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
  )
}

export default ContactSection
