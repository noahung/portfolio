
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollyTelling from './components/ScrollyTelling';
import About from './components/About';
import Metrics from './components/Metrics';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import MarketingDashboard from './components/MarketingDashboard';
import Projects from './components/Projects';
import DesignShowcase from './components/DesignShowcase';
import MarketingExpertise from './components/MarketingExpertise';
import Process from './components/Process';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import AILab from './components/AILab';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GameBreak from './components/GameBreak';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <main>
        <Hero />
        <ScrollyTelling />
        <About />
        <Metrics />
        <Skills />
        <TechStack />
        <MarketingDashboard />
        <Projects />
        <DesignShowcase />
        <GameBreak />
        <MarketingExpertise />
        <Process />
        <Philosophy />
        <Services />
        <AILab />
        <Community />
        <Testimonials />
        <Timeline />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;