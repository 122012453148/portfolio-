import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-premium z-[1001] origin-left"
      style={{ scaleX: scrollYProgress, backgroundImage: 'var(--background-image-gradient-luxury)' }}
    />
  );
};

export default ScrollProgress;
