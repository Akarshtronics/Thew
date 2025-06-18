import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <motion.span 
                  className="font-bold text-2xl sm:text-3xl italic text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  TWINC
                </motion.span>
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed text-sm sm:text-base">
                Empowering the next generation through innovative STEM education and creative learning experiences since 2025.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "https://www.threads.com/@twinc_in?invite=1", label: "Twitter" },
                  { icon: Instagram, href: "https://www.instagram.com/twinc_in?igsh=MTF4ODAzMW45OXNtMg==", label: "Instagram" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/the-world-of-innovation-creativity/", label: "LinkedIn" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Technologies Covered", path: "/offerings" },
                  { name: "Contact Us", path: "/contact" }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-6 text-white">Our Technologies</h4>
              <ul className="space-y-3">
                {[
                  { name: "Robotics", path: "/offerings/robotics" },
                  { name: "Coding", path: "/offerings/coding" },
                  { name: "Artificial Intelligence", path: "/offerings/artificial-intelligence" }
                ].map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={service.path} 
                      className="text-neutral-400 hover:text-secondary-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-secondary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-6 text-white">Get in Touch</h4>
              <ul className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    content: "Noida, Uttar Pradesh, India",
                    href: "#"
                  },
                  {
                    icon: Phone,
                    content: "+91 9211263022",
                    href: "tel:+919211263022"
                  },
                  {
                    icon: Mail,
                    content: "supports@twinc.in",
                    href: "mailto:support@twinc.in"
                  }
                ].map((contact, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-primary-400 mr-3 flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href} 
                          className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <span className="text-neutral-400 text-sm sm:text-base">
                          {contact.content}
                        </span>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="border-t border-neutral-700 py-8 sm:py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates on programs, events, and STEM education insights.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
              />
              <motion.button 
                className="btn btn-primary px-6 py-3 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-neutral-400 text-sm flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              &copy; {currentYear} The World of Innovation & Creativity. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> 
              for future innovators.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;