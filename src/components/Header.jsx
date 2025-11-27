import React, { useState } from "react";
import AnimatedCard from "../animate/AnimatedCard";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-gray-300 fixed top-0 left-0 w-full bg-gray/10 bg-opacity-80 backdrop-blur-md shadow-md z-50 border-b">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <AnimatedCard direction="left" delay={0.6}>
          <div className="hover:animate-ping">
            <div className="text-xl text-[#ff7d00] font-bold border-t-8 border-0">
              <strong className="text-1xl">@</strong>/////
            </div>
          </div>
        </AnimatedCard>

        {/* ----- MENU BURGER (mobile < md) ----- */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-[#ff7d00] text-3xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* ----- MENU NORMAL (≥ md) ----- */}
        <ul className="hidden md:flex space-x-6 text-[#ff7d00]">
          <li><a href="#accueil" className="rounded p-1 hover:text-[#14213d] hover:bg-[#ff7d00]">Accueil</a></li>
          <li><a href="#apropos" className="rounded p-1 hover:text-[#14213d] hover:bg-[#ff7d00]">À propos</a></li>
          <li><a href="#projets" className="rounded p-1 hover:text-[#14213d] hover:bg-[#ff7d00]">Projets</a></li>
          <li><a href="#competences" className="rounded p-1 hover:text-[#14213d] hover:bg-[#ff7d00]">Compétences</a></li>
          <li><a href="#contact" className="rounded p-1 hover:text-[#14213d] hover:bg-[#ff7d00]">Contact</a></li>
        </ul>
      </nav>

      {/* ----- MENU OUVERT EN MOBILE ----- */}
      {open && (
        <ul className="md:hidden bg-[#001524]/10 backdrop-blur-lg border-t text-[#ff7d00] flex flex-col items-center space-y-4 py-6">
          <li><a onClick={() => setOpen(false)} href="#accueil" className="hover:text-white">Accueil</a></li>
          <li><a onClick={() => setOpen(false)} href="#apropos" className="hover:text-white">À propos</a></li>
          <li><a onClick={() => setOpen(false)} href="#projets" className="hover:text-white">Projets</a></li>
          <li><a onClick={() => setOpen(false)} href="#competences" className="hover:text-white">Compétences</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
