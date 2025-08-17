'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of Siargao background gradients and images
  const siargaoBackgrounds = [
    {
      type: 'gradient',
      style: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      alt: 'Siargao sunset gradient'
    },
    {
      type: 'gradient', 
      style: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      alt: 'Siargao sunrise gradient'
    },
    {
      type: 'gradient',
      style: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      alt: 'Siargao ocean gradient'
    },
    {
      type: 'gradient',
      style: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      alt: 'Siargao tropical gradient'
    },
    {
      type: 'gradient',
      style: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      alt: 'Siargao paradise gradient'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === siargaoBackgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [siargaoBackgrounds.length]);

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden" style={{ fontFamily: 'var(--font-alata)' }}>
      {/* Background Slideshow */}
      {siargaoBackgrounds.map((background, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: background.style
          }}
        >
          {/* Additional overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      ))}

      {/* SIARGAO Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-6xl md:text-8xl font-bold text-white opacity-90 tracking-wider drop-shadow-lg">
          SIARGAO
        </h1>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {siargaoBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 