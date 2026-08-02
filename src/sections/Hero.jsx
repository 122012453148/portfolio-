import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import TiltModule from 'react-parallax-tilt';
const Tilt = TiltModule.default || TiltModule;
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import MarqueeModule from 'react-fast-marquee';
const Marquee = MarqueeModule.default || MarqueeModule;

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-20 px-4 sm:px-8 md:px-16 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#860098]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#C13DDA]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        
        {/* LEFT: Text */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel mb-4 sm:mb-6 border border-[#860098]/20 text-xs sm:text-sm font-medium text-gray-600 animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-[#F7D724] animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold font-outfit text-gray-900 mb-3 sm:mb-4 leading-tight tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient">Parthiban.S</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-500 mb-4 sm:mb-6 font-outfit h-[32px] sm:h-[40px]"
          >
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 1000,
                'Full Stack Engineer', 1000,
                'React Specialist', 1000,
                'Creative Coder', 1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-500 max-w-lg mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg"
          >
            I architect and develop scalable, high-performance web applications with modern technologies, delivering premium digital experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 justify-center md:justify-start mb-8 sm:mb-12 w-full sm:w-auto"
          >
            <Link to="projects" smooth duration={500} className="cursor-pointer group flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#860098] via-[#A020B8] to-[#C13DDA] text-white font-bold shadow-[0_0_20px_rgba(134,0,152,0.25)] hover:shadow-[0_0_35px_rgba(134,0,152,0.45)] transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/resume/Parthiban_S_MERN_Stack_Developer_Resume.pdf" download="Parthiban_S_MERN_Stack_Developer_Resume.pdf" className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white text-gray-700 font-medium hover:bg-black/5 transition-all duration-300 border border-[#860098]/30 hover:border-[#860098] hover:text-[#860098] text-sm sm:text-base">
              <Download size={18} /> Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-6 text-gray-400 justify-center md:justify-start"
          >
            <a href="https://github.com/122012453148" target="_blank" rel="noopener noreferrer" className="hover:text-[#860098] hover:-translate-y-1 transition-all duration-300"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/parthiban-s-1a6619285/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn" className="hover:text-[#860098] hover:-translate-y-1 transition-all duration-300"><Linkedin size={22} /></a>
            <a href="mailto:parthivijay333@gmail.com" className="hover:text-[#860098] hover:-translate-y-1 transition-all duration-300"><Mail size={22} /></a>
          </motion.div>
        </div>

        {/* RIGHT: Profile Image + Tech Stack Marquee */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
          className="order-1 md:order-2 flex flex-col items-center gap-5"
        >
          {/* Profile Image with Tilt */}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000} className="relative z-10">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-[2rem] p-1 border-gradient bg-white shadow-[0_0_50px_rgba(134,0,152,0.15)]">
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#860098]/10 to-transparent mix-blend-overlay z-10"></div>
                <img src="/hero-image.jpg" alt="Parthiban.S" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
              </div>
            </div>
          </Tilt>

          {/* Tech Stack Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-56 sm:w-72 md:w-[340px] lg:w-[400px] relative"
          >
            {/* Glass container */}
            <div
              style={{
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(134,0,152,0.25)',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(134,0,152,0.08)',
                padding: '12px 0',
                overflow: 'hidden',
                /* Edge fade masks */
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              }}
            >
              <Marquee
                speed={35}
                gradient={false}
                pauseOnHover={true}
                loop={0}
                style={{ overflow: 'visible' }}
              >
                {[
                  { name: 'React.js',    icon: 'devicon-react-original',      color: '#61DAFB' },
                  { name: 'MongoDB',     icon: 'devicon-mongodb-plain',        color: '#47A248' },
                  { name: 'Node.js',     icon: 'devicon-nodejs-plain',         color: '#339933' },
                  { name: 'Express.js',  icon: 'devicon-express-original',     color: '#888888' },
                  { name: 'JavaScript', icon: 'devicon-javascript-plain',     color: '#F7DF1E' },
                  { name: 'HTML5',       icon: 'devicon-html5-plain',          color: '#E34F26' },
                  { name: 'CSS3',        icon: 'devicon-css3-plain',           color: '#1572B6' },
                  { name: 'Git',         icon: 'devicon-git-plain',            color: '#F05032' },
                  { name: 'GitHub',      icon: 'devicon-github-original',      color: '#181717' },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="hero-tech-pill"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(134,0,152,0.30)',
                      borderRadius: '999px',
                      padding: '7px 14px',
                      margin: '0 8px',
                      cursor: 'default',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(134,0,152,0.22)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <i className={`${tech.icon} text-[18px]`} style={{ color: tech.color }} />
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151', letterSpacing: '0.01em' }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
