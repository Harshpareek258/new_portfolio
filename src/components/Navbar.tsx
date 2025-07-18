import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Harsh_Pareek_Resume.pdf';
    link.click();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#2c2e39]/95 backdrop-blur-xl border-b border-[#FF921C]/20 shadow-lg shadow-[#FF921C]/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="relative group cursor-pointer">
            <div className="font-bold text-2xl bg-gradient-to-r from-[#FF921C] to-[#FFB84D] bg-clip-text text-transparent">
              Harsh.dev
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF921C] to-[#FFB84D] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 transition-all duration-300 group cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? 'text-[#FF921C]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 bg-[#FF921C]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeSection === item.href.slice(1) ? 'opacity-100' : ''
                }`}></div>
                <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF921C] to-[#FFB84D] group-hover:w-full group-hover:left-0 transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? 'w-full left-0' : ''
                }`}></div>
              </a>
            ))}
            
            {/* Resume Button */}
            <button 
              onClick={downloadResume}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-[#FF921C] to-[#FFB84D] text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FF921C]/25 flex items-center gap-2 cursor-pointer"
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#2c2e39]/95 backdrop-blur-xl border-t border-[#FF921C]/20 animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? 'text-[#FF921C] bg-[#FF921C]/10'
                      : 'text-gray-300 hover:text-white hover:bg-[#FF921C]/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  downloadResume();
                  setIsOpen(false);
                }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#FF921C] to-[#FFB84D] text-white rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={16} />
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