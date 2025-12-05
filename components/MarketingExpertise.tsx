import React from 'react';
import { motion } from 'framer-motion';

const MarketingExpertise: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Growth & Acquisition
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Building a product is half the battle. I leverage data-driven strategies to ensure your digital presence reaches the right audience and converts them into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SEO Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-sm hover:border-blue-500/30 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded border border-blue-500/20 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Search Engine Optimisation</h3>
            </div>
            
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Comprehensive SEO strategies designed to improve organic visibility and drive high-intent traffic.
            </p>

            <ul className="space-y-4">
              {[
                { title: "Technical SEO", desc: "Core Web Vitals, Schema Markup, Crawlability" },
                { title: "On-Page Optimisation", desc: "Keyword Research, Content Strategy, Semantic HTML" },
                { title: "Local SEO", desc: "GMB Optimisation, Local Citations, Reviews Management" },
                { title: "Authority Building", desc: "Backlink Strategy, Digital PR, Domain Authority" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-200 font-medium block">{item.title}</span>
                    <span className="text-zinc-500 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PPC Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-sm hover:border-green-500/30 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded border border-green-500/20 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Pay-Per-Click Advertising</h3>
            </div>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              High-ROI paid campaigns that target your ideal customer at the exact moment they're ready to buy.
            </p>

            <ul className="space-y-4">
              {[
                { title: "Google Ads", desc: "Search, Display, Shopping, and YouTube Campaigns" },
                { title: "Social Media Ads", desc: "Facebook, Instagram, LinkedIn, and TikTok" },
                { title: "Conversion Optimisation", desc: "Landing Page A/B Testing, Funnel Analysis" },
                { title: "Analytics & Tracking", desc: "GA4 Setup, GTM, Conversion Tracking, Reporting" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-200 font-medium block">{item.title}</span>
                    <span className="text-zinc-500 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketingExpertise;
