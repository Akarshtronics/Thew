import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 bg-primary-500 opacity-10 rounded-full floating-animation"></div>
        <div className="absolute top-60 -right-20 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-secondary-500 opacity-10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-40 left-60 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 bg-accent-500 opacity-10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-white opacity-20 rotate-45 floating-animation"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-accent-400 opacity-30 rounded-full pulse-animation"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-secondary-400 opacity-40 floating-animation" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container-custom relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] lg:min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.span 
              className="inline-block px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm lg:text-base font-medium mb-4 sm:mb-6 lg:mb-8 glass-effect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ✨ Established in 2025
            </motion.span>
            
            <motion.h1 
              className="font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight text-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">The World of</span>
              <span className="block gradient-text">Innovation &</span>
              <span className="block">Creativity</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-200 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Empowering the next generation through cutting-edge STEM education, 
              hands-on learning, and fostering creative problem-solving skills for the future.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                to="/offerings" 
                className="btn btn-accent group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Courses
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              
              <Link 
                to="/about" 
                className="btn glass-button group relative"
              >
                <span className="flex items-center">
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                  Learn More
                </span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl floating-animation max-w-lg mx-auto bg-white p-2">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="https://github.com/akarshpandey/twinc/blob/main/WhatsApp%20Image%202025-06-02%20at%209.30.21%20PM.jpeg?raw=true" 
                  alt="Students engaged in STEM learning activities" 
                  className="rounded-xl w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-contain transform hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-accent-500 rounded-xl shadow-lg floating-animation" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 sm:w-16 sm:h-16 bg-secondary-500 rounded-2xl shadow-lg floating-animation" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-accent-500/20 rounded-2xl -z-10 floating-animation"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-secondary-500/20 rounded-3xl -z-10 floating-animation" style={{animationDelay: '1.5s'}}></div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;