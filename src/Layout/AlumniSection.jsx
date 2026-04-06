import React from 'react';
// Aap ka bataya hua path
import alumni_grp from '../assets/alumni_grp.svg';

const AlumniSection = () => {
  return (
    <section className="relative w-full py-12 px-4 overflow-hidden bg-linear-to-r from-[#1F7FA3] via-[#4FA69A] to-[#8BC34A] mt-12">
      
      {/* Main Image Container */}
      <div className="relative w-full mx-auto flex justify-center items-center mb-8">
        <div className="relative w-full max-w-full group">
          <img 
            src={alumni_grp} 
            alt="SMIT Alumni Group" 
            className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          We don't just teach IT <br />
          We manufacture success stories
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-lg font-light opacity-90 leading-relaxed">
          Thousands of our alumni are powering the digital economy with <br className="hidden md:block" />
          innovation, skill, and passion.
        </p>
      </div>

    </section>
  );
};

export default AlumniSection;