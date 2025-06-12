import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import OfferingCard from './OfferingCard';
import { offerings } from './offerings';
import { ArrowRight } from 'lucide-react';

const OfferingsSection = () => {
  return (
    <section className="section bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="What We Offer"
          subtitle="Discover our innovative STEM learning programs designed to inspire curiosity, foster creativity, and build future-ready skills."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
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
            Explore All Offerings
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection;