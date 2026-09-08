import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';

interface FlagshipProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  urlDisplay: string;
  description: string;
  highlights: string[];
  image: string;
  link: string;
}

const flagshipProjects: FlagshipProject[] = [
  {
    id: 'quoteonthego',
    title: 'QuoteOnTheGo',
    subtitle: 'Commercial Invoicing & Billing Platform',
    category: 'SaaS Platform',
    categoryColor: 'border-[#28261e] text-[#edecec] bg-[#14120b]',
    urlDisplay: 'quoteonthego.co.uk',
    description:
      'A full-scale commercial billing web app designed to streamline invoice generation, quote management, and client accounting for UK businesses with sub-second responsiveness.',
    highlights: ['Commercial Production', 'Automated Invoicing', 'Client Workflows'],
    image: project1,
    link: 'https://quoteonthego.co.uk/',
  },
  {
    id: 'studia',
    title: 'Studia AI',
    subtitle: 'Next-Gen Intelligent Study Application',
    category: 'AI & EdTech',
    categoryColor: 'border-[#28261e] text-[#f59e0b] bg-[#14120b]',
    urlDisplay: 'noahung.github.io/studia-website',
    description:
      'An intelligent web platform combining AI study companions, active recall mechanisms, and dynamic summarization to help students learn faster and retain deeper knowledge.',
    highlights: ['Intelligent Study Companion', 'Interactive Tools', 'High Engagement'],
    image: project2,
    link: 'https://noahung.github.io/studia-website/',
  },
  {
    id: 'myanmarscholar',
    title: 'Myanmar Scholar',
    subtitle: 'Global Scholarship Discovery Engine',
    category: 'Web Application',
    categoryColor: 'border-[#28261e] text-emerald-400 bg-[#14120b]',
    urlDisplay: 'myanmarscholar.com',
    description:
      'A high-traffic non-profit platform helping students discover and apply for verified international scholarships, featuring custom filters and deadline notifications.',
    highlights: ['10,000+ Students Reached', '500+ Listed Programs', '100% Free Access'],
    image: project3,
    link: 'https://myanmarscholar.com/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 bg-[#14120b] relative overflow-hidden border-t border-[#28261e]">
      {/* Background Subtle Ambient Spotlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#e58c3a] block mb-2 font-medium">
            Flagship Software
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#edecec] mb-4">
            Production Web Platforms.
          </h2>
          <p className="text-base sm:text-lg text-[#9b988f] leading-relaxed">
            Full-stack web applications engineered for speed, high user adoption, and daily business operations.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {flagshipProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="rounded-2xl border border-[#28261e] bg-[#1c1a14] overflow-hidden shadow-2xl hover:border-[#454035] transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Left Column: Project Info */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#28261e] bg-[#1c1a14]">
                  <div>
                    {/* Badge & Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[11px] font-mono tracking-wide uppercase px-2.5 py-1 rounded-full border border-[#28261e] bg-[#14120b] text-[#9b988f]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#edecec] mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#9b988f] mb-5">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-[#9b988f] leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Outcome Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2.5 text-xs text-[#edecec]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-6 border-t border-[#28261e] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#68655c]">Production</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#e58c3a] hover:underline"
                    >
                      <span>Visit Live Platform</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: High Fidelity Browser Window Mockup */}
                <div className="lg:col-span-7 bg-[#14120b] p-4 sm:p-8 flex items-center justify-center">
                  <div className="w-full rounded-xl border border-[#28261e] bg-[#1c1a14] shadow-xl overflow-hidden group/frame">
                    {/* Browser Chrome */}
                    <div className="h-9 border-b border-[#28261e] bg-[#1c1a14] px-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28261e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28261e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28261e]" />
                      </div>

                      <div className="px-3 py-0.5 rounded bg-[#14120b] border border-[#28261e] text-[11px] font-mono text-[#9b988f] flex items-center gap-1.5">
                        <span className="text-emerald-400 text-[10px]">🔒</span>
                        <span>{project.urlDisplay}</span>
                      </div>

                      <div className="w-10" />
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#14120b]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14120b]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;