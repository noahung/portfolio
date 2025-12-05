import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#050505] border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">About Me</h3>
              <h2 className="text-4xl font-bold text-white mb-6">Based in Cheltenham.</h2>
              <div className="h-1 w-20 bg-zinc-800" />
            </motion.div>
          </div>
          
          <div className="lg:col-span-8">
             <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
             >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-zinc-400 leading-tight">
                Experienced in building applications, platforms, and digital products across industries. 
                Focused on <span className="text-white font-medium">user experience</span>, 
                <span className="text-white font-medium"> performance</span>, 
                <span className="text-white font-medium"> reliability</span>, and business outcomes.
              </p>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
