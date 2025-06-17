import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';
import { 
  Users,  
  Rocket,
  GraduationCap,
  Lightbulb
} from 'lucide-react';

const KeyRolesSection = () => {
  const roles = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Catalyst",
      description: "We spark curiosity and innovation by creating environments where students can experiment, discover, and learn from both success and failure."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Knowledge Provider",
      description: "Our expert instructors deliver cutting-edge STEM knowledge and skills through engaging, hands-on learning experiences."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Builder",
      description: "We foster a collaborative learning community where students connect, share ideas, and work together to solve real-world problems."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Future Enabler",
      description: "We prepare students for the careers of tomorrow by developing essential skills in technology, engineering, and scientific thinking."
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <SectionTitle 
          title="Our Key Roles"
          subtitle="At The World of Innovation & Creativity, we play multiple roles in transforming STEM education and preparing students for future success."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <FeatureCard 
              key={index}
              icon={role.icon}
              title={role.title}
              description={role.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-md border border-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Join Our Innovation Journey?</h3>
              <p className="text-neutral-600 mb-6">
                Discover how our STEM programs can help your child develop critical thinking skills, 
                foster creativity, and prepare for future careers in technology and innovation.
              </p>
              <a 
                href="/contact" 
                className="btn btn-primary inline-flex items-center"
              >
                Get Started Today
              </a>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://github.com/akarshpandey/twinc/blob/main/WhatsApp%20Image%202025-06-02%20at%209.30.21%20PM.jpeg?raw=true" 
                alt="Student working on a STEM project" 
                className="rounded-lg shadow-sm w-full h-48 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyRolesSection;