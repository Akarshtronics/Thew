import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  delay?: number;
}

const TeamMember = ({ name, role, bio, image, social, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            {social.linkedin && (
              <a 
                href={social.linkedin} 
                className="bg-white/90 p-2 rounded-full text-neutral-800 hover:text-primary-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {social.twitter && (
              <a 
                href={social.twitter} 
                className="bg-white/90 p-2 rounded-full text-neutral-800 hover:text-primary-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {social.email && (
              <a 
                href={`mailto:${social.email}`} 
                className="bg-white/90 p-2 rounded-full text-neutral-800 hover:text-primary-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary-500 mb-3">{role}</p>
        <p className="text-neutral-600 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;