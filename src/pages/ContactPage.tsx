import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import PageHeader from "../components/common/PageHeader"

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | Cognifluenz"
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    interest: "",
    source: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        interest: "",
        source: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-100 leading-relaxed mb-8"
            >
              Have questions about our technology or interested in exploring how
              our solutions can address your challenges? We'd love to hear from
              you.
            </motion.p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-16">
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
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 rounded-lg p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="industry"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select Industry</option>
                          <option value="smart-cities">Smart Cities</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="automotive">Automotive</option>
                          <option value="retail">Retail</option>
                          <option value="pharmaceutical">Pharmaceutical</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="interest"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Interested In
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select Product</option>
                          <option value="neurostream">NeuroStream AI™</option>
                          <option value="skyvision">SkyVision 3D™</option>
                          <option value="spectracore">SpectraCore AI™</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="source"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        How did you hear about us?
                      </label>
                      <select
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Option</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="event">Industry Event</option>
                        <option value="article">Article or Publication</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary w-full flex items-center justify-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
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
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
                        href="mailto:ceo@cognifluenz.com"
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

                {/* Map Placeholder */}
                <div className="rounded-lg overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">
                    Interactive Map Would Be Displayed Here
                  </p>
                </div>
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
