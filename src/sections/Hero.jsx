import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import TiltModule from 'react-parallax-tilt';
const Tilt = TiltModule.default || TiltModule;
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-16 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#860098]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F7D724]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT: Text */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border border-black/5 text-sm font-medium text-gray-600"
          >
            <span className="w-2 h-2 rounded-full bg-[#860098] animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-outfit text-gray-900 mb-4 leading-tight tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient">Parthiban.S</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-gray-500 mb-6 font-outfit h-[40px]"
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
            className="text-gray-500 max-w-lg mb-10 leading-relaxed text-lg"
          >
            I architect and develop scalable, high-performance web applications with modern technologies, delivering premium digital experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-5 justify-center md:justify-start mb-12"
          >
            <Link to="projects" smooth duration={500} className="cursor-pointer group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#860098] to-[#F7D724] text-white font-bold shadow-[0_0_20px_rgba(134,0,152,0.25)] hover:shadow-[0_0_30px_rgba(134,0,152,0.45)] transition-all duration-300 hover:scale-105">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/resume/Parthiban_S_MERN_Stack_Developer_Resume.pdf" download="Parthiban_S_MERN_Stack_Developer_Resume.pdf" className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass-panel text-gray-700 font-medium hover:bg-black/5 transition-all duration-300 border border-black/10">
              <Download size={18} /> Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-6 text-gray-400"
          >
            <a href="https://github.com/122012453148" target="_blank" rel="noopener noreferrer" className="hover:text-[#860098] hover:-translate-y-1 transition-all duration-300"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/parthiban-s-1a6619285/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn" className="hover:text-[#860098] hover:-translate-y-1 transition-all duration-300"><Linkedin size={24} /></a>
            <a href="mailto:parthivijay333@gmail.com" className="hover:text-[#860098] hover:-translate-y-1 transition-all duration-300"><Mail size={24} /></a>
          </motion.div>
        </div>

        {/* RIGHT: Interactive Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000} className="relative z-10">
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-[2rem] p-1 border-gradient bg-[#E9E7D4] shadow-[0_0_50px_rgba(134,0,152,0.15)]">
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[#E9E7D4] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#860098]/10 to-transparent mix-blend-overlay z-10"></div>
                <img src="/hero-image.jpg" alt="Parthiban.S" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-6 -left-6 px-4 py-2 glass-panel rounded-xl flex items-center gap-2 border border-black/5 z-20 shadow-xl">
              <i className="devicon-react-original text-[#61DAFB] text-2xl"></i>
              <span className="font-semibold text-sm">React</span>
            </motion.div>
            
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute -bottom-8 right-10 px-4 py-2 glass-panel rounded-xl flex items-center gap-2 border border-black/5 z-20 shadow-xl">
              <i className="devicon-nodejs-plain text-[#339933] text-2xl"></i>
              <span className="font-semibold text-sm">Node.js</span>
            </motion.div>

            <motion.div animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 -right-8 px-3 py-3 glass-panel rounded-xl flex items-center gap-2 border border-black/5 z-20 shadow-xl">
              <i className="devicon-mongodb-plain text-[#47A248] text-3xl"></i>
            </motion.div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
