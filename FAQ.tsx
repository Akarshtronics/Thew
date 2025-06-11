import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What age groups do your programs cater to?",
      answer: "Our STEM programs are designed for students ages 8-18, with specialized curricula tailored to different age groups: Elementary (8-10), Middle School (11-13), and High School (14-18)."
    },
    {
      question: "Do I need prior experience to join your programs?",
      answer: "No prior experience is required! Our programs are designed to accommodate beginners while also challenging more experienced students. Our instructors adapt to each student's skill level."
    },
    {
      question: "How large are your class sizes?",
      answer: "We maintain small class sizes with a maximum of 20-25 students per instructor to ensure personalized attention and optimal learning experiences."
    },
  
    {
      question: "Can parents observe the classes?",
      answer: "Absolutely! We encourage parent involvement and have designated observation areas. We also host regular showcase events where students demonstrate their projects and learning."
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <SectionTitle 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our programs, enrollment process, and learning approach."
        />

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-4 bg-white rounded-xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <span className="text-primary-500 ml-2">
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-neutral-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-4 text-neutral-600">Don't see your question here?</p>
          <a href="/contact" className="btn btn-primary">
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;