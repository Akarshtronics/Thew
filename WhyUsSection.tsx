import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Check } from 'lucide-react';

const WhyUsSection = () => {
  const features = [
    "Cutting-edge STEM curriculum designed by industry experts",
    "State-of-the-art facilities and equipment for hands-on learning",
    "Expert instructors with real-world experience",
    "Personalized learning approach catering to individual learning styles",
    "Project-based learning that emphasizes practical application",
    "Collaboration with leading technology companies and universities"
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle 
              title="Why Choose Us?"
              subtitle="We're not just another educational institution. We're a community of innovators dedicated to transforming STEM education."
              centered={false}
            />

            <ul className="space-y-3 mt-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <span className="bg-primary-50 p-1 rounded-full text-primary-500 mr-3 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <img 
                src="https://github.com/akarshpandey/twinc/blob/main/Methodology.jpeg?raw=true"
                alt="Students collaborating on STEM projects" 
                className="w-full h-48 sm:h-56 lg:h-64 rounded-lg shadow-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;