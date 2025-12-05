import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'engineering' | 'growth' | 'hybrid';
  skills: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: '1',
    year: '2023 - Present',
    title: 'Senior Marketing Executive & Web Developer',
    company: 'Adverto Media (UK)',
    description: 'Built over 70 WordPress websites, managed SEO for local businesses, developed custom WordPress plugins, and built software solutions.',
    type: 'hybrid',
    skills: ['WordPress', 'SEO', 'Plugin Dev', 'Software Architecture']
  },
  {
    id: '2',
    year: '2022 - 2023',
    title: 'MBA Student',
    company: 'University of Gloucestershire',
    description: 'Specialised in Marketing Intelligence and Big Data.',
    type: 'growth',
    skills: ['Marketing Intelligence', 'Big Data', 'Analytics', 'Research']
  },
  {
    id: '3',
    year: '2020 - 2022',
    title: 'Head of Digital Marketing',
    company: 'Kia and Peugeot',
    description: 'Led digital marketing initiatives and built an e-commerce platform with a team of developers across Myanmar and Singapore.',
    type: 'hybrid',
    skills: ['Digital Marketing', 'E-commerce', 'Team Management', 'Product Strategy']
  },
  {
    id: '4',
    year: '2016 - 2020',
    title: 'Digital Project Lead',
    company: 'Samsung',
    description: 'Responsible for digital marketing and managing agencies across Thailand and Myanmar offices.',
    type: 'growth',
    skills: ['Digital Marketing', 'Agency Management', 'Project Leadership', 'Strategy']
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-32 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-blue-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Career Log</h2>
                <p className="text-zinc-500 font-mono text-sm">
                    {'>'} EXECUTION_HISTORY.log
                </p>
            </div>
        </div>
        
        <div className="relative ml-4 md:ml-12">
          {/* Main vertical rail */}
          <div className="absolute left-0 top-4 bottom-0 w-px bg-gradient-to-b from-blue-500 via-zinc-800 to-zinc-900" />

          <div className="space-y-16">
            {timelineData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12 md:pl-20 group"
                    >
                    {/* Node on Rail */}
                    <div className="absolute left-[-4px] top-6 w-[9px] h-[9px] rounded-full bg-[#050505] border border-blue-500 z-10 group-hover:bg-blue-500 transition-colors duration-300">
                        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-0 group-hover:opacity-75" />
                    </div>

                    {/* Connector Line */}
                    <div className="absolute left-0 top-[28px] w-8 md:w-16 h-px bg-zinc-800 group-hover:bg-blue-500/50 transition-colors duration-500" />

                    {/* Card */}
                    <div className="relative p-6 md:p-8 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-600 transition-all duration-300 rounded-sm">
                        
                        {/* Header Row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mt-1">
                                    {item.company}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-zinc-500 font-mono text-xs border border-zinc-800 px-2 py-1 rounded bg-black">
                                    {item.year}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-400 leading-relaxed mb-8 max-w-3xl">
                            {item.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, sIndex) => (
                                <span 
                                    key={sIndex} 
                                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 border-t border-r border-blue-500" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 border-b border-l border-blue-500" />
                        </div>
                    </div>
                    </motion.div>
                );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;