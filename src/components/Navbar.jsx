import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'top-4' : 'top-0'}`}
    >
      <div className={`mx-auto flex justify-between items-center transition-all duration-300 ${scrolled ? 'w-[90%] max-w-4xl glass-nav rounded-2xl px-6 py-3' : 'w-full px-8 py-5 bg-transparent'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#860098] to-[#F7D724] flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(134,0,152,0.35)] group-hover:shadow-[0_0_25px_rgba(134,0,152,0.55)] transition-all duration-300">
            P
          </div>
          <h1 className="text-xl font-bold font-outfit hidden sm:block text-gray-900 tracking-wide">
            Parthiban<span className="text-[#860098]">.S</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ id, link }) => (
            <li key={id} className="capitalize text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer transition-colors duration-200">
              <Link 
                to={link} 
                smooth 
                duration={500} 
                spy 
                activeClass="text-transparent bg-clip-text bg-gradient-to-r from-[#860098] to-[#F7D724] font-semibold"
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <Link to="contact" smooth duration={500}>
              <button className="px-5 py-2 rounded-xl bg-[#860098]/10 hover:bg-[#860098]/20 border border-[#860098]/20 text-[#860098] font-medium transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(134,0,152,0.15)]">
                Contact Me
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-gray-600 md:hidden hover:text-gray-900 transition-colors">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.ul 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-white/95 backdrop-blur-xl"
            >
              {links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl font-outfit text-gray-600 hover:text-gray-900 transition-colors">
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-6">
                <Link onClick={() => setNav(!nav)} to="contact" smooth duration={500}>
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#860098] to-[#F7D724] text-white font-semibold shadow-[0_0_30px_rgba(134,0,152,0.25)]">
                    Let's Talk
                  </button>
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
