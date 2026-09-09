import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all 16 showcase images
import img1 from '../assets/showcase/1.png';
import img2 from '../assets/showcase/2.jpg';
import img3 from '../assets/showcase/3.jpg';
import img4 from '../assets/showcase/4.jpg';
import img5 from '../assets/showcase/5.jpg';
import img6 from '../assets/showcase/6.jpg';
import img7 from '../assets/showcase/7.jpg';
import img8 from '../assets/showcase/8.jpg';
import img9 from '../assets/showcase/9.jpg';
import img10 from '../assets/showcase/10.jpg';
import img11 from '../assets/showcase/11.jpg';
import img12 from '../assets/showcase/12.jpg';
import img13 from '../assets/showcase/13.jpg';
import img14 from '../assets/showcase/14.jpg';
import img15 from '../assets/showcase/15.jpg';
import img16 from '../assets/showcase/16.jpg';

export interface ShowcaseItem {
  id: number;
  title: string;
  category: 'SaaS & Web Apps' | 'Client Websites' | 'Enterprise & Automotive';
  image: string;
  description: string;
  tag: string;
  client: string;
  link?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Quote on the Go (App Dashboard)',
    category: 'SaaS & Web Apps',
    image: img1,
    client: 'Adverto Media · UK',
    tag: 'Production SaaS',
    description: 'Commercial billing and automated invoicing web application built with React, Firebase, and sub-second quotation workflows.',
    link: 'https://quoteonthego.co.uk/',
  },
  {
    id: 2,
    title: 'Myanmar Scholar',
    category: 'SaaS & Web Apps',
    image: img2,
    client: 'Non-Profit Initiative',
    tag: 'Global Scholarship Engine',
    description: 'Non-profit discovery platform helping 10,000+ students discover and apply for verified international scholarships worldwide.',
    link: 'https://myanmarscholar.com/',
  },
  {
    id: 3,
    title: 'Studia AI',
    category: 'SaaS & Web Apps',
    image: img3,
    client: 'AI & EdTech',
    tag: 'Study Companion App',
    description: 'Intelligent active recall companion and dynamic study web platform helping students learn faster and retain deeper knowledge.',
    link: 'https://noahung.github.io/studia-website/',
  },
  {
    id: 4,
    title: 'Pelsall Windows & Glass',
    category: 'Client Websites',
    image: img4,
    client: 'Pelsall Windows Ltd · UK',
    tag: 'Glazing & Conservatories',
    description: 'Bespoke commercial web platform and online inquiry funnel for a premier UK window and glass specialist.',
  },
  {
    id: 5,
    title: 'RLM Windows, Doors & Conservatories',
    category: 'Client Websites',
    image: img5,
    client: 'RLM Windows · UK',
    tag: 'Home Improvements',
    description: 'High-converting local installer platform featuring product visualizers and direct quote submission workflows.',
  },
  {
    id: 6,
    title: 'St Neots Windows & Conservatories',
    category: 'Client Websites',
    image: img6,
    client: 'St Neots Windows · UK',
    tag: 'Commercial Glazing',
    description: 'Clean responsive platform showcasing residential and commercial installation portfolios with sub-second page loads.',
  },
  {
    id: 7,
    title: 'Styles of Bath',
    category: 'Client Websites',
    image: img7,
    client: 'Styles of Bath · UK',
    tag: 'Architectural Glazing',
    description: 'Boutique installer website designed for Bath and surrounding heritage areas with integrated digital product brochures.',
  },
  {
    id: 8,
    title: 'Monest Accounts',
    category: 'Client Websites',
    image: img8,
    client: 'Monest Accounts · Gloucester, UK',
    tag: 'Accountancy & FinTech',
    description: 'Gloucester-based accountancy firm website featuring Making Tax Digital compliance guides and client onboarding funnels.',
  },
  {
    id: 9,
    title: 'Brunel Communications',
    category: 'Client Websites',
    image: img9,
    client: 'Brunel Communications · Bristol, UK',
    tag: 'Network Infrastructure',
    description: 'Bristol data cabling and smart telecom installations corporate portal built for enterprise clients.',
  },
  {
    id: 10,
    title: 'Glazebase',
    category: 'Client Websites',
    image: img10,
    client: 'Glazebase · UK',
    tag: 'Trade E-Commerce',
    description: 'Nationwide online trade supply portal and e-commerce catalogue for windows, doors, and glazing hardware.',
  },
  {
    id: 11,
    title: 'Super Seven Stars Group',
    category: 'Enterprise & Automotive',
    image: img11,
    client: 'Super Seven Stars Group',
    tag: 'Corporate Enterprise',
    description: 'Multi-brand corporate enterprise portal representing automotive and industrial distribution networks in Myanmar.',
  },
  {
    id: 12,
    title: 'Quote on the Go (Marketing)',
    category: 'SaaS & Web Apps',
    image: img12,
    client: 'Adverto Media · UK',
    tag: 'SaaS Marketing Site',
    description: 'Conversion-engineered marketing storefront and user onboarding flow for the Quote on the Go platform.',
    link: 'https://quoteonthego.co.uk/',
  },
  {
    id: 13,
    title: 'Super Seven Stars Agri-Tech',
    category: 'Enterprise & Automotive',
    image: img13,
    client: 'SSS Agri-Tech Co., Ltd.',
    tag: 'Agri-Business & Tech',
    description: 'Enterprise agricultural technology and sustainable farming supply chain platform operating across Myanmar.',
  },
  {
    id: 14,
    title: 'Kia Motors Myanmar',
    category: 'Enterprise & Automotive',
    image: img14,
    client: 'Kia Motors Official Distributor',
    tag: 'Automotive Digital Showroom',
    description: 'Official digital showroom and nationwide campaign platform for Kia vehicle models, service booking, and the EV6 launch.',
  },
  {
    id: 15,
    title: 'Adverto Form Designer',
    category: 'SaaS & Web Apps',
    image: img15,
    client: 'Internal Tool · Adverto Media',
    tag: 'Interactive Form Builder',
    description: 'Proprietary interactive form builder developed for rapid client quote generation, pricing calculators, and lead capture.',
  },
  {
    id: 16,
    title: 'CWD Improvements',
    category: 'Client Websites',
    image: img16,
    client: 'CWD Improvements · UK',
    tag: 'Carpentry & Glazing',
    description: 'Regional window and door specialists website covering Berkshire, Hampshire, and Surrey with instant quote calculators.',
  },
];

