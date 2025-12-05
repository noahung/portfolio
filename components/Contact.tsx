import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "noahaung@proton.me";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Get In Touch</h2>
             <h3 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight">
               Have an idea?<br />
               <span className="text-zinc-500">Let's build it.</span>
             </h3>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative inline-block group mb-16"
          >
             <button 
                onClick={handleCopy}
                className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-white hover:text-blue-400 transition-colors duration-300 pb-2 border-b-2 border-zinc-800 hover:border-blue-500"
             >
                {email}
             </button>
             
             {/* Copy tooltip */}
             <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-3 py-1 rounded border border-zinc-700"
                    >
                        Copied to clipboard!
                    </motion.div>
                )}
             </AnimatePresence>
             
             {!copied && (
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-500 text-xs uppercase tracking-widest pointer-events-none">
                     Click to Copy
                 </div>
             )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-900 pt-12">
             <div className="flex flex-col items-center md:items-start">
                <span className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Location</span>
                <p className="text-white text-lg">Cheltenham, UK</p>
                <p className="text-zinc-600 text-sm mt-1">Available for remote work</p>
             </div>

             <div className="flex flex-col items-center">
                <span className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Socials</span>
                <div className="flex space-x-8">
                   <a href="https://github.com/noahung" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors text-lg">GitHub</a>
                   <a href="https://www.linkedin.com/in/tharhtetaung/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors text-lg">LinkedIn</a>
                   <a href="#" className="text-zinc-400 hover:text-white transition-colors text-lg">Twitter</a>
                </div>
             </div>

             <div className="flex flex-col items-center md:items-end">
                <span className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Status</span>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-white text-lg">Open to new projects</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;