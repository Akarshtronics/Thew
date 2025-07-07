import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="section bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Begin Your Journey in STEM Innovation?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-primary-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of students who are developing critical skills for the future. 
            Our innovative programs are designed to inspire curiosity, foster creativity, 
            and build confidence in STEM subjects.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/offerings" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Explore Our Courses
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;