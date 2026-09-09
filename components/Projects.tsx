import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import bgLandscape from '../assets/Background.webp';

interface FlagshipProject {
  id: string;
  name: string;
  badge: string;
  filename: string;
  language: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  keyHighlights: string[];
  image: string;
  link: string;
  urlDisplay: string;
  codeSnippet: string;
}

const flagshipProjects: FlagshipProject[] = [
  {
    id: 'quoteonthego',
    name: 'QuoteOnTheGo',
    badge: 'Commercial SaaS · FinTech',
    filename: 'quote_billing_engine.ts',
    language: 'TypeScript',
    description:
      'A full-scale commercial billing web app designed to streamline invoice generation, quote management, and client accounting for UK businesses with sub-second responsiveness.',
    urlDisplay: 'quoteonthego.co.uk',
    link: 'https://quoteonthego.co.uk/',
    image: project1,
    stack: ['React 19', 'TypeScript 5.8', 'Tailwind CSS', 'Firebase Firestore', 'Vite', 'Cloud Functions'],
    metrics: [
      { label: 'Query Latency', value: '< 65ms' },
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'Tax Accuracy', value: '100% UK VAT' },
    ],
    keyHighlights: [
      'Strict typed calculation pipeline handling UK VAT, discounts, and real-time ledger generation.',
      'Offline-capable state persistence with optimistic UI updates and sub-second local sync.',
      'Multi-tenant data segregation with granular Firestore security rules and atomic transactions.',
    ],
    codeSnippet: `// @production/modules/billing/quote_engine.ts
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number; // Standard UK 20% or 0%
}

export interface QuotePayload {
  clientId: string;
  currency: 'GBP' | 'USD' | 'EUR';
  items: InvoiceItem[];
  applyDiscount?: number;
}

export function computeCommercialInvoice(payload: QuotePayload) {
  const subtotal = payload.items.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice, 0
  );
  const totalVat = payload.items.reduce(
    (acc, item) => acc + (item.quantity * item.unitPrice * item.vatRate), 0
  );
  const discountAmount = payload.applyDiscount ? subtotal * payload.applyDiscount : 0;
  const netPayable = subtotal - discountAmount + totalVat;

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    vat: Math.round(totalVat * 100) / 100,
    total: Math.round(netPayable * 100) / 100,
    generatedAt: new Date().toISOString(),
    status: 'READY_FOR_DISPATCH' as const,
  };
}`,
  },
  {
    id: 'studia',
    name: 'Studia AI',
    badge: 'EdTech · LLM Companion',
    filename: 'studia_evaluator.tsx',
    language: 'TypeScript / React',
    description:
      'An intelligent web platform combining AI study companions, active recall mechanisms, and dynamic summarization to help students learn faster and retain deeper knowledge.',
    urlDisplay: 'noahung.github.io/studia-website',
    link: 'https://noahung.github.io/studia-website/',
    image: project2,
    stack: ['React 19', 'Gemini 2.5 API', 'Framer Motion', 'Geist Font', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Evaluation Latency', value: '< 750ms' },
      { label: 'Retention Model', value: 'Spaced Recall' },
      { label: 'Context Processing', value: 'Real-Time' },
    ],
    keyHighlights: [
      'LLM-assisted spaced repetition algorithms modeling active memory retention curves.',
      'Dynamic conceptual flashcard extraction from long-form lecture materials and research papers.',
      'Zero-latency client-side markdown and math LaTeX rendering with fluid micro-interactions.',
    ],
    codeSnippet: `// @studia/core/ai/recall_evaluator.ts
import { GoogleGenAI } from '@google/genai';

export interface FlashcardRecall {
  promptId: string;
  userResponse: string;
  referenceAnswer: string;
}

export async function evaluateActiveRecall(attempt: FlashcardRecall) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const model = ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: \`Evaluate conceptual mastery (0-100) and identify missed key concepts:
Prompt: "\${attempt.referenceAnswer}"
Student Answer: "\${attempt.userResponse}"\`,
  });

  const response = await model;
  return {
    score: extractScore(response.text),
    feedback: response.text,
    intervalMultiplier: computeNextSpacedInterval(attempt.userResponse),
  };
}`,
  },
  {
    id: 'myanmarscholar',
    name: 'Myanmar Scholar',
    badge: 'Non-Profit · Global Scale',
    filename: 'scholarship_matcher.py',
    language: 'Python / FastAPI',
    description:
      'A high-traffic non-profit platform helping students discover and apply for verified international scholarships, featuring custom filters and deadline notifications.',
    urlDisplay: 'myanmarscholar.com',
    link: 'https://myanmarscholar.com/',
    image: project3,
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Tailwind CSS', 'Edge Cache'],
    metrics: [
      { label: 'Active Students', value: '10,000+' },
      { label: 'Indexed Programs', value: '500+' },
      { label: 'Service Access', value: '100% Free' },
    ],
    keyHighlights: [
      'High-concurrency indexing engine serving 10,000+ students without service interruptions.',
      'Verified deadline notification pipelines with automated calendar reminders and email alerts.',
      'Low-bandwidth mobile optimization ensuring accessibility on 3G cellular connections.',
    ],
    codeSnippet: `# @scholar/engine/matcher.py
from pydantic import BaseModel, Field
from typing import List

class StudentProfile(BaseModel):
    nationality: str = "MM"
    degree_level: str  # "BSc", "MSc", "PhD"
    field_of_study: str
    target_countries: List[str]
    gpa: float = Field(ge=0.0, le=4.0)

def match_eligible_programs(profile: StudentProfile, db_session) -> List[dict]:
    query = (
        db_session.query(ScholarshipProgram)
        .filter(ScholarshipProgram.is_active == True)
        .filter(ScholarshipProgram.eligible_nationalities.contains([profile.nationality]))
        .filter(ScholarshipProgram.degree == profile.degree_level)
    )
    return [
        prog.to_summary()
        for prog in query.order_by(ScholarshipProgram.deadline.asc()).all()
    ]`,
  },
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<FlagshipProject>(flagshipProjects[0]);
  const [viewMode, setViewMode] = useState<'code' | 'preview'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeProject.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="work" className="py-28 bg-[#14120b] relative border-t border-[#28261e] overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <div id="projects" className="absolute -top-20" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-amber-500/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight max-w-2xl">
              <span className="text-[#edecec]">Flagship software engineering.</span>{' '}
              <span className="text-[#888680]">Strict type contracts, sub-second latency, and scalable architecture.</span>
            </h2>
          </div>

          {/* Project Switcher Tabs (Cursor Style) */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full border border-[#28261e] bg-[#1c1a14]">
            {flagshipProjects.map((proj) => {
              const isActive = activeProject.id === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProject(proj)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#edecec] text-[#14120b] font-semibold shadow-sm'
                      : 'text-[#9b988f] hover:text-[#edecec] hover:bg-[#24211a]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-amber-600' : 'bg-[#68655c]'}`} />
                  <span>{proj.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* IDE & Architecture Inspector Stage */}
        <div className="rounded-2xl border border-[#28261e] bg-[#1c1a14] overflow-hidden shadow-2xl">
          {/* Top IDE Window Header */}
          <div className="h-12 border-b border-[#28261e] bg-[#14120b] px-4 flex items-center justify-between gap-4">
            {/* Window Controls & File Tab */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#28261e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28261e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28261e]" />
              </div>

              {/* Active File Tab */}
              <div className="px-3 py-1 rounded-t-md bg-[#1c1a14] border-t border-x border-[#28261e] text-xs font-mono text-[#edecec] flex items-center gap-2 shadow-sm">
                <span className="text-[#e58c3a] text-[11px]">⚡</span>
                <span>{activeProject.filename}</span>
                <span className="text-[10px] text-[#68655c]">({activeProject.language})</span>
              </div>
            </div>

            {/* View Mode Toggle & Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-0.5 rounded-lg border border-[#28261e] bg-[#1c1a14]">
                <button
                  onClick={() => setViewMode('code')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'code'
                      ? 'bg-[#25231c] text-[#edecec] font-medium'
                      : 'text-[#9b988f] hover:text-[#edecec]'
                  }`}
                >
                  <span>&lt;/&gt;</span>
                  <span className="hidden sm:inline">Architecture</span>
                </button>
                <button
                  onClick={() => setViewMode('preview')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'preview'
                      ? 'bg-[#25231c] text-[#edecec] font-medium'
                      : 'text-[#9b988f] hover:text-[#edecec]'
                  }`}
                >
                  <span>🖥</span>
                  <span className="hidden sm:inline">UI Preview</span>
                </button>
              </div>

              {viewMode === 'code' && (
                <button
                  onClick={handleCopyCode}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#28261e] bg-[#1c1a14] hover:bg-[#25231c] text-xs font-mono text-[#9b988f] hover:text-[#edecec] transition-colors cursor-pointer"
                  title="Copy code snippet"
                >
                  <span>{copied ? '✓ Copied' : 'Copy'}</span>
                </button>
              )}

              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1 rounded-lg bg-[#edecec] hover:bg-white text-[#14120b] text-xs font-medium font-sans flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <span>Visit Live</span>
                <span className="text-[11px]">↗</span>
              </a>
            </div>
          </div>

          {/* Main Stage Grid: Code/Preview Left + Specs Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Stage: Code Snippet or High-Res Preview */}
            <div className="lg:col-span-7 bg-[#100f0c] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#28261e] flex flex-col justify-between overflow-x-auto min-h-[380px]">
              <AnimatePresence mode="wait">
                {viewMode === 'code' ? (
                  <motion.div
                    key={`code-${activeProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-xs sm:text-[13px] leading-relaxed text-[#edecec] overflow-x-auto"
                  >
                    <pre className="p-2">
                      <code>{activeProject.codeSnippet}</code>
                    </pre>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`preview-${activeProject.id}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative rounded-2xl overflow-hidden p-6 sm:p-10 flex items-center justify-center min-h-[380px] border border-[#28261e]"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    {/* Classical Oil Painting Landscape Backdrop (Exact Cursor Style) */}
                    <img
                      src={bgLandscape}
                      alt="Classical landscape painting backdrop"
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                    {/* Floating macOS-Style UI Window with explicitly rounded upper corners */}
                    <div 
                      className="relative z-10 w-full max-w-xl rounded-2xl overflow-hidden border border-[#28261e] bg-[#14120b] shadow-2xl shadow-black/90"
                      style={{ transform: 'translateZ(0)' }}
                    >
                      <div className="h-9 border-b border-[#28261e] bg-[#1c1a14] px-4 flex items-center justify-between rounded-t-2xl">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#38352b]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#38352b]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#38352b]" />
                        </div>

                        <div className="px-3 py-0.5 rounded bg-[#14120b] border border-[#28261e] text-[10px] font-mono text-[#9b988f] flex items-center gap-1.5">
                          <span className="text-emerald-400 text-[9px]">🔒</span>
                          <span>{activeProject.urlDisplay}</span>
                        </div>

                        <div className="w-8" />
                      </div>

                      <div className="relative aspect-[16/10] overflow-hidden bg-[#14120b] rounded-b-2xl">
                        <img
                          src={activeProject.image}
                          alt={activeProject.name}
                          className="w-full h-full object-cover object-top rounded-b-2xl"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status bar inside editor */}
              <div className="mt-4 pt-3 border-t border-[#28261e]/60 flex items-center justify-between text-[11px] font-mono text-[#68655c]">
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span>·</span>
                  <span>{activeProject.language}</span>
                  <span>·</span>
                  <span className="text-emerald-400/90 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Compiled 0 Errors</span>
                  </span>
                </div>
                <div>{activeProject.urlDisplay}</div>
              </div>
            </div>

            {/* Right Stage: Clean Cursor Split Anatomy (Title, 2-line description, subtle link) */}
            <div className="lg:col-span-5 p-8 sm:p-12 bg-[#1c1a14] flex flex-col justify-center">
              <div>
                <span className="text-xs font-mono text-[#e58c3a] uppercase tracking-wider font-semibold block mb-3">
                  {activeProject.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#edecec] mb-4 leading-tight">
                  {activeProject.name}
                </h3>

                <p className="text-sm sm:text-base text-[#9b988f] leading-relaxed mb-8">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#e58c3a] hover:text-[#f59e0b] transition-colors group"
                  >
                    <span>Visit live platform</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>

                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#9b988f] hover:text-[#edecec] transition-colors group"
                    >
                      <span>View source</span>
                      <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;