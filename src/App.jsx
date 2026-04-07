import React from "react";
import Navbar from "./Shared/Navbar";
import HeroSection from "./Layout/HeroSection";
import SuccessSection from "./Layout/SuccessSection";
import StatsSection from "./Layout/StatsSection";
import WhyChooseSection from "./Layout/WhyChooseSection";
import TopCourses from "./Layout/TopCourse";
import Studentreviews from "./Layout/Studentsreviews";

import CampusesSection from "./Layout/CampusesSection";
import AlumniSection from "./Layout/AlumniSection";    
import VisionSection from "./Layout/VisionSection";
import Vision from "./Layout/Vision";
import Footer from "./Shared/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SuccessSection />
      <StatsSection />
      <WhyChooseSection />
      <TopCourses />
      <Studentreviews />
      <CampusesSection />
      <AlumniSection />
      <VisionSection />
      <Vision />
      <Footer />

    </div>
  );
};

export default App;
