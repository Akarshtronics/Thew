import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}: SectionTitleProps) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-neutral-200' : 'text-neutral-600'}`}>
          {subtitle}
        </div>
      )}
    </motion.div>
  );
};

export default SectionTitle;