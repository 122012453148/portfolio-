import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'education' },
    { id: 6, link: 'projects' },
  ];

  const mobileLinks = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [nav]);

  // Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setNav(false);
    };
    if (nav) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nav]);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nav && menuRef.current && !menuRef.current.contains(event.target)) {
        // Only close if we didn't click the hamburger button itself
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        if (toggleBtn && !toggleBtn.contains(event.target)) {
          setNav(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [nav]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'top-2 sm:top-4' : 'top-0'}`}
    >
      <div className={`mx-auto flex justify-between items-center transition-all duration-300 ${scrolled ? 'w-[95%] sm:w-[90%] max-w-4xl glass-nav rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3' : 'w-full px-4 sm:px-8 py-4 sm:py-5 bg-transparent'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#860098] via-[#A020B8] to-[#C13DDA] flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-[0_0_15px_rgba(134,0,152,0.35)] group-hover:shadow-[0_0_25px_rgba(134,0,152,0.55)] transition-all duration-300">
            P
          </div>
          <h1 className="text-lg sm:text-xl font-bold font-outfit hidden sm:block text-gray-900 tracking-wide">
            Parthiban<span className="text-[#860098]">.S</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map(({ id, link }) => (
            <li key={id} className="capitalize text-gray-600 hover:text-[#860098] text-sm font-medium cursor-pointer transition-colors duration-200">
              <Link 
                to={link} 
                smooth 
                duration={500} 
                spy 
                activeClass="text-[#860098] font-semibold border-b-2 border-[#860098] pb-1"
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <Link to="contact" smooth duration={500}>
              <button className="px-4 lg:px-5 py-2 rounded-xl bg-white border border-[#860098] text-[#860098] hover:bg-[#860098] hover:text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(134,0,152,0.15)] text-sm">
                Contact Me
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile menu animated hamburger button */}
        <button 
          id="mobile-menu-toggle"
          onClick={() => setNav(!nav)} 
          className="flex flex-col justify-between w-6 h-[18px] z-[110] md:hidden cursor-pointer focus:outline-none p-0.5"
          aria-label="Toggle Menu"
        >
          <span className={`h-[2px] w-full bg-gray-900 rounded-lg transform transition-all duration-300 origin-left ${nav ? 'rotate-[42deg] translate-y-[-1.5px] translate-x-[1.5px] bg-[#860098]' : ''}`} />
          <span className={`h-[2px] w-full bg-gray-900 rounded-lg transition-all duration-300 ${nav ? 'opacity-0 scale-0' : ''}`} />
          <span className={`h-[2px] w-full bg-gray-900 rounded-lg transform transition-all duration-300 origin-left ${nav ? '-rotate-[42deg] translate-y-[1.5px] translate-x-[1.5px] bg-[#860098]' : ''}`} />
        </button>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {nav && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setNav(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] md:hidden"
              />
              
              {/* Drawer */}
              <motion.div
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                className="fixed top-0 right-0 w-[85%] max-w-[360px] h-full bg-white/85 backdrop-blur-2xl shadow-[-10px_0_50px_rgba(0,0,0,0.15)] z-[105] md:hidden flex flex-col border-l border-white/20"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-black/5">
                  <h2 className="text-xl font-bold font-outfit text-gray-900">
                    Parthiban<span className="text-[#860098]">.S</span>
                  </h2>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 flex flex-col justify-center px-6 gap-2 sm:gap-4 overflow-y-auto py-8">
                  {mobileLinks.map((link, index) => (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link 
                        onClick={() => setNav(false)} 
                        to={link} 
                        smooth 
                        duration={500}
                        spy
                        activeClass="text-[#860098] font-bold border-l-4 border-[#860098] pl-4"
                        className="block capitalize py-3.5 text-xl font-outfit text-gray-700 hover:text-[#860098] hover:bg-[#860098]/5 rounded-xl px-4 transition-all duration-200 cursor-pointer"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-black/5 bg-gray-50/50">
                  <p className="text-gray-400 text-xs text-center">© 2025 Parthiban.S</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
