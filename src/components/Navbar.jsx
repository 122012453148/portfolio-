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
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group py-1 px-1">
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
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, backgroundColor: '#ffffff' }}
              className="md:hidden flex flex-col items-center justify-center shadow-2xl"
            >
              {/* Close Button / Hamburger in the top right of the overlay */}
              <div className="absolute top-6 right-6">
                <button 
                  onClick={() => setNav(false)} 
                  className="flex flex-col justify-between w-6 h-[18px] cursor-pointer focus:outline-none p-0.5"
                  aria-label="Close Menu"
                >
                  <span className="h-[2px] w-full bg-gray-900 rounded-lg transform transition-all duration-300 origin-left rotate-[42deg] translate-y-[-1.5px] translate-x-[1.5px] bg-[#860098]" />
                  <span className="h-[2px] w-full bg-gray-900 rounded-lg transition-all duration-300 opacity-0 scale-0" />
                  <span className="h-[2px] w-full bg-gray-900 rounded-lg transform transition-all duration-300 origin-left -rotate-[42deg] translate-y-[1.5px] translate-x-[1.5px] bg-[#860098]" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 text-center w-full px-8">
                {mobileLinks.map((link, index) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className="w-full max-w-[280px]"
                  >
                    <Link 
                      onClick={() => setNav(false)} 
                      to={link} 
                      smooth 
                      duration={500}
                      spy
                      activeClass="text-[#860098] font-bold scale-105"
                      className="block capitalize py-3 text-2xl font-outfit text-gray-800 hover:text-[#860098] hover:bg-[#860098]/5 rounded-xl px-4 transition-all duration-200 cursor-pointer tracking-wide"
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
