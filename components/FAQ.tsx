import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What technologies do you specialise in?",
    answer: "I focus on the modern JavaScript stack: React, TypeScript, Node.js, and Next.js. For styles, I prefer Tailwind CSS. On the backend, I work with SQL and NoSQL databases and deploy using AWS or Vercel."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, I partner with businesses of all sizes, from local startups in Cheltenham to larger UK enterprises, helping them scale their digital presence."
  },
  {
    question: "Do you build MVPs for startups?",
    answer: "Absolutely. I specialise in rapid prototyping and building production-ready MVPs that allow founders to test the market quickly."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "I offer various maintenance packages to ensure your software remains secure, up-to-date, and performant after launch."
  },
  {
    question: "How do you approach SEO?",
    answer: "I build every website with Technical SEO in mind—fast load times, proper semantic HTML, and mobile optimization. I also offer dedicated SEO services including keyword research, on-page optimization, and content strategy to help you rank higher."
  },
  {
    question: "Can you manage my Google Ads (PPC) campaigns?",
    answer: "Yes. With my background as a Head of Digital Marketing, I have extensive experience managing high-budget PPC campaigns. I can help set up, optimise, and manage your Google Ads to ensure maximum ROI."
  },
  {
    question: "Can you help with marketing after launch?",
    answer: "Yes. Unlike many developers, I have a background in Digital Marketing (SEO, PPC), so I build products with growth in mind from day one."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#050505] border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-12">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-800 bg-zinc-900/20">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span className={`text-lg font-medium transition-colors ${activeIndex === index ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                  {faq.question}
                </span>
                <span className="relative ml-4 flex-shrink-0 w-4 h-4">
                  <span className="absolute top-1/2 left-0 w-4 h-[1px] bg-zinc-500" />
                  <motion.span 
                    animate={{ rotate: activeIndex === index ? 0 : 90 }}
                    className="absolute top-1/2 left-0 w-4 h-[1px] bg-zinc-500" 
                  />
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
