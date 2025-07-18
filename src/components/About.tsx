import React from 'react';
import { GraduationCap, MapPin, Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const facts = [
    { 
      icon: GraduationCap, 
      label: "Education", 
      value: portfolioData.personal.degree,
      detail: portfolioData.personal.college
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: portfolioData.personal.location,
      detail: "Available for Remote Work"
    },
    { 
      icon: Briefcase, 
      label: "Current Role", 
      value: portfolioData.personal.role,
      detail: portfolioData.personal.company
    },
    { 
      icon: Calendar, 
      label: "Experience", 
      value: "3+ Years",
      detail: "Learning & Building"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF921C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB84D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF921C]/20 border border-[#FF921C]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#FF921C] rounded-full animate-pulse"></div>
            <span className="text-[#FF921C] text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Passionate About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF921C] to-[#FFB84D]">Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building the future through code, cloud infrastructure, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <div className="relative">
            <div className="bg-[#3a3d4a]/50 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-[#FF921C]/20">
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF921C] to-[#FFB84D] flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                    <img
                      src="/WhatsApp Image 2025-07-08 at 00.55.53_d6bd793e copy.jpg"
                      alt="Harsh Pareek"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF921C] to-[#FFB84D] rounded-2xl blur opacity-30"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{portfolioData.personal.name}</h3>
                  <p className="text-[#FF921C] font-semibold mb-1">{portfolioData.personal.title}</p>
                  <p className="text-gray-300">{portfolioData.personal.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#FF921C]/20 border border-[#FF921C]/30 text-[#FF921C] rounded-full text-sm font-medium">
                  {portfolioData.personal.degree.split(' ')[0]} {portfolioData.personal.degree.split(' ')[1]}
                </span>
                <span className="px-4 py-2 bg-[#FF921C]/10 border border-[#FF921C]/20 text-[#FFB84D] rounded-full text-sm font-medium">
                  2023 - 2027
                </span>
                <span className="px-4 py-2 bg-[#FF921C]/10 border border-[#FF921C]/20 text-[#FFB84D] rounded-full text-sm font-medium">
                  {portfolioData.personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-[#3a3d4a]/50 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer shadow-lg border border-[#FF921C]/20 hover:shadow-2xl hover:shadow-[#FF921C]/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF921C] to-[#FFB84D] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <fact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">{fact.label}</div>
                  <div className="text-lg font-bold text-white mb-1">{fact.value}</div>
                  <div className="text-sm text-gray-300">{fact.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;