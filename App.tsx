
import React, { useState, useEffect } from 'react';
import TextPortfolio from './components/TextPortfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ShowcaseGallery from './components/ShowcaseGallery';
import Capabilities from './components/Capabilities';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Text version is strictly the main/first landing page on the website.
  // Visual mode is only loaded if the URL explicitly contains ?view=visual.
  const [viewMode, setViewMode] = useState<'text' | 'visual'>(() => {
    try {
      // Clear any legacy localStorage flag to ensure visitors always start on Text mode
      localStorage.removeItem('noah_portfolio_view');
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'visual') return 'visual';
      return 'text';
    } catch {
      return 'text';
    }
  });

  const switchToVisual = () => {
    setViewMode('visual');
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('view', 'visual');
      window.history.pushState({}, '', url.toString());
    } catch (e) {
      console.warn(e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchToText = () => {
    setViewMode('text');
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('view');
      window.history.pushState({}, '', url.toString());
    } catch (e) {
      console.warn(e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize viewMode with browser back/forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setViewMode(params.get('view') === 'visual' ? 'visual' : 'text');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut: Press 't' or 'T' to toggle views (when not typing in form fields)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInput = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');
      if (isInput) return;

      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setViewMode((prev) => {
          const next = prev === 'text' ? 'visual' : 'text';
          try {
            const url = new URL(window.location.href);
            if (next === 'visual') {
              url.searchParams.set('view', 'visual');
            } else {
              url.searchParams.delete('view');
            }
            window.history.pushState({}, '', url.toString());
          } catch (err) {
            console.warn(err);
          }
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // If Text mode (Main Landing)
  if (viewMode === 'text') {
    return <TextPortfolio onSwitchToVisual={switchToVisual} />;
  }

  // If Visual mode (Secondary View)
  return (
    <div className="min-h-screen bg-[#14120b] text-[#edecec] selection:bg-amber-500/20 selection:text-white font-sans antialiased relative">
      <Header onSwitchToText={switchToText} />
      <main>
        <Hero />
        <Projects />
        <ShowcaseGallery />
        <Capabilities />
        <CVSection />
        <Contact />
      </main>
      <Footer />

      {/* Persistent Floating Switcher Button (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={switchToText}
          className="px-4 py-2 rounded-full border border-[#28261e] bg-[#1c1a14]/90 text-[#edecec] hover:bg-[#24211a] hover:border-[#454035] backdrop-blur-xl shadow-2xl text-xs font-mono flex items-center gap-2 transition-all hover:scale-105 cursor-pointer group"
          title="Switch to minimalist text view [Press T]"
        >
          <span className="text-[11px] text-[#9b988f]">📄</span>
          <span>Text View</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#14120b] border border-[#28261e] text-[#68655c] group-hover:text-[#edecec]">
            T
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;