import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-[#111827] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      
      {/* Animated wave background (CSS only version for performance) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#860098] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold font-outfit text-white mb-2">
              Parthiban<span className="text-[#860098]">.S</span>
            </h2>
            <p className="text-gray-400 text-sm">Building digital products, brands, and experience.</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/122012453148" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#F7D724] hover:border-[#F7D724] hover:shadow-[0_0_20px_rgba(247,215,36,0.3)] transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/parthiban-s-1a6619285/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#F7D724] hover:border-[#F7D724] hover:shadow-[0_0_20px_rgba(247,215,36,0.3)] transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:parthivijay333@gmail.com" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#F7D724] hover:border-[#F7D724] hover:shadow-[0_0_20px_rgba(247,215,36,0.3)] transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Link to="home" smooth duration={800} className="cursor-pointer group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all mb-4">
              <ArrowUp size={20} className="text-gray-300 group-hover:text-white group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Parthiban.S. All rights reserved.</p>
          <p>Designed &amp; Built with <span className="text-[#860098] animate-pulse">❤</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
