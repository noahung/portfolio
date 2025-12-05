
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const ScrollyTelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic Background Gradients shifting between themes
  // 0-0.33: Blue (Software) | 0.33-0.66: Purple (Web) | 0.66-1.0: Green (Marketing)
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [
        "radial-gradient(circle at 50% 50%, #172554 0%, #000000 70%)", // Blue-950
        "radial-gradient(circle at 50% 50%, #1e3a8a 0%, #000000 70%)", // Blue-900
        "radial-gradient(circle at 50% 50%, #581c87 0%, #000000 70%)", // Purple-900
        "radial-gradient(circle at 50% 50%, #064e3b 0%, #000000 70%)", // Emerald-900
        "radial-gradient(circle at 50% 50%, #022c22 0%, #000000 70%)"  // Emerald-950
    ]
  );

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans">
        
        {/* Dynamic Background */}
        <motion.div 
            style={{ background: bgGradient }}
            className="absolute inset-0 z-0 opacity-40 transition-colors duration-500"
        />
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* 3D Grid Tunnel */}
        <TunnelEffect scrollYProgress={scrollYProgress} />


        {/* --- Phase 1: Software Development (The Foundation) --- */}
        <PhaseSoftware scrollYProgress={scrollYProgress} />

        {/* --- Phase 2: Web Development (The Expression) --- */}
        <PhaseWeb scrollYProgress={scrollYProgress} />

        {/* --- Phase 3: Marketing (The Expansion) --- */}
        <PhaseMarketing scrollYProgress={scrollYProgress} />


        {/* Progress Indicators */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-4">
            <ProgressLabel label="Logic" activeRange={[0, 0.33]} current={scrollYProgress} />
            <ProgressLabel label="Design" activeRange={[0.33, 0.66]} current={scrollYProgress} />
            <ProgressLabel label="Growth" activeRange={[0.66, 1]} current={scrollYProgress} />
        </div>
      </div>
    </section>
  );
};

// --- Background Components ---

const TunnelEffect = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    
    return (
        <motion.div 
            style={{ scale, rotate }}
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20"
        >
             <div className="w-[80vw] h-[80vw] border border-white/10 rounded-full absolute" />
             <div className="w-[60vw] h-[60vw] border border-white/10 rounded-full absolute border-dashed" />
             <div className="w-[40vw] h-[40vw] border border-white/5 rounded-full absolute" />
             <div className="w-[20vw] h-[20vw] border border-white/5 rounded-full absolute border-dashed" />
        </motion.div>
    )
}

// --- Phase 1: Software Development ---
const PhaseSoftware = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    // Range 0 -> 0.3
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.32], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1.2]);
    const y = useTransform(scrollYProgress, [0, 0.3], [50, -50]);

    return (
        <motion.div 
            style={{ opacity, scale, y }}
            className="absolute z-10 flex flex-col items-center justify-center w-full px-4"
        >
            <div className="bg-blue-500/10 border border-blue-500/20 backdrop-blur-md px-4 py-1 rounded-full text-blue-400 font-mono text-xs uppercase tracking-widest mb-6">
                Step 01: The Architect
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-6 text-center tracking-tighter">
                SOFTWARE<br/>DEVELOPMENT
            </h2>
            
            <div className="flex gap-4 md:gap-8 mt-8">
                <FloatingTechCard text="API Design" delay={0} color="blue" />
                <FloatingTechCard text="Database Architecture" delay={0.2} color="blue" />
                <FloatingTechCard text="Cloud Infrastructure" delay={0.4} color="blue" />
            </div>

            <p className="mt-12 text-zinc-400 max-w-lg text-center font-light leading-relaxed">
                Building the <span className="text-blue-400 font-medium">invisible foundation</span>. Scalable backends, secure data pipelines, and robust logic that powers the entire ecosystem.
            </p>
        </motion.div>
    );
}

