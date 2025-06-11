import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Brain, GraduationCap, Globe, LineChart } from 'lucide-react';

const NeedSection = () => {
  const items = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Critical Thinking Development",
      description: "STEM education nurtures critical thinking abilities essential for solving complex problems in today's rapidly changing world."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Future-Ready Skills",
      description: "Students develop technical proficiency, coding skills, and digital literacy needed for careers in emerging technologies."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Competitiveness",
      description: "Nations with strong STEM education lead in innovation, economic growth, and solving global challenges."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Innovation Catalyst",
      description: "STEM learning sparks creativity and innovation, essential for addressing complex global challenges of the 21st century."
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <SectionTitle 
          title="The Need for STEM Education"
          subtitle="In today's technology-driven world, STEM education has become more critical than ever for preparing the next generation of innovators and problem-solvers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-500">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeedSection;