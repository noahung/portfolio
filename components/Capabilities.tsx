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
    id: 'fullstack',
    badge: 'TypeScript & Full-Stack',
    title: 'Type-Safe Architecture & APIs',
    summary:
      'End-to-end type safety from database schemas to client state, ensuring zero runtime undefined errors, clean API contracts, and deterministic data flow.',
    color: '#edecec',
    glowColor: 'rgba(237, 236, 236, 0.04)',
    previewTitle: 'Type-Safe Distributed Architecture',
    previewSubtitle: 'Strict type contracts across React frontends, cloud functions, and database schemas.',
    metrics: [
      { label: 'API Latency', value: '< 80ms' },
      { label: 'Null Safety', value: '100% Strict' },
      { label: 'Uptime SLA', value: '99.9%' },
    ],
    details: [
      'Deterministic domain models with Zod validation and typed API contracts',
      'Serverless cloud pipelines, automated PDFKit document generation & webhooks',
      'Firestore & PostgreSQL atomic transactions with granular security rules',
    ],
  },
  {
    id: 'performance',
    badge: 'Edge & Web Vitals',
    title: 'Sub-Second Speed & Edge Caching',
    summary:
      'Lightning-fast page loading with 100/100 Google Lighthouse scores, zero cumulative layout shift, and sub-80ms edge cache hits.',
    color: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.05)',
    previewTitle: 'Core Web Vitals & Edge Performance',
    previewSubtitle: 'Engineered for sub-second first contentful paint and zero layout shift across all viewports.',
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Layout Shift (CLS)', value: '0.000' },
      { label: 'Edge TTFB', value: '< 60ms' },
    ],
    details: [
      'Zero-layout-shift (CLS) rendering with pre-allocated aspect ratios and SVG skeletons',
      'Modern AVIF & WebP image compression pipeline with edge CDN distribution',
      'Minimal JavaScript bundle footprint (< 390KB total) with route-level code splitting',
    ],
  },
  {
    id: 'design-system',
    badge: 'UI/UX Engineering',
    title: 'Design Systems & Micro-Interactions',
    summary:
      'Bespoke, refined user interfaces built with Swiss typography, tactile micro-animations, and consistent tokenized CSS variables.',
    color: '#e58c3a',
    glowColor: 'rgba(229, 140, 58, 0.05)',
    previewTitle: 'Design Token System & Interactions',
    previewSubtitle: 'Fluid Framer Motion micro-interactions that feel responsive, tactile, and natural.',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Accessibility', value: 'WCAG AAA' },
      { label: 'Component Library', value: 'Modular' },
    ],
    details: [
      'Harmonic typography using Geist & Geist Mono with mathematical line-height scales',
      'Physics-based micro-interactions that reward user actions without layout lag',
      'Design tokens with strict dark palettes, 1px borders, and warm ambient illumination',
    ],
  },
  {
    id: 'devops',
    badge: 'DevOps & Reliability',
    title: 'Automated CI/CD & Cloud Infrastructure',
    summary:
      'Zero-downtime deployment pipelines with GitHub Actions, strict TypeScript linting, automated static builds, and semantic SEO schema.',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.05)',
    previewTitle: 'Automated CI/CD & Deploy Pipelines',
    previewSubtitle: 'Automated verification, static bundling, and instant global deployment.',
    metrics: [
      { label: 'CI/CD Build Time', value: '~3.0s' },
      { label: 'Broken Links', value: '0' },
      { label: 'SEO Schema Grade', value: '100% Valid' },
    ],
    details: [
      'Automated GitHub Actions workflow compiling and deploying static assets to edge hosts',
      'Schema.org JSON-LD structured data and Open Graph social previews on every route',
      'Strict TypeScript compiler checks and PostCSS autoprefixing on every git commit',
    ],
  },
];

const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Capability>(capabilities[0]);

  return (
    <section id="engineering" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <div id="capabilities" className="absolute -top-20" />

      {/* Subtle Warm Spotlight */}
      <div
        className="absolute top-1/2 right-1/3 w-[600px] h-[500px] blur-[160px] rounded-full pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeTab.glowColor }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#e58c3a] block mb-2 font-medium">
            System Standards &amp; Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#edecec] mb-4">
            Engineering Standards &amp; Architecture.
          </h2>
          <p className="text-base sm:text-lg text-[#9b988f] leading-relaxed">
            How production software systems are designed, structured, and optimized for sub-second performance and operational reliability.
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
                    Engineering Deliverables &amp; Standards
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
                  <span className="text-xs font-mono text-[#68655c]">Production Ready</span>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-[#e58c3a] hover:underline flex items-center gap-1"
                  >
                    <span>Discuss Your Architecture</span>
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
