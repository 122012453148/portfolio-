import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TiltModule from 'react-parallax-tilt';
const Tilt = TiltModule.default || TiltModule;

const Counter = ({ target, label, prefix = '', suffix = '+' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border border-black/5 hover:border-[#860098]/30 transition-all duration-300">
      <h3 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-2">
        <span className="text-[#860098]">{prefix}</span>
        {target}
        <span className="text-[#F7D724]">{suffix}</span>
      </h3>
      <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-16 relative z-10 bg-[#E9E7D4]">
      <SectionHeading title="About Me" subtitle="Who I Am" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center mt-16">
        
        {/* LEFT: Image with Parallax */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex justify-center"
        >
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
            <div className="relative w-full max-w-sm rounded-[2rem] p-1 border-gradient bg-[#E9E7D4] group shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="w-full rounded-[1.8rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src="/about-image.jpg" 
                  alt="Professional" 
                  className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter contrast-125"
                />
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* RIGHT: Content */}
        <div className="md:col-span-7">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-outfit font-bold text-gray-900 mb-6"
          >
            Engineering <span className="text-gradient">Digital Experiences</span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            I'm a passionate MERN Stack Developer specializing in building high-performance, visually stunning full-stack web applications. I bridge the gap between design and engineering, turning complex problems into elegant, scalable solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <Counter target="7" label="Months Experience" prefix="0" suffix="+" />
            <Counter target="5" label="Major Projects" prefix="0" suffix="+" />
            <Counter target="10" label="Technologies" prefix="" suffix="+" />
            <Counter target="MERN" label="Full Stack Developer" prefix="" suffix="" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
