import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const timeline = [
    {
      type: 'education',
      title: 'B.Tech Computer Science Engineering',
      organization: 'Arya College of Engineering',
      period: '2022 - 2026',
      location: 'Rajasthan, India',
      description: 'Currently pursuing Bachelor of Technology in Computer Science with focus on Cloud Computing and DevOps practices.'
    },
    {
      type: 'experience',
      title: 'DevOps Intern',
      organization: 'Tech Company',
      period: '2024',
      location: 'Remote',
      description: 'Worked on CI/CD pipeline implementation and container orchestration with Docker and Kubernetes.'
    },
    {
      type: 'experience',
      title: 'Cloud Engineering Trainee',
      organization: 'Cloud Solutions',
      period: '2023',
      location: 'Remote',
      description: 'Gained hands-on experience with AWS services and infrastructure automation using Terraform.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#33b8ff] to-[#11efd0] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#33b8ff] to-[#11efd0]"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#33b8ff] rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`glass-card p-6 rounded-2xl ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } md:w-5/12 hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-center gap-3 mb-3">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-6 h-6 text-[#33b8ff]" />
                    ) : (
                      <Calendar className="w-6 h-6 text-[#33b8ff]" />
                    )}
                    <span className="text-sm font-medium text-[#33b8ff]">
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {item.organization}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{item.location}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;