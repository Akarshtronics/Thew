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
    <section className="section bg-gradient-to-br from-secondary-50 via-neutral-50 to-accent-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative shapes */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-secondary-100 rounded-full opacity-20 floating-animation"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-15 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-48 left-1/3 w-72 h-72 bg-accent-100 rounded-full opacity-25 floating-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-success-100 rounded-full opacity-30 floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-warning-100 rounded-full opacity-25 floating-animation" style={{animationDelay: '3s'}}></div>
        
        {/* Small geometric shapes */}
        <div className="absolute top-20 right-20 w-8 h-8 bg-primary-300 opacity-40 rotate-45 floating-animation"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-secondary-300 opacity-50 rounded-full pulse-animation"></div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-accent-300 opacity-35 rotate-12 floating-animation" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/3 left-2/3 w-7 h-7 bg-success-300 opacity-45 rounded-full floating-animation" style={{animationDelay: '1.5s'}}></div>
        
        {/* Hexagonal patterns */}
        <div className="absolute top-60 left-60 w-12 h-12 bg-primary-200 opacity-30 transform rotate-30 floating-animation" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-60 right-60 w-16 h-16 bg-secondary-200 opacity-25 transform rotate-45 floating-animation" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '4.5s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-3"></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent-50/70 to-transparent"></div>
        
        {/* Diagonal accent stripes */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-300 via-primary-300 to-accent-300 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-300 via-secondary-300 to-primary-300 opacity-30"></div>
        
        {/* Scattered dots */}
        <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-primary-400 opacity-40 rounded-full floating-animation" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-secondary-400 opacity-35 rounded-full floating-animation" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-accent-400 opacity-50 rounded-full floating-animation" style={{animationDelay: '1.8s'}}></div>
      </div>

      <div className="container-custom relative z-10">
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
          className="mt-16 bg-white p-8 rounded-xl shadow-md border border-neutral-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Card background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-50 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-50 to-transparent opacity-50"></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
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
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <img 
                  src="https://github.com/akarshpandey/twinc/blob/main/WhatsApp%20Image%202025-06-02%20at%209.30.21%20PM.jpeg?raw=true" 
                  alt="Student working on a STEM project" 
                  className="rounded-lg w-full h-48 sm:h-56 lg:h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyRolesSection;