import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500 opacity-10 rounded-full"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 bg-secondary-500 opacity-10 rounded-full"></div>
        <div className="absolute -bottom-40 left-60 w-80 h-80 bg-accent-500 opacity-10 rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-24 lg:min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium mb-6">
              Established in 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The World of Innovation & Creativtiy
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-xl">
              Empowering the next generation through cutting-edge STEM education, 
              hands-on learning, and fostering creative problem-solving skills for the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/offerings" className="btn btn-accent">
                Explore Our Offerings
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/about" className="btn bg-white/10 text-white hover:bg-white/20">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl animate-float">
              <img 
                src="https://github.com/akarshpandey/twinc/blob/main/WhatsApp%20Image%202025-06-02%20at%209.30.21%20PM.jpeg?raw=true" 
                alt="Students engaged in STEM learning activities" 
                className="w-full h-auto rounded-lg" 
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-lg -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500 rounded-lg -z-0"></div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;