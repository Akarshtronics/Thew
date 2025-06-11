import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span 
              className={`font-bold text-2xl italic transition-colors duration-300 ${
                scrolled ? 'text-primary-500' : 'text-white'
              }`}
            >
              TWINC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `nav-link transition-colors duration-300 ${
                  isActive 
                    ? scrolled 
                      ? 'nav-link-active' 
                      : 'text-white font-medium'
                    : scrolled 
                      ? 'nav-link' 
                      : 'text-white hover:text-neutral-200'
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `nav-link transition-colors duration-300 ${
                  isActive 
                    ? scrolled 
                      ? 'nav-link-active' 
                      : 'text-white font-medium'
                    : scrolled 
                      ? 'nav-link' 
                      : 'text-white hover:text-neutral-200'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/offerings" 
              className={({isActive}) => 
                `nav-link transition-colors duration-300 ${
                  isActive 
                    ? scrolled 
                      ? 'nav-link-active' 
                      : 'text-white font-medium'
                    : scrolled 
                      ? 'nav-link' 
                      : 'text-white hover:text-neutral-200'
                }`
              }
            >
              Our Offerings
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                `nav-link transition-colors duration-300 ${
                  isActive 
                    ? scrolled 
                      ? 'nav-link-active' 
                      : 'text-white font-medium'
                    : scrolled 
                      ? 'nav-link' 
                      : 'text-white hover:text-neutral-200'
                }`
              }
            >
              Contact Us
            </NavLink>
            <Link to="/contact" className="btn btn-primary ml-4">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? 'text-neutral-800 hover:text-primary-500' : 'text-white hover:text-neutral-200'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/offerings" 
              className={({isActive}) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              onClick={closeMenu}
            >
              Our Offerings
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
            <Link 
              to="/contact" 
              className="btn btn-primary w-full text-center"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;