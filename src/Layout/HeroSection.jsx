// components/HeroSection.jsx
import React from 'react';
import Button from '../Shared/Button';
import SaylaniLogo from '../assets/saylani_logo.webp';
import laptopIcon from '../assets/laptop.PNG';
import globeIcon from '../assets/globe.PNG';
import right from '../assets/arrow_right.PNG';
import left from '../assets/arrow_left.PNG';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-150 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Background Decorative Icons (Floating effect) */}
      <img src={laptopIcon} alt="Laptop" className="absolute top-10 left-10 w-32 md:w-48 opacity-80 animate-float" />
      <img src={globeIcon} alt="Globe" className="absolute bottom-10 right-10 w-32 md:w-48 opacity-80 animate-float" style={{ animationDelay: '1.5s' }} />
      <img src={right} alt="Plane" className="absolute top-20 right-20 w-24 hidden md:block" />
      <img src={left} alt="Plane" className="absolute bottom-20 left-20 w-24 hidden md:block" />

      {/* Content */}
      <div className="z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-[#202124] leading-tight">
          Building Pakistan's <br />
          <span className="text-[#0779bf]">Tech Future</span>
        </h1>
        
        <p className="mt-6 text-gray-500 text-lg md:text-xl font-medium">
          Changing Lives. Building Careers. Shaping the Future.
        </p>

        {/* Saylani Logo */}
        <div className="my-8 flex justify-center">
          <img src={SaylaniLogo} alt="Saylani Logo" className="h-16 md:h-20" />
        </div>

        {/* Buttons using the shared Button component */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button name="ENROLL NOW" />
          <Button name="EXPLORE COURSES" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;