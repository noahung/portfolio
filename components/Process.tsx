import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const steps = [
  { 
    num: "01", 
    title: "Discovery & Analysis", 
    desc: "We start by decoding the core problem. I dive deep into business goals, user psychology, and market requirements to ensure we're solving the right puzzle.",
    tags: ["User Research", "Market Gap Analysis", "Requirements Engineering"]
  },
  { 
    num: "02", 
    title: "Architecture & Strategy", 
    desc: "The blueprint phase. I design scalable technical systems and select the optimal stack that handles current loads while prepping for future growth.",
    tags: ["System Design", "Database Schema", "Tech Stack Selection"]
  },
  { 
    num: "03", 
    title: "Agile Development", 
    desc: "Writing clean, self-documenting code. I work in high-velocity sprints with continuous integration, giving you visibility into progress at every commit.",
    tags: ["Frontend & Backend", "API Integration", "Automated Testing"]
  },
  { 
    num: "04", 
    title: "Launch, Scale & Optimize", 
    desc: "Deployment is just the beginning. I configure monitoring, optimize Core Web Vitals, and refine the product based on real-world usage data.",
    tags: ["CI/CD Pipelines", "Performance Tuning", "Analytics Setup"]
  },
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  return (
    <section className="py-32 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div ref={containerRef} className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Side - Sticky Header */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-blue-500"></span>
                                The Workflow
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                From concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">reality.</span>
                            </h3>
                            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                                A rigorous, engineering-led methodology that balances speed with architectural integrity. 
                                No guesswork, just execution.
                            </p>
                            
                            <a href="#contact" className="group inline-flex items-center text-white border-b border-white/30 pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                                <span className="mr-2 text-sm font-mono uppercase tracking-wider">Start a project</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side - Steps */}
                <div className="lg:w-2/3 relative pl-4 md:pl-0">
                    {/* Vertical Lines */}
                    <div className="absolute left-[19px] top-4 bottom-0 w-px bg-zinc-800 hidden md:block" />
                    <motion.div 
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[19px] top-4 bottom-0 w-px bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500 origin-top hidden md:block" 
                    />

                    <div className="space-y-20">
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative flex flex-col md:flex-row gap-8 group"
                            >
                                {/* Number / Node */}
                                <div className="hidden md:flex flex-col items-center flex-shrink-0 relative">
                                    <div className="w-10 h-10 rounded-full border border-zinc-800 bg-[#050505] group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 z-10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-blue-400 transition-colors" />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex-1">
                                    <div className="relative p-8 border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 transition-all duration-500 rounded-sm group overflow-hidden">
                                        
                                        {/* Tech Corners */}
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-zinc-700 group-hover:border-blue-500 transition-colors" />
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-zinc-700 group-hover:border-blue-500 transition-colors" />
                                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-zinc-700 group-hover:border-blue-500 transition-colors" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-zinc-700 group-hover:border-blue-500 transition-colors" />

                                        {/* Background Number */}
                                        <div className="absolute right-4 top-2 text-6xl font-bold text-zinc-800/20 pointer-events-none select-none font-mono group-hover:text-zinc-800/40 transition-colors">
                                            {step.num}
                                        </div>

                                        <h4 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-blue-100 transition-colors">
                                            {step.title}
                                        </h4>
                                        <p className="text-zinc-400 leading-relaxed mb-6 relative z-10 max-w-lg group-hover:text-zinc-300 transition-colors text-sm">
                                            {step.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 relative z-10">
                                            {step.tags.map((tag, tIndex) => (
                                                <span key={tIndex} className="text-[10px] uppercase tracking-wider font-mono text-blue-300/80 bg-blue-500/5 border border-blue-500/10 px-2 py-1 rounded-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Process;