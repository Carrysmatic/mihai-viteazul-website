'use client';
import { useState, useEffect } from 'react';

const images = ['image1.jpeg', 'image2.jpg', 'image3.jpg'];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-4 h-600px overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`w-full h-600px object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="overlay absolute top-20px left-20px text-white text-2xl z-10">
        Your Overlay Content
      </div>
    </div>
  );
};

export default Carousel;