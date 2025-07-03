import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3' 
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group" 
            onClick={closeMenu}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                scrolled 
                  ? 'border-primary-500 bg-primary-50 text-primary-600' 
                  : 'border-white bg-white/10 text-white backdrop-blur-sm'
              }`}
            >
              <span className="font-bold text-sm sm:text-base italic">TWINC</span>
              
              {/* Decorative dots around the circle */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-accent-500' : 'bg-accent-400'
              }`}></div>
              <div className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-secondary-500' : 'bg-secondary-400'
              }`}></div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `nav-link relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? scrolled 
                      ? 'nav-link-active bg-primary-50 text-primary-600' 
                      : 'text-white font-medium bg-white/10'
                    : scrolled 
                      ? 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
              end
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `nav-link relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? scrolled 
                      ? 'nav-link-active bg-primary-50 text-primary-600' 
                      : 'text-white font-medium bg-white/10'
                    : scrolled 
                      ? 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              About Us
            </NavLink>
            
            {/* Technologies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavLink 
                to="/offerings" 
                className={({isActive}) => 
                  `nav-link relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 flex items-center ${
                    isActive 
                      ? scrolled 
                        ? 'nav-link-active bg-primary-50 text-primary-600' 
                        : 'text-white font-medium bg-white/10'
                      : scrolled 
                        ? 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                Technologies Covered
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
              </NavLink>
              
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50"
                  >
                    <Link 
                      to="/offerings/robotics" 
                      className="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      <div className="font-medium">Robotics</div>
                      <div className="text-sm text-neutral-500">Build and program intelligent robots</div>
                    </Link>
                    <Link 
                      to="/offerings/coding" 
                      className="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      <div className="font-medium">Coding</div>
                      <div className="text-sm text-neutral-500">Master programming languages</div>
                    </Link>
                    <Link 
                      to="/offerings/artificial-intelligence" 
                      className="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      <div className="font-medium">Artificial Intelligence</div>
                      <div className="text-sm text-neutral-500">Machine learning fundamentals</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                `nav-link relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? scrolled 
                      ? 'nav-link-active bg-primary-50 text-primary-600' 
                      : 'text-white font-medium bg-white/10'
                    : scrolled 
                      ? 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Contact Us
            </NavLink>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="btn btn-primary ml-4 xl:ml-6 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled 
                ? 'text-neutral-800 hover:text-primary-500 hover:bg-primary-50' 
                : 'text-white hover:text-neutral-200 hover:bg-white/10'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-6 space-y-2">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `block px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`
                }
                onClick={closeMenu}
                end
              >
                Home
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `block px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`
                }
                onClick={closeMenu}
              >
                About Us
              </NavLink>
              
              <NavLink 
                to="/offerings" 
                className={({isActive}) => 
                  `block px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`
                }
                onClick={closeMenu}
              >
                Technologies Covered
              </NavLink>
              
              {/* Mobile Technologies Submenu */}
              <div className="ml-4 space-y-1">
                <Link 
                  to="/offerings/robotics" 
                  className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  onClick={closeMenu}
                >
                  → Robotics
                </Link>
                <Link 
                  to="/offerings/coding" 
                  className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  onClick={closeMenu}
                >
                  → Coding
                </Link>
                <Link 
                  to="/offerings/artificial-intelligence" 
                  className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  onClick={closeMenu}
                >
                  → Artificial Intelligence
                </Link>
              </div>
              
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `block px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`
                }
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
              
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full text-center shadow-lg"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;