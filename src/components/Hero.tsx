import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Instagram, MapPin, Phone, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Cloud & DevOps Engineer";
  
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
    link.href = '/resume.pdf';
    link.download = 'Harsh_Pareek_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">Available for Hire</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <div className="text-white mb-2">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF921C] to-[#FFB84D]">Harsh Pareek</span></div>
              </h1>
              
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF921C] mb-2">
                <span>{typedText}</span>
                <span className="inline-block w-1 h-12 bg-[#FF921C] ml-1 animate-pulse"></span>
              </div>
              
              <p className="text-xl md:text-2xl text-purple-300 font-medium">
                3rd-year Computer Science Student
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-6">
              Transforming ideas into <span className="text-[#FF921C] font-semibold">scalable solutions</span> through modern DevOps practices, AI integration, and cloud-native technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-[#FF921C] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF921C]/25 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>View Projects</span>
                <ChevronDown size={20} className="group-hover:animate-bounce" />
              </button>
              
              <button 
                onClick={downloadResume}
                className="group px-8 py-4 border-2 border-[#FF921C] text-[#FF921C] rounded-lg font-semibold transition-all duration-300 hover:bg-[#FF921C] hover:text-white hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Download size={20} className="group-hover:animate-pulse" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#FF921C]" />
                <span>Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#FF921C]" />
                <a href="mailto:harshpareek258@gmail.com" className="hover:text-[#FF921C] transition-colors">
                  harshpareek258@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#FF921C]" />
                <a href="tel:+919352319099" className="hover:text-[#FF921C] transition-colors">
                  +91 93523 19099
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image with Tech Badges */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-[#FF921C] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Main image container */}
              <div className="relative bg-[#3a3d4a] p-2 rounded-3xl shadow-2xl border border-[#FF921C]/30">
                <div className="w-80 h-96 md:w-96 md:h-[480px] rounded-2xl bg-gradient-to-br from-[#FF921C]/10 to-[#FF921C]/20 border border-[#FF921C]/30 flex items-center justify-center overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-07-08 at 00.55.53_d6bd793e copy.jpg"
                    alt="Harsh Pareek - Cloud & DevOps Engineer"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 px-3 py-2 bg-[#FF921C] text-white rounded-lg text-sm font-semibold shadow-lg animate-float">
                AWS
              </div>
              <div className="absolute top-1/4 -right-6 px-3 py-2 bg-[#FF921C] text-white rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                Docker
              </div>
              <div className="absolute -bottom-4 right-8 px-3 py-2 bg-[#FF921C] text-white rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                K8s
              </div>

              {/* Social Links */}
              <div className="absolute bottom-8 right-8 flex gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/80 backdrop-blur-sm rounded-lg hover:bg-[#FF921C] hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/80 backdrop-blur-sm rounded-lg hover:bg-[#FF921C] hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <ChevronDown size={24} className="text-[#FF921C] animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;