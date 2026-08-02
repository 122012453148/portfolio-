import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-[#111827] pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-white/5 overflow-hidden">
      
      {/* Animated wave background (CSS only version for performance) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#860098] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold font-outfit text-white mb-2">
              Parthiban<span className="text-[#860098]">.S</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">Building digital products, brands, and experiences.</p>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <a href="https://github.com/122012453148" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#860098] hover:border-[#860098] hover:shadow-[0_0_20px_rgba(134,0,152,0.3)] transition-all duration-300">
              <Github size={18} className="sm:hidden" />
              <Github size={20} className="hidden sm:block" />
            </a>
            <a href="https://www.linkedin.com/in/parthiban-s-1a6619285/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#860098] hover:border-[#860098] hover:shadow-[0_0_20px_rgba(134,0,152,0.3)] transition-all duration-300">
              <Linkedin size={18} className="sm:hidden" />
              <Linkedin size={20} className="hidden sm:block" />
            </a>
            <a href="mailto:parthivijay333@gmail.com" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#860098] hover:border-[#860098] hover:shadow-[0_0_20px_rgba(134,0,152,0.3)] transition-all duration-300">
              <Mail size={18} className="sm:hidden" />
              <Mail size={20} className="hidden sm:block" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Link to="home" smooth duration={800} className="cursor-pointer group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
              <ArrowUp size={18} className="text-gray-300 group-hover:text-white group-hover:-translate-y-1 transition-transform sm:hidden" />
              <ArrowUp size={20} className="text-gray-300 group-hover:text-white group-hover:-translate-y-1 transition-transform hidden sm:block" />
            </Link>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Parthiban.S. All rights reserved.</p>
          <p>Designed &amp; Built with <span className="text-[#860098] animate-pulse">❤</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
