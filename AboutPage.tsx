import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

const AboutPage = () => {
  React.useEffect(() => {
    document.title = 'About Us | TWINC';
  }, []);

  const teamMembers = [
    {
      name: "Akarsh Pandey",
      role: "Founder | STEM Innovation Lead",
      bio: "A dynamic leader revolutionizing STEM education through experiential learning and cutting-edge technology. With deep expertise in robotics, coding, and innovation-driven pedagogy, founded The World of Innovation & Creativity to empower students with 21st-century skills and a maker’s mindset.",
      social: {
        linkedin: "https://www.linkedin.com/in/akarsh-pandey-94786924a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      }
    },
    {
      name: "Manish Anand",
      role: "Program Director | Technology Integration Specialist",
      bio: "Experienced in Adobe, Oracle and Accenture As full stack developer have some certification CCNA CISSP from Cisco blue team badges of CEH from EC- council Vast experience in iot project deployment",
      social: {
        linkedin: "#",
      }
    },
    {
      name: "Shalini Bisht",
      role: "Head of Product | Outreach & Partnership Coordinator",
      bio: "Shalini is driving product innovation at Twinc, building hands-on STEM experiences that spark curiosity and confidence in young learners. With a passion for education and a builder’s mindset, she turns big ideas into learner-focused tools that make STEM fun, accessible, and impactful.",
      social: {
        linkedin: "https://www.linkedin.com/in/shalini-b-356701165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      }
    },
    {
      name: "Khushbu Mathur",
      role: "Director – Research & Curriculum Innovation",
      bio: " With experience spanning STEAM education and software development, she brings a unique blend of technical expertise and strategic communication. Her leadership drives innovative learning solutions and brand outreach, seamlessly bridging hands-on education, technology-driven projects, and impactful storytelling to engage and inspire diverse audiences.",
      social: {
        linkedin: "https://in.linkedin.com/in/khushbu-mathur-95442722b",
      }
    }
  ];

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
              <img 
                src="https://github.com/akarshpandey/twinc/blob/main/WhatsApp%20Image%202025-06-02%20at%209.30.21%20PM.jpeg?raw=true" 
                alt="Team collaborating on a project" 
                className="rounded-lg shadow-xl"
              />
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

      {/* Team Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="The passionate educators and innovators behind our programs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-500 mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="text-neutral-400 hover:text-primary-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      className="text-neutral-400 hover:text-primary-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="text-neutral-400 hover:text-primary-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  )}
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

export default AboutPage;