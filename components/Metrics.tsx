import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Client Websites Delivered', value: '16+', detail: 'Across UK & International', color: 'text-[#edecec]' },
  { label: 'Users & Students Reached', value: '10k+', detail: 'Across Web Platforms', color: 'text-[#f59e0b]' },
  { label: 'Production Reliability', value: '99.9%', detail: 'Sub-second Response', color: 'text-emerald-400' },
  { label: 'Lighthouse Quality Standard', value: '100', detail: 'Speed, SEO & Accessibility', color: 'text-[#edecec]' },
];

const Metrics: React.FC = () => {
  return (
    <section className="py-16 bg-[#14120b] border-y border-[#28261e] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl border border-[#28261e] bg-[#1c1a14] hover:border-[#454035] hover:bg-[#24211a] transition-all text-center group"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 ${m.color}`}>
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#edecec] mb-1">
                {m.label}
              </div>
              <div className="text-[11px] text-[#9b988f]">
                {m.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;