import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Capability {
  id: string;
  badge: string;
  title: string;
  summary: string;
  color: string;
  glowColor: string;
  previewTitle: string;
  previewSubtitle: string;
  metrics: { label: string; value: string }[];
  details: string[];
}

const capabilities: Capability[] = [
  {
    id: 'conversion',
    badge: 'Conversion & Growth',
    title: 'High-Converting Landing Pages',
    summary:
      'Purpose-built digital storefronts engineered with clear visual hierarchy, frictionless checkout flows, and commercial call-to-actions.',
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.05)',
    previewTitle: 'Commercial Conversion Architecture',
    previewSubtitle: 'Optimized for user retention, lead generation, and customer trust.',
    metrics: [
      { label: 'Avg. Conversion Lift', value: '+34%' },
      { label: 'Engagement Rate', value: '78%' },
      { label: 'Mobile Checkout Flow', value: '< 45s' },
    ],
    details: [
      'Visual storytelling tailored to brand positioning',
      'Frictionless call-to-action placement and user pathways',
      'Cross-device responsive testing across iOS, Android & desktop',
    ],
  },
  {
    id: 'saas',
    badge: 'Full-Stack Architecture',
    title: 'Custom Web & SaaS Applications',
    summary:
      'Scalable, secure, and reactive web applications with stateful interfaces, dynamic data sync, and clean API integrations.',
    color: '#edecec',
    glowColor: 'rgba(237, 236, 236, 0.04)',
    previewTitle: 'Production SaaS Infrastructure',
    previewSubtitle: 'Built for enterprise reliability, high concurrent users, and sub-second responses.',
    metrics: [
      { label: 'API Latency', value: '< 80ms' },
      { label: 'Uptime Standard', value: '99.9%' },
      { label: 'Security & Auth', value: 'Verified' },
    ],
    details: [
      'React & TypeScript typed frontends with state management',
      'Automated PDF generation, invoicing, and transactional emails',
      'RESTful & GraphQL API integration with secure data handling',
    ],
  },
  {
    id: 'performance',
    badge: 'Speed & Optimization',
    title: 'Sub-Second Speed & Technical SEO',
    summary:
      'Lightning-fast page loading with 100/100 Google Lighthouse scores, semantic HTML, rich schema metadata, and optimized asset delivery.',
    color: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.05)',
    previewTitle: 'Google Lighthouse Performance Grade',
    previewSubtitle: 'Engineered to rank higher on search engines and never lose a customer to slow loading.',
    metrics: [
      { label: 'Performance', value: '100' },
      { label: 'Accessibility', value: '100' },
      { label: 'Best Practices', value: '100' },
      { label: 'SEO Score', value: '100' },
    ],
    details: [
      'Zero-layout-shift (CLS) rendering and modern image compression',
      'Open Graph social previews and structured rich snippet markup',
      'Edge CDN caching and minimal JavaScript bundle footprint',
    ],
  },
  {
    id: 'design',
    badge: 'UI/UX Design Craft',
    title: 'Modern Design Systems & Interactions',
    summary:
      'Bespoke, refined user interfaces built with Swiss typography, tasteful micro-animations, and consistent brand design tokens.',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.05)',
    previewTitle: 'Interactive Design System & Micro-Interactions',
    previewSubtitle: 'Fluid Framer Motion animations that feel natural, tactile, and premium.',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Color System', value: 'Accessible' },
      { label: 'Component Library', value: 'Modular' },
    ],
    details: [
      'Custom color scales, Geist typography, and harmonic spacing',
      'Buttery smooth micro-interactions that reward user actions',
      'Clean modular UI components built for seamless iteration',
    ],
  },
];

const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Capability>(capabilities[0]);

  return (
    <section id="capabilities" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      {/* Subtle Warm Spotlight */}
      <div
        className="absolute top-1/2 right-1/3 w-[600px] h-[500px] blur-[160px] rounded-full pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeTab.glowColor }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#e58c3a] block mb-2 font-medium">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#edecec] mb-4">
            How I Build High-Impact Websites.
          </h2>
          <p className="text-base sm:text-lg text-[#9b988f] leading-relaxed">
            Combining full-stack technical engineering with commercial marketing strategy to deliver digital products that stand out.
          </p>
        </div>

        {/* Cursor Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Accordion / Tab List */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cap) => {
              const isActive = activeTab.id === cap.id;
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveTab(cap)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                    isActive
                      ? 'border-[#454035] bg-[#1c1a14] shadow-xl shadow-black/50'
                      : 'border-[#28261e] bg-[#1c1a14]/60 hover:bg-[#24211a] hover:border-[#454035]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider font-semibold"
                      style={{ color: cap.color }}
                    >
                      {cap.badge}
                    </span>
                    <span className="text-xs flex items-center gap-1.5" style={{ color: isActive ? cap.color : '#68655c' }}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'animate-pulse' : 'opacity-40'}`} style={{ backgroundColor: isActive ? cap.color : '#68655c' }} />
                      <span className="text-[11px] font-mono">{isActive ? 'Viewing' : 'Select'}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#edecec] mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9b988f] leading-relaxed">{cap.summary}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Preview Stage (Cursor Bento) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Top Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#28261e]">
                  <span className="text-xs font-mono text-[#9b988f] uppercase tracking-wider">
                    Architecture &amp; Execution
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full border text-[#edecec] font-mono"
                    style={{ borderColor: '#28261e', backgroundColor: '#14120b' }}
                  >
                    {activeTab.badge}
                  </span>
                </div>

                {/* Main Preview Title */}
                <div className="mb-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#edecec] mb-2">
                    {activeTab.previewTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9b988f]">
                    {activeTab.previewSubtitle}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {activeTab.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl border border-[#28261e] bg-[#14120b] text-center"
                    >
                      <div
                        className="text-2xl sm:text-3xl font-bold mb-1"
                        style={{ color: activeTab.color }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#9b988f]">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-3 pt-6 border-t border-[#28261e]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#68655c] mb-3">
                    Deliverables &amp; Standards
                  </div>
                  {activeTab.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 text-xs sm:text-sm text-[#edecec]">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold text-xs"
                        style={{ backgroundColor: '#14120b', color: activeTab.color, border: '1px solid #28261e' }}
                      >
                        ✓
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-[#28261e] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#68655c]">Tailored Strategy</span>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-[#e58c3a] hover:underline flex items-center gap-1"
                  >
                    <span>Discuss Your Project</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
