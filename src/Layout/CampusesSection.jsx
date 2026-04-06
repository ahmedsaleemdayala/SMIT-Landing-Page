import React from 'react';
import Button from '../Shared/Button'; // Shared Button component
import map from '../assets/map.png'; // Your Image Path

const CampusesSection = () => {
  // Map markers ki locations (Image ke mutabiq approximate coordinates)
  const campuses = [
    { name: "Islamabad", top: "15%", left: "58%" },
    { name: "Rawalpindi", top: "22%", left: "56%" },
    { name: "Peshawar", top: "18%", left: "51%" },
    { name: "Gujranwala", top: "28%", left: "60%" },
    { name: "Faisalabad", top: "35%", left: "57%" },
    { name: "Lakki Marwat", top: "33%", left: "49%" },
    { name: "Quetta", top: "52%", left: "41%" },
    { name: "Sukkur", top: "72%", left: "43%" },
    { name: "Hyderabad", top: "78%", left: "46%" },
    { name: "Karachi", top: "85%", left: "42%" },
  ];

  return (
    <section className="py-20 px-4 flex flex-col items-center overflow-hidden">
      
      {/* Top Shared Button */}
      <div className="mb-6">
        <Button name="Join the revolution" />
      </div>

      {/* Heading & Subtext */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#202124] mb-4">
          Find Saylani Campuses Near You
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Campuses of Saylani Welfare Trust are located in various cities across Pakistan. 
          Select your city and view the nearest campus details.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full max-w-4xl aspect-4/3 md:aspect-video flex justify-center items-center">
        
        {/* Pakistan Map Image */}
        <img 
          src={map} 
          alt="Pakistan Map" 
          className="w-full h-full object-contain opacity-90"
        />

        {/* Dynamic Markers / Pins */}
        {campuses.map((campus, index) => (
          <div 
            key={index}
            className="absolute flex flex-col items-center group cursor-pointer"
            style={{ top: campus.top, left: campus.left }}
          >
            {/* Location Pin Icon (Simple SVG or Lucide React) */}
            <div className="text-[#0779bf] transform transition-transform group-hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            
            {/* City Name Tooltip/Label */}
            <span className="mt-1 px-2 py-0.5 bg-white shadow-md border border-gray-100 rounded text-[10px] font-bold text-gray-700 opacity-80 group-hover:opacity-100 whitespace-nowrap">
              {campus.name}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <div className="mt-12">
        <Button name="See All Campuses →" />
      </div>

    </section>
  );
};

export default CampusesSection;