import React from "react";

const Header = () => {
  return (
    <header className="text-gray-300 fixed top-0 left-0 w-full bg-gray/10 bg-opacity-80 backdrop-blur-md shadow-md z-50 border-b">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl text-[#87a330] font-bold border-t-8 border-0"><strong className="text-1xl">@</strong>/////</div>
        <ul className="flex space-x-6 text-[#0D141F]">
          <li><a href="#accueil" className="hover:text-[#60a5fa]">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-[#60a5fa]">À propos</a></li>
          <li><a href="#projets" className="hover:text-[#60a5fa]">Projets</a></li>
          <li><a href="#competences" className="hover:text-[#60a5fa]">Compétences</a></li>
          <li><a href="#contact" className="hover:text-[#60a5fa]">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
