import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white/50 backdrop-blur-md border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent mb-2" style={{
              background: 'linear-gradient(to right, #6366f1, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              KomalRai.dev
            </h3>
            <p className="text-gray-400 text-sm">Building the future of full-stack web applications.</p>
          </div>
          
          <div className="flex gap-10 text-gray-500 font-medium text-sm">
            <a href="#home" className="hover:text-[#6366f1] transition-colors">Home</a>
            <a href="#skills" className="hover:text-[#6366f1] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#6366f1] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#6366f1] transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/KomalRai18" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 text-gray-400 hover:text-[#6366f1] rounded-xl transition-all"><Github size={20} /></a>
            <a href="https://linkedin.com/in/komalrai" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 text-gray-400 hover:text-indigo-600 rounded-xl transition-all"><Linkedin size={20} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 text-gray-400 hover:text-sky-400 rounded-xl transition-all"><Twitter size={20} /></a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-gray-400 text-xs flex items-center justify-center">
            &copy; {currentYear} Komal Rai. All rights reserved. Made with <Heart size={12} className="mx-1.5 text-rose-400 fill-current" /> using React & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
