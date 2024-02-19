import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Portfolio />
      <Contact/>
    </main>
  );
};

export default Homepage;
