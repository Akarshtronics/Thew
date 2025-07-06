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
  image,
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
      <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64 bg-neutral-50">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon Badge */}
        <motion.div 
          className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500">
            {icon}
          </div>
        </motion.div>
        
        {/* Technology Label */}
        <div className="absolute top-3 right-3 bg-primary-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Technology
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <motion.h3 
          className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-800 group-hover:text-primary-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-sm sm:text-base text-neutral-600 leading-relaxed line-clamp-3 group-hover:text-neutral-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
    </motion.div>
  );
};

export default OfferingCard;