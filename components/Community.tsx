import React from 'react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
    // Generate simulated heatmap data
    // 12 weeks * 7 days roughly for visual balance
    const grid = Array.from({ length: 168 }, () => 
        Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0
    );

    return (
        <section className="py-32 bg-black border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Open Source & Community</h2>
                        <p className="text-zinc-500">Contributing to the ecosystem that powers the web.</p>
                    </div>
                    <div className="flex gap-4 mt-6 md:mt-0">
                         <div className="flex items-center gap-2 text-xs text-zinc-500">
                            <span>Less</span>
                            <div className="w-3 h-3 bg-zinc-900 rounded-[2px]"></div>
                            <div className="w-3 h-3 bg-blue-900/40 rounded-[2px]"></div>
                            <div className="w-3 h-3 bg-blue-700/60 rounded-[2px]"></div>
                            <div className="w-3 h-3 bg-blue-500 rounded-[2px]"></div>
                            <span>More</span>
                         </div>
                    </div>
                </div>

                {/* Heatmap Visual */}
                <div className="w-full overflow-x-auto pb-4">
                    <div className="grid grid-rows-7 grid-flow-col gap-1 w-fit min-w-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                        {grid.map((level, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: Math.random() * 0.5 }}
                                viewport={{ once: true }}
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] ${
                                    level === 0 ? 'bg-zinc-900' :
                                    level === 1 ? 'bg-blue-900/30' :
                                    level === 2 ? 'bg-blue-800/50' :
                                    level === 3 ? 'bg-blue-600/70' :
                                    'bg-blue-500'
                                }`}
                             />
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-zinc-800 p-6 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
                        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                            Technical Writing
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">Regular contributor to dev.to and Medium on React performance, accessibility, and modern CSS architectures.</p>
                    </div>
                    <div className="border border-zinc-800 p-6 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
                        <h3 className="text-white font-bold mb-2">Open Source</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">Maintainer of several npm packages focused on lightweight UI utilities and React hooks.</p>
                    </div>
                    <div className="border border-zinc-800 p-6 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
                        <h3 className="text-white font-bold mb-2">Mentorship</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">Helping junior developers break into the industry through code reviews, career guidance, and workshops.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;