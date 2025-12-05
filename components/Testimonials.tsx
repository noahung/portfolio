import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'FinTech Solutions',
    quote: 'Noah delivered a platform that exceeded our expectations in both performance and design. A true technical partner.'
  },
  {
    id: '2',
    name: 'David Thorne',
    role: 'Marketing Director',
    company: 'Growth Agency',
    quote: 'His understanding of both the code and the marketing funnel is rare. Our conversion rates doubled after the rebuild.'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'EdStart',
    quote: 'Professional, efficient, and incredibly skilled. Noah built our MVP in record time without sacrificing quality.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#050505] border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-16 text-center">
          Client Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900/20 p-10 border border-zinc-800 relative"
            >
              <div className="text-4xl text-zinc-700 absolute top-6 left-6 font-serif">"</div>
              <p className="text-zinc-300 text-lg italic mb-8 relative z-10 pt-4">
                {t.quote}
              </p>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
