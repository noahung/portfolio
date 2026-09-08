import React from 'react';
import profileImg from '../assets/profile.png';

interface TextPortfolioProps {
  onSwitchToVisual: () => void;
}

const TextPortfolio: React.FC<TextPortfolioProps> = ({ onSwitchToVisual }) => {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#3d3d3d] font-mono text-[13.5px] sm:text-[14px] leading-[1.5] selection:bg-blue-100 selection:text-blue-900 antialiased">
      {/* Top Banner Notice: Switcher */}
      <div className="bg-[#f7f8fa] border-b border-[#e2e6eb] py-2 px-4 text-center text-xs text-[#7d8491]">
        <span>You are viewing the <strong>Text Edition</strong> of this portfolio.</span>
        {' '}
        <button
          onClick={onSwitchToVisual}
          className="text-[#2563eb] hover:underline font-medium inline-flex items-center gap-1 ml-1 cursor-pointer"
        >
          <span>[✦ Switch to Visual / Interactive View]</span>
        </button>
      </div>

      <main className="w-full min-h-screen py-8 sm:py-10 px-4 sm:px-6 pb-20">
        <article className="w-full max-w-[650px] mx-auto">
          
          {/* Top Navigation */}
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b-2 border-[#d7dbe2] pb-2 mb-6 text-xs text-[#7d8491]">
            <a href="#intro" className="text-[#2563eb] font-bold border-b-2 border-[#f59e0b] -mb-[10px] pb-2">
              Noah Aung
            </a>
            <a href="#about" className="hover:text-[#3d3d3d] hover:underline">
              About
            </a>
            <a href="#experience" className="hover:text-[#3d3d3d] hover:underline">
              Experience
            </a>
            <a href="#work" className="hover:text-[#3d3d3d] hover:underline">
              Selected Work
            </a>
            <a href="#skills" className="hover:text-[#3d3d3d] hover:underline">
              Skills
            </a>
            <a href="#education" className="hover:text-[#3d3d3d] hover:underline">
              Education
            </a>
            <button
              onClick={onSwitchToVisual}
              className="ml-auto text-[#2563eb] font-semibold hover:underline cursor-pointer"
            >
              ✦ Visual Mode →
            </button>
          </nav>

          {/* Intro Section */}
          <header id="intro" className="pb-6 border-b border-[#e5e8ec]">
            <h1 className="text-[23px] font-bold text-[#1f2328] leading-tight mb-1">
              Noah Aung
            </h1>
            <p className="text-[#7d8491] text-xs mb-4">
              Digital Product &amp; Marketing Technology Specialist · Cheltenham, UK
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-4">
              Digital Product &amp; Marketing Technology Specialist with 10+ years' international experience delivering digital transformation, AI-enabled solutions, SaaS products, and growth strategies across agency, enterprise, and technology environments. Experienced leading cross-functional teams, managing six-figure budgets, and translating business requirements into scalable digital products.
            </p>

            <div className="text-xs text-[#3d3d3d] mb-5">
              <span className="text-[#7d8491]">Links: </span>
              <a href="mailto:noahaung@proton.me" className="text-[#2563eb] hover:underline">[Email]</a>{' '}
              <a href="https://github.com/noahung" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">[GitHub]</a>{' '}
              <a href="https://www.linkedin.com/in/tharhtetaung/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">[LinkedIn]</a>{' '}
              <button onClick={onSwitchToVisual} className="text-[#2563eb] hover:underline cursor-pointer">[Visual Mode]</button>
            </div>

            {/* Portrait Image (devanshusharma style) */}
            <img
              src={profileImg}
              alt="Noah Aung"
              className="w-[154px] h-[154px] object-cover rounded-sm border border-[#d7dbe2]"
            />
          </header>

          {/* About Section */}
          <section id="about" className="py-6 border-b border-[#e5e8ec]">
            <h2 className="text-[18px] font-bold text-[#1f2328] mb-3">About</h2>
            <div className="space-y-3 text-[#3d3d3d] leading-relaxed">
              <p>
                I operate at the intersection of full-stack software development and commercial digital growth. Rather than viewing engineering in isolation, I build digital products, SaaS tools, and web platforms designed to deliver measurable commercial value from day one.
              </p>
              <p>
                Currently, I lead marketing and web development at <a href="https://adverto.co.uk/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">Adverto Media</a> in Gloucester, UK. Here, I designed, built, and launched <a href="https://quoteonthego.co.uk/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">Quote on the Go</a>—a production SaaS platform used by hundreds of UK tradespeople—while managing and maintaining 30+ client web platforms and directing over £150,000 in annual ad spend.
              </p>
              <p>
                Previously, I served as Head of Digital Marketing for Kia &amp; Peugeot Myanmar (Super Seven Group), directing nationwide digital strategy and managing an annual budget of over $250,000 across paid media, CRM, and agencies. Earlier in my career, I drove user growth at Rakuten Viber (growing active users by 22% across Myanmar via telco carrier partnerships) and led nationwide mobile digital project delivery at Samsung.
              </p>
              <p>
                I am a member of Mensa (the international High IQ Society) and the author of <em>"A Spark of Curiosity"</em>, a science essay collection catalogued with the National Library of Myanmar.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-6 border-b border-[#e5e8ec]">
            <h2 className="text-[18px] font-bold text-[#1f2328] mb-4">Experience</h2>
            <div className="space-y-6">
              
              {/* Adverto Media */}
              <div>
                <p className="text-[#7d8491] text-xs mb-1">
                  Jul 2023 - Present · Gloucester, UK
                </p>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  Marketing &amp; Senior Web Developer (Digital Product &amp; MarTech), Adverto Media
                </h3>
                <ul className="mt-2 space-y-1.5 pl-4 list-disc text-[#3d3d3d]">
                  <li>
                    Designed, built, and launched <strong>Quote on the Go</strong> (<a href="https://quoteonthego.co.uk/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">quoteonthego.co.uk</a>), a SaaS quoting platform used by hundreds of UK tradespeople, using React, Firebase, and REST APIs, owning product direction, UX, development, and deployment end-to-end.
                  </li>
                  <li>
                    Advise directors and SME owners on digital transformation, marketing technology, and customer acquisition strategy across a portfolio of 15+ client accounts.
                  </li>
                  <li>
                    Manage and maintain 30+ client websites, having delivered 40+ website builds since joining, combining front-end development with conversion-focused design and copy.
                  </li>
                  <li>
                    Oversee digital advertising spend of over £150,000 across managed accounts, optimising paid campaigns and content calendars for measurable growth.
                  </li>
                  <li>
                    Developed AI-powered workflow automation and internal productivity tools using LLM APIs, improving content creation, development efficiency, and proposal generation.
                  </li>
                  <li>
                    Improved average client site load speed by 38% and organic search visibility by 24% across managed accounts.
                  </li>
                </ul>
              </div>

              {/* Kia & Peugeot */}
              <div>
                <p className="text-[#7d8491] text-xs mb-1">
                  Apr 2020 - Aug 2022 · Yangon, Myanmar
                </p>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  Head of Digital Marketing, Kia &amp; Peugeot Myanmar (Super Seven Group)
                </h3>
                <ul className="mt-2 space-y-1.5 pl-4 list-disc text-[#3d3d3d]">
                  <li>
                    Directed digital marketing strategy for Kia and Peugeot in Myanmar, owning an annual budget of over $250,000 across paid media, agencies, and CRM.
                  </li>
                  <li>
                    Advised senior leadership and regional distributors on digital transformation initiatives, from CRM adoption to online lead-generation systems.
                  </li>
                  <li>
                    Built and led a 6-person cross-functional digital team, reporting into senior leadership and coordinating with regional distributor stakeholders.
                  </li>
                  <li>
                    Maintained campaign delivery and lead pipeline continuity through the 2021 political crisis before relocating to the UK in 2022.
                  </li>
                </ul>
              </div>

              {/* Duwun */}
              <div>
                <p className="text-[#7d8491] text-xs mb-1">
                  Nov 2018 - Apr 2020 · Yangon, Myanmar
                </p>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  Head of Online Marketing, Duwun Media
                </h3>
                <ul className="mt-2 space-y-1.5 pl-4 list-disc text-[#3d3d3d]">
                  <li>
                    Led a team of 4 across the online marketing function for one of Myanmar's leading media platforms, owning content, social, and paid strategy.
                  </li>
                  <li>
                    Managed an annual digital budget of over $150,000 and grew social following by 45%.
                  </li>
                  <li>
                    Launched native advertising and sponsored content packages for national and regional brand clients.
                  </li>
                </ul>
              </div>

              {/* Rakuten Viber */}
              <div>
                <p className="text-[#7d8491] text-xs mb-1">
                  Nov 2016 - Nov 2018 · Singapore / Yangon
                </p>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  Partnership Executive – Myanmar Market, Rakuten Viber (APAC Regional Team)
                </h3>
                <ul className="mt-2 space-y-1.5 pl-4 list-disc text-[#3d3d3d]">
                  <li>
                    Secured and managed telecom and brand partnerships across Myanmar, negotiating co-marketing and carrier bundling deals with senior stakeholders that grew monthly active users by 22%.
                  </li>
                  <li>
                    Acted as primary liaison between the Singapore-based APAC leadership team and local partners in Myanmar.
                  </li>
                </ul>
              </div>

              {/* Samsung */}
              <div>
                <p className="text-[#7d8491] text-xs mb-1">
                  Mar 2015 - Nov 2016 · Yangon, Myanmar
                </p>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  Digital Project Lead, Samsung Myanmar
                </h3>
                <ul className="mt-2 space-y-1.5 pl-4 list-disc text-[#3d3d3d]">
                  <li>
                    Led digital project delivery for mobile and consumer electronics launches, coordinating marketing, retail, and IT stakeholders across 20+ stores nationwide.
                  </li>
                  <li>
                    Managed vendor and agency relationships for website, app, and in-store digital touchpoint projects, introducing structured project tracking that cut turnaround time by 20%.
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Selected Work Section */}
          <section id="work" className="py-6 border-b border-[#e5e8ec]">
            <h2 className="text-[18px] font-bold text-[#1f2328] mb-4">Selected Work</h2>
            <div className="space-y-4">
              
              <div>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  <a href="https://quoteonthego.co.uk/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                    Quote on the Go
                  </a>
                </h3>
                <p className="text-xs text-[#7d8491]">React, Firebase, REST APIs, Tailwind CSS, Stripe</p>
                <p className="text-[#3d3d3d] mt-1">
                  Commercial SaaS quoting and invoicing platform used by hundreds of UK tradespeople to generate quotes on-site, manage billing, and track payments.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  <a href="https://noahung.github.io/studia-website/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                    Studia AI
                  </a>
                </h3>
                <p className="text-xs text-[#7d8491]">React, TypeScript, Gemini LLM API, Vite</p>
                <p className="text-[#3d3d3d] mt-1">
                  Intelligent educational platform combining dynamic AI study companions, active recall workflows, and automated knowledge summarization.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  <a href="https://myanmarscholar.com/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                    Myanmar Scholar
                  </a>
                </h3>
                <p className="text-xs text-[#7d8491]">TypeScript, Search Indexing, Global Scholarships Engine</p>
                <p className="text-[#3d3d3d] mt-1">
                  Centralized discovery portal matching over 10,000 students worldwide with verified international scholarship opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  <a href="https://skip-ats.com/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                    Skip-ATS
                  </a>
                </h3>
                <p className="text-xs text-[#7d8491]">AI-Powered Resume Optimization &amp; Application Tracker</p>
                <p className="text-[#3d3d3d] mt-1">
                  Personal passion project helping job seekers tailor CVs directly to job specifications and track application status in one place.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  <button onClick={onSwitchToVisual} className="text-[#2563eb] hover:underline cursor-pointer">
                    16+ Commercial Client Websites Portfolio
                  </button>
                </h3>
                <p className="text-xs text-[#7d8491]">WordPress, Custom React, E-Commerce, Corporate Portals</p>
                <p className="text-[#3d3d3d] mt-1">
                  40+ commercial websites designed and engineered for UK and international businesses across real estate, legal, luxury retail, logistics, and clinic practices.
                </p>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-6 border-b border-[#e5e8ec]">
            <h2 className="text-[18px] font-bold text-[#1f2328] mb-3">Skills</h2>
            <div className="space-y-2 text-[#3d3d3d]">
              <p>
                <strong>Technology:</strong> React, TypeScript, JavaScript, WordPress, Firebase, Supabase, REST APIs, AI/LLM APIs, Git, Figma, Docker, Tailwind CSS, HTML5/Semantic SEO
              </p>
              <p>
                <strong>Analytics &amp; Data:</strong> Google Analytics 4 (GA4), Google Tag Manager (GTM), Power BI, Tableau, SQL, Conversion Rate Optimization (CRO), A/B Testing
              </p>
              <p>
                <strong>Marketing:</strong> Technical SEO, Paid Media (Google/Meta Ads), CRM Systems, Marketing Automation, Content Strategy, Funnel Optimization
              </p>
              <p>
                <strong>Business:</strong> Digital Transformation, Product Strategy, Marketing Operations, Cross-Functional Team Leadership, Stakeholder Management, Six-Figure Budget Management
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-6 border-b border-[#e5e8ec]">
            <h2 className="text-[18px] font-bold text-[#1f2328] mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="text-[#7d8491] text-xs">Sept 2022 - Sept 2023 · Cheltenham, UK</p>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  MBA, Big Data
                </h3>
                <p className="text-xs text-[#7d8491]">University of Gloucestershire</p>
              </div>

              <div>
                <p className="text-[#7d8491] text-xs">Aug 2009 - May 2014 · Bangkok, Thailand</p>
                <h3 className="text-[14px] font-bold text-[#1f2328]">
                  Bachelor of Engineering (Mechanical &amp; Mechatronic Engineering)
                </h3>
                <p className="text-xs text-[#7d8491]">Asian Institute of Technology (AIT)</p>
              </div>
            </div>
          </section>

          {/* Publications & Distinctions */}
          <section id="distinctions" className="py-6 border-b border-[#e5e8ec]">
            <h2 className="text-[18px] font-bold text-[#1f2328] mb-3">Publications &amp; Interests</h2>
            <ul className="space-y-2 pl-4 list-disc text-[#3d3d3d]">
              <li>
                <strong>A Spark of Curiosity</strong> — Author of a Burmese-language science essay collection (11 long-form and 3 short essays exploring topics from the origin of the universe to the far future), catalogued with the National Library of Myanmar.
              </li>
              <li>
                <strong>Mensa Member</strong> — Member of Mensa, the international high IQ society (top 2% of the population).
              </li>
            </ul>
          </section>

          {/* Links & Contact */}
          <section id="links" className="pt-6">
            <h2 className="text-[18px] font-bold text-[#1f2328] mb-3">Links &amp; Contact</h2>
            <div className="space-y-1.5 text-xs text-[#3d3d3d]">
              <p>Email: <a href="mailto:noahaung@proton.me" className="text-[#2563eb] hover:underline">noahaung@proton.me</a></p>
              <p>Phone: <span className="text-[#3d3d3d]">07405 233 757</span></p>
              <p>Location: <span className="text-[#3d3d3d]">Cheltenham, GL51 0FU, United Kingdom</span></p>
              <p>GitHub: <a href="https://github.com/noahung" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">github.com/noahung</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/tharhtetaung/" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">linkedin.com/in/tharhtetaung</a></p>
            </div>

            {/* Bottom Callout to Visual Mode */}
            <div className="mt-8 p-4 rounded bg-[#f7f8fa] border border-[#d7dbe2] text-xs text-[#7d8491] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <strong className="text-[#3d3d3d]">Want to explore the interactive visual experience?</strong>
                <p className="mt-0.5">Explore the full GitHub-inspired dark mode portfolio with screenshots and capabilities.</p>
              </div>
              <button
                onClick={onSwitchToVisual}
                className="px-4 py-2 bg-[#1f2328] text-white hover:bg-black rounded text-xs font-semibold shrink-0 cursor-pointer"
              >
                Switch to Visual View →
              </button>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
};

export default TextPortfolio;
