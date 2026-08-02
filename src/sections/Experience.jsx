import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { EXPERIENCE } from '../data';
import { Briefcase, Check } from 'lucide-react';

const highlights = [
  "MERN Stack Developer",
  "7+ Months Experience",
  "5+ Production Projects",
  "REST API Development",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT Authentication",
  "Git & GitHub",
  "Agile Development",
  "Clean Architecture"
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 relative z-10 bg-white overflow-hidden">
      <SectionHeading title="Experience" subtitle="Professional Journey" />
      
      <div className="max-w-7xl mx-auto mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Side: Timeline */}
        <div className="lg:col-span-7 relative w-full">
          {/* Glowing Vertical Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#860098] via-[#A020B8] to-transparent"></div>
          
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="flex flex-col items-start mb-8 sm:mb-12 relative w-full">
              
              {/* Center Glowing Dot */}
              <div className="absolute left-4 sm:left-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-4 border-[#860098] transform -translate-x-[13px] sm:-translate-x-[15px] z-10 shadow-[0_0_20px_rgba(134,0,152,0.35)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#F7D724] animate-ping"></div>
              </div>
              
              {/* Card */}
              <motion.div 
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="w-full pl-12 sm:pl-16"
              >
                <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl relative group overflow-hidden border border-black/5 hover:border-[#860098] hover:shadow-[0_0_30px_rgba(134,0,152,0.15)] transition-all duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
                    <Briefcase size={64} color="#860098" />
                  </div>
                  
                  <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded-full bg-[#860098]/10 border border-[#860098]/20 text-[#860098] text-xs font-semibold tracking-wider">
                    {exp.duration}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-outfit font-bold text-gray-900 mb-1 sm:mb-2">{exp.position}</h3>
                  <h4 className="text-gray-500 font-medium mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">{exp.company}</h4>
                  
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#860098] mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>
          ))}

          {/* Development Workflow Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2 sm:mt-4 w-full pl-12 sm:pl-16"
          >
            <div 
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden group border border-[#860098]/20 bg-white/80 backdrop-blur-md shadow-[0_10px_40px_rgba(134,0,152,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(134,0,152,0.15)] transition-all duration-500"
              style={{ backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #860098, #C13DDA)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}
            >
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#C13DDA]/5 blur-3xl rounded-full"></div>

              <h3 className="text-lg sm:text-xl font-outfit font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-xl">🛠</span>
                Development Workflow
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  "Requirement Analysis",
                  "UI Development",
                  "REST API Development",
                  "MongoDB Database Design",
                  "Testing & Debugging",
                  "Git & GitHub",
                  "Deployment",
                  "Performance Optimization"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-white/60 transition-colors duration-200"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: idx * 0.06 + 0.2 }}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#860098]/10 border border-[#860098]/30 flex items-center justify-center text-[#860098] shrink-0"
                    >
                      <Check size={12} className="stroke-[3] sm:hidden" />
                      <Check size={14} className="stroke-[3] hidden sm:block" />
                    </motion.div>
                    <span className="text-gray-700 text-xs sm:text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Professional Highlights Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 w-full lg:sticky lg:top-24"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-black/5 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-[#860098]/20 hover:shadow-[0_25px_60px_rgba(134,0,152,0.1)] transition-all duration-500">
            {/* Background decorative glow */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#860098]/10 blur-3xl rounded-full"></div>
            
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded bg-[#860098]"></span>
              Professional Highlights
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-white/40 transition-colors duration-200 cursor-default"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: idx * 0.05 + 0.2 }}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#860098]/10 border border-[#860098]/30 flex items-center justify-center text-[#860098] shrink-0"
                  >
                    <Check size={12} className="stroke-[3]" />
                  </motion.div>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
