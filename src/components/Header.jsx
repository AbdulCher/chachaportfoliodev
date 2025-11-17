import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Mon Portfolio</div>
        <ul className="flex space-x-6">
          <li><a href="#accueil" className="hover:text-blue-500">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-blue-500">À propos</a></li>
          <li><a href="#projets" className="hover:text-blue-500">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
