import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      
      {/* Background Tech Layer with Github-style Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         {/* Grid Pattern */}
         <div 
            className="absolute inset-0 opacity-[0.2]" 
            style={{ 
                backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }} 
         />
         
         {/* Primary Gradient Orb (Top Left - Purple/Indigo) */}
         <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen" 
         />

         {/* Secondary Gradient Orb (Right - Blue/Cyan) */}
         <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2], 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen" 
         />

         {/* Bottom Glow (Teal/Green) */}
         <motion.div 
            animate={{ 
                opacity: [0.1, 0.3, 0.1], 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[20%] left-[20%] w-[1000px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen" 
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </span>
                        Available for hire
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                        Building Products & <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
                        Driving Growth.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed"
                >
                The intersection of <span className="text-zinc-200 font-medium">Full-Stack Engineering</span> and <span className="text-zinc-200 font-medium">Digital Marketing</span>. 
                I don't just write code; I build SEO-optimized, high-converting platforms that scale.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
                >
                <a
                    href="#projects"
                    className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-sm"
                >
                    View Work
                </a>
                <a
                    href="#contact"
                    className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 text-white font-bold text-sm tracking-widest uppercase hover:bg-zinc-800 transition-all hover:border-zinc-500 rounded-sm"
                >
                    Contact Me
                </a>
                </motion.div>
            </div>

            {/* Photo Placeholder Section */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-72 h-80 md:w-96 md:h-[450px]"
                 >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-violet-500/20 to-transparent blur-2xl rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl rounded-full" />
                    
                    <div className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-violet-500/30 rounded-tr-3xl" />
                    <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl" />
                    
                    {/* The Frame */}
                    <div className="absolute inset-0 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-2xl transform rotate-6 translate-x-4 translate-y-4 z-0 shadow-2xl" />
                    
                    {/* The Image Container */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-700/50 bg-zinc-900 z-10 group shadow-2xl shadow-black/50">
                         {/* Placeholder Image */}
                         <img 
                            src="assets/profile.png" 
                            alt="Noah Aung" 
                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                         />
                         
                         {/* Tech Overlay lines */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                         
                         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                         <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 backdrop-blur-md bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-mono text-xs mb-1">NOAH AUNG</p>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                <p className="text-zinc-300 text-[10px] tracking-widest uppercase">Growth Engineer</p>
                            </div>
                         </div>
                    </div>
                 </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;