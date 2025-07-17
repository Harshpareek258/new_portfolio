import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Made with love */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              by 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 font-semibold">
                Harsh Pareek
              </span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Crafted with modern web technologies
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#about" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
              Contact
            </a>
          </div>

          {/* Right side - Copyright & Back to top */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm mb-2">
              © 2024 Harsh Pareek. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <ArrowUp size={16} />
              <span className="text-sm">Back to top</span>
            </button>
          </div>
        </div>

        {/* Bottom border with gradient */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;