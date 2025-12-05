import React from 'react';
import { motion } from 'framer-motion';

const stack1 = ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "AWS", "Docker", "GraphQL"];
const stack2 = ["Tailwind CSS", "Firebase", "Python", "Redis", "Figma", "Google Analytics", "SEMRush", "Vercel"];

const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="mb-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
             {[...stack1, ...stack1, ...stack1, ...stack1].map((tech, i) => (
               <span key={i} className="text-6xl md:text-8xl font-bold text-zinc-900 stroke-zinc-800 hover:text-zinc-700 transition-colors select-none">
                 {tech}
               </span>
             ))}
          </motion.div>
      </div>

       <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
             {[...stack2, ...stack2, ...stack2, ...stack2].map((tech, i) => (
               <span key={i} className="text-6xl md:text-8xl font-bold text-zinc-800 hover:text-zinc-500 transition-colors select-none">
                 {tech}
               </span>
             ))}
          </motion.div>
      </div>
    </section>
  );
}

export default TechStack;