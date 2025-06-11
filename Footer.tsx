import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl italic text-white">
                TWINC
              </span>
            </div>
            <p className="text-neutral-400 mb-6">
              Empowering the next generation through innovative STEM education and creative learning experiences since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.threads.com/@twinc_in?invite=1" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/twinc_in?igsh=MTF4ODAzMW45OXNtMg==" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/the-world-of-innovation-creativity/" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Offerings</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/offerings/tinkering-lab" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Tinkering Lab
                </Link>
              </li>
              <li>
                <Link to="/offerings/3d-designing" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  3D Designing
                </Link>
              </li>
              <li>
                <Link to="/offerings/artificial-intelligence" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">
                  Noida, UttarPrades, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  +91 9211263022
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@twinc.org" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  supports@twinc.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} The World of Innovation & Creativity. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;