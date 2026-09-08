import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  badgeColor: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'adverto',
    role: 'Marketing & Senior Web Developer (Digital Product & MarTech)',
    company: 'Adverto Media',
    location: 'Gloucester, UK',
    period: 'Jul 2023 – Present',
    badge: 'Current Role',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    summary:
      'Designing and developing SaaS products, managing high-budget client accounts, and spearheading internal AI automation.',
    bullets: [
      'Designed, built and launched Quote on the Go (quoteonthego.co.uk), a SaaS quoting platform used by hundreds of UK tradespeople, using React, Firebase, and REST APIs, owning product direction, UX, development and deployment end-to-end.',
      'Advise directors and SME owners on digital transformation, marketing technology and customer acquisition strategy across a portfolio of 15+ client accounts.',
      'Manage and maintain 30+ client websites, having delivered 40+ website builds since joining, combining front-end development with conversion-focused design and copy.',
      'Oversee digital advertising spend of over £150,000 across managed accounts, optimising paid campaigns and content calendars for measurable growth.',
      'Developed AI-powered workflow automation and internal productivity tools using LLM APIs, improving content creation, development efficiency and proposal generation.',
      'Improved average client site load speed by 38% and organic search visibility by 24% across managed accounts.',
    ],
    skills: ['React', 'Firebase', 'REST APIs', 'Product Direction', 'AI LLM APIs', 'SEO', '£150k+ PPC'],
  },
  {
    id: 'kia-peugeot',
    role: 'Head of Digital Marketing',
    company: 'Kia & Peugeot Myanmar (Super Seven Group)',
    location: 'Yangon, Myanmar',
    period: 'Apr 2020 – Aug 2022',
    badge: 'Enterprise Leadership',
    badgeColor: 'border-[#28261e] text-[#edecec] bg-[#14120b]',
    summary:
      'Directed nationwide automotive digital marketing strategy, multi-brand media budgets, and cross-functional team operations.',
    bullets: [
      'Directed digital marketing strategy for Kia and Peugeot in Myanmar, owning an annual budget of over $250,000 across paid media, agencies and CRM.',
      'Advised senior leadership and regional distributors on digital transformation initiatives, from CRM adoption to online lead-generation systems.',
      'Built and led a 6-person cross-functional digital team, reporting into senior leadership and coordinating with regional distributor stakeholders.',
      'Maintained campaign delivery and lead pipeline continuity through the 2021 political crisis before relocating to the UK in 2022.',
    ],
    skills: ['$250k Budget', 'Cross-Functional Leadership', 'CRM Systems', 'Lead Generation', 'Automotive'],
  },
  {
    id: 'duwun',
    role: 'Head of Online Marketing',
    company: 'Duwun Media',
    location: 'Yangon, Myanmar',
    period: 'Nov 2018 – Apr 2020',
    badge: 'Media & Audience Growth',
    badgeColor: 'border-[#28261e] text-[#f59e0b] bg-[#14120b]',
    summary:
      'Led audience acquisition and commercial sponsored campaigns for one of the country’s premier digital media platforms.',
    bullets: [
      'Led a team of 4 across the online marketing function for one of Myanmar’s leading media platforms, owning content, social, and paid strategy.',
      'Managed an annual digital budget of over $150,000 and grew social following by 45%.',
      'Launched native advertising and sponsored content packages for national and regional brand clients.',
    ],
    skills: ['Media Strategy', 'Audience Growth', 'Native Advertising', 'Budget Management', 'Team Leadership'],
  },
  {
    id: 'viber',
    role: 'Partnership Executive – Myanmar Market',
    company: 'Rakuten Viber (APAC Regional Team)',
    location: 'Singapore / Yangon',
    period: 'Nov 2016 – Nov 2018',
    badge: 'Regional Tech',
    badgeColor: 'border-[#28261e] text-[#edecec] bg-[#14120b]',
    summary:
      'Liaised between Singapore APAC leadership and telco operators to negotiate strategic carrier bundles.',
    bullets: [
      'Secured and managed telecom and brand partnerships across Myanmar, negotiating co-marketing and carrier bundling deals with senior stakeholders that grew monthly active users by 22%.',
      'Acted as primary liaison between the Singapore-based APAC leadership team and local partners in Myanmar.',
    ],
    skills: ['Strategic Partnerships', 'Telco Carrier Bundles', 'User Growth (+22%)', 'APAC Regional Relations'],
  },
  {
    id: 'samsung',
    role: 'Digital Project Lead',
    company: 'Samsung Myanmar',
    location: 'Yangon, Myanmar',
    period: 'Mar 2015 – Nov 2016',
    badge: 'Global Enterprise',
    badgeColor: 'border-[#28261e] text-[#9b988f] bg-[#14120b]',
    summary:
      'Delivered nationwide digital launches and in-store interactive experiences across 20+ retail stores.',
    bullets: [
      'Led digital project delivery for mobile and consumer electronics launches, coordinating marketing, retail, and IT stakeholders across 20+ stores nationwide.',
      'Managed vendor and agency relationships for website, app and in-store digital touchpoint projects, introducing structured project tracking that cut turnaround time by 20%.',
    ],
    skills: ['Retail Digital Touchpoints', 'Electronics Launches', 'Agency Management', 'Process Optimization'],
  },
];

const skillPillars = [
  {
    category: 'Business & Leadership',
    color: '#f59e0b',
    skills: ['Digital Transformation', 'Product Strategy', 'Marketing Operations', 'Stakeholder Management', 'Cross-Functional Leadership', 'Vendor Management'],
  },
  {
    category: 'Technology & Engineering',
    color: '#edecec',
    skills: ['React', 'WordPress', 'Firebase', 'Supabase', 'REST APIs', 'AI & LLM APIs', 'Git', 'Figma', 'Docker', 'TypeScript & JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Analytics & Data',
    color: '#34d399',
    skills: ['Google Analytics 4 (GA4)', 'Google Tag Manager (GTM)', 'Power BI', 'Tableau', 'SQL', 'Conversion Funnel Auditing', 'A/B Testing'],
  },
  {
    category: 'Growth & Marketing',
    color: '#fbbf24',
    skills: ['Technical SEO', 'Paid Media (Google/Meta Ads)', 'CRM Systems', 'Marketing Automation', 'Content Strategy', 'Conversion Rate Optimization (CRO)'],
  },
];

const CVSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'education'>('experience');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      {/* Background Ambient Warm Spotlight */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-amber-500/[0.03] blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[450px] bg-white/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#28261e] bg-[#1c1a14] text-[#f59e0b] text-xs font-mono mb-4">
              <span>✦ Track Record & Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#edecec] mb-3">
              Curriculum Vitae.
            </h2>
            <p className="text-base sm:text-lg text-[#9b988f] max-w-2xl">
              10+ years of international experience delivering digital transformation, SaaS products, and growth systems.
            </p>
          </div>

          {/* Action CTAs: Download / Print */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl border border-[#28261e] bg-[#1c1a14] text-[#edecec] hover:bg-[#24211a] hover:border-[#454035] transition-colors text-xs font-mono flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#9b988f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / Save CV</span>
            </button>
            <a
              href="mailto:noahaung@proton.me?subject=Inquiry regarding CV & Opportunities"
              className="px-4 py-2.5 rounded-xl bg-[#edecec] text-[#14120b] font-semibold text-xs hover:bg-white transition-colors shadow-sm cursor-pointer"
            >
              Contact Noah →
            </a>
          </div>
        </div>

        {/* Quick Highlights Metric Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl border border-[#28261e] bg-[#1c1a14] text-left">
            <div className="text-2xl sm:text-3xl font-bold text-[#edecec] mb-1">10+ Years</div>
            <div className="text-xs text-[#9b988f]">International Experience</div>
            <div className="text-[11px] text-[#68655c] mt-1">UK · Singapore · Asia-Pacific</div>
          </div>

          <div className="p-5 rounded-2xl border border-[#28261e] bg-[#1c1a14] text-left">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">40+ Builds</div>
            <div className="text-xs text-[#9b988f]">Web Platforms Delivered</div>
            <div className="text-[11px] text-[#68655c] mt-1">SaaS, E-Com & Corporate</div>
          </div>

          <div className="p-5 rounded-2xl border border-[#28261e] bg-[#1c1a14] text-left">
            <div className="text-2xl sm:text-3xl font-bold text-[#f59e0b] mb-1">£150k+</div>
            <div className="text-xs text-[#9b988f]">Managed Paid Budgets</div>
            <div className="text-[11px] text-[#68655c] mt-1">+ $250k Enterprise Automotive</div>
          </div>

          <div className="p-5 rounded-2xl border border-[#28261e] bg-[#1c1a14] text-left">
            <div className="text-2xl sm:text-3xl font-bold text-[#edecec] mb-1">Mensa</div>
            <div className="text-xs text-[#9b988f]">High IQ Society Member</div>
            <div className="text-[11px] text-[#68655c] mt-1">MBA in Big Data (UK)</div>
          </div>
        </div>

        {/* View Selection Tabs */}
        <div className="flex gap-2 p-1.5 rounded-xl border border-[#28261e] bg-[#1c1a14] w-fit mb-10">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-[#edecec] text-[#14120b] font-bold shadow-sm'
                : 'text-[#9b988f] hover:text-[#edecec]'
            }`}
          >
            Professional Experience ({experiences.length})
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-[#edecec] text-[#14120b] font-bold shadow-sm'
                : 'text-[#9b988f] hover:text-[#edecec]'
            }`}
          >
            4-Pillar Skills Matrix
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-[#edecec] text-[#14120b] font-bold shadow-sm'
                : 'text-[#9b988f] hover:text-[#edecec]'
            }`}
          >
            Education & Distinctions
          </button>
        </div>

        {/* Tab 1: Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-6 sm:p-8 hover:border-[#454035] transition-all shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#28261e]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#edecec]">{exp.role}</h3>
                      <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#9b988f]">
                      <span className="text-[#edecec] font-medium">{exp.company}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#edecec] px-3 py-1.5 rounded-lg bg-[#14120b] border border-[#28261e] w-fit">
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-[#edecec] mb-6 font-medium leading-relaxed">
                  {exp.summary}
                </p>

                {/* Bullets */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#9b988f] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="pt-4 border-t border-[#28261e] flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#14120b] border border-[#28261e] text-[11px] font-mono text-[#9b988f]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: 4-Pillar Skills Matrix */}
        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillPillars.map((pillar) => (
              <div
                key={pillar.category}
                className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-8 shadow-xl"
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <h3 className="text-xl font-bold text-[#edecec]">{pillar.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-[#14120b] border border-[#28261e] text-xs font-medium text-[#edecec] hover:border-[#454035] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Education & Honors */}
        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Degrees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-8">
                <span className="text-xs font-mono text-[#f59e0b] mb-2 block">Postgraduate Degree · UK</span>
                <h3 className="text-2xl font-bold text-[#edecec] mb-1">MBA, Big Data</h3>
                <p className="text-sm font-semibold text-[#9b988f] mb-4">University of Gloucestershire · Cheltenham, UK</p>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#14120b] border border-[#28261e] text-[#68655c]">
                  Sept 2022 – Sept 2023
                </span>
              </div>

              <div className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-8">
                <span className="text-xs font-mono text-[#edecec] mb-2 block">Undergraduate Degree · Thailand</span>
                <h3 className="text-2xl font-bold text-[#edecec] mb-1">BEng Mechanical & Mechatronic Engineering</h3>
                <p className="text-sm font-semibold text-[#9b988f] mb-4">Asian Institute of Technology (AIT) · Bangkok</p>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#14120b] border border-[#28261e] text-[#68655c]">
                  Aug 2009 – May 2014
                </span>
              </div>
            </div>

            {/* Honors & Distinctions */}
            <div className="rounded-2xl border border-[#28261e] bg-[#1c1a14] p-8">
              <h3 className="text-xl font-bold text-[#edecec] mb-6">Honors & Literary Publications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-[#28261e] bg-[#14120b]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                    <h4 className="text-base font-bold text-[#edecec]">Mensa Society Member</h4>
                  </div>
                  <p className="text-xs text-[#9b988f] leading-relaxed">
                    Qualified member of the international high IQ society (top 2% of the population).
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-[#28261e] bg-[#14120b]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#edecec]" />
                    <h4 className="text-base font-bold text-[#edecec]">Author: "A Spark of Curiosity"</h4>
                  </div>
                  <p className="text-xs text-[#9b988f] leading-relaxed">
                    Author of a Burmese-language science essay collection (11 long-form and 3 short essays exploring cosmology and future physics), catalogued with the National Library of Myanmar.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default CVSection;
