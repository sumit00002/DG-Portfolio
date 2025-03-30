import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ refs }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'About', ref: refs.aboutRef },
    { name: 'Skills', ref: refs.skillsRef },
    { name: 'Experience', ref: refs.experienceRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'Contact', ref: refs.contactRef }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Durva Goswami
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-700 hover:text-indigo-600 transition-all font-medium cursor-pointer relative h-6 overflow-hidden group"
              >
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-6">
                  <span>{link.name}</span>
                  <span className="text-indigo-600">{link.name}</span>
                </div>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
            
            <a 
              href="/assets/resume.pdf" 
              download="Durva_Goswami_Resume.pdf"
              className="relative px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-200 group overflow-hidden flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiDownload className="transition-transform group-hover:translate-y-0.5" />
                Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/assets/resume.pdf"
            download="Durva_Goswami_Resume.pdf"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all mt-2"
          >
            <FiDownload className="text-white" />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;