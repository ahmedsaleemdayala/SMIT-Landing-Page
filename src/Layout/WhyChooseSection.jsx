import React from 'react';
// shared button component
import Button from '../Shared/Button'; 

// feature images/logos as per your paths
import imgLeft from '../assets/left.png';
import imgRight from '../assets/right.png';
import imgTop1 from '../assets/top1.png';
import imgTop2 from '../assets/top2.png';
import imgBottom1 from '../assets/bottom1.png';
import imgBottom2 from '../assets/bottom2.png';

// Sub-component for individual features to maintain consistency
const FeatureCard = ({ image, title, subTitle }) => (
  <div className=" p-3 md:p-4  flex flex-col items-center text-center max-w-60 mx-auto">
    <div className="w-16 h-16 md:w-20 md:h-20 mb-3 rounded-3xl bg-slate-50 flex items-center justify-center">
      <img src={image} alt={title} className="w-10 h-10 md:w-14 md:h-14 object-contain" />
    </div>
    <h4 className="text-[#3c4043] font-semibold text-sm md:text-base leading-snug">
      {title}
    </h4>
    <p className="text-gray-500 text-xs md:text-sm mt-2 font-light leading-relaxed">
      {subTitle}
    </p>
  </div>
);

const WhyChooseSection = () => {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 items-center">

        {/* Top row: top images centered */}
        <div className="md:col-span-3 flex justify-center gap-8">
          <FeatureCard 
            image={imgTop1}
            title="Hands-On Training &"
            subTitle="Real-World Projects"
          />
          <FeatureCard 
            image={imgTop2}
            title="70% Employment &"
            subTitle="Freelancing Success Rate"
          />
        </div>

        {/* Middle row: left image, content, right image */}
        <div className="md:col-start-1 md:row-start-2 md:justify-self-start">
          <FeatureCard 
            image={imgLeft}
            title="Affordable &"
            subTitle="Accessible Education for All"
          />
        </div>

        <div className="md:col-start-2 md:row-start-2 text-center flex flex-col items-center px-4">
          <div className="mb-5">
            <Button name="Why Choose SMIT?" />
          </div>
          <h2 className="text-[#3c4043] text-3xl md:text-4xl font-extrabold leading-tight tracking-tight max-w-2xl">
            Empowering You with World-Class IT Training & Proven Success
          </h2>
        </div>

        <div className="md:col-start-3 md:row-start-2 md:justify-self-end">
          <FeatureCard 
            image={imgRight}
            title="150+ Startups"
            subTitle="Launched Globally"
          />
        </div>

        {/* Bottom row: bottom images centered */}
        <div className="md:col-span-3 flex justify-center gap-8">
          <FeatureCard 
            image={imgBottom1}
            title="Recognized by Cisco &"
            subTitle="Global Tech Giants"
          />
          <FeatureCard 
            image={imgBottom2}
            title="Pakistan's Largest IT"
            subTitle="Training Provider"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;