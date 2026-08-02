import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactCard = ({ href, icon, title, content, isExternal = false }) => (
  <motion.a 
    href={href}
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="block w-full"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="glass-panel p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-black/5 hover:border-[#860098]/30 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(134,0,152,0.1)] transition-all duration-300 flex items-center gap-3 sm:gap-4 cursor-pointer group">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#860098]/10 border border-[#860098]/20 flex items-center justify-center text-[#860098] group-hover:bg-[#860098] group-hover:text-white transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="overflow-hidden min-w-0">
        <h4 className="text-gray-900 font-bold text-sm sm:text-base leading-tight mb-0.5 sm:mb-1">{title}</h4>
        <p className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-800 transition-colors truncate">{content}</p>
      </div>
    </div>
  </motion.a>
);

const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/parthivijay333@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 relative z-10 bg-white">
      
      {/* Toast Notifications */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[90%] max-w-md p-3 sm:p-4 rounded-2xl bg-white border border-green-200 shadow-2xl flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 font-bold">✓</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">Message Sent!</h4>
              <p className="text-gray-500 text-xs mt-1">Thank you for contacting me. I'll get back to you as soon as possible.</p>
            </div>
            <button onClick={() => setStatus(null)} className="ml-auto text-gray-400 hover:text-gray-600 font-bold">×</button>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[90%] max-w-md p-3 sm:p-4 rounded-2xl bg-white border border-red-200 shadow-2xl flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 font-bold">✗</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">Failed to send message.</h4>
              <p className="text-gray-500 text-xs mt-1">Please try again later.</p>
            </div>
            <button onClick={() => setStatus(null)} className="ml-auto text-gray-400 hover:text-gray-600 font-bold">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionHeading title="Get In Touch" subtitle="Contact" />
      
      <div className="max-w-7xl mx-auto mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 items-start">
        
        {/* Contact info list of cards */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 flex flex-col gap-3 sm:gap-4"
        >
          <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-gray-900 mb-1 sm:mb-2">Let's build something <br/><span className="text-gradient">amazing together.</span></h3>
          <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.
          </p>

          <ContactCard 
            href="mailto:parthivijay333@gmail.com" 
            icon={<Mail size={20} />} 
            title="Email" 
            content="parthivijay333@gmail.com" 
          />
          <ContactCard 
            href="tel:+919791915402" 
            icon={<Phone size={20} />} 
            title="Phone" 
            content="+91 9791915402" 
          />
          <ContactCard 
            href="https://www.google.com/maps/search/?api=1&query=Thanjavur,+Tamil+Nadu,+India" 
            icon={<MapPin size={20} />} 
            title="Location" 
            content="Thanjavur, Tamil Nadu, India" 
            isExternal={true}
          />
          <ContactCard 
            href="https://www.linkedin.com/in/parthiban-s-1a6619285/" 
            icon={<FaLinkedin size={20} />} 
            title="LinkedIn" 
            content="Connect on LinkedIn" 
            isExternal={true}
          />
          <ContactCard 
            href="https://github.com/122012453148" 
            icon={<FaGithub size={20} />} 
            title="GitHub" 
            content="GitHub Profile" 
            isExternal={true}
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 glass-panel p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] border border-black/5 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#860098]/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white border border-black/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-gray-900 outline-none focus:border-[#860098] transition-colors peer text-sm sm:text-base"
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className={`absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-sm ${focused === 'name' || formData.name ? '-top-3 text-xs bg-white px-2 text-[#860098]' : 'top-3 sm:top-4 text-gray-400'}`}>Your Name</label>
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white border border-black/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-gray-900 outline-none focus:border-[#860098] transition-colors peer text-sm sm:text-base"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className={`absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-sm ${focused === 'email' || formData.email ? '-top-3 text-xs bg-white px-2 text-[#860098]' : 'top-3 sm:top-4 text-gray-400'}`}>Your Email</label>
              </div>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
                className="w-full bg-white border border-black/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-gray-900 outline-none focus:border-[#860098] transition-colors peer text-sm sm:text-base"
                placeholder=" "
                required
              />
              <label htmlFor="subject" className={`absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-sm ${focused === 'subject' || formData.subject ? '-top-3 text-xs bg-white px-2 text-[#860098]' : 'top-3 sm:top-4 text-gray-400'}`}>Subject</label>
            </div>

            <div className="relative">
              <textarea 
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className="w-full bg-white border border-black/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-gray-900 outline-none focus:border-[#860098] transition-colors peer resize-none text-sm sm:text-base"
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message" className={`absolute left-4 sm:left-5 transition-all duration-300 pointer-events-none text-sm ${focused === 'message' || formData.message ? '-top-3 text-xs bg-white px-2 text-[#860098]' : 'top-3 sm:top-4 text-gray-400'}`}>Your Message</label>
            </div>

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="group relative w-full flex justify-center items-center gap-2 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#860098] via-[#A020B8] to-[#C13DDA] text-white font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(134,0,152,0.25)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === 'sending' ? 'Sending...' : 'Send Message'} 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform sm:hidden" />
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform hidden sm:block" />
              </span>
              <div className="absolute inset-0 bg-[#700080] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
          </form>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 sm:mt-6 relative z-10"
          >
            <div className="rounded-xl sm:rounded-2xl border border-[#860098]/20 bg-white/80 backdrop-blur-md shadow-[0_10px_40px_rgba(134,0,152,0.08)] p-4 sm:p-5 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(134,0,152,0.15)] transition-all duration-500"
              style={{ backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #860098, #C13DDA)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 absolute top-0 left-0 animate-ping opacity-75"></div>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Available for New Opportunities</h4>
              </div>

              {/* Opportunity types */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {["Full-Time MERN Stack Roles","Remote Opportunities","Freelance Projects","Collaboration"].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
                    <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#860098]/10 flex items-center justify-center text-[#860098] text-[10px] sm:text-xs font-bold shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Response time */}
              <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-black/5">
                <span className="text-base sm:text-lg">⚡</span>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider">Average Response Time</p>
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3 relative z-10"
          >
            {[
              { value: "5+", label: "Projects" },
              { value: "7+ Mo", label: "Experience" },
              { value: "Open", label: "Availability" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-center border border-black/5 hover:border-[#860098]/20 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(134,0,152,0.1)] transition-all duration-300">
                <p className="text-base sm:text-lg font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[#860098] via-[#A020B8] to-[#C13DDA]">{stat.value}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 sm:mt-6 text-center relative z-10"
          >
            <p className="font-outfit font-bold text-gray-900 text-base sm:text-lg mb-1">Let's Build Something Amazing Together 🚀</p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Feel free to reach out if you have an exciting project, collaboration, or career opportunity.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
