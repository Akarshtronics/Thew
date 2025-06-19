import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import OfferingCard from './OfferingCard';
import { offerings } from './offerings';
import CTASection from './CTASection';

const OfferingsPage = () => {
  React.useEffect(() => {
    document.title = 'Technologies Covered | The World of Innovation & Creativity';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500 opacity-10 rounded-full"></div>
          <div className="absolute top-60 -right-20 w-60 h-60 bg-secondary-500 opacity-10 rounded-full"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technologies Covered</h1>
            <p className="text-xl text-neutral-200">
              Discover our innovative STEM programs designed to inspire curiosity, 
              foster creativity, and build future-ready skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Technologies Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Explore Our Technologies"
            subtitle="Each program is carefully designed to provide engaging, hands-on learning experiences that develop critical STEM skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <OfferingCard 
                key={offering.id}
                {...offering}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Learning Approach"
            subtitle="We believe in learning by doing. Our approach combines theoretical knowledge with practical application."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Project-Based Learning</h3>
              <p className="text-neutral-600 mb-6">
                Our curriculum is built around real-world projects that challenge students to apply 
                their knowledge, collaborate with peers, and develop creative solutions to authentic problems.
              </p>
              <p className="text-neutral-600 mb-6">
                This approach not only deepens understanding of STEM concepts but also develops 
                essential skills like critical thinking, problem-solving, teamwork, and communication.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full text-primary-500 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-700">Hands-on experimentation and prototyping</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full text-primary-500 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-700">Collaborative team projects with peer feedback</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full text-primary-500 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-700">Regular showcase events to present student work</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://github.com/akarshpandey/twinc/blob/main/Twinc3.png?raw=true" 
                alt="Students working on a project" 
                className="rounded-lg shadow-xl w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Features Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Curriculum Features"
            subtitle="What makes our STEM programs stand out from the rest"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Age-Appropriate Content",
                description: "Curriculum tailored to different age groups and developmental stages, ensuring optimal learning experiences.",
                image: "https://images.pexels.com/photos/8363102/pexels-photo-8363102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              },
              {
                title: "Industry-Aligned Skills",
                description: "Focus on developing skills and knowledge relevant to current and emerging careers in STEM fields.",
                image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              },
              {
                title: "Regular Updates",
                description: "Curriculum constantly updated to reflect new technologies, research findings, and industry trends.",
                image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
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

export default OfferingsPage;