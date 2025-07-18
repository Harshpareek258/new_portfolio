import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF921C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB84D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF921C]/20 border border-[#FF921C]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#FF921C] rounded-full animate-pulse"></div>
            <span className="text-[#FF921C] text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF921C] to-[#FFB84D]">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing real-world applications and innovative solutions I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#3a3d4a]/50 backdrop-blur-xl rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer animate-fade-in shadow-lg border border-[#FF921C]/20 hover:shadow-2xl hover:shadow-[#FF921C]/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF921C] text-white rounded-lg font-medium hover:bg-[#FFB84D] transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github size={16} />
                    GitHub Code
                  </a>
                </div>

                {/* Project number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-[#FF921C] to-[#FFB84D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF921C] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#FF921C]/20 border border-[#FF921C]/30 text-[#FF921C] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF921C] to-[#FFB84D] text-white rounded-lg font-medium hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#FF921C]/30 text-[#FF921C] rounded-lg font-medium hover:bg-[#FF921C]/10 hover:border-[#FF921C] transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#FF921C] text-[#FF921C] rounded-xl font-semibold transition-all duration-300 hover:bg-[#FF921C]/10 hover:scale-105 cursor-pointer"
          >
            <span>View More Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;