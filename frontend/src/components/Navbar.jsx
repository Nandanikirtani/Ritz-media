import React from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-16 py-6 text-white z-20">
      <img src={Logo} alt="Graph Logo" className="w-32 object-contain" />

      <ul className="hidden md:flex gap-10 font-medium">
        <li>Home</li>
        <li>Projects</li>
        <li>Community</li>
        <li>Sustainability</li>
        <li>About</li>
        <li>Stories</li>
        <li>Contact</li>
      </ul>

      <button className="bg-white text-black px-6 py-2 rounded-sm font-semibold">
        ENQUIRE NOW
      </button>
    </nav>
  );
}
