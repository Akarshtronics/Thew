import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionTitle from './SectionTitle';

const ContactPage = () => {
  React.useEffect(() => {
    document.title = 'Contact Us | The World of Innovation & Creativity';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-neutral-200">
              Have questions about our programs? Ready to enroll? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form and one of our team members will get back to you as soon as possible. 
                  We're excited to hear from you and answer any questions you may have.
                </p>
              </motion.div>
              
              <ContactForm />
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-neutral-600">
                  Multiple ways to reach us. Choose the option that works best for you.
                </p>
              </motion.div>
              
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage