import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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

export default function SectionTwo() {
  const [order, setOrder] = useState([0, 1, 2]); // image order
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      animateSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [order]);

  const animateSlide = async () => {
    // animate left scroll
    await controls.start({
      x: "-33.33%",
      transition: { duration: 1, ease: "easeInOut" },
    });

    // rotate positions
    setOrder(([a, b, c]) => [b, c, a]);

    // instantly reset position to starting point (no jump)
    controls.set({ x: 0 });
  };

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          We Don’t Just Build Land. <br /> We Nurture Life.
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Every Graph Infra project is imagined as a living ecosystem, where shared spaces,
          safety, and vibrant human interaction come together.
        </p>

        {/* Slider */}
        <div className="relative w-full flex justify-center overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={controls}
            style={{ width: "300%" }}
          >
            {order.map((idx, position) => (
              <motion.div
                key={idx}
                className="w-1/3 flex flex-col items-center"
                animate={{
                  scale: position === 1 ? 1.0 : 0.85,
                  opacity: position === 1 ? 1 : 0.6,
                }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={images[idx].src}
                  alt={images[idx].caption}
                  className="rounded-xl w-full h-80 object-cover shadow-xl"
                />
                <p className="mt-3 text-lg font-medium">
                  {images[idx].caption}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
