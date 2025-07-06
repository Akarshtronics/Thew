import { motion } from 'framer-motion';

interface OfferingCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  slug: string;
  delay?: number;
}

const OfferingCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0 
}: OfferingCardProps) => {
  return (
    <motion.div 
      className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-neutral-100 hover:border-primary-200 p-6 sm:p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <motion.div 
          className="bg-gradient-to-br from-primary-50 to-primary-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 text-primary-500 group-hover:text-primary-600 transition-colors duration-300 shadow-sm group-hover:shadow-md"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7">
            {icon}
          </div>
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-800 group-hover:text-primary-700 transition-colors duration-300"
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

export default OfferingCard;