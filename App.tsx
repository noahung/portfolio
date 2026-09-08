
import React, { useState, useEffect } from 'react';
import TextPortfolio from './components/TextPortfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ShowcaseGallery from './components/ShowcaseGallery';
import Capabilities from './components/Capabilities';
import CVSection from './components/CVSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Default to 'text' mode as main landing
  const [viewMode, setViewMode] = useState<'text' | 'visual'>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'visual') return 'visual';
      if (params.get('view') === 'text') return 'text';
      const saved = localStorage.getItem('noah_portfolio_view');
      return saved === 'visual' ? 'visual' : 'text';
    } catch {
      return 'text';
    }
  });

  const switchToVisual = () => {
    setViewMode('visual');
    try {
      localStorage.setItem('noah_portfolio_view', 'visual');
      const url = new URL(window.location.href);
      url.searchParams.set('view', 'visual');
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      console.warn(e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchToText = () => {
    setViewMode('text');
    try {
      localStorage.setItem('noah_portfolio_view', 'text');
      const url = new URL(window.location.href);
      url.searchParams.delete('view');
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      console.warn(e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Persistent Floating Switcher Button (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={switchToText}
          className="px-4 py-2.5 rounded-full border border-[#28261e] bg-[#1c1a14]/90 text-[#edecec] hover:bg-[#24211a] hover:border-[#454035] backdrop-blur-xl shadow-2xl text-xs font-mono flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          title="Switch to minimalist text view (devanshusharma.com style)"
        >
          <span>📄</span>
          <span>Switch to Text View</span>
        </button>
      </div>
    </div>
  );
}

export default App;