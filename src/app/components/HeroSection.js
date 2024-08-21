// components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <div className="text-sm uppercase tracking-wider text-orange-300 mb-4">Hill Valley Resort</div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Book Your Dream Getaway Luxury
          <br />
          Resorts Await Your Arrival
        </h1>
        <p className="text-gray-500 mb-8">
          Indulge in the ultimate relaxation and adventure at our exclusive resorts. Book now and experience unparalleled comfort, stunning views, and world-class amenities.
        </p>
        <a
          href="#"
          className="inline-block bg-orange-300 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-400"
        >
          Gallery
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
