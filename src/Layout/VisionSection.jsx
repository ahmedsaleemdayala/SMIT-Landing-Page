import React from 'react';
import Button from '../Shared/Button'; // Aap ke path ke mutabiq adjust karen
import { Users, TrendingUp } from 'lucide-react'; // Icons ke liye lucide-react use ki hai

const VisionSection = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center">
      
      {/* Top Badge/Button Area */}
      <div className="mb-6">
        <Button name="SMIT Vision" />
      </div>

      {/* Heading Section */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          SMIT <span className="text-[#0779bf]">Vision</span>
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Empowering <span className="text-[#0779bf] font-semibold">10 million IT experts</span> to drive Pakistan's <span className="text-[#0779bf] font-semibold">$100 billion</span> digital economy
        </p>
      </div>

      {/* Vision Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Card 1: IT Experts */}
        <div className="bg-white border border-gray-100 p-10 rounded-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left">
          <div className="bg-[#0779bf] p-4 rounded-xl text-white mb-6">
            <Users size={32} />
          </div>
          <h3 className="text-3xl font-bold text-[#0779bf] mb-2">
            10 Million+
          </h3>
          <p className="text-[#0779bf] font-semibold mb-6 flex items-center gap-2">
            IT Experts <span className="inline-block w-2 h-2 bg-[#0779bf] rounded-full"></span>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Training the next generation of skilled IT professionals to compete globally and drive innovation
          </p>
        </div>

        {/* Card 2: Digital Economy */}
        <div className="bg-white border border-gray-100 p-10 rounded-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left">
          <div className="bg-[#0779bf] p-4 rounded-xl text-white mb-6">
            <TrendingUp size={32} />
          </div>
          <h3 className="text-3xl font-bold text-[#0779bf] mb-2">
            $100 Billion
          </h3>
          <p className="text-[#0779bf] font-semibold mb-6 flex items-center gap-2">
            Digital Economy <span className="inline-block w-2 h-2 bg-[#0779bf] rounded-full"></span>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Contributing to Pakistan's economic growth through technology, innovation, and digital transformation
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;