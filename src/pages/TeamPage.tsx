import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Github } from 'lucide-react';

const seniorTeam = [
  {
    id: 'rajeev',
    name: 'Rajeev Kumaraswamy',
    title: 'Founder & CEO',
    bio: 'With over 30 years of experience in signal processing and computer vision, Rajeev has led groundbreaking research and development in intelligent algorithms across multiple industries.',
    image: '/rajeev.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/rajeevkumaraswamy/',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'sidharth',
    name: 'Sidharth N',
    title: 'AI Product Lead',
    bio: 'As AI Product Lead, Sidharth drives the strategic integration of AI to enhance product performance and user experience.',
    image: '/sid.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/sidharth-n-52828b226',
      twitter: 'https://x.com/sid_ai_dev',
      github: 'https://github.com/sidharth-n',
    },
  },
];

const coreTeam = [
  {
    name: 'Maya Patel',
    title: 'Computer Vision Lead',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Alex Chen',
    title: 'Signal Processing Engineer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Sarah Johnson',
    title: 'ML Research Scientist',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'David Kim',
    title: 'Software Development Manager',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Priya Sharma',
    title: 'Data Scientist',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'James Wilson',
    title: 'Hardware Integration Specialist',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];

const TeamPage = () => {
  useEffect(() => {
    document.title = 'Our Team | Cognifluenz';
  }, []);
  
  const { ref: seniorRef, inView: seniorInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: coreRef, inView: coreInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
              Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-100 leading-relaxed mb-8"
            >
              Meet the minds behind our groundbreaking technology. Our diverse team combines decades of experience with fresh perspectives to develop solutions that transform industries.
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
      
      {/* Leadership Team */}
      <section ref={seniorRef} className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={seniorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={seniorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600"
            >
              Our company is guided by visionaries with deep expertise in AI, computer vision, and signal processing.
            </motion.p>
          </div>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {seniorTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={seniorInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="bg-white rounded-lg shadow-card overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 p-6 flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.title}</p>
                    {/* <p className="text-gray-600 text-sm mb-4">{member.education}</p> */}
                    
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
                  </div>
                  
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Biography</h4>
                      <p className="text-gray-700">{member.bio}</p>
                    </div>
                    
                    {/* <div>
                      <h4 className="text-lg font-semibold mb-2">Career Highlights</h4>
                      <ul className="space-y-2">
                        {member.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* eslint-disable-next-line no-constant-condition */}
      {false && (
      <section ref={coreRef} className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={coreInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Core Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={coreInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600"
            >
              Our talented experts bring diverse skills and perspectives to every challenge.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={coreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-lg shadow-card p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                
                {/* Social media link */}
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}
      {/* Join Our Team */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                <p className="text-gray-700 mb-6">
                  We're always looking for talented individuals who are passionate about pushing the boundaries of what's possible in AI, computer vision, and signal processing.
                </p>
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold">What we offer:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Challenging work on cutting-edge technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Collaborative, innovation-focused environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Competitive compensation and benefits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Opportunities for professional growth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Flexible work arrangements</span>
                    </li>
                  </ul>
                </div>
                <a href="mailto:ceo@cognifluenz.com" className="btn-primary">Join Team</a>
              </div>
              <div className="bg-gradient-primary p-8 md:p-10 text-white flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6">Employee Testimonials</h3>
                <div className="space-y-6">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                    <p className="italic mb-3">
                      "Working at Cognifluenz has been the most rewarding experience of my career. The problems we solve are challenging and the impact of our work is tangible."
                    </p>
                    <p className="font-semibold">— Maya P., Computer Vision Lead</p>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                    <p className="italic mb-3">
                      "I've never been surrounded by so many brilliant minds all working toward common goals. The collaborative culture here is truly special."
                    </p>
                    <p className="font-semibold">— David K., Software Development Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;