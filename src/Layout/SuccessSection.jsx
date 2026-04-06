import React from 'react';
import Shahmeer from '../assets/Shahmeer.png'
import home_girl from '../assets/home_girl.png'

const SuccessSection = () => {
  // Yahan apna YouTube video ID dalein


  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Left Side - Student Image */}
        <div className="relative w-full md:w-1/4  overflow-hidden  flex items-end justify-center shadow-sm">
          <img 
            src={Shahmeer} // Replace with your image path
            alt="Student Success" 
            className="h-[95%] object-contain"
          />
        </div>

        {/* Center - YouTube Iframe Link Container */}
        <div className="relative w-full md:w-[45%] h-70 md:h-80 bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
            className='h-full w-full'
            src='https://www.youtube.com/embed/BFXpQyowANA'
            title='Saylani IT Program — Banayein Apna Mustaqbil Roshan!'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Female Student */}
        <div className="relative w-full md:w-1/4  overflow-hidden  flex items-end justify-center shadow-sm">
          <img 
            src={home_girl} // Replace with your image path
            alt="Student Success" 
            className="h-[95%] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default SuccessSection;