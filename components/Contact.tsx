import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "noahaung@proton.me";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      {/* Background Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#28261e] bg-[#1c1a14] p-8 sm:p-14 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight max-w-3xl mx-auto">
            <span className="text-[#edecec]">Ready to build your web platform?</span>{' '}
            <span className="text-[#888680]">Available for selected commercial and SaaS projects.</span>
          </h2>

          {/* Email Action Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#edecec] text-[#14120b] font-bold text-sm hover:bg-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Email Me Directly</span>
              <span>→</span>
            </a>

            <div className="relative w-full sm:w-auto">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-[#28261e] bg-[#14120b] text-[#edecec] font-mono text-xs hover:bg-[#24211a] hover:border-[#454035] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{email}</span>
                <span className="text-[#9b988f]">📋</span>
              </button>

              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: -6 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-400 text-black font-semibold text-[11px] rounded-md shadow-lg font-mono"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#28261e] text-xs text-[#9b988f]">
            <div>
              <span className="block text-[#68655c] uppercase tracking-wider text-[10px] mb-1 font-mono">Location</span>
              <span className="text-[#edecec] font-medium">Cheltenham, UK · Remote Worldwide</span>
            </div>
            <div>
              <span className="block text-[#68655c] uppercase tracking-wider text-[10px] mb-1 font-mono">Direct Connect</span>
              <div className="flex justify-center gap-4 text-[#edecec] font-medium">
                <a href="https://github.com/noahung" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/tharhtetaung/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a>
              </div>
            </div>
            <div>
              <span className="block text-[#68655c] uppercase tracking-wider text-[10px] mb-1 font-mono">Response Time</span>
              <span className="text-emerald-400 font-medium">Usually within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;