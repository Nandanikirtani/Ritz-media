import React, { useRef, useEffect, useState } from "react";
import bg from "../assets/bg.png";

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRef.current.offsetHeight;

      // Expand video at 50% scroll
      if (rect.top < -heroHeight / 2 && !isExpanded) {
        setIsExpanded(true);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  const handleVideoEnd = () => {
    setIsExpanded(false);
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[110vh] overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Left Content */}
      <div className="relative z-10 max-w-4xl bg-[#3d348b]/60 text-white p-10 sm:p-16 mx-4 mt-36 md:ml-16 rounded-md backdrop-blur-sm">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Creating Footprints.
          <br /> Building Community.
          <br /> One Future.
        </h1>

        <p className="mb-8 text-lg sm:text-xl opacity-90">
          Shaping spaces today that define lifestyles for tomorrow
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-sm font-semibold shadow-md hover:bg-gray-200 transition">
          ENQUIRE NOW
        </button>
      </div>

      {/* Video */}
      <div
        className={`absolute z-20 overflow-hidden transition-all duration-700 ${
          isExpanded
            ? "w-full h-full left-0 bottom-0 rounded-none"
            : "w-[330px] h-[210px] left-27 bottom-40 md:left-200 md:bottom-100 rounded-lg shadow-xl"
        }`}
      >
        <video
          ref={videoRef}
          src="https://videos.pexels.com/video-files/856069/856069-hd_1920_1080_30fps.mp4"
          className="w-full h-full object-cover"
          playsInline
          muted
          onEnded={handleVideoEnd}
        />

        {!isExpanded && (
          <button
            className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white flex items-center justify-center text-black text-2xl shadow-lg"
            onClick={() => {
              setIsExpanded(true);
              videoRef.current?.play();
            }}
          >
            ▶
          </button>
        )}
      </div>
    </section>
  );
}
