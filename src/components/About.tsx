import React from 'react';
import { Code, Cloud, Users, Lightbulb, Award, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const highlights = [
    { 
      icon: Code, 
      title: "Problem Solving", 
      description: "Love tackling complex challenges with innovative solutions",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Cloud, 
      title: "Cloud & DevOps", 
      description: "Passionate about automation and scalable infrastructure",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Users, 
      title: "Teamwork", 
      description: "Collaborative development and knowledge sharing",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: Lightbulb, 
      title: "Innovation", 
      description: "Always learning and implementing cutting-edge technologies",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "3+", label: "Years Learning", icon: Target },
    { number: "15+", label: "Technologies", icon: Code },
    { number: "10+", label: "Projects", icon: Award },
    { number: "5+", label: "Certifications", icon: Award }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#33b8ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#11efd0]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#33b8ff]/10 border border-[#33b8ff]/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#33b8ff] rounded-full animate-pulse"></div>
            <span className="text-[#33b8ff] text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Passionate About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33b8ff] to-[#11efd0]">Technology</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building the future through code, cloud infrastructure, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#33b8ff] to-[#11efd0] flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                    <img
                      src="/WhatsApp Image 2025-07-08 at 00.55.53_d6bd793e copy.jpg"
                      alt="Harsh Pareek"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] rounded-2xl blur opacity-30"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Harsh Pareek</h3>
                  <p className="text-[#33b8ff] font-semibold mb-1">Cloud & DevOps Engineer</p>
                  <p className="text-gray-400">Student at {portfolioData.personal.college}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#33b8ff]/20 border border-[#33b8ff]/30 text-[#33b8ff] rounded-full text-sm font-medium">
                  B.Tech CSE
                </span>
                <span className="px-4 py-2 bg-[#11efd0]/20 border border-[#11efd0]/30 text-[#11efd0] rounded-full text-sm font-medium">
                  2022 - 2026
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-full text-sm font-medium">
                  Rajasthan, India
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#33b8ff] to-[#11efd0] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;