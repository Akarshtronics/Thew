import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      className="card h-full group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <Link 
          to={`/offerings/${slug}`} 
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Learn More 
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default OfferingCard;