const categories = ['All', 'SaaS & Web Apps', 'Client Websites', 'Enterprise & Automotive'] as const;

const ShowcaseGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? showcaseItems
    : showcaseItems.filter((item) => item.category === activeCategory);

  return (
    <section id="showcase" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      {/* Subtle Warm Ambient Lighting */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[500px] bg-amber-500/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#e58c3a] block mb-2 font-medium">
              Selected Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#edecec] mb-3">
              Websites &amp; Platforms Delivered.
            </h2>
            <p className="text-base sm:text-lg text-[#9b988f] max-w-2xl font-normal leading-relaxed">
              Commercial platforms, SaaS applications, and client websites engineered across the UK and international markets.
            </p>
          </div>

          {/* Category Filter Tabs (Cursor Pill Style) */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full border border-[#28261e] bg-[#1c1a14]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#edecec] text-[#14120b] shadow-sm font-semibold'
                    : 'text-[#9b988f] hover:text-[#edecec] hover:bg-[#24211a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Portfolio Grid (3-Column Clean Card Layout matching OpenAI/Cursor design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-5 flex flex-col justify-between hover:border-[#454035] hover:bg-[#201e18] transition-all group"
            >
              <div>
                {/* Website Screenshot with inset border & rounded corners */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#14120b] border border-[#28261e]/80 mb-5 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#14120b]/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#edecec] text-[#14120b] text-xs font-semibold shadow-lg">
                      Preview Project ↗
                    </span>
                  </div>
                </div>

                {/* Metadata / Category & Tag (single clean line, no awkward truncation) */}
                <div className="flex items-center gap-2 mb-2.5 text-xs">
                  <span className="font-mono text-[#e58c3a] font-medium">
                    {item.client.split('·')[0].trim()}
                  </span>
                  <span className="text-[#454035]">·</span>
                  <span className="text-[#9b988f] font-mono text-[11px]">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedItem(item)}
                  className="text-lg font-semibold text-[#edecec] mb-2 group-hover:text-white transition-colors leading-snug cursor-pointer"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#9b988f] line-clamp-2 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Pill Button (Matching Image 3) */}
              <button
                onClick={() => setSelectedItem(item)}
                className="w-full rounded-full py-2.5 bg-[#25231c] hover:bg-[#edecec] hover:text-[#14120b] border border-[#28261e] hover:border-[#edecec] text-xs font-medium text-[#edecec] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn"
              >
                <span>View Project</span>
                <span className="text-[#9b988f] group-hover/btn:text-[#14120b] transition-colors">↗</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl rounded-2xl border border-[#28261e] bg-[#1c1a14] overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="h-12 border-b border-[#28261e] bg-[#14120b] px-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#9b988f]">{selectedItem.title}</span>
                  <span className="text-[11px] font-mono text-[#68655c]">· {selectedItem.tag}</span>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-[#9b988f] hover:text-[#edecec] px-2 py-1 rounded-md text-xs font-mono cursor-pointer"
                >
                  ✕ Close [Esc]
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="max-h-[65vh] overflow-y-auto bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Modal Info Footer */}
              <div className="p-6 bg-[#1c1a14] border-t border-[#28261e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[#edecec]">{selectedItem.title}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#14120b] border border-[#28261e] text-[#e58c3a] font-mono">
                      {selectedItem.client}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9b988f]">{selectedItem.description}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {selectedItem.link && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#edecec] text-[#14120b] font-medium text-xs hover:bg-white transition-colors"
                    >
                      Visit Live Platform ↗
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 rounded-full border border-[#28261e] bg-[#14120b] text-[#edecec] font-medium text-xs hover:bg-[#24211a] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShowcaseGallery;
