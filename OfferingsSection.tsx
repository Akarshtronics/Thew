import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import OfferingCard from './OfferingCard';
import { offerings } from './offerings';
import { ArrowRight } from 'lucide-react';

const OfferingsSection = () => {
  // Show only first 6 technologies in the home page section
  const displayedOfferings = offerings.slice(0, 6);

  return (
    <section className="section bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-500 opacity-10 rounded-full floating-animation"></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-secondary-500 opacity-10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-40 left-60 w-72 h-72 bg-accent-500 opacity-10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-white opacity-20 rotate-45 floating-animation"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-accent-400 opacity-30 rounded-full pulse-animation"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-secondary-400 opacity-40 floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-primary-300 opacity-25 rotate-12 floating-animation" style={{animationDelay: '3s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="Technologies Covered"
          subtitle="Discover our innovative STEM learning programs designed to inspire curiosity, foster creativity, and build future-ready skills."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedOfferings.map((offering, index) => (
            <OfferingCard 
              key={offering.id}
              {...offering}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            to="/offerings" 
            className="inline-flex items-center btn bg-white text-primary-800 hover:bg-neutral-100"
          >
            Explore All Technologies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection;