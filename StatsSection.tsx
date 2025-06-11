import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: "5,000+", label: "Students Enrolled" },
    { number: "25+", label: "Expert Instructors" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "100+", label: "Success Stories" }
  ];

  return (
    <section className="py-16 bg-primary-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;