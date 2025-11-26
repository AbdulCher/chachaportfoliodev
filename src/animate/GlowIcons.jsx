// GlowIcons.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const icons = [
  { id: 1, icon: <FaGithub size={40} />, link: "https://github.com/" },
  { id: 2, icon: <FaLinkedin size={40} />, link: "https://linkedin.com/" },
  { id: 3, icon: <FaEnvelope size={40} />, link: "mailto:contact@mail.com" },
];

export default function GlowIcons() {
  return (
    <div className="flex flex-col gap-8 items-center">
      {icons.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e5e5e5]"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: index * 0.6, // ⬅️ icônes qui scintillent l’une après l’autre
          }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
