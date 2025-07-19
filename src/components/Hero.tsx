import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Developer & Cloud Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/HARSH-PAREEK-FlowCV-Resume-20250717 (1).pdf';
    link.download = 'Harsh_Pareek_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center bg-white dark:bg-[#2D2D2D]">
      <div className="w-full max-w-6xl mx-auto px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-700 dark:text-green-300 text-sm font-medium">Available for Hire</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          <span className="text-[#2D2D2D] dark:text-white">Harsh Pareek</span>
        </h1>
        
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B3003B] mb-4">
          <span>{typedText}</span>
          <span className="inline-block w-1 h-8 bg-[#B3003B] ml-1 animate-pulse"></span>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6">
          3rd-year Computer Science Student
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Hi, I'm Harsh Pareek — a passionate Full-Stack Developer and Cloud Engineer building modern apps with Python, JavaScript, Docker, and Kubernetes.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-[#B3003B] text-white rounded-full font-semibold transition-all duration-300 hover:bg-[#8B0029] hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            <i className="fas fa-code"></i>
            <span>View My Work</span>
          </button>
          
          <button 
            onClick={downloadResume}
            className="group px-8 py-4 border-2 border-[#B3003B] text-[#B3003B] rounded-full font-semibold transition-all duration-300 hover:bg-[#B3003B] hover:text-white hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
          >
            <i className="fas fa-download"></i>
            <span>Download Resume</span>
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-[#B3003B]"></i>
            <span>Rajasthan, India</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-envelope text-[#B3003B]"></i>
            <a href="mailto:harshpareek258@gmail.com" className="hover:text-[#B3003B] transition-colors">
              harshpareek258@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-phone text-[#B3003B]"></i>
            <a href="tel:+919352319099" className="hover:text-[#B3003B] transition-colors">
              +91 93523 19099
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll to explore</p>
        <ChevronDown size={24} className="text-[#B3003B] animate-bounce mx-auto" />
      </div>
    </section>
  );
};

export default Hero;