// ============================================
// components/Icons.js - AMÉLIORÉ
// ============================================
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Icons() {
  const icons = [
    { 
      icon: <FaGithub />, 
      link: "https://github.com",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin />, 
      link: "https://linkedin.com",
      label: "LinkedIn"
    },
    { 
      icon: <FaEnvelope />, 
      link: "mailto:abdul13un@gmail.com",
      label: "Email"
    },
    { 
      icon: <FaInstagram />, 
      link: "https://instagram.com",
      label: "Instagram"
    },
    { 
      icon: <FaTwitter />, 
      link: "https://twitter.com",
      label: "Twitter"
    },
  ];

  return (
    <nav 
      className="flex flex-row items-center justify-center 
        gap-6 md:gap-8 pt-6"
      aria-label="Réseaux sociaux"
    >
      {icons.map((item, i) => (
        <a
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitez mon profil ${item.label}`}
          className="text-2xl md:text-3xl lg:text-4xl text-[#27818f]
            transition-all duration-300
            hover:text-[#ff7d00] hover:scale-125 hover:rotate-12
            opacity-0 animate-fadeInUp"
          style={{ 
            animationDelay: `${i * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}