// --- Phase 2: Web Development ---
const PhaseWeb = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    // Range 0.33 -> 0.66
    const opacity = useTransform(scrollYProgress, [0.33, 0.4, 0.55, 0.66], [0, 1, 1, 0]);
    const rotateX = useTransform(scrollYProgress, [0.33, 0.66], [20, -20]);
    const z = useTransform(scrollYProgress, [0.33, 0.66], [-100, 100]);

    return (
        <motion.div 
            style={{ opacity, perspective: 1000 }}
            className="absolute z-10 flex flex-col items-center justify-center w-full px-4"
        >
             <div className="bg-purple-500/10 border border-purple-500/20 backdrop-blur-md px-4 py-1 rounded-full text-purple-400 font-mono text-xs uppercase tracking-widest mb-6">
                Step 02: The Creator
            </div>

            <motion.div style={{ rotateX, z, transformStyle: "preserve-3d" }}>
                <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200 mb-6 text-center tracking-tighter">
                    WEB<br/>EXPERIENCE
                </h2>
            </motion.div>

            <div className="relative w-full max-w-3xl h-[200px] mt-8 flex justify-center items-center">
                 {/* Simulated UI Layers */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bg-zinc-900 border border-zinc-700 p-4 rounded-lg shadow-2xl w-[200px] h-[120px] -rotate-6 -translate-x-32 z-0"
                 >
                    <div className="w-full h-2 bg-zinc-700 mb-2 rounded-full"/>
                    <div className="w-2/3 h-2 bg-zinc-800 mb-2 rounded-full"/>
                 </motion.div>

                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bg-zinc-900 border border-purple-500/30 p-4 rounded-lg shadow-2xl w-[220px] h-[140px] rotate-3 translate-x-32 z-10"
                 >
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"/>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"/>
                    </div>
                    <div className="w-full h-16 bg-purple-500/10 rounded border border-purple-500/20 flex items-center justify-center">
                        <span className="text-[10px] text-purple-400 font-mono">Interactive UI</span>
                    </div>
                 </motion.div>
                 
                 <div className="absolute z-20">
                     <FloatingTechCard text="Responsive Design" delay={0} color="purple" />
                 </div>
            </div>

            <p className="mt-8 text-zinc-400 max-w-lg text-center font-light leading-relaxed">
                Crafting the <span className="text-purple-400 font-medium">interface</span>. Fluid animations, pixel-perfect layouts, and intuitive user journeys that engage and delight.
            </p>
        </motion.div>
    );
}

// --- Phase 3: Marketing ---
const PhaseMarketing = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    // Range 0.66 -> 1.0
    const opacity = useTransform(scrollYProgress, [0.66, 0.73, 1], [0, 1, 1]);
    const scale = useTransform(scrollYProgress, [0.66, 1], [0.9, 1.1]);

    return (
        <motion.div 
            style={{ opacity, scale }}
            className="absolute z-10 flex flex-col items-center justify-center w-full px-4"
        >
             <div className="bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md px-4 py-1 rounded-full text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6">
                Step 03: The Strategist
            </div>

            <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-200 mb-6 text-center tracking-tighter">
                GROWTH<br/>MARKETING
            </h2>

            <div className="grid grid-cols-3 gap-8 mt-12 mb-12">
                <MetricBox value="+300%" label="Organic Traffic" color="emerald" />
                <MetricBox value="4.5x" label="ROAS" color="emerald" />
                <MetricBox value="#1" label="Search Ranking" color="emerald" />
            </div>

            <p className="text-zinc-400 max-w-lg text-center font-light leading-relaxed">
                Driving the <span className="text-emerald-400 font-medium">expansion</span>. SEO, data analytics, and performance marketing that turns great code into profitable business.
            </p>
        </motion.div>
    );
}


// --- Helpers ---

const FloatingTechCard = ({ text, delay, color }: { text: string, delay: number, color: string }) => {
    const colorClasses = {
        blue: "border-blue-500/30 text-blue-300 bg-blue-900/20 shadow-blue-500/10",
        purple: "border-purple-500/30 text-purple-300 bg-purple-900/20 shadow-purple-500/10",
        emerald: "border-emerald-500/30 text-emerald-300 bg-emerald-900/20 shadow-emerald-500/10"
    }[color] || "";

    return (
        <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
            className={`px-4 py-2 rounded border font-mono text-xs shadow-lg backdrop-blur-md ${colorClasses}`}
        >
            {text}
        </motion.div>
    );
};

const MetricBox = ({ value, label, color }: { value: string, label: string, color: string }) => (
    <div className="flex flex-col items-center">
        <span className={`text-4xl md:text-5xl font-bold font-mono mb-2 text-${color}-400`}>{value}</span>
        <span className="text-xs uppercase tracking-widest text-zinc-500">{label}</span>
    </div>
);

const ProgressLabel = ({ label, activeRange, current }: { label: string, activeRange: [number, number], current: MotionValue<number> }) => {
    const isActive = useTransform(current, (v) => v >= activeRange[0] && v < activeRange[1]);
    const opacity = useTransform(current, (v) => (v >= activeRange[0] && v < activeRange[1] ? 1 : 0.3));
    const y = useTransform(current, (v) => (v >= activeRange[0] && v < activeRange[1] ? 0 : 5));

    return (
        <motion.div style={{ opacity, y }} className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
            <motion.div 
                style={{ scaleX: isActive ? 1 : 0 }}
                className="w-full h-0.5 bg-white transition-transform duration-300"
            />
        </motion.div>
    );
};

export default ScrollyTelling;
