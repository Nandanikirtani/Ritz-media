import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

function App() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
