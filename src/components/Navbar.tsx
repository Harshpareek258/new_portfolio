import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-[#33b8ff]/20 shadow-lg shadow-[#33b8ff]/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="relative group">
            <div className="font-bold text-2xl bg-gradient-to-r from-[#33b8ff] to-[#11efd0] bg-clip-text text-transparent">
              Harsh.AI
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#33b8ff]/20 to-[#11efd0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
            
            {/* Resume Button */}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-[#33b8ff]/25">
              Resume
            </button>
            
            <div className="ml-4">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-[#33b8ff]/20">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#33b8ff]/10 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] text-white rounded-lg font-medium">
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;