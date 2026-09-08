import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Operations Director',
    company: 'QuoteOnTheGo Ecosystem',
    quote:
      'Noah delivered a billing platform that exceeded our expectations in both raw performance and user clarity. Invoice workflows that used to take minutes now execute seamlessly in seconds.',
    tag: 'SaaS Platform',
  },
  {
    id: '2',
    name: 'David Thorne',
    role: 'Marketing Lead',
    company: 'Commercial Retail Client',
    quote:
      'His understanding of both web architecture and conversion marketing is rare. Our customer engagement and contact inquiries doubled immediately following the site redesign.',
    tag: 'Commercial Web',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'EdTech Venture',
    quote:
      'Professional, proactive, and exceptionally skilled. Noah translated our vision into a polished digital experience with beautiful animations and rock-solid code.',
    tag: 'EdTech App',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 bg-[#0d1117] border-t border-gh-border/60 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gh-border bg-gh-subtle text-gh-green text-xs font-medium mb-4">
            <span>✦ Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Trusted by Founders & Businesses.
          </h2>
          <p className="text-base text-gh-text-muted">
            Feedback from commercial clients and collaborators on delivered web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-2xl border border-white/[0.08] bg-[#161b22]/50 p-8 flex flex-col justify-between hover:border-white/[0.16] transition-all shadow-gh-card group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400 gap-1 text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/[0.08] text-gh-text-muted bg-[#0d1117]">
                    {t.tag}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gh-text leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-xs text-white">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-gh-text-dim">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
