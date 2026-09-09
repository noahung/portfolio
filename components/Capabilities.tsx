import React from 'react';
import { motion } from 'framer-motion';

const Capabilities: React.FC = () => {
  return (
    <section id="engineering" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <div id="capabilities" className="absolute -top-20" />

      {/* Subtle Warm Spotlight */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[500px] bg-amber-500/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            <span className="text-[#edecec]">Built for speed and precision.</span>{' '}
            <span className="text-[#888680]">Strict type contracts, edge caching, and tactile design systems.</span>
          </h2>
        </div>

        {/* 3-Column Card Grid (Direct Cursor.com Card Anatomy) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Type-Safe Full-Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-6 sm:p-8 flex flex-col justify-between hover:border-[#454035] transition-all group"
          >
            <div>
              <h3 className="text-xl font-bold text-[#edecec] mb-2">Type-Safe Architecture</h3>
              <p className="text-sm text-[#9b988f] leading-relaxed mb-4">
                End-to-end type safety from schema definitions to client state. Zero runtime undefined errors with deterministic API contracts.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e58c3a] hover:text-[#f59e0b] transition-colors mb-6 group-hover:underline"
              >
                <span>Explore architecture</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Visual Container: Schema Contract Frame */}
            <div className="rounded-xl border border-[#28261e] bg-[#100f0c] p-4 font-mono text-[11px] leading-relaxed text-[#9b988f]">
              <div className="flex items-center gap-1.5 mb-3 text-[#68655c] pb-2 border-b border-[#28261e]/50">
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                <span>schema.contract.ts</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-[#e58c3a]">export const</span> <span className="text-[#edecec]">ProjectSchema</span> = z.object(&#123;</div>
                <div className="pl-3"><span className="text-[#edecec]">id</span>: z.string().uuid(),</div>
                <div className="pl-3"><span className="text-[#edecec]">latency</span>: z.number().max(80),</div>
                <div className="pl-3"><span className="text-[#edecec]">status</span>: z.enum(['live', 'ready']),</div>
                <div>&#125;);</div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#28261e]/50 text-emerald-400 flex items-center justify-between text-[10px]">
                <span>✓ 100% Strict Contracts</span>
                <span className="text-[#68655c]">0 errors</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sub-Second Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-6 sm:p-8 flex flex-col justify-between hover:border-[#454035] transition-all group"
          >
            <div>
              <h3 className="text-xl font-bold text-[#edecec] mb-2">Sub-Second Performance</h3>
              <p className="text-sm text-[#9b988f] leading-relaxed mb-4">
                Sub-80ms edge TTFB with zero cumulative layout shift and 100/100 Core Web Vitals across all viewports.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e58c3a] hover:text-[#f59e0b] transition-colors mb-6 group-hover:underline"
              >
                <span>View web vitals</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Visual Container: Lighthouse Audit Benchmark */}
            <div className="rounded-xl border border-[#28261e] bg-[#100f0c] p-4 font-mono text-[11px]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#28261e]/50 text-[10px] text-[#68655c]">
                <span>GOOGLE LIGHTHOUSE AUDIT</span>
                <span className="text-emerald-400">PASSED</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center my-2">
                <div className="p-2 rounded-lg border border-[#28261e] bg-[#14120b]">
                  <div className="text-lg font-bold text-emerald-400">100</div>
                  <div className="text-[9px] text-[#9b988f] mt-0.5">Performance</div>
                </div>
                <div className="p-2 rounded-lg border border-[#28261e] bg-[#14120b]">
                  <div className="text-lg font-bold text-[#edecec]">&lt;60ms</div>
                  <div className="text-[9px] text-[#9b988f] mt-0.5">Edge TTFB</div>
                </div>
                <div className="p-2 rounded-lg border border-[#28261e] bg-[#14120b]">
                  <div className="text-lg font-bold text-[#e58c3a]">0.000</div>
                  <div className="text-[9px] text-[#9b988f] mt-0.5">Layout Shift</div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#28261e]/50 text-[10px] text-[#68655c] flex items-center justify-between">
                <span>Edge CDN Distribution</span>
                <span className="text-emerald-400 font-sans">● Global Hit</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Tactile Design Systems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-6 sm:p-8 flex flex-col justify-between hover:border-[#454035] transition-all group"
          >
            <div>
              <h3 className="text-xl font-bold text-[#edecec] mb-2">Tactile Design Systems</h3>
              <p className="text-sm text-[#9b988f] leading-relaxed mb-4">
                Harmonic typography, mathematical spacing scales, and fluid micro-interactions that feel natural.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e58c3a] hover:text-[#f59e0b] transition-colors mb-6 group-hover:underline"
              >
                <span>Inspect design tokens</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Visual Container: Design Tokens Swatches & UI Switch */}
            <div className="rounded-xl border border-[#28261e] bg-[#100f0c] p-4 font-mono text-[11px]">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#28261e]/50 text-[10px] text-[#68655c]">
                <span>DESIGN SYSTEM TOKENS</span>
                <span className="text-[#edecec]">v2.4.0</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 rounded-md bg-[#14120b] border border-[#28261e]" title="Background" />
                <span className="w-5 h-5 rounded-md bg-[#1c1a14] border border-[#28261e]" title="Surface" />
                <span className="w-5 h-5 rounded-md bg-[#e58c3a]" title="Accent Amber" />
                <span className="w-5 h-5 rounded-md bg-[#edecec]" title="Foreground" />
                <span className="text-[10px] text-[#68655c] ml-auto">Warm Palette</span>
              </div>
              <div className="p-2.5 rounded-lg border border-[#28261e] bg-[#14120b] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e58c3a]" />
                  <span className="text-xs font-sans text-[#edecec]">Interactive Token</span>
                </div>
                <div className="w-8 h-4 rounded-full bg-[#e58c3a] p-0.5 flex justify-end">
                  <div className="w-3 h-3 rounded-full bg-[#14120b]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
