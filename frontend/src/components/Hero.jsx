import React, { useRef, useState, useEffect } from "react";
import bg from "../assets/bg.png";

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // IntersectionObserver to open modal when Hero scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger modal when Hero goes out of view
          if (!entry.isIntersecting && !hasOpened) {
            setShowModal(true);
            setHasOpened(true);
            if (videoRef.current) videoRef.current.play();
          }
        });
      },
      { threshold: 0 } // triggers as soon as any part goes out of view
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [hasOpened]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl bg-[#3d348b]/30 text-white p-6 sm:p-10 md:p-16 lg:p-20 mt-32 md:mt-40 mx-4 md:ml-16 rounded-md backdrop-blur-sm">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Creating Footprints.
            <br /> Building Community.
            <br /> One Future.
          </h1>

          <p className="mb-10 text-base sm:text-lg opacity-90">
            Shaping spaces today that define lifestyles for tomorrow
          </p>

          <button className="bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-sm font-semibold shadow-md hover:bg-gray-200 transition">
            ENQUIRE NOW
          </button>
        </div>

        {/* Video Thumbnail */}
        <div className="absolute z-10 sm:right-16 sm:bottom-16 md:right-24 md:bottom-24 lg:right-40 lg:bottom-28
                        w-[250px] sm:w-[300px] md:w-[330px] lg:w-[350px] 
                        h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px]
                        rounded-md overflow-hidden shadow-xl">
          <img
            src="https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="video thumbnail"
            className="w-full h-full object-cover"
          />

          <button className="absolute inset-0 m-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                             rounded-full bg-white flex items-center justify-center
                             shadow-md text-black text-lg sm:text-xl">
            ▶
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="relative w-full max-w-5xl rounded-md overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 text-2xl sm:text-3xl"
            >
              ✕
            </button>

            {/* Video */}
            <video
              ref={videoRef}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-auto sm:h-[70vh] md:h-[80vh] lg:h-[85vh] object-cover rounded-md"
              controls
              autoPlay
              muted
            />
          </div>
        </div>
      )}
    </>
  );
}
