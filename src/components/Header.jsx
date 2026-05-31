// components/Header.js - MENU BURGER CORRIGÉ
import { useState, useEffect, memo, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#accueil", label: "ACCUEIL" },
  { href: "#apropos", label: "À PROPOS" },
  { href: "#projets", label: "PROJETS" },
  { href: "#competences", label: "COMPÉTENCES" },
  { href: "#contact", label: "CONTACT" },
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
      <nav className="max-w-7xl mx-auto flex justify-between items-stretch px-6">
  
  <a 
    href="#accueil" 
    onClick={closeMenu}
    className="hover:scale-110 transition-transform duration-300 z-50 flex items-center"
    aria-label="Retour à l'accueil"
  >
    <img src="/img/chachalogo.png" alt="Logo"className="h-30 p-2 w-auto" />
  </a>

  <button
    onClick={toggleMenu}
    className="lg:hidden text-[#ff7d00] text-2xl z-50 hover:scale-110 transition-transform flex items-center"
    aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
    aria-expanded={open}
  >
    {open ? <FiX /> : <FiMenu />}
  </button>
<div className="hidden lg:flex items-end gap-2 relative">
  {/* Boule lumineuse */}
  <div
    className="absolute top-10 h-1 rounded-full bg-[#ff7d00]"
    style={{
      width: '20px',
      boxShadow: '0 0 8px #ff7d00, 0 0 16px #ff7d00',
      animation: 'slideball 3s linear infinite',
    }}
  />
  <ul className="hidden lg:flex items-end gap-2">
  {navLinks.map((link, index) => (
    <li key={link.href} className={index % 2 === 0 ? 'mb-8' : 'mb-8'}>
      <a
        href={link.href}
        className="text-[#319eaf] m-4 bg-[#2c4456] bold text-xl rounded-lg px-8 p-2
          hover:text-[#ffffff] hover:bg-[#ff7d00]
          transition-all duration-300 font-medium"
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>
</div>
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
                  className="block text-center text-[#ff7d00] text-xl md:text-2xl font-semibold
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