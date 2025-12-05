import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Technical Excellence",
    category: "Engineering",
    desc: "Clean, maintainable code isn't a luxury; it's a necessity. I build resilient systems designed to scale securely without technical debt.",
    accent: "blue"
  },
  {
    title: "Growth Integration",
    category: "Marketing",
    desc: "Marketing isn't an afterthought. SEO, tracking pixels, and conversion funnels are baked into the codebase from day one.",
    accent: "teal"
  },
  {
    title: "Performance = Revenue",
    category: "Hybrid",
    desc: "Speed directly correlates with conversion. I optimize every byte to ensure fast load times lead to higher retention and lower bounce rates.",
    accent: "purple"
  },
  {
    title: "Data-Led Iteration",
    category: "Strategy",
    desc: "Launch is just step one. Continuous A/B testing and deep analytics steer the product toward higher profitability.",
    accent: "orange"
  }
];

const getColorClasses = (color: string) => {
    switch(color) {
        case 'blue': return { bar: 'bg-blue-500', badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20', dot: 'bg-blue-500 shadow-blue-500/50' };
        case 'teal': return { bar: 'bg-teal-500', badge: 'text-teal-400 bg-teal-500/10 border-teal-500/20', dot: 'bg-teal-500 shadow-teal-500/50' };
        case 'purple': return { bar: 'bg-purple-500', badge: 'text-purple-400 bg-purple-500/10 border-purple-500/20', dot: 'bg-purple-500 shadow-purple-500/50' };
        case 'orange': return { bar: 'bg-orange-500', badge: 'text-orange-400 bg-orange-500/10 border-orange-500/20', dot: 'bg-orange-500 shadow-orange-500/50' };
        default: return { bar: 'bg-white', badge: 'text-white bg-white/10 border-white/20', dot: 'bg-white' };
    }
}

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 bg-black border-t border-zinc-900 relative overflow-hidden">
      
      {/* Top spotlight / Northern Lights Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-indigo-900/20 via-black to-black blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-teal-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"/>
                 <span className="text-zinc-500 text-sm uppercase tracking-widest font-bold">The Methodology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Hybrid Approach</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                 Most developers don't understand marketing. Most marketers can't write code. 
                 <br className="hidden md:block"/>
                 I bridge the gap to build products that <span className="text-white">work technically</span> and <span className="text-white">perform commercially</span>.
              </p>
           </div>
           
           {/* Visual Tag */}
           <div className="hidden md:flex flex-col items-end gap-2 text-right">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"/>
                    <span>Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.8)]"/>
                    <span>Marketing</span>
                </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const colors = getColorClasses(p.accent);
            return (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 border border-zinc-800 bg-zinc-900/20 backdrop-blur-md hover:bg-zinc-900/40 transition-all duration-300 group overflow-hidden rounded-xl"
                >
                <div className={`absolute top-0 left-0 w-full h-1 ${colors.bar} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`} />
                
                {/* Subtle internal glow on hover */}
                <div className={`absolute inset-0 bg-${p.accent}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="mb-8 flex justify-between items-start relative z-10">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border ${colors.badge}`}>
                        {p.category}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${colors.dot} shadow-[0_0_8px_currentColor]`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors relative z-10">{p.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors relative z-10">{p.desc}</p>
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;