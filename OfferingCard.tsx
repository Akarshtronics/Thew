import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users } from 'lucide-react';

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
  image, 
  slug, 
  delay = 0 
}: OfferingCardProps) => {
  return (
    <motion.div 
      className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-neutral-100 hover:border-primary-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        {/* Icon Badge */}
        <motion.div 
          className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500">
            {icon}
          </div>
        </motion.div>
        
        {/* Quick Stats */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-neutral-700 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            8-12 weeks
          </div>
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-neutral-700 flex items-center">
            <Users className="w-3 h-3 mr-1" />
            Max 12
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <motion.h3 
          className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-neutral-800 group-hover:text-primary-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          <Link 
            to={`/offerings/${slug}`} 
            className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-all duration-300 group/link"
          >
            <span className="mr-2">Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover:translate-x-2" />
          </Link>
        </motion.div>
        
        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="flex justify-between text-xs text-neutral-500 mb-2">
            <span>Enrollment Status</span>
            <span>Available</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1, delay: delay + 0.6 }}
            />
          </div>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
    </motion.div>
  );
};

export default OfferingCard;