import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import bgLandscape from '../assets/Background.webp';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#14120b]">
      {/* Cursor Ambient Warm Lighting & Painterly Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#edecec 1px, transparent 1px), linear-gradient(90deg, #edecec 1px, transparent 1px)', 
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }} 
        />

        {/* Cursor Warm Ambient Spotlight */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-amber-500/[0.04] blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full" />

        {/* Subtle Classical Art Ambient Backdrop (Cursor Signature Style) */}
        <div className="absolute -top-10 right-0 w-[55%] h-[85%] opacity-[0.06] pointer-events-none overflow-hidden">
          <img src={bgLandscape} alt="" className="w-full h-full object-cover object-left" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14120b] via-transparent to-[#14120b]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#14120b] via-transparent to-[#14120b]" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Narrative & Credibility */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#28261e] bg-[#1c1a14] text-xs font-mono mb-6 text-[#9b988f]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Digital Product &amp; MarTech Specialist · UK</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#edecec] mb-6 leading-[1.08]"
            >
              Engineering ambitious digital products and web platforms.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-xl text-[#9b988f] max-w-2xl mb-10 font-normal leading-relaxed"
            >
              Noah Aung is a digital product developer and marketing technology specialist with 10+ years of international experience. Building production SaaS applications, commercial web platforms, and growth engines with sub-second speed.
            </motion.p>

            {/* Action CTAs (Modeled after Cursor.com) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#showcase"
                className="rounded-full bg-[#edecec] text-[#14120b] px-6 py-3.5 font-medium text-sm hover:bg-white transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>View Selected Work</span>
                <span>↓</span>
              </a>
              <a
                href="#cv"
                className="rounded-full bg-[#1c1a14] border border-[#28261e] text-[#edecec] px-6 py-3.5 font-medium text-sm hover:bg-[#24211a] hover:border-[#454035] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Curriculum Vitae</span>
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="px-4 py-3.5 text-sm text-[#9b988f] hover:text-[#edecec] transition-colors cursor-pointer"
              >
                Get in touch →
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Picture Hero Focus */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-md"
            >
              {/* Subtle ambient halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/10 via-white/[0.04] to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />

              {/* Card Container */}
              <div className="relative rounded-3xl border border-[#28261e] bg-[#1c1a14] p-4 backdrop-blur-2xl shadow-2xl overflow-hidden">
                {/* Profile Image */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#14120b] border border-[#28261e] relative group">
                  <img
                    src={profileImg}
                    alt="Noah Aung - Digital Product & Marketing Technology Specialist"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14120b] via-transparent to-transparent opacity-75" />
                  
                  {/* Bottom Image Overlay Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1c1a14]/90 border border-[#28261e] backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-[#edecec]">Noah Aung</h3>
                        <p className="text-[11px] text-[#9b988f]">Gloucester &amp; Cheltenham, UK</p>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Focus Chips */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-3 rounded-xl border border-[#28261e] bg-[#14120b]">
                    <div className="text-[10px] text-[#68655c] uppercase tracking-wider font-mono">Current Role</div>
                    <div className="text-xs font-semibold text-[#edecec] mt-0.5">Adverto Media · UK</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#28261e] bg-[#14120b]">
                    <div className="text-[10px] text-[#68655c] uppercase tracking-wider font-mono">Flagship SaaS</div>
                    <div className="text-xs font-semibold text-[#edecec] mt-0.5">Quote on the Go</div>
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