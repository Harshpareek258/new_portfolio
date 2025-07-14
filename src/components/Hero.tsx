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
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to public folder
    link.download = 'Harsh_Pareek_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated waves */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 C300,300 600,500 900,400 C1050,350 1150,400 1200,380 L1200,800 L0,800 Z"
              fill="url(#wave-gradient)"
              className="animate-pulse"
            />
            <path
              d="M0,500 C300,400 600,600 900,500 C1050,450 1150,500 1200,480 L1200,800 L0,800 Z"
              fill="url(#wave-gradient)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className={`w-2 h-2 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full blur-sm`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400 animate-gradient-x">
                  Harsh Pareek
                </span>
              </h1>
              
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal-400">
                  <span>{typedText}</span>
                  <span className="inline-block w-1 h-8 bg-teal-400 ml-1 animate-pulse"></span>
                </div>
                <p className="text-lg md:text-xl text-purple-400 font-medium">
                  {portfolioData.personal.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {portfolioData.personal.bio}
            </p>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-teal-400" />
                <span>{portfolioData.personal.role} at {portfolioData.personal.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-teal-400" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={downloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
              
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 border-2 border-teal-500/50 text-teal-400 rounded-xl font-semibold transition-all duration-300 hover:bg-teal-500/10 hover:border-teal-500 hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm cursor-pointer"
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
                className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <Github size={24} className="text-gray-300 hover:text-white" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <Linkedin size={24} className="text-gray-300 hover:text-blue-400" />
              </a>
              <a
                href={portfolioData.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <Instagram size={24} className="text-gray-300 hover:text-pink-400" />
              </a>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Main image container */}
              <div className="relative glass-card p-4 rounded-3xl">
                <div className="w-80 h-96 md:w-96 md:h-[480px] rounded-2xl bg-gradient-to-br from-teal-500/20 to-purple-600/20 border border-teal-500/30 flex items-center justify-center overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-07-08 at 00.55.53_d6bd793e copy.jpg"
                    alt="Harsh Pareek - Cloud & DevOps Engineer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Overlay with tech badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-xl">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-center gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-teal-500/20 border border-teal-500/30 text-teal-300 rounded-full text-xs font-medium backdrop-blur-sm">
                          AWS
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs font-medium backdrop-blur-sm">
                          Docker
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm">
                          Kubernetes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 px-3 py-2 bg-teal-500 text-white rounded-lg text-sm font-semibold shadow-lg animate-float">
                DevOps
              </div>
              <div className="absolute top-1/4 -right-6 px-3 py-2 bg-purple-500 text-white rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                Cloud
              </div>
              <div className="absolute -bottom-4 right-8 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                Full Stack
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <ChevronDown size={24} className="text-teal-400" />
      </div>
    </section>
  );
};

export default Hero;