import React from 'react';
import { ThreeDMarquee } from './ui/3d-marquee';

import img1 from '../assets/showcase/1.jpg';
import img2 from '../assets/showcase/2.jpg';
import img3 from '../assets/showcase/3.jpg';
import img4 from '../assets/showcase/4.jpg';
import img5 from '../assets/showcase/5.jpg';
import img6 from '../assets/showcase/6.jpg';
import img7 from '../assets/showcase/7.jpg';
import img8 from '../assets/showcase/8.jpg';
import img9 from '../assets/showcase/9.jpg';
import img10 from '../assets/showcase/10.jpg';
import img11 from '../assets/showcase/11.jpg';
import img12 from '../assets/showcase/12.jpg';
import img13 from '../assets/showcase/13.jpg';
import img14 from '../assets/showcase/14.jpg';
import img15 from '../assets/showcase/15.jpg';
import img16 from '../assets/showcase/16.jpg';

const DesignShowcase: React.FC = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16
  ];

  // Duplicate images to ensure the 3D grid is fully populated
  const displayImages = [...images, ...images];

  return (
    <section className="py-20 bg-[#050505] border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative w-full">
            {/* Fade masks for top and bottom to blend with background */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
            
            <ThreeDMarquee images={displayImages} className="h-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;
