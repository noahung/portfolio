import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Noah Aung. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
