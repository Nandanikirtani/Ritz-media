import React from "react";
import mask from "../assets/mask.png";

const SectionThree = () => {
  return (
    <section className="w-full bg-[#1E1B4B] py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-6 md:px-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Spaces That Speak Of Tomorrow
          </h2>
          <p className="text-gray-300 mb-4 text-sm sm:text-base md:text-lg">
            Graph Infra’s plotted developments in Moradabad and Delhi NCR offer more than land; they offer the freedom to shape your future.
          </p>
          <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
            Each site is carefully chosen for strategic growth, connectivity, and long-term value, designed to evolve with you.
          </p>
          <h3 className="text-lg sm:text-xl font-medium mb-4 text-yellow-400">Explore:</h3>
          <ul className="list-decimal list-inside space-y-2 text-gray-300 text-sm sm:text-base md:text-lg">
            <li>
              Mixed-use potential for <span className="font-semibold text-yellow-400">RESIDENTIAL AND COMMERCIAL</span> needs
            </li>
            <li>
              Clear titles and infrastructure-<span className="font-semibold text-yellow-400">READY PLOTS</span>
            </li>
            <li>
              Seamless access to <span className="font-semibold text-yellow-400">HIGHWAYS, METROS, AND URBAN</span> essentials
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-white text-[#1E1B4B] font-medium rounded hover:bg-gray-200 transition text-sm sm:text-base md:text-lg">
            VIEW ALL PROJECTS
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src={mask}
            alt="Team Meeting"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
