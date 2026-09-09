import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero image.png';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-20 overflow-hidden bg-[#14120b]">
      {/* Cursor Ambient Warm Lighting */}
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
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top Header & Intro (Matching Cursor Automations layout) */}
        <div className="max-w-4xl text-left mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.15] max-w-4xl"
          >
            <span className="text-[#edecec]">Engineering digital products.</span>{' '}
            <span className="text-[#888680]">Building production web applications and commercial platforms.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <a
              href="#showcase"
              className="rounded-full bg-[#edecec] text-[#14120b] px-5 py-2.5 font-medium text-xs sm:text-sm hover:bg-white transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View selected work</span>
              <span>↓</span>
            </a>
            <a
              href="#cv"
              className="rounded-full bg-[#1c1a14] border border-[#28261e] text-[#edecec] px-5 py-2.5 font-medium text-xs sm:text-sm hover:bg-[#24211a] hover:border-[#454035] transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Curriculum Vitae</span>
              <span>→</span>
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-xs sm:text-sm text-[#888680] hover:text-[#edecec] transition-colors cursor-pointer"
            >
              Get in touch →
            </a>
          </motion.div>
        </div>

        {/* Large Hero Image Card (Exact match to Cursor hero diagram container) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="relative rounded-2xl sm:rounded-3xl border border-[#28261e] overflow-hidden bg-[#100f0c] shadow-2xl"
        >
          <img
            src={heroImg}
            alt="Noah Aung - Engineering Ambitious Digital Products"
            className="w-full h-auto max-h-[620px] object-cover object-center"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl sm:rounded-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;