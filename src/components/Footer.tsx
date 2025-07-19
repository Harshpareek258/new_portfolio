import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2D2D] text-white py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="mb-4">
          &copy; 2024 Harsh Pareek. All rights reserved. Built with ❤️ and modern web technologies.
        </p>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-[#B3003B] hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <i className="fas fa-arrow-up"></i>
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;