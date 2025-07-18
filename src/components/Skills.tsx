import React, { useState } from 'react';
import { Code, Database, Globe, Server, Smartphone, Zap, Award, Cpu, Terminal, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('DevOps');

  const skillsData: SkillItem[] = [
    // DevOps
    { name: 'Docker', icon: <Server className="w-8 h-8" />, level: 90, category: 'DevOps', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Kubernetes', icon: <Cpu className="w-8 h-8" />, level: 85, category: 'DevOps', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Jenkins', icon: <Terminal className="w-8 h-8" />, level: 80, category: 'DevOps', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Git', icon: <Code className="w-8 h-8" />, level: 95, category: 'DevOps', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Terraform', icon: <Cloud className="w-8 h-8" />, level: 75, category: 'DevOps', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Ansible', icon: <Server className="w-8 h-8" />, level: 70, category: 'DevOps', color: 'from-[#FF921C] to-[#FFB84D]' },
    
    // Cloud
    { name: 'AWS', icon: <Cloud className="w-8 h-8" />, level: 85, category: 'Cloud', color: 'from-[#FF921C] to-[#FFB84D]' },
    
    // Scripting & Infra
    { name: 'Python', icon: <Code className="w-8 h-8" />, level: 92, category: 'Scripting & Infra', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Bash', icon: <Terminal className="w-8 h-8" />, level: 88, category: 'Scripting & Infra', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Linux', icon: <Terminal className="w-8 h-8" />, level: 90, category: 'Scripting & Infra', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'RHEL', icon: <Server className="w-8 h-8" />, level: 82, category: 'Scripting & Infra', color: 'from-[#FF921C] to-[#FFB84D]' },
    
    // Web Dev
    { name: 'HTML', icon: <Globe className="w-8 h-8" />, level: 95, category: 'Web Dev', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'CSS', icon: <Code className="w-8 h-8" />, level: 90, category: 'Web Dev', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'JavaScript', icon: <Zap className="w-8 h-8" />, level: 88, category: 'Web Dev', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Django', icon: <Server className="w-8 h-8" />, level: 85, category: 'Web Dev', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Flask', icon: <Server className="w-8 h-8" />, level: 80, category: 'Web Dev', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'REST APIs', icon: <Database className="w-8 h-8" />, level: 85, category: 'Web Dev', color: 'from-[#FF921C] to-[#FFB84D]' },
    
    // Database
    { name: 'MySQL', icon: <Database className="w-8 h-8" />, level: 85, category: 'Database', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, level: 80, category: 'Database', color: 'from-[#FF921C] to-[#FFB84D]' },
    
    // Languages
    { name: 'C', icon: <Code className="w-8 h-8" />, level: 88, category: 'Languages', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'C++', icon: <Code className="w-8 h-8" />, level: 85, category: 'Languages', color: 'from-[#FF921C] to-[#FFB84D]' },
    { name: 'Java', icon: <Code className="w-8 h-8" />, level: 82, category: 'Languages', color: 'from-[#FF921C] to-[#FFB84D]' }
  ];

  const skillCategories = ['DevOps', 'Cloud', 'Scripting & Infra', 'Web Dev', 'Database', 'Languages'];
  
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFB84D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF921C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF921C]/20 border border-[#FF921C]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#FF921C] rounded-full animate-pulse"></div>
            <span className="text-[#FF921C] text-sm font-medium">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF921C] to-[#FFB84D]">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastering modern technologies to build scalable and efficient solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-[#FF921C] to-[#FFB84D] text-white shadow-lg shadow-[#FF921C]/25'
                : 'bg-[#3a3d4a]/50 backdrop-blur-xl border border-[#FF921C]/20 text-gray-300 hover:bg-[#FF921C]/10 hover:text-[#FF921C] shadow-sm'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#FF921C] to-[#FFB84D] text-white shadow-lg shadow-[#FF921C]/25'
                  : 'bg-[#3a3d4a]/50 backdrop-blur-xl border border-[#FF921C]/20 text-gray-300 hover:bg-[#FF921C]/10 hover:text-[#FF921C] shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-[#3a3d4a]/50 backdrop-blur-xl p-6 rounded-2xl transition-all duration-500 cursor-pointer animate-fade-in overflow-hidden border border-[#FF921C]/20 shadow-lg hover:shadow-2xl hover:shadow-[#FF921C]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Special Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF921C] to-[#FFB84D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF921C] to-[#FFB84D] animate-pulse"></div>
                <div className="absolute inset-[2px] rounded-2xl bg-[#3a3d4a] group-hover:bg-[#FF921C]"></div>
              </div>
              
              <div className="relative z-10 text-center">
                {/* Skill Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill Level */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400 group-hover:text-orange-100">Proficiency</span>
                    <span className="text-sm font-semibold text-[#FF921C] group-hover:text-white">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#FF921C]/20 rounded-full h-2 overflow-hidden group-hover:bg-orange-300">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:bg-white`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-[#FF921C]/20 border border-[#FF921C]/30 text-[#FF921C] rounded-full text-xs font-medium group-hover:bg-white group-hover:text-[#FF921C] transition-all duration-300">
                  {skill.category}
                </div>
              </div>
              
              {/* Particle Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center bg-[#3a3d4a]/50 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg border border-[#FF921C]/20">
            <div className="text-4xl font-bold text-[#FF921C] mb-2">{skillsData.length}+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center bg-[#3a3d4a]/50 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg border border-[#FF921C]/20">
            <div className="text-4xl font-bold text-[#FF921C] mb-2">3+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center bg-[#3a3d4a]/50 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg border border-[#FF921C]/20">
            <div className="text-4xl font-bold text-[#FF921C] mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center bg-[#3a3d4a]/50 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg border border-[#FF921C]/20">
            <div className="text-4xl font-bold text-[#FF921C] mb-2">4+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;