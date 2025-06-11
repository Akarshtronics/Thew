import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The Tinkering Lab program completely transformed my daughter's interest in science. She's now constantly building and experimenting at home!",
    author: "Sarah Johnson",
    role: "Parent of a 12-year-old student",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 2,
    content: "The 3D designing course provided practical skills that helped me get accepted into a prestigious engineering program. The instructors are true experts.",
    author: "Michael Chen",
    role: "High School Senior",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    content: "As a teacher, I've seen remarkable improvement in my students' problem-solving abilities after participating in the AI workshops. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Middle School Science Teacher",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle 
          title="What People Say About Us"
          subtitle="Hear from parents, students, and educators who have experienced our innovative STEM programs."
        />

        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-md"
          >
            <div className="flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-primary-200 mb-6" />
              <p className="text-lg md:text-xl mb-8 text-neutral-700">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-primary-100"
                />
                <div className="font-medium text-lg">{testimonials[activeIndex].author}</div>
                <div className="text-neutral-500">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-500' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-600 hover:text-primary-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-600 hover:text-primary-500 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;