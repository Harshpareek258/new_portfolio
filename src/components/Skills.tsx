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
    { name: 'Docker', icon: <Server className="w-8 h-8" />, level: 90, category: 'DevOps', color: 'from-blue-500 to-blue-600' },
    { name: 'Kubernetes', icon: <Cpu className="w-8 h-8" />, level: 85, category: 'DevOps', color: 'from-purple-500 to-purple-600' },
    { name: 'Jenkins', icon: <Terminal className="w-8 h-8" />, level: 80, category: 'DevOps', color: 'from-orange-500 to-orange-600' },
    { name: 'Git', icon: <Code className="w-8 h-8" />, level: 95, category: 'DevOps', color: 'from-red-500 to-red-600' },
    { name: 'Terraform', icon: <Cloud className="w-8 h-8" />, level: 75, category: 'DevOps', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Ansible', icon: <Server className="w-8 h-8" />, level: 70, category: 'DevOps', color: 'from-green-500 to-green-600' },
    
    // Cloud
    { name: 'AWS', icon: <Cloud className="w-8 h-8" />, level: 85, category: 'Cloud', color: 'from-yellow-500 to-orange-500' },
    
    // Scripting & Infra
    { name: 'Python', icon: <Code className="w-8 h-8" />, level: 92, category: 'Scripting & Infra', color: 'from-green-500 to-blue-500' },
    { name: 'Bash', icon: <Terminal className="w-8 h-8" />, level: 88, category: 'Scripting & Infra', color: 'from-gray-600 to-gray-700' },
    { name: 'Linux', icon: <Terminal className="w-8 h-8" />, level: 90, category: 'Scripting & Infra', color: 'from-yellow-600 to-yellow-700' },
    { name: 'RHEL', icon: <Server className="w-8 h-8" />, level: 82, category: 'Scripting & Infra', color: 'from-red-600 to-red-700' },
    
    // Web Dev
    { name: 'HTML', icon: <Globe className="w-8 h-8" />, level: 95, category: 'Web Dev', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: <Code className="w-8 h-8" />, level: 90, category: 'Web Dev', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: <Zap className="w-8 h-8" />, level: 88, category: 'Web Dev', color: 'from-yellow-500 to-orange-500' },
    { name: 'Django', icon: <Server className="w-8 h-8" />, level: 85, category: 'Web Dev', color: 'from-green-600 to-green-700' },
    { name: 'Flask', icon: <Server className="w-8 h-8" />, level: 80, category: 'Web Dev', color: 'from-gray-600 to-gray-700' },
    { name: 'REST APIs', icon: <Database className="w-8 h-8" />, level: 85, category: 'Web Dev', color: 'from-purple-500 to-purple-600' },
    
    // Database
    { name: 'MySQL', icon: <Database className="w-8 h-8" />, level: 85, category: 'Database', color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, level: 80, category: 'Database', color: 'from-green-600 to-green-700' },
    
    // Languages
    { name: 'C', icon: <Code className="w-8 h-8" />, level: 88, category: 'Languages', color: 'from-blue-600 to-blue-700' },
    { name: 'C++', icon: <Code className="w-8 h-8" />, level: 85, category: 'Languages', color: 'from-blue-700 to-purple-600' },
    { name: 'Java', icon: <Code className="w-8 h-8" />, level: 82, category: 'Languages', color: 'from-red-600 to-orange-600' }
  ];

  const skillCategories = ['DevOps', 'Cloud', 'Scripting & Infra', 'Web Dev', 'Database', 'Languages'];
  
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            <span className="text-teal-400 text-sm font-medium">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mastering modern technologies to build scalable and efficient solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-teal-500 to-purple-600 text-white shadow-lg shadow-teal-500/25'
                : 'glass-card text-gray-300 hover:bg-teal-500/10 hover:text-teal-400'
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
                  ? 'bg-gradient-to-r from-teal-500 to-purple-600 text-white shadow-lg shadow-teal-500/25'
                  : 'glass-card text-gray-300 hover:bg-teal-500/10 hover:text-teal-400'
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
              className="group relative glass-card p-6 rounded-2xl transition-all duration-500 cursor-pointer animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-purple-600 animate-pulse"></div>
                <div className="absolute inset-[2px] rounded-2xl bg-gray-800"></div>
              </div>
              
              <div className="relative z-10 text-center">
                {/* Skill Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill Level */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-teal-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-teal-500/50`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-teal-500/20 border border-teal-500/30 text-teal-300 rounded-full text-xs font-medium group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  {skill.category}
                </div>
              </div>
              
              {/* Particle Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-teal-400 rounded-full animate-ping"
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
          <div className="text-center glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-teal-400 mb-2">{skillsData.length}+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">4+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;