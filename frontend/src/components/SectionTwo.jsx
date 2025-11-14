import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    caption: "Forest Pathways",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    caption: "Serene Mountain Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    caption: "Sunset Beach Views",
  },
];

const SectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto scroll every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // helper to get left, center, right
  const getIndices = () => {
    const center = currentIndex;
    const left = (currentIndex - 1 + images.length) % images.length;
    const right = (currentIndex + 1) % images.length;
    return [left, center, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getIndices();

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          We Don’t Just Build Land. <br /> We Nurture Life.
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Every Graph Infra project is imagined as a living ecosystem, where
          shared spaces, safety, and vibrant human interaction come together.
        </p>

        <div className="flex justify-center items-center gap-8 w-full overflow-hidden">
          {[leftIdx, centerIdx, rightIdx].map((idx, position) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 relative"
              initial={{ x: 0 }}
              animate={{
                scale: position === 1 ? 1 : 0.85, // center larger
                opacity: position === 1 ? 1 : 0.7,
              }}
              transition={{ duration: 1 }}
              style={{ width: "30%" }} // make images wider
            >
              <motion.img
                src={images[idx].src}
                alt={images[idx].caption}
                className="rounded-xl w-full h-80 object-cover shadow-lg"
              />
              <p className="mt-2 text-lg font-medium text-center">
                {images[idx].caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
