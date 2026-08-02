import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { EDUCATION } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import TiltModule from 'react-parallax-tilt';
const Tilt = TiltModule.default || TiltModule;

const journeySteps = [
  { year: "2019", title: "BCA Journey Begins", icon: <BookOpen size={16} /> },
  { year: "2022", title: "Bachelor of Computer Applications Completed", icon: <GraduationCap size={16} /> },
  { year: "2022", title: "MCA Specialization Starts", icon: <BookOpen size={16} /> },
  { year: "2024", title: "Master of Computer Applications Completed", icon: <GraduationCap size={16} /> },
  { year: "2024", title: "Professional MERN Developer", icon: <Award size={16} /> }
];

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 relative overflow-hidden z-10">
      
      {/* Academic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #860098 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Soft Animated Background Blobs */}
      <div className="absolute top-1/4 -left-32 w-[25rem] sm:w-[35rem] h-[25rem] sm:h-[35rem] bg-[#860098]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-[25rem] sm:w-[35rem] h-[25rem] sm:h-[35rem] bg-[#C13DDA]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
      
      {/* Floating Graduation Cap Icons */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-[#860098]/10 hidden lg:block"
      >
        <GraduationCap size={48} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 right-12 text-[#C13DDA]/10 hidden lg:block"
      >
        <GraduationCap size={56} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[20%] text-[#860098]/10 hidden lg:block"
      >
        <GraduationCap size={40} />
      </motion.div>

      <SectionHeading title="Education" subtitle="Academic Background" />
      
      {/* Existing Education Cards */}
      <div className="max-w-5xl mx-auto mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
        
        {/* Thin Connecting Timeline line between cards */}
        <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#860098]/20 via-[#C13DDA]/20 to-[#860098]/20 -translate-y-1/2 z-0"></div>
        
        {EDUCATION.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative z-10"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={2000} className="h-full">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl h-full border border-black/5 hover:border-[#860098] hover:shadow-[0_0_30px_rgba(134,0,152,0.15)] transition-all duration-300 relative overflow-hidden group">
                
                {/* Background blur orb */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#860098]/5 blur-3xl rounded-full group-hover:bg-[#860098]/10 transition-all"></div>
                
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#860098] via-[#A020B8] to-[#C13DDA] flex items-center justify-center text-white shadow-lg shadow-[#860098]/20 shrink-0">
                    <GraduationCap size={24} className="sm:hidden" />
                    <GraduationCap size={28} className="hidden sm:block" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-outfit font-bold text-gray-900 leading-tight">{edu.degree}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{edu.duration}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">{edu.institution}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{edu.details}</p>
                </div>
                
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Education Journey Timeline */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-28 relative z-10">
        <h3 className="text-lg sm:text-xl font-outfit font-bold text-gray-900 text-center mb-8 sm:mb-12 uppercase tracking-widest flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#860098]"></span>
          Journey Timeline
          <span className="w-1.5 h-1.5 rounded-full bg-[#860098]"></span>
        </h3>
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-4 px-4 py-6 sm:py-8">
          {/* Horizontal Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#860098] via-[#C13DDA] to-[#860098] transform -translate-y-1/2 z-0 rounded-full"></div>
          
          {/* Vertical Line on Mobile */}
          <div className="block md:hidden absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#860098] via-[#C13DDA] to-[#860098] transform -translate-x-1/2 z-0 rounded-full"></div>

          {journeySteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 w-full md:w-1/5"
            >
              {/* Year Label */}
              <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-black/5 text-[#860098] text-xs sm:text-sm font-extrabold shadow-md mb-3 sm:mb-4">
                {step.year}
              </div>
              
              {/* Icon Node */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#860098] via-[#A020B8] to-[#C13DDA] flex items-center justify-center text-white shadow-lg shadow-[#860098]/20 z-10 transition-transform hover:scale-110 duration-300">
                {step.icon}
              </div>
 
              {/* Title Description */}
              <p className="text-gray-700 text-xs font-semibold mt-3 sm:mt-4 max-w-[150px] leading-relaxed">
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Education;
