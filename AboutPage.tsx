import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import CTASection from './CTASection';

const AboutPage = () => {
  React.useEffect(() => {
    document.title = 'About Us | TWINC';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-neutral-200">
              Learn more about our mission, vision, and the dedicated team behind 
              The World of Innovation & Creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-6">
                Founded in 2025, The World of Innovation & Creativity began with a simple mission: 
                to transform STEM education by making it accessible, engaging, and relevant to real-world challenges.
              </p>
              <p className="text-neutral-600 mb-6">
                What started as a small workshop in a community center has grown into a 
                comprehensive educational organization serving thousands of students across multiple locations.
              </p>
              <p className="text-neutral-600">
                Our approach combines cutting-edge technology, expert instruction, and hands-on 
                learning experiences to inspire the next generation of innovators, problem-solvers, and creative thinkers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img 
                  src="https://github.com/akarshpandey/twinc/blob/main/WhatsApp%20Image%202025-06-02%20at%209.30.21%20PM.jpeg?raw=true" 
                  alt="Team collaborating on a project" 
                  className="rounded-xl w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Mission & Vision"
            subtitle="Guiding principles that drive our organization forward"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary-500 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-neutral-600">
                To empower students through innovative STEM education that fosters 
                creativity, critical thinking, and a passion for lifelong learning. 
                We aim to make quality STEM education accessible to all students, 
                regardless of background or prior experience.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-neutral-600">
                To create a world where every student has the opportunity to develop 
                the skills, knowledge, and confidence needed to thrive in a 
                technology-driven future. We envision a community of creative problem-solvers 
                equipped to address global challenges through innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description: "We embrace new ideas, methods, and technologies to continuously improve our programs and learning experiences.",
                color: "primary"
              },
              {
                title: "Inclusivity",
                description: "We create welcoming environments where all students feel valued, respected, and empowered to reach their full potential.",
                color: "secondary"
              },
              {
                title: "Excellence",
                description: "We maintain high standards in our curriculum, instruction, and student support to deliver exceptional educational experiences.",
                color: "accent"
              },
              {
                title: "Collaboration",
                description: "We foster teamwork and partnership among students, educators, parents, and industry professionals.",
                color: "success"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-${value.color}-500`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default AboutPage;