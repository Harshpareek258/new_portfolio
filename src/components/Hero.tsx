import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Instagram, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = portfolioData.personal.title;
  
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Harsh_Pareek_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center bg-gradient-to-br from-white via-red-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-200 rotate-45 animate-spin-slow opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-red-300 rotate-12 animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-red-100 rotate-45 animate-bounce-slow opacity-20"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-red-200 -rotate-12 animate-pulse opacity-30"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-red-400 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">Available for Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">
                  {portfolioData.personal.name}
                </span>
              </h1>
              
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
                  <span>{typedText}</span>
                  <span className="inline-block w-1 h-8 bg-red-600 ml-1 animate-pulse"></span>
                </div>
                <p className="text-lg md:text-xl text-red-500 font-medium">
                  {portfolioData.personal.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {portfolioData.personal.bio}
            </p>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-red-500" />
                <span>{portfolioData.personal.role} at {portfolioData.personal.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-red-500" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={downloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
              
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 border-2 border-red-500 text-red-600 rounded-xl font-semibold transition-all duration-300 hover:bg-red-50 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Github size={24} className="text-gray-600 hover:text-red-600" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Linkedin size={24} className="text-gray-600 hover:text-blue-600" />
              </a>
              <a
                href={portfolioData.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Instagram size={24} className="text-gray-600 hover:text-pink-600" />
              </a>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Main image container */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-red-100">
                <div className="w-80 h-96 md:w-96 md:h-[480px] rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-07-08 at 00.55.53_d6bd793e copy.jpg"
                    alt="Harsh Pareek - Cloud & DevOps Engineer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Overlay with tech badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-xl">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-center gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-red-500/90 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                          AWS
                        </span>
                        <span className="px-3 py-1 bg-red-600/90 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                          Docker
                        </span>
                        <span className="px-3 py-1 bg-red-700/90 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                          Kubernetes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 px-3 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold shadow-lg animate-float">
                DevOps
              </div>
              <div className="absolute top-1/4 -right-6 px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                Cloud
              </div>
              <div className="absolute -bottom-4 right-8 px-3 py-2 bg-red-700 text-white rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                Full Stack
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
        <span className="text-gray-500 text-sm">Scroll to explore</span>
        <ChevronDown size={24} className="text-red-500" />
      </div>
    </section>
  );
};

export default Hero;