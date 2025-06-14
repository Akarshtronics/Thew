import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral-100 hover:border-primary-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <motion.div 
          className="bg-gradient-to-br from-primary-50 to-primary-100 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-primary-500 group-hover:text-primary-600 transition-colors duration-300 shadow-sm group-hover:shadow-md"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7">
            {icon}
          </div>
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-neutral-800 group-hover:text-primary-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
        
        {/* Decorative Element */}
        <motion.div 
          className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
        />
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-500"></div>
    </motion.div>
  );
};

export default FeatureCard;