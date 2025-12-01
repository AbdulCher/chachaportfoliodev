// ============================================
// components/Footer.js - AMÉLIORÉ
// ============================================
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:abdul13un@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className="w-full bg-[#001524] text-[#ece5dd] 
        border-t border-[#27818f]/30 
        backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-center md:text-left text-sm md:text-base opacity-90">
            © {currentYear} <span className="text-[#ff7d00] font-semibold">ChaChaDev</span>
            {" "}— Tous droits réservés
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-2xl text-[#27818f] 
                  hover:text-[#ff7d00] hover:scale-125
                  transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Ligne décorative */}
        <div className="mt-6 pt-4 border-t border-[#27818f]/20 text-center">
          <p className="text-xs opacity-70">
            Fait avec ❤️ et React
          </p>
        </div>
      </div>
    </footer>
  );
}