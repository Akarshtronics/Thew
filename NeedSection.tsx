import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Brain, GraduationCap, Globe, LineChart, Zap, Target } from 'lucide-react';

const NeedSection = () => {
  const items = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Critical Thinking Development",
      description: "STEM education nurtures critical thinking abilities essential for solving complex problems in today's rapidly changing world.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Future-Ready Skills",
      description: "Students develop technical proficiency, coding skills, and digital literacy needed for careers in emerging technologies.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Competitiveness",
      description: "Nations with strong STEM education lead in innovation, economic growth, and solving global challenges.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Innovation Catalyst",
      description: "STEM learning sparks creativity and innovation, essential for addressing complex global challenges of the 21st century.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem-Solving Skills",
      description: "Hands-on STEM experiences develop analytical thinking and systematic approaches to complex challenges.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Preparation",
      description: "STEM education opens doors to high-demand careers in technology, engineering, healthcare, and research fields.",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-neutral-50 via-white to-primary-50 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circles */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-100 rounded-full opacity-30 floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-100 rounded-full opacity-40 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-100 rounded-full opacity-50 floating-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-success-100 rounded-full opacity-35 floating-animation" style={{animationDelay: '1s'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-40 right-40 w-8 h-8 bg-primary-200 opacity-40 rotate-45 floating-animation" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-60 left-40 w-6 h-6 bg-secondary-200 opacity-50 rounded-full pulse-animation"></div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-accent-200 opacity-30 rotate-12 floating-animation" style={{animationDelay: '2.5s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-pattern opacity-3"></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary-50/80 to-transparent"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent-200 via-primary-200 to-secondary-200 opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle 
            title="The Need for STEM Education"
            subtitle={
              <div className="space-y-4">
                <p>In today's technology-driven world, STEM education has become more critical than ever for preparing the next generation of innovators and problem-solvers.</p>
                <p className="text-primary-600 font-medium">Discover why STEM skills are essential for future success</p>
              </div>
            }
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-neutral-100 hover:border-primary-200 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <motion.div 
                className={`relative bg-gradient-to-br ${item.color} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold mb-3 text-neutral-800 group-hover:text-primary-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm sm:text-base text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {item.description}
                </motion.p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white to-neutral-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-sm"></div>
              <div className="absolute bottom-4 left-4 w-12 h-1 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your STEM Journey?</h3>
              <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already building the skills they need for tomorrow's careers.
              </p>
              <motion.a 
                href="/offerings" 
                className="btn bg-white text-primary-600 hover:bg-neutral-100 shadow-lg hover:shadow-xl text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Programs
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeedSection;