import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Harsh Pareek
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Harsh Pareek. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;