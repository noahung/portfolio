
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden border-t border-zinc-900">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-900/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-emerald-900/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Capabilities</h2>
            <p className="text-zinc-400 text-lg">
                A hybrid skillset designed to build products that are technically sound and commercially viable.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Engineering Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/30 to-blue-900/30 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-full p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-800/50 overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Engineering</h3>
                        <p className="text-sm text-blue-400 font-mono">./systems_architecture</p>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {/* Category 1 */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Frontend Experience</h4>
                        <div className="flex flex-wrap gap-2">
                             {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"].map(skill => (
                                 <span key={skill} className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                                    {skill}
                                 </span>
                             ))}
                        </div>
                    </div>

                    {/* Category 2 */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Backend & DevOps</h4>
                        <div className="flex flex-wrap gap-2">
                             {["Node.js", "PostgreSQL", "Docker", "AWS Lambda", "Redis", "CI/CD"].map(skill => (
                                 <span key={skill} className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                                    {skill}
                                 </span>
                             ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Code bg */}
                <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none select-none">
                     <pre className="text-xs text-right font-mono p-4">
                        {`function build() {\n  return success;\n}`}
                     </pre>
                </div>
            </div>
          </motion.div>

          {/* Marketing Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/30 to-teal-900/30 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-full p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-800/50 overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Growth Engine</h3>
                        <p className="text-sm text-emerald-400 font-mono">./performance_marketing</p>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {/* Category 1 */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Acquisition Strategy</h4>
                        <div className="grid grid-cols-2 gap-3">
                             {[
                                { name: "Technical SEO", val: "Audit & Fix" },
                                { name: "Google Ads", val: "PPC Management" },
                                { name: "Meta Ads", val: "Social Growth" },
                                { name: "Programmatic SEO", val: "Scale" }
                             ].map(skill => (
                                 <div key={skill.name} className="flex flex-col p-2 rounded bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors">
                                    <span className="text-zinc-200 font-bold text-sm">{skill.name}</span>
                                    <span className="text-zinc-500 text-xs">{skill.val}</span>
                                 </div>
                             ))}
                        </div>
                    </div>

                    {/* Category 2 */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Data & Optimization</h4>
                         <div className="flex flex-wrap gap-2">
                             {["Google Analytics 4", "Tag Manager", "Looker Studio", "VWO (A/B Testing)", "Conversion Modelling"].map(skill => (
                                 <span key={skill} className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                                    {skill}
                                 </span>
                             ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Chart bg */}
                <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none w-32 h-20 flex items-end justify-end gap-1 p-4">
                     <div className="w-2 h-4 bg-emerald-500 rounded-t"></div>
                     <div className="w-2 h-8 bg-emerald-500 rounded-t"></div>
                     <div className="w-2 h-6 bg-emerald-500 rounded-t"></div>
                     <div className="w-2 h-12 bg-emerald-500 rounded-t"></div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
