import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { SKILLS } from '../data';
import TiltModule from 'react-parallax-tilt';
const Tilt = TiltModule.default || TiltModule;
import MarqueeModule from 'react-fast-marquee';
const Marquee = MarqueeModule.default || MarqueeModule;

const SkillBar = ({ name, icon, percentage, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-5 sm:mb-6"
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <span className="text-lg sm:text-xl">{icon}</span>
        <span className="text-gray-800 font-medium text-sm sm:text-base">{name}</span>
      </div>
      <span className="text-gray-500 text-xs sm:text-sm">{percentage}%</span>
    </div>
    <div className="w-full bg-black/5 rounded-full h-2 sm:h-2.5 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-[#860098] to-[#F7D724]"
      ></motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 relative z-10">
      <SectionHeading title="Expertise" subtitle="Tech Stack" />
      
      {/* Marquee */}
      <div className="mt-8 sm:mt-10 mb-12 sm:mb-20">
        <Marquee gradient={true} gradientColor={[255, 255, 255]} gradientWidth={50} speed={40} className="py-4">
          {[...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.database].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 sm:gap-3 mx-4 sm:mx-8 glass-panel px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-black/5">
              <span className="text-xl sm:text-2xl">{skill.icon}</span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
        
        {/* Frontend Skills */}
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/5 relative overflow-hidden group hover:border-[#860098]/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#860098]/5 blur-3xl rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-gray-900 mb-6 sm:mb-8">Frontend Development</h3>
            
            <SkillBar name="React.js" icon={<i className="devicon-react-original text-[#61DAFB]"></i>} percentage={90} delay={0.1} />
            <SkillBar name="JavaScript" icon={<i className="devicon-javascript-plain text-[#F7DF1E]"></i>} percentage={85} delay={0.2} />
            <SkillBar name="Tailwind CSS" icon={<i className="devicon-tailwindcss-plain text-[#06B6D4]"></i>} percentage={95} delay={0.3} />
            <SkillBar name="HTML/CSS" icon={<i className="devicon-html5-plain text-[#E34F26]"></i>} percentage={95} delay={0.4} />
          </div>
        </Tilt>

        {/* Backend & DB Skills */}
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/5 relative overflow-hidden group hover:border-[#860098]/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7D724]/10 blur-3xl rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-gray-900 mb-6 sm:mb-8">Backend & Database</h3>
            
            <SkillBar name="Node.js" icon={<i className="devicon-nodejs-plain text-[#339933]"></i>} percentage={85} delay={0.1} />
            <SkillBar name="Express.js" icon={<i className="devicon-express-original text-gray-800"></i>} percentage={80} delay={0.2} />
            <SkillBar name="MongoDB" icon={<i className="devicon-mongodb-plain text-[#47A248]"></i>} percentage={85} delay={0.3} />
            <SkillBar name="REST APIs" icon={<i className="devicon-nodejs-plain text-[#339933]"></i>} percentage={90} delay={0.4} />
          </div>
        </Tilt>

      </div>
    </section>
  );
};

export default Skills;
