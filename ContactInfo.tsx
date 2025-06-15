import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["supports@twinc.in"],
      action: {
        text: "Send an Email",
        url: "mailto:info@innovationcreativity.org"
      }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 9211263022"],
      action: {
        text: "Make a Call",
        url: "tel:+91 9211263022"
      }
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Noida,Uttar Pradesh, India"],
      action: {
        text: "Get Directions",
        url: "#"
      }
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 2pm", "Sunday: Closed"],
      action: {
        text: "View Schedule",
        url: "#"
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((item, index) => (
        <motion.div 
          key={index}
          className="bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-start">
            <div className="bg-primary-50 p-3 rounded-full text-primary-500 mr-4">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <div className="space-y-1 mb-4">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-neutral-600">{detail}</p>
                ))}
              </div>
              <a 
                href={item.action.url} 
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                {item.action.text}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;