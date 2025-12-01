// components/Header.js - MENU BURGER CORRIGÉ
import { useState, useEffect, memo, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Throttle le scroll
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion body overflow
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

  const toggleMenu = useCallback(() => setOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 will-change-transform
        ${scrolled 
          ? "bg-[#001524]/95 backdrop-blur-lg shadow-lg border-b border-[#27818f]/30" 
          : "bg-[#001524]/80 backdrop-blur-md border-b border-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <a 
          href="#accueil" 
          onClick={closeMenu}
          className="text-[#ff7d00] font-bold border-t-3 md:border-t-4 lg:border-t-6 text-xl md:text-2xl lg:text-2xl
            hover:scale-110 transition-transform duration-300 z-50"
          aria-label="Retour à l'accueil"
        >
          <span className="">@/////</span>
        </a>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#ff7d00] text-3xl z-50 
            hover:scale-110 transition-transform relative"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex space-x-6 text-md md:text-xl lg:text-2xl">
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

      {/* MENU MOBILE AMÉLIORÉ */}
      <div
        className={`lg:hidden fixed inset-0 
          bg-[#001524] 
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: '72px' }} // Commence sous le header
      >
        {/* Contenu centré avec plus d'espace */}
        <div className="h-full flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center mt-49 w-full max-w-md bg-[#001524]">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`w-full transition-all duration-300 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-center text-[#ff7d00] text-2xl font-semibold
                    py-4 px-6 rounded-lg
                    hover:bg-[#ff7d00] hover:text-[#001524]
                    transition-all duration-300
                    border-2 border-[#ff7d00]/30
                    hover:border-[#ff7d00]
                    hover:scale-105"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Message de fermeture optionnel */}
          {/* <p className="mt-12 text-[#27818f] text-sm opacity-70">
            Cliquez sur un lien ou le X pour fermer
          </p> */}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);