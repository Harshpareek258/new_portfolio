import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5', description: 'Semantic markup and modern HTML5 features' },
    { name: 'CSS', icon: 'fab fa-css3-alt', description: 'Responsive design and modern CSS techniques' },
    { name: 'JavaScript', icon: 'fab fa-js-square', description: 'ES6+ features and modern JavaScript development' },
    { name: 'Node.js', icon: 'fab fa-node-js', description: 'Server-side JavaScript and API development' },
    { name: 'Express', icon: 'fas fa-server', description: 'Fast and minimalist web framework' },
    { name: 'Python', icon: 'fab fa-python', description: 'Backend development and automation' },
    { name: 'Flask', icon: 'fas fa-flask', description: 'Lightweight Python web framework' },
    { name: 'Docker', icon: 'fab fa-docker', description: 'Containerization and deployment' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra', description: 'Container orchestration and scaling' },
    { name: 'C++', icon: 'fas fa-code', description: 'Object-oriented programming fundamentals' },
    { name: 'Java', icon: 'fab fa-java', description: 'Enterprise application development' },
    { name: 'MySQL', icon: 'fas fa-database', description: 'Relational database management' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="w-16 h-1 bg-[#B3003B] mx-auto rounded-full mb-16"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2D2D2D] p-6 rounded-2xl text-center shadow-lg border-2 border-transparent hover:border-[#B3003B] hover:bg-[#B3003B] hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl text-[#B3003B] group-hover:text-white mb-4 transition-colors duration-300">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;