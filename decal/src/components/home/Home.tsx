import React from "react";
import Hero from "./Hero/Hero";
import RecentImage from "./Recent Image/RecentImage";
import About from "./About/About";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
    </div>
  );
};

export default HomePage;
