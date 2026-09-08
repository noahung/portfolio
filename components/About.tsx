import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-[#28261e] bg-[#1c1a14] p-6 shadow-2xl relative overflow-hidden group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 border border-[#28261e] bg-[#14120b]">
                <img
                  src={profileImg}
                  alt="Noah Aung"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#edecec]">Noah Aung</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-[#9b988f] mb-4 font-mono">Full-Stack Engineer & Web Designer</p>

              <div className="pt-4 border-t border-[#28261e] space-y-2 text-xs text-[#9b988f]">
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="text-[#edecec] font-medium">Cheltenham, UK</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Availability</span>
                  <span className="text-emerald-400 font-medium">Open for Projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Focus</span>
                  <span className="text-[#edecec] font-medium">Web Apps & Platforms</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio and Philosophy */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#28261e] bg-[#1c1a14] text-[#f59e0b] text-xs font-mono mb-4">
                <span>✦ The Craft</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#edecec] mb-6 leading-tight">
                Engineering digital experiences where speed, aesthetics, and business goals align.
              </h2>
              <p className="text-base sm:text-lg text-[#9b988f] leading-relaxed mb-6 font-normal">
                I help companies and ambitious founders transform ideas into reliable, high-converting digital products. Whether it's an enterprise billing platform handling complex tax and invoices, an AI-powered educational application, or a commercial storefront, I combine thoughtful design with bulletproof code.
              </p>
              <p className="text-base sm:text-lg text-[#9b988f] leading-relaxed mb-8">
                Every project is crafted with attention to sub-second load performance, clean responsive typography, accessible interactions, and seamless user conversion.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-[#edecec] text-[#14120b] font-semibold text-xs hover:bg-white transition-colors shadow-sm cursor-pointer"
                >
                  Start a Conversation →
                </a>
                <a
                  href="#showcase"
                  className="px-6 py-3 rounded-lg border border-[#28261e] bg-[#1c1a14] text-[#edecec] font-semibold text-xs hover:bg-[#24211a] hover:border-[#454035] transition-colors cursor-pointer"
                >
                  Explore Client Portfolio ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
