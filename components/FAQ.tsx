import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of websites and web apps do you build?",
    answer: "I engineer custom commercial websites, full-scale SaaS applications, e-commerce storefronts, and internal business tools. Everything is tailored specifically to your business model with high performance, clean responsiveness, and reliable architectures."
  },
  {
    question: "Do you work with startups, agencies, and small businesses?",
    answer: "Yes. I frequently partner with founders launching MVPs, established commercial businesses in the UK and internationally upgrading their digital platforms, and agencies requiring dedicated full-stack execution."
  },
  {
    question: "How do you ensure fast page speeds and high Lighthouse scores?",
    answer: "I prioritize clean semantic markup, optimized server-side rendering/static generation, zero layout shifts, compressed assets, and streamlined JavaScript bundles so your visitors experience immediate load times on mobile and desktop."
  },
  {
    question: "Can you help improve SEO and conversion rates?",
    answer: "Yes. Having a background in digital growth engineering, I structure websites with proper Open Graph metadata, semantic JSON-LD schema, technical SEO best practices, and frictionless customer conversion paths."
  },
  {
    question: "What is your typical project timeline and process?",
    answer: "Timelines depend on scope: bespoke landing pages and commercial websites typically take 1 to 3 weeks, while comprehensive SaaS applications and platforms range from 3 to 8 weeks with milestone reviews and staging previews throughout."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes. I offer ongoing maintenance, feature expansion, and security updates so your web platform runs smoothly and scales as your business grows."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-[#040d21] border-t border-gh-border/40 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gh-border bg-gh-subtle text-gh-blue text-xs font-medium mb-4">
            <span>✦ Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Frequently Asked Questions.
          </h2>
          <p className="text-base text-gh-text-muted">
            Everything you need to know about working together on your next web project.
          </p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-white/20 bg-[#0d1117] shadow-lg'
                    : 'border-white/[0.08] bg-[#0d1117]/60 hover:border-white/[0.14]'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                >
                  <span className={`text-base sm:text-lg font-medium transition-colors ${isOpen ? 'text-white font-semibold' : 'text-gh-text-muted group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-45 bg-white/10' : ''}`}>
                    <span className="text-xs text-gh-text-muted">+</span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-sm text-gh-text-muted leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
