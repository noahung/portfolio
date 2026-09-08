import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14120b] border-t border-[#28261e] text-[#9b988f]">
      {/* IDE Developer Status Bar (Cursor / Terminal Inspired) */}
      <div className="border-b border-[#28261e]/70 bg-[#100f0c] py-2.5 px-6">
        <div className="container mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#68655c]">
          <div className="flex items-center gap-3">
            <span className="text-[#e58c3a] font-bold">⚡ Noah Aung Dev Platform</span>
            <span>·</span>
            <span>TypeScript 5.8</span>
            <span>·</span>
            <span>React 19 &amp; Vite 6</span>
            <span>·</span>
            <span className="text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Git: main (clean)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>Cheltenham, UK (UTC+0)</span>
            <span>·</span>
            <span className="text-[#9b988f]">Press <kbd className="px-1.5 py-0.5 rounded bg-[#1c1a14] border border-[#28261e] text-[#edecec]">T</kbd> for Text Mode</span>
          </div>
        </div>
      </div>

      {/* Main Footer Row */}
      <div className="py-10">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg border border-[#28261e] bg-[#1c1a14] flex items-center justify-center font-mono font-bold text-xs text-[#edecec]">
              N
            </div>
            <span className="text-[#edecec] font-semibold tracking-tight">Noah Aung</span>
            <span className="text-[#68655c]">· Full-Stack Developer &amp; MarTech Specialist</span>
          </div>

          {/* Clean 4-Link Nav */}
          <div className="flex items-center gap-6 text-[#9b988f]">
            <a href="#work" className="hover:text-[#edecec] transition-colors">Work</a>
            <a href="#engineering" className="hover:text-[#edecec] transition-colors">Engineering</a>
            <a href="#experience" className="hover:text-[#edecec] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#edecec] transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-[#68655c] font-mono text-[11px]">
            &copy; {new Date().getFullYear()} Noah Aung. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
