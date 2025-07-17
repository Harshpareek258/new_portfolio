import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 text-sm font-medium">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Validated skills and continuous learning in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer animate-fade-in shadow-lg border border-red-100 hover:shadow-2xl hover:shadow-red-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {cert.logo}
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-3 font-medium">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">Verified</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-500 transition-colors duration-200">
                      <ExternalLink size={14} />
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-red-100">
            <div className="text-4xl font-bold text-red-600 mb-2">4+</div>
            <div className="text-gray-700">Certifications Earned</div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-red-100">
            <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-700">Completion Rate</div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-red-100">
            <div className="text-4xl font-bold text-red-600 mb-2">2024</div>
            <div className="text-gray-700">Latest Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;