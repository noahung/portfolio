import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'SEO' | 'PPC' | 'CRO';

const MarketingDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('SEO');

  // Simulated Data Visualization Components
  const SEOGraph = () => (
    <div className="relative h-64 w-full flex items-end justify-between gap-2 p-4">
      {[40, 45, 30, 50, 65, 55, 70, 85, 80, 95, 90, 100].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="w-full bg-gradient-to-t from-teal-900 to-teal-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
        />
      ))}
      {/* Trend Line overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M0,150 C50,140 100,180 150,120 C200,80 250,100 300,60 C350,40 400,20 800,10"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="2"
          className="opacity-50"
        />
      </svg>
    </div>
  );

  const PPCGraph = () => (
    <div className="relative h-64 w-full flex flex-col justify-center gap-6 p-4">
       <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-400">
             <span>Click-Through Rate (CTR)</span>
             <span className="text-blue-400">4.2% (Top 10%)</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
             <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-blue-500"
             />
          </div>
       </div>
       <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-400">
             <span>Cost Per Acquisition (CPA)</span>
             <span className="text-blue-400">-15% YoY</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
             <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '45%' }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-full bg-purple-500"
             />
          </div>
       </div>
       <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-400">
             <span>Return on Ad Spend (ROAS)</span>
             <span className="text-blue-400">4.5x</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
             <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="h-full bg-green-500"
             />
          </div>
       </div>
    </div>
  );

  const CROGraph = () => (
    <div className="relative h-64 w-full flex items-center justify-center p-4">
       <div className="relative w-48 h-48">
          <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
             <circle cx="50" cy="50" r="40" stroke="#27272a" strokeWidth="8" fill="none" />
             <motion.circle 
                cx="50" cy="50" r="40" 
                stroke="#f59e0b" 
                strokeWidth="8" 
                fill="none" 
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * 0.25) }} // 25%
                transition={{ duration: 1.5, ease: "easeOut" }}
             />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-white">+25%</span>
             <span className="text-[10px] uppercase text-zinc-500">Conversion Rate</span>
          </div>
       </div>
    </div>
  );

  const content = {
    SEO: {
      title: "Technical & Content SEO",
      desc: "Ranking #1 requires more than just keywords. I implement Core Web Vitals optimization, schema markup strategies, and semantic content silos.",
      stats: [
        { label: "Keywords Ranked", val: "1,200+" },
        { label: "Organic Sessions", val: "45k/mo" }
      ],
      graph: <SEOGraph />
    },
    PPC: {
      title: "Paid Acquisition Strategy",
      desc: "High-efficiency campaigns across Google Ads and Meta. I focus on reducing CPA while scaling ad spend profitably using automated bidding rules.",
      stats: [
        { label: "Campaigns Managed", val: "50+" },
        { label: "Ad Spend/Mo", val: "$25k" }
      ],
      graph: <PPCGraph />
    },
    CRO: {
      title: "Conversion Rate Optimization",
      desc: "Traffic is useless if it doesn't convert. I use A/B testing (VWO/Optimize) and heatmaps to refine user journeys and landing pages.",
      stats: [
        { label: "Experiments Run", val: "100+" },
        { label: "Win Rate", val: "38%" }
      ],
      graph: <CROGraph />
    }
  };

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Growth Intelligence</h2>
          <p className="text-zinc-500 max-w-xl">
             I don't just build the engine; I drive the car. 
             Visualizing performance data from my recent marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls */}
          <div className="lg:col-span-4 flex flex-col gap-4">
             {(['SEO', 'PPC', 'CRO'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left p-6 border transition-all duration-300 group ${
                     activeTab === tab 
                     ? 'border-teal-500 bg-teal-900/10' 
                     : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'
                  }`}
                >
                   <div className="flex justify-between items-center mb-2">
                      <span className={`text-xl font-bold font-mono ${activeTab === tab ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                        {tab}
                      </span>
                      {activeTab === tab && <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />}
                   </div>
                   <p className="text-sm text-zinc-500 line-clamp-2">
                      {content[tab].title}
                   </p>
                </button>
             ))}
          </div>

          {/* Dashboard Display */}
          <div className="lg:col-span-8">
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 h-full relative overflow-hidden">
               {/* Decorative Grid */}
               <div className="absolute inset-0 opacity-[0.05]" 
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
               </div>

               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                     <div className="flex justify-between items-start mb-8">
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-2">{content[activeTab].title}</h3>
                           <p className="text-zinc-400 text-sm max-w-md">{content[activeTab].desc}</p>
                        </div>
                        <div className="flex gap-6 text-right">
                           {content[activeTab].stats.map((stat, i) => (
                              <div key={i}>
                                 <div className="text-2xl font-mono text-teal-400 font-bold">{stat.val}</div>
                                 <div className="text-[10px] uppercase text-zinc-500 tracking-widest">{stat.label}</div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="bg-black/40 border border-zinc-800 rounded p-2">
                        {content[activeTab].graph}
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingDashboard;