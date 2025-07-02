import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { offerings } from './offerings';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, Calendar } from 'lucide-react';
import CTASection from './CTASection';

interface OfferingDetailPageProps {
  offeringId: number;
}

const OfferingDetailPage = ({ offeringId }: OfferingDetailPageProps) => {
  const navigate = useNavigate();
  const offering = offerings.find(o => o.id === offeringId);

  React.useEffect(() => {
    if (!offering) {
      navigate('/offerings');
      return;
    }
    
    document.title = `${offering.title} | The World of Innovation & Creativity`;
  }, [offering, navigate]);

  if (!offering) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500 opacity-10 rounded-full"></div>
          <div className="absolute top-60 -right-20 w-60 h-60 bg-secondary-500 opacity-10 rounded-full"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex items-center text-neutral-300 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/offerings" className="hover:text-white transition-colors">Offerings</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{offering.title}</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{offering.title}</h1>
            <p className="text-xl text-neutral-200 mb-8">
              {offering.fullDescription || offering.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-accent">
                Enroll Now
              </Link>
              <a href="#program-details" className="btn bg-white/10 text-white hover:bg-white/20">
                View Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program-details" className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-neutral-600 mb-6">
                {offering.overview || "Our comprehensive program provides students with hands-on experience and theoretical knowledge, preparing them for future success in this exciting field."}
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-center p-4 bg-neutral-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary-500 mr-3" />
                  <div>
                    <div className="text-sm text-neutral-500">Sessions</div>
                    <div className="font-medium">Weekly Classes</div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="space-y-3 mb-8">
                {offering.learningOutcomes?.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                )) || (
                  <>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Fundamental principles and concepts in {offering.title}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Hands-on experience with industry-standard tools and technologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Problem-solving and critical thinking skills</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Collaborative project development and presentation skills</span>
                    </li>
                  </>
                )}
              </ul>
              
              <Link to="/contact" className="btn btn-primary">
                Request More Information
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
                <img 
                  src={offering.detailImage || offering.image} 
                  alt={offering.title} 
                  className="rounded-xl w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-contain"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-accent-500 rounded-lg transform rotate-3 -z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-primary-500 rounded-lg transform -rotate-3 -z-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Program Structure"
            subtitle="Our curriculum is designed to provide a comprehensive learning experience that balances theory and practice."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(offering.modules || [
              {
                title: "Fundamentals & Foundations",
                description: "Introduction to core concepts, terminology, and basic principles. Establish a solid understanding of the subject matter.",
                weeks: "Weeks 1-2"
              },
              {
                title: "Tools & Techniques",
                description: "Hands-on practice with essential tools and technologies. Develop practical skills through guided exercises.",
                weeks: "Weeks 3-5"
              },
              {
                title: "Advanced Concepts",
                description: "Explore more complex topics and applications. Deepen understanding through challenging problems and scenarios.",
                weeks: "Weeks 6-8"
              },
              {
                title: "Project Development",
                description: "Apply knowledge and skills to design and develop a capstone project. Work collaboratively with peers.",
                weeks: "Weeks 9-11"
              },
              {
                title: "Presentation & Showcase",
                description: "Refine projects and prepare presentations. Showcase work to peers, parents, and community members.",
                weeks: "Week 12"
              }
            ]).map((module, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-50 text-primary-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  {module.weeks}
                </div>
                <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                <p className="text-neutral-600">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Student Projects"
            subtitle="See what our students have created through our program"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Home Automation",
                description: "A student-built system that uses sensors and microcontrollers to automate lighting, temperature, and security in a model home.",
                image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              },
              {
                title: "Environmental Monitoring App",
                description: "An application that collects and analyzes data from DIY environmental sensors to track local air quality and weather patterns.",
                image: "https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              },
              {
                title: "Interactive Learning Game",
                description: "A game designed to teach younger students about basic scientific principles through interactive challenges and puzzles.",
                image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden bg-neutral-50 p-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-neutral-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default OfferingDetailPage;