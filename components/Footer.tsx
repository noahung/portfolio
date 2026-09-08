import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#14120b] border-t border-[#28261e] text-[#9b988f]">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg border border-[#28261e] bg-[#1c1a14] flex items-center justify-center font-mono font-bold text-xs text-[#edecec]">
            N
          </div>
          <span className="text-[#edecec] font-semibold tracking-tight">Noah Aung</span>
          <span className="text-[#68655c]">· Full-Stack Developer & MarTech</span>
        </div>

        {/* Quick Jump Links */}
        <div className="flex items-center gap-6 text-[#9b988f]">
          <a href="#overview" className="hover:text-[#edecec] transition-colors">Overview</a>
          <a href="#projects" className="hover:text-[#edecec] transition-colors">Flagship Apps</a>
          <a href="#showcase" className="hover:text-[#edecec] transition-colors">Client Sites (16)</a>
          <a href="#capabilities" className="hover:text-[#edecec] transition-colors">Capabilities</a>
          <a href="#cv" className="hover:text-[#edecec] transition-colors">CV & Experience</a>
          <a href="#contact" className="hover:text-[#edecec] transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-[#68655c] font-mono text-[11px]">
          &copy; {new Date().getFullYear()} Noah Aung. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
