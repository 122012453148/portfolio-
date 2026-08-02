import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS } from '../data';
import { ExternalLink, Lock, ChevronDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import TiltModule from 'react-parallax-tilt';
const Tilt = TiltModule.default || TiltModule;

const PortalDropdown = ({ portals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const updateCoords = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      updateCoords();
      window.addEventListener('resize', updateCoords);
      window.addEventListener('scroll', updateCoords);
    }
    return () => {
      window.removeEventListener('resize', updateCoords);
      window.removeEventListener('scroll', updateCoords);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && 
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button 
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)} 
        className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#860098] via-[#A020B8] to-[#C13DDA] text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(134,0,152,0.3)] transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
      >
        View Portals <ChevronDown size={18} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && createPortal(
          <motion.div 
            ref={dropdownRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ 
              position: 'absolute',
              top: `${coords.top + 8}px`,
              left: `${coords.left}px`,
              minWidth: `${Math.max(coords.width, 220)}px`,
              zIndex: 99999
            }}
            className="bg-white/90 backdrop-blur-xl border border-[#860098]/30 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(134,0,152,0.15)] flex flex-col"
          >
            {portals.map((portal, idx) => (
              <a 
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-3 hover:bg-[#860098]/10 text-gray-700 hover:text-gray-900 transition-colors border-b border-black/5 last:border-0"
              >
                <span className="text-lg">{portal.icon}</span>
                <span className="text-sm font-semibold">{portal.name}</span>
              </a>
            ))}
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </div>
  );
};

const BrowserMockup = ({ image, title, url }) => {
  return (
    <div className="w-full rounded-xl sm:rounded-2xl p-[1px] bg-gradient-to-r from-[#860098] via-[#A020B8] to-[#C13DDA] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(134,0,152,0.15)] hover:-translate-y-1">
      <div className="w-full h-full rounded-[11px] sm:rounded-[15px] overflow-hidden bg-white flex flex-col group relative">
        {/* Browser Header */}
        <div className="h-8 sm:h-10 bg-gray-50 flex items-center px-3 sm:px-4 gap-3 sm:gap-4 border-b border-black/5">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="flex-grow flex justify-center">
            <div className="bg-gray-100 text-gray-500 text-[10px] sm:text-xs px-3 sm:px-4 py-0.5 sm:py-1 rounded-md flex items-center gap-1.5 sm:gap-2 max-w-[140px] sm:max-w-[200px] truncate border border-black/5">
              <Lock size={10} className="text-green-500 shrink-0 sm:hidden" />
              <Lock size={12} className="text-green-500 shrink-0 hidden sm:block" />
              {new URL(url).hostname}
            </div>
          </div>
        </div>
        {/* Browser Content */}
        <a href={url} target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden cursor-pointer w-full bg-gray-100 aspect-[16/9]">
          <img src={image} alt={title} className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-700" />
          
          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/95 backdrop-blur-md text-gray-900 font-semibold text-xs sm:text-sm shadow-xl">
              <ExternalLink size={14} className="text-[#860098] sm:hidden" />
              <ExternalLink size={16} className="text-[#860098] hidden sm:block" />
              View Live Demo
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const FeaturedProject = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full relative group mb-12 sm:mb-24"
    >
      <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} scale={1.01} transitionSpeed={2000}>
        <div className="glass-panel p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-[#860098]/30 transition-all duration-500 relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Background Glows */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#860098]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#860098]/15 transition-all duration-700"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#C13DDA]/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#C13DDA]/10 transition-all duration-700"></div>
          
          {/* Left: Mockup (55% desktop width with gap accounted for) */}
          <div className="w-full lg:w-[calc(55%-1.5rem)] flex-shrink-0 relative z-10">
            <BrowserMockup image={project.image} title={project.name} url={project.live} />
          </div>

          {/* Right: Content (45% desktop width with gap accounted for) */}
          <div className="w-full lg:w-[calc(45%-1.5rem)] flex-shrink-0 flex flex-col items-start relative z-10">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#860098]/10 border border-[#860098]/20">
                <span className="text-[#860098] text-[10px] sm:text-xs font-bold uppercase tracking-wider">⭐ Featured Project</span>
              </div>
              <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#860098]/10 border border-[#860098]/20">
                <span className="text-[#860098] text-[10px] sm:text-xs font-bold uppercase tracking-wider">🔥 Most Advanced</span>
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-extrabold text-gray-900 mb-2 sm:mb-3 leading-tight">{project.name}</h3>
            <p className="text-[#860098] font-semibold tracking-wide uppercase text-xs sm:text-sm mb-4 sm:mb-6">{project.category}</p>
            
            <p className="text-gray-500 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-lg">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
              {project.tech.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 border border-black/5 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:bg-[#860098]/5 hover:scale-105 hover:border-[#860098]/20 transition-all cursor-default shadow-sm">
                  <span className="text-base sm:text-lg">{t.icon}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 mt-auto w-full">
              {project.portals && project.portals.length > 0 ? (
                <PortalDropdown portals={project.portals} />
              ) : (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#860098] via-[#A020B8] to-[#C13DDA] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(134,0,152,0.3)] hover:-translate-y-0.5 transition-all text-sm sm:text-base">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gray-50 border border-black/10 text-gray-800 font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 hover:-translate-y-0.5 transition-all text-sm sm:text-base">
                <FaGithub size={18} /> Source Code
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const StandardProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.02} transitionSpeed={2000} className="h-full">
        <div className="glass-panel p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] border border-black/5 hover:border-[#860098]/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
          
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#860098]/5 to-transparent blur-3xl rounded-full group-hover:from-[#860098]/10 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <BrowserMockup image={project.image} title={project.name} url={project.live} />
          </div>
          
          <div className="flex flex-col flex-grow mt-5 sm:mt-8 relative z-10 px-1 sm:px-3">
            <p className="text-[#860098] text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2">{project.category}</p>
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#860098] transition-colors">{project.name}</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {project.tech.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-50 border border-black/5 rounded-full text-[10px] sm:text-xs font-medium text-gray-600 hover:bg-[#860098]/5 hover:scale-105 hover:border-[#860098]/20 transition-all cursor-default">
                  <span className="text-sm sm:text-base">{t.icon}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 mt-auto">
              {project.portals && project.portals.length > 0 ? (
                <PortalDropdown portals={project.portals} />
              ) : (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#860098] via-[#A020B8] to-[#C13DDA] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(134,0,152,0.2)] hover:-translate-y-0.5 transition-all">
                  <ExternalLink size={14} className="sm:hidden" />
                  <ExternalLink size={16} className="hidden sm:block" />
                  Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gray-50 border border-black/10 text-gray-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 hover:-translate-y-0.5 transition-all">
                <FaGithub size={14} className="sm:hidden" />
                <FaGithub size={16} className="hidden sm:block" />
                Code
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const featured = PROJECTS.find(p => p.featured);
  const others = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 relative z-10">
      <SectionHeading title="Selected Works" subtitle="Portfolio" />
      
      <div className="max-w-7xl mx-auto mt-10 sm:mt-16">
        
        {/* Featured Projects Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full glass-panel border border-[#860098]/20 text-[#860098] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-[0_0_15px_rgba(134,0,152,0.15)]">
            ⭐ Featured Projects
          </div>
          <p className="text-gray-500 text-sm sm:text-lg leading-relaxed px-2">
            Some of my best full-stack applications built using the MERN Stack, designed to solve real-world business problems with scalable architecture and modern user experiences.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featured && <FeaturedProject project={featured} />}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {others.map((project, idx) => (
            <StandardProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
