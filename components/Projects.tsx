import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';

const projects: Project[] = [
  {
    id: '1',
    title: 'Invoicing App',
    description: 'A production platform for billing, invoices, and business management.',
    category: 'SaaS Platform',
    image: project1,
    link: 'https://quoteonthego.co.uk/'
  },
  {
    id: '2',
    title: 'AI-Powered Study App',
    description: 'Learning tool with intelligent study support and dynamic study features.',
    category: 'EdTech',
    image: project2,
    link: 'https://noahung.github.io/studia-website/'
  },
  {
    id: '3',
    title: 'Scholarship Search',
    description: 'Helps students discover and apply for scholarships worldwide.',
    category: 'Web Application',
    image: project3,
    link: 'https://myanmarscholar.com/'
  },
  {
    id: '4',
    title: 'Commercial Websites',
    description: 'Dozens of commercial websites built for clients across sectors.',
    category: 'WordPress / Custom',
    image: project4
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-[#050505] border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-zinc-500 text-xl">Production-grade software and interfaces.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="group relative min-h-[500px] border border-zinc-800 bg-zinc-900/20 overflow-hidden flex flex-col transition-colors duration-500 hover:border-zinc-700 hover:bg-zinc-900/40"
            >
               {/* Ambient Background Glow on Hover */}
               <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

               {/* Content container - Top */}
               <div className="p-8 relative z-20">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-blue-500 text-xs tracking-widest uppercase font-bold border border-blue-500/30 px-2 py-1 rounded-sm bg-blue-500/10">
                            {project.category}
                        </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">{project.title}</h3>
                    
                    <p className="text-zinc-400 mb-6 leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors duration-300">
                        {project.description}
                    </p>

                    <a 
                      href={project.link || '#'} 
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center text-white text-sm font-semibold group/btn ${!project.link ? 'cursor-default opacity-50' : ''}`}
                    >
                        <span className="border-b border-zinc-600 pb-1 group-hover/btn:border-blue-400 group-hover/btn:text-blue-400 transition-colors duration-300">View Case Study</span>
                    </a>
               </div>

               {/* Screenshot Area - Bottom/Fill with Cut-off effect */}
               <div className="relative flex-grow w-full mt-4 overflow-hidden">
                    {/* This container holds the screenshot and has the cut-off effect */}
                    <div className="absolute top-0 left-8 right-0 bottom-0 transform translate-y-10 group-hover:translate-y-6 transition-transform duration-500 ease-out">
                         
                         {/* Shadow/Glow behind the shape on hover */}
                         <div 
                            className="absolute inset-0 bg-blue-500/20 blur-xl transform translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ 
                                clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                            }}
                         />

                         <div 
                            className="w-full h-full bg-zinc-800 overflow-hidden relative shadow-2xl"
                            style={{ 
                                clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                            }}
                         >
                            {/* The Image / Placeholder */}
                            <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-in-out">
                                {/* Placeholder visual representing a UI */}
                                <div className="absolute inset-0 bg-zinc-900">
                                    {/* Mock UI Header */}
                                    <div className="h-8 bg-zinc-800 border-b border-zinc-700 flex items-center px-4 space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    {/* Mock UI Content Area */}
                                    <div className="p-6">
                                        <div className="w-3/4 h-4 bg-zinc-800 rounded mb-4"></div>
                                        <div className="w-1/2 h-4 bg-zinc-800 rounded mb-8"></div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-24 bg-zinc-800/50 rounded"></div>
                                            <div className="h-24 bg-zinc-800/50 rounded"></div>
                                            <div className="h-24 bg-zinc-800/50 rounded"></div>
                                        </div>
                                    </div>
                                    {/* Actual Image Overlay */}
                                    {project.image && (
                                         <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-500"
                                         />
                                    )}
                                </div>
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                            </div>

                            {/* Border effect for the cut-off shape */}
                            <div 
                                className="absolute inset-0 pointer-events-none border-t border-l border-zinc-700 opacity-50 group-hover:border-blue-500/50 group-hover:opacity-100 transition-all duration-500"
                                style={{ 
                                    clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                                }} 
                            />
                         </div>
                    </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;