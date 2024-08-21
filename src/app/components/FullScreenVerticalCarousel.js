"use client"
import { useEffect, useState } from 'react';

const FullScreenVerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "slide1img1.jpeg",
    "slide1img2.jpeg",
    "slide1img3.jpeg",
    "slide1img4.jpeg",
  ];

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const container = document.getElementById('carousel-container');
    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      id="carousel-container"
      className="relative h-[600px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 flex flex-col transition-transform duration-700"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-screen w-screen flex-shrink-0">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full p-10 border-r-8"
              layout="fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScreenVerticalCarousel;
