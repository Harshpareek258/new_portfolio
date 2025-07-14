import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
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

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(51,184,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(51,184,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className={`w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} bg-gradient-to-br from-[#33b8ff] to-[#11efd0] rounded-full opacity-30 blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#33b8ff]/5 via-transparent to-[#11efd0]/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for Hire</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33b8ff] via-[#11efd0] to-[#33b8ff] animate-gradient-x">
                  Harsh
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11efd0] via-[#33b8ff] to-[#11efd0] animate-gradient-x">
                  Pareek
                </span>
              </h1>
              
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#33b8ff]">
                  <span>{typedText}</span>
                  <span className="inline-block w-1 h-8 bg-[#33b8ff] ml-1 animate-pulse"></span>
                </div>
                <p className="text-lg md:text-xl text-purple-400 font-medium">
                  3rd-year Computer Science Student
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Transforming ideas into <span className="text-[#11efd0] font-semibold">scalable solutions</span> through 
              modern DevOps practices, AI integration, and cloud-native technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#33b8ff]/25 flex items-center justify-center gap-3">
                <span>View Projects</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ChevronDown size={16} className="rotate-[-90deg]" />
                </div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-[#33b8ff]/50 text-[#33b8ff] rounded-xl font-semibold transition-all duration-300 hover:bg-[#33b8ff]/10 hover:border-[#33b8ff] hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm">
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-[#33b8ff]" />
                <span className="text-sm">Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-[#33b8ff]" />
                <span className="text-sm">harshpareek.dev@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-[#33b8ff]" />
                <span className="text-sm">{portfolioData.personal.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Main image container */}
              <div className="relative glass-card p-4 rounded-3xl">
                <div className="w-80 h-96 md:w-96 md:h-[480px] rounded-2xl bg-gradient-to-br from-[#33b8ff]/20 to-[#11efd0]/20 border border-[#33b8ff]/30 flex items-center justify-center overflow-hidden">
                  {/* Harsh Pareek Profile Picture */}
                  <img
                    src="/WhatsApp Image 2025-07-08 at 00.55.53_d6bd793e copy.jpg"
                    alt="Harsh Pareek - DevOps Engineer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Overlay with tech icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-xl">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-center gap-4">
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <Github size={24} className="text-white" />
                        </div>
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <Linkedin size={24} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 px-3 py-2 bg-[#33b8ff] text-white rounded-lg text-sm font-semibold shadow-lg animate-float">
                AWS
              </div>
              <div className="absolute top-1/4 -right-6 px-3 py-2 bg-[#11efd0] text-gray-900 rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                Docker
              </div>
              <div className="absolute -bottom-4 right-8 px-3 py-2 bg-purple-500 text-white rounded-lg text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                K8s
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <ChevronDown size={24} className="text-[#33b8ff]" />
      </div>
    </section>
  );
};

export default Hero;