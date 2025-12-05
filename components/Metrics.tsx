import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: "Ad Spend Managed", value: "$500k+" },
  { label: "Avg. ROAS", value: "4.5x" },
  { label: "SEO Traffic Growth", value: "300%" },
  { label: "Conversion Uplift", value: "+25%" },
];

const Metrics: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] border-y border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono group-hover:text-teal-500 transition-colors duration-300">{m.value}</div>
              <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;