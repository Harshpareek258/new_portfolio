import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Webcam Photo Capture',
      tech: 'JavaScript, WebRTC, Canvas API',
      description: 'A web application that captures photos using the device\'s webcam with real-time preview and download functionality.',
      github: 'https://github.com/Harshpareek258'
    },
    {
      title: 'Email Media Sender',
      tech: 'Node.js, Express, Multer, Nodemailer',
      description: 'Full-stack application for sending photos, videos, and messages via email with file upload and processing capabilities.',
      github: 'https://github.com/Harshpareek258'
    },
    {
      title: 'Dockerized Python CLI App',
      tech: 'Python, Docker, CLI',
      description: 'Command-line interface application containerized with Docker for cross-platform deployment and scalability.',
      github: 'https://github.com/Harshpareek258'
    },
    {
      title: 'Flask Backup Tool',
      tech: 'Flask, Docker, Python',
      description: 'Web-based backup solution built with Flask and containerized with Docker for easy deployment and management.',
      github: 'https://github.com/Harshpareek258'
    },
    {
      title: 'Geolocation Tracker',
      tech: 'JavaScript, Geolocation API, Maps',
      description: 'Real-time location tracking application using browser geolocation API with interactive map visualization.',
      github: 'https://github.com/Harshpareek258'
    },
    {
      title: 'Email Screenshot App',
      tech: 'JavaScript, EmailJS, Canvas',
      description: 'Application that captures screenshots and sends them via email using EmailJS for client-side email functionality.',
      github: 'https://github.com/Harshpareek258'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#2D2D2D]">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-[#B3003B] mx-auto rounded-full mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#B3003B]"
            >
              <div className="bg-gradient-to-r from-[#B3003B] to-[#8B0029] p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.tech}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#B3003B] text-white rounded-full font-medium hover:bg-[#8B0029] transition-colors duration-200"
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;