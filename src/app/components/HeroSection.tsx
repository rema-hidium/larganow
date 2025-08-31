'use client';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define places with their image folders and display text
  const places = [
    {
      name: 'SIARGAO',
      folder: 'siargao',
      images: [
        { src: '/images/siargao/siargao1.png', alt: 'Siargao Island' }
      ]
    },
    {
      name: 'BORACAY',
      folder: 'boracay',
      images: [
        { src: '/images/boracay/boracay1.jpg', alt: 'Boracay White Beach' }
      ]
    },
    {
      name: 'PALAWAN',
      folder: 'palawan',
      images: [
        { src: '/images/palawan/palawan1.jpg', alt: 'Palawan Underground River' }
      ]
    },
    {
      name: 'BOHOL',
      folder: 'bohol',
      images: [
        { src: '/images/bohol/bohol1.jpg', alt: 'Bohol Chocolate Hills' }
      ]
    }
  ];

  const currentPlace = places[currentPlaceIndex];
  const currentImages = currentPlace.images;

  // Debug logging
  console.log('Current place:', currentPlace.name);
  console.log('Current image:', currentImages[currentImageIndex]);

  // Change place every 10 seconds
  useEffect(() => {
    const placeInterval = setInterval(() => {
      setCurrentPlaceIndex((prevIndex) => 
        prevIndex === places.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds per place

    return () => clearInterval(placeInterval);
  }, [places.length]);



  return (
    <section className="relative h-[50vh] overflow-hidden" style={{ fontFamily: 'var(--font-alata)' }}>
             {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={currentImages[currentImageIndex].src}
           alt={currentImages[currentImageIndex].alt}
           className="w-full h-full object-cover"
           loading="eager"
           onError={(e) => {
             console.log(`Failed to load image: ${currentImages[currentImageIndex].src}`);
           }}
           onLoad={() => {
             console.log(`Successfully loaded image: ${currentImages[currentImageIndex].src}`);
           }}
         />
         {/* Overlay for better text readability */}
         <div className="absolute inset-0"></div>
       </div>

      {/* Place Name and Description Overlay */}
      <div className="relative z-10 flex flex-col items-center h-full text-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white opacity-90 tracking-wider drop-shadow-lg mb-4">
          {currentPlace.name}
        </h1>
      </div>

      {/* Place Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {places.map((place, index) => (
          <button
            key={place.name}
            onClick={() => {
              setCurrentPlaceIndex(index);
              setCurrentImageIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-all ${
              index === currentPlaceIndex 
                ? 'bg-white text-gray-900 font-semibold' 
                : 'bg-white bg-opacity-30 text-white hover:bg-opacity-50'
            }`}
            aria-label={`Go to ${place.name}`}
          >
            {place.name}
          </button>
        ))}
      </div>

      
    </section>
  );
} 