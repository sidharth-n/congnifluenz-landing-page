import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Link } from "react-router-dom"

const teamMembers = [
  {
    id: "rajeev",
    name: "Rajeev Kumaraswamy",
    title: "Founder & CEO",
    bio: "With over 30 years of experience in signal processing and computer vision, Rajeev has led groundbreaking research and development in intelligent algorithms across multiple industries.",
    image: "/rajeev.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: "sidharth",
    name: "Sidharth N",
    title: "AI Product Lead",
    bio: "As AI Product Lead, Sidharth drives the strategic integration of AI to enhance product performance and user experience.",
    image: "/sid.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
]

const TeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Our team combines decades of industry experience with cutting-edge
            technical expertise.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 relative group">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 mb-4 max-w-sm">{member.bio}</p>

              {/* Social media links */}
              <div className="flex space-x-4">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          {/*   <Link to="/team" className="btn-outline">
            Meet the Full Team
          </Link> */}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
