import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-zinc-900">
      
      {/* Deep Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-violet-900/40 via-blue-900/20 to-transparent blur-[120px] pointer-events-none mix-blend-screen" />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.2]" 
        style={{ 
            backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }} 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to build something<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">powerful</span> and <span className="text-zinc-500">production-ready?</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <a
            href="#contact"
            className="px-10 py-5 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-zinc-200 transition-transform hover:-translate-y-1 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/noahung"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-5 bg-zinc-900/80 backdrop-blur border border-zinc-700 text-white font-bold text-sm tracking-widest uppercase hover:bg-zinc-800 transition-transform hover:-translate-y-1 rounded-sm"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;