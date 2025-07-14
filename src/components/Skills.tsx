import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('DevOps');

  const skillCategories = Object.keys(portfolioData.skills);

  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: string } = {
      'Docker': '🐳',
      'Kubernetes': '☸️',
      'Jenkins': '🔧',
      'Git': '📝',
      'Terraform': '🏗️',
      'Ansible': '⚙️',
      'AWS': '☁️',
      'Python': '🐍',
      'Bash': '💻',
      'Linux': '🐧',
      'RHEL': '🎩',
      'HTML': '🌐',
      'CSS': '🎨',
      'JavaScript': '⚡',
      'Django': '🎯',
      'Flask': '🌶️',
      'REST APIs': '🔗',
      'MySQL': '🗄️',
      'MongoDB': '🍃',
      'C': '⚡',
      'C++': '⚡',
      'Java': '☕'
    };
    return iconMap[skill] || '💡';
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioData.skills[activeCategory as keyof typeof portfolioData.skills].map((skill, index) => (
            <div
              key={skill}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group hover:shadow-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getSkillIcon(skill)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {skill}
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-teal-500 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:from-teal-400 group-hover:to-purple-500"
                    style={{ 
                      width: `${Math.random() * 30 + 70}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {Math.floor(Math.random() * 30 + 70)}% Proficiency
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;