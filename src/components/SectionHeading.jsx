import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mb-16"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#860098]"></span>
        <h3 className="text-[#860098] font-semibold tracking-[0.2em] uppercase text-sm">{subtitle}</h3>
        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#860098]"></span>
      </div>
      <h2 className="text-4xl md:text-6xl font-outfit font-extrabold text-gray-900">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
