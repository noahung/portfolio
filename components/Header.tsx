import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onSwitchToText?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSwitchToText }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14120b]/90 backdrop-blur-xl border-b border-[#28261e] py-3.5 shadow-xl shadow-black/50'
          : 'bg-[#14120b]/50 backdrop-blur-md border-b border-[#28261e]/40 py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg border border-[#28261e] bg-[#1c1a14] group-hover:border-[#454035] transition-colors flex items-center justify-center font-mono font-bold text-sm text-[#edecec] shadow-sm">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#edecec] flex items-center gap-1.5">
              Noah Aung
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[11px] text-[#9b988f] font-normal">Digital Product &amp; MarTech</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full border border-[#28261e] bg-[#1c1a14]/70 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-1.5 text-xs font-medium text-[#9b988f] hover:text-[#edecec] hover:bg-[#24211a] rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {onSwitchToText && (
            <button
              onClick={onSwitchToText}
              className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-[#28261e] bg-[#1c1a14] text-[#edecec] hover:bg-[#24211a] hover:border-[#454035] transition-all flex items-center gap-2 cursor-pointer shadow-sm group"
              title="Switch to minimalist text format [Press T]"
            >
              <span className="text-[11px] text-[#9b988f]">📄</span>
              <span>Text Mode</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#14120b] border border-[#28261e] text-[#68655c] group-hover:text-[#edecec] group-hover:border-[#454035]">
                T
              </span>
            </button>
          )}
          <a
            href="https://github.com/noahung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#9b988f] hover:text-[#edecec] px-3 py-1.5 rounded-md hover:bg-[#1c1a14] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-[#edecec] text-[#14120b] hover:bg-white transition-all shadow-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#9b988f] hover:text-[#edecec] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#14120b]/98 backdrop-blur-2xl border-b border-[#28261e] overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#9b988f] hover:text-[#edecec] py-1.5"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#28261e] flex flex-col gap-2">
                {onSwitchToText && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onSwitchToText();
                    }}
                    className="w-full text-center text-xs font-mono py-2.5 rounded-lg border border-[#28261e] bg-[#1c1a14] text-[#edecec]"
                  >
                    📄 Switch to Text Mode
                  </button>
                )}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-lg bg-[#edecec] text-[#14120b]"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
