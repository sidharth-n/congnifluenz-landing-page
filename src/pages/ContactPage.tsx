import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageHeader from "../components/common/PageHeader"

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | Cognifluenz"
  }, [])

  const faqs = [
    {
      question: "How quickly can I expect a response after contacting you?",
      answer:
        "We aim to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling us directly.",
    },
    {
      question: "Do you offer demos of your products?",
      answer:
        "Yes, we offer comprehensive demonstrations of all our products. Please specify which product you're interested in when requesting a demo.",
    },
    {
      question: "Can your solutions be customized for our specific needs?",
      answer:
        "Absolutely. We specialize in tailoring our technologies to meet the unique requirements of each client. Our team will work closely with you to understand your needs and develop a customized solution.",
    },
    {
      question: "What industries do you typically work with?",
      answer:
        "We work across multiple sectors including healthcare, smart cities, manufacturing, retail, and finance, but our solutions can be adapted for any industry that requires advanced AI and computer vision capabilities.",
    },
    {
      question: "Is there a minimum contract period for your services?",
      answer:
        "Contract terms vary depending on the specific services required. We offer flexible engagement models including project-based work, monthly retainers, and long-term partnerships.",
    },
  ]

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(index)
    }
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have questions about our technology or interested in exploring how our solutions can address your challenges? We'd love to hear from you."
      />

      {/* Wave divider for consistency with other pages */}
      <div className="relative bg-gradient-primary h-16">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24.6667L60 24.6667C120 24.6667 240 24.6667 360 19.3333C480 13.5333 600 2.66667 720 16.6667C840 30.6667 960 69.3333 1080 74.6667C1200 80 1320 52 1380 38L1440 24.6667V74.6667H1380C1320 74.6667 1200 74.6667 1080 74.6667C960 74.6667 840 74.6667 720 74.6667C600 74.6667 480 74.6667 360 74.6667C240 74.6667 120 74.6667 60 74.6667H0V24.6667Z"
            fill="#F8F8FF"
          />
        </svg>
      </div>

      {/* Contact Section - adjust top padding */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="flex justify-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-lg" // Added max-width to control size
            >
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <ul className="space-y-5 mb-8">
                  <li className="flex items-start">
                    <Mail
                      className="mt-1 text-primary mr-4 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold mb-1">Email Us</p>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ceo@cognifluenz.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        ceo@cognifluenz.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone
                      className="mt-1 text-primary mr-4 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold mb-1">Call Us</p>
                      <a
                        href="tel:+919495303940"
                        className="text-gray-600 hover:text-primary transition-colors block"
                      >
                        +91 9495 303 940
                      </a>
                      <a
                        href="tel:+918075589978"
                        className="text-gray-600 hover:text-primary transition-colors block"
                      >
                        +91 8075 589 978
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin
                      className="mt-1 text-primary mr-4 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold mb-1">Visit Us</p>
                      <address className="text-gray-600 not-italic">
                        TC 17/2962/1, Jetavana, PLRA 25B,
                        <br />
                        Panachamoodu Lane, Pattom,
                        <br />
                        Thiruvananthapuram, Kerala, India 695004
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock
                      className="mt-1 text-primary mr-4 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold mb-1">Working Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>

                {/*
                {/* Interactive Google Map */}
                {/* <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=TC%2017%2F2962%2F1%2C%20Jetavana%2C%20PLRA%2025B%2C%20Panachamoodu%20Lane%2C%20Pattom%2C%20Thiruvananthapuram%2C%20Kerala%2C%20India%20695004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Cognifluenz Location"
                    aria-label="Cognifluenz Location"
                  ></iframe>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left bg-white p-4 rounded-lg shadow-sm flex justify-between items-center transition-all duration-300 ${
                    expandedFaq === index ? "shadow-md" : ""
                  }`}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pb-4 rounded-b-lg shadow-md mt-[-4px]"
                  >
                    <p className="text-gray-600 pt-2">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="#" className="btn-outline">
              Contact Our Support Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
