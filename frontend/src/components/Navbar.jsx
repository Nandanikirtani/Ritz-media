import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm i lucide-react
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-6 text-white">
        
        {/* Logo */}
        <img src={Logo} alt="Graph Logo" className="w-28 sm:w-32 object-contain" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">Projects</li>
          <li className="cursor-pointer hover:text-gray-300">Community</li>
          <li className="cursor-pointer hover:text-gray-300">Sustainability</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Stories</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-sm font-semibold">
          ENQUIRE NOW
        </button>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-[#1E1B4B]/95 backdrop-blur-sm text-white transition-all duration-500 overflow-hidden
        ${open ? "h-[350px] opacity-100" : "h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
          <li onClick={() => setOpen(false)}>Home</li>
          <li onClick={() => setOpen(false)}>Projects</li>
          <li onClick={() => setOpen(false)}>Community</li>
          <li onClick={() => setOpen(false)}>Sustainability</li>
          <li onClick={() => setOpen(false)}>About</li>
          <li onClick={() => setOpen(false)}>Stories</li>
          <li onClick={() => setOpen(false)}>Contact</li>

          <button className="bg-white text-black px-6 py-2 rounded-sm font-semibold mt-3">
            ENQUIRE NOW
          </button>
        </ul>
      </div>
    </nav>
  );
}
