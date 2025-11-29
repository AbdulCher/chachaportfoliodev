// ============================================
// components/Header.js - AMÉLIORÉ
// ============================================
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#projets", label: "Projets" },
    { href: "#competences", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled 
          ? "bg-[#001524]/95 backdrop-blur-lg shadow-lg border-b border-[#27818f]/30" 
          : "bg-[#001524]/80 backdrop-blur-md border-b border-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* LOGO */}
        <a 
          href="#accueil" 
          className="text-2xl text-[#ff7d00] font-bold 
            hover:scale-110 transition-transform duration-300"
          aria-label="Retour à l'accueil"
        >
          <span className="text-3xl">@</span>/////
        </a>

        {/* MENU BURGER (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#ff7d00] text-3xl z-50 
            hover:scale-110 transition-transform"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#ff7d00] rounded-lg px-3 py-2 
                  hover:text-[#001524] hover:bg-[#ff7d00]
                  transition-all duration-300
                  font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#001524]/98 
          backdrop-blur-xl transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-center justify-center 
          h-full space-y-8 text-2xl">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`transition-all duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#ff7d00] hover:text-[#ece5dd] 
                  transition-colors duration-300 font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}




