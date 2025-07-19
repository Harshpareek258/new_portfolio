import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] dark:text-white mb-4">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-[#B3003B] mx-auto rounded-full mb-16"></div>
        
        <div className="bg-white dark:bg-[#2D2D2D] rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="text-3xl text-[#B3003B] mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">harshpareek258@gmail.com</p>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="text-3xl text-[#B3003B] mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+91 93523 19099</p>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="text-3xl text-[#B3003B] mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Rajasthan, India</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2D2D2D] dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#B3003B] focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-700 text-[#2D2D2D] dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#B3003B] focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-700 text-[#2D2D2D] dark:text-white"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] dark:text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#B3003B] focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-700 text-[#2D2D2D] dark:text-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#B3003B] text-white rounded-full font-semibold hover:bg-[#8B0029] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;