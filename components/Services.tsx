import React from 'react';
import { motion } from 'framer-motion';

type ServiceType = 'engineering' | 'growth' | 'strategy';

interface Service {
  title: string;
  description: string;
  type: ServiceType;
  icon: React.ReactNode;
  deliverables: string[];
}

// Icons
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
);
const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);

const servicesData: Service[] = [
  {
    title: "Custom Web Applications",
    description: "Full-cycle development of scalable, secure, and high-performance web platforms tailored to business logic.",
    type: 'engineering',
    icon: <CodeIcon />,
    deliverables: ["Next.js / React", "Node.js Backends", "Database Design", "API Integration"]
  },
  {
    title: "Performance Marketing",
    description: "Data-driven paid acquisition campaigns designed to lower CPA and maximize Return on Ad Spend (ROAS).",
    type: 'growth',
    icon: <ChartIcon />,
    deliverables: ["Google Ads", "Meta (FB/Insta) Ads", "Retargeting Strategy", "Funnel Optimization"]
  },
  {
    title: "Technical SEO & Audit",
    description: "Deep-dive analysis into site architecture, core web vitals, and semantic structure to dominate search rankings.",
    type: 'growth',
    icon: <SearchIcon />,
    deliverables: ["Site Audits", "Schema Markup", "Speed Optimization", "Keyword Strategy"]
  },
  {
    title: "E-Commerce Solutions",
    description: "Building high-converting digital storefronts with seamless payment processing and inventory management.",
    type: 'engineering',
    icon: <LayoutIcon />,
    deliverables: ["Shopify / WooCommerce", "Payment Gateways", "Custom Cart Logic", "Inventory Sync"]
  },
  {
    title: "Cloud Infrastructure",
    description: "Deploying resilient, auto-scaling server environments that handle traffic spikes without downtime.",
    type: 'engineering',
    icon: <ServerIcon />,
    deliverables: ["AWS / Vercel", "Docker Containers", "CI/CD Pipelines", "Security Hardening"]
  },
  {
    title: "Digital Transformation",
    description: "Strategic consulting to modernize legacy systems and integrate digital workflows into traditional businesses.",
    type: 'strategy',
    icon: <CpuIcon />,
    deliverables: ["Tech Roadmap", "Vendor Selection", "Process Automation", "Team Training"]
  }
];

const getTheme = (type: ServiceType) => {
  switch(type) {
    case 'engineering': return { border: 'group-hover:border-blue-500/50', icon: 'text-blue-500', bg: 'group-hover:bg-blue-500/5', tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20' };
    case 'growth': return { border: 'group-hover:border-teal-500/50', icon: 'text-teal-500', bg: 'group-hover:bg-teal-500/5', tag: 'bg-teal-500/10 text-teal-400 border-teal-500/20' };
    case 'strategy': return { border: 'group-hover:border-purple-500/50', icon: 'text-purple-500', bg: 'group-hover:bg-purple-500/5', tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20' };
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden border-t border-zinc-900">
      
      {/* Background Ambience - Massive Multicolor Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-teal-900/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Modules</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    A comprehensive suite of technical and growth services. 
                    I deliver <span className="text-white">end-to-end solutions</span>, from the first line of code to the first sale.
                </p>
            </div>
            
            {/* Legend */}
            <div className="flex gap-4 text-xs font-mono uppercase tracking-widest backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-2 text-zinc-400"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" /> Engineering</div>
                <div className="flex items-center gap-2 text-zinc-400"><div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]" /> Growth</div>
                <div className="flex items-center gap-2 text-zinc-400"><div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" /> Strategy</div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
                const theme = getTheme(service.type);
                return (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative p-8 border border-zinc-800 bg-zinc-900/30 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 rounded-xl overflow-hidden ${theme.border} ${theme.bg}`}
                    >
                        {/* Hover Gradient Overlay */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none`} />
                        
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-20 group-hover:opacity-50 transition-opacity" />

                        {/* Header */}
                        <div className="relative z-10 mb-6 flex justify-between items-start">
                            <div className={`p-3 rounded-xl bg-black/50 border border-zinc-800 shadow-inner ${theme.icon}`}>
                                {service.icon}
                            </div>
                            <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                                0{index + 1}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mb-8 min-h-[140px]">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                                {service.description}
                            </p>
                        </div>

                        {/* Deliverables / Footer */}
                        <div className="relative z-10">
                            <div className="h-px w-full bg-zinc-800 mb-4 group-hover:bg-zinc-700 transition-colors" />
                            <div className="flex flex-wrap gap-2">
                                {service.deliverables.map((item, i) => (
                                    <span key={i} className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded border ${theme.tag}`}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;