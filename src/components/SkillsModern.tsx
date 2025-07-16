import React, { useState } from 'react';
import { Code, Database, Globe, Server, Smartphone, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
  color: string;
}

const SkillsModern: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills: Skill[] = [
    {
      name: 'HTML',
      icon: <Globe className="w-8 h-8" />,
      level: 95,
      category: 'frontend',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CSS',
      icon: <Code className="w-8 h-8" />,
      level: 90,
      category: 'frontend',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'JavaScript',
      icon: <Zap className="w-8 h-8" />,
      level: 88,
      category: 'frontend',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'React',
      icon: <Smartphone className="w-8 h-8" />,
      level: 85,
      category: 'frontend',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Python',
      icon: <Server className="w-8 h-8" />,
      level: 92,
      category: 'backend',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'MongoDB',
      icon: <Database className="w-8 h-8" />,
      level: 80,
      category: 'database',
      color: 'from-green-600 to-green-400'
    },
    {
      name: 'Node.js',
      icon: <Server className="w-8 h-8" />,
      level: 82,
      category: 'backend',
      color: 'from-green-500 to-lime-500'
    },
    {
      name: 'Docker',
      icon: <Code className="w-8 h-8" />,
      level: 78,
      category: 'devops',
      color: 'from-blue-600 to-blue-400'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', count: skills.length },
    { id: 'frontend', name: 'Frontend', count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: skills.filter(s => s.category === 'backend').length },
    { id: 'database', name: 'Database', count: skills.filter(s => s.category === 'database').length },
    { id: 'devops', name: 'DevOps', count: skills.filter(s => s.category === 'devops').length }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 text-sm font-medium">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and best practices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.name}
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </span>
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Skill Level */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-semibold text-purple-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:shadow-lg`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs font-medium">
                {skill.category}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">{skills.length}+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsModern;