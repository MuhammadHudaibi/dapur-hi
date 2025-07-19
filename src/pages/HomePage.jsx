import React from "react";
import NavBar from "../components/layout/NavBar";
import HeroSection from "../components/sections/HeroSection";
import MenuSection from "../components/sections/MenuSection ";
import CateringSection from "../components/sections/CateringSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import Footer from "../components/layout/Footer";
import AboutSection from "../components/sections/AboutSection";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <main className="pt-20">
        <HeroSection />
        <MenuSection />
        <CateringSection />
        <TestimonialSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
