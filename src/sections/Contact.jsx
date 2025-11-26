import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import TypewriterText from "../animate/TypewriterText"; // chemin selon ton projet

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [triggerText, setTriggerText] = useState(false);


  const icons = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaEnvelope />, link: "mailto:contact@tonmail.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section
      id="contact"
      className="relative snap-start bg-[#001524] text-[#ffecd1] flex flex-col items-center justify-center px-8 lg:px-20 py-10"
    >
      {/* ░░░ TITLE ░░░ */}
      <h2 className="mt-30 opacity-90 text-2xl lg:text-4xl font-bold mb-4 text-center">Contact</h2>

      {/* ░░░ TEXT SCROLLING UNDER TITLE ░░░ */}
    
        <motion.div
        className="mb-4 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        onViewportEnter={() => setTriggerText(prev => !prev)} // inverser trigger à chaque scroll
      >
        <TypewriterText
          text="Une question ou une idée? Par ce formulaire ou par les réseaux👇."
          speed={90}
          className="opacity-90 text-[#ffecd1] text-lg"
          trigger={triggerText}
        />
      </motion.div>
        
      {/* ░░░ ONE COLUMN LAYOUT ░░░ */}
      <div className="w-full max-w-3xl flex flex-col items-center gap-16">

        {/* ░░░ FORM – ZOOM IN ░░░ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 3, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="bg-[#001524] border border-[#001524] p-8 rounded-xl shadow-lg w-full"
        >
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="shadow-inner p-3 rounded bg-[#001524] border border-[#ffecd1]"
                required
              />

              <input
                type="email"
                placeholder="Votre email"
                className="p-3 rounded text-[#] bg-[#001524] border border-[#ffecd1]"
                required
              />

              <textarea
                placeholder="Votre message..."
                className="p-3 rounded bg-[#001524] border border-[#ffecd1] h-32"
                required
              />

              <button
                type="submit"
                className="bg-[#15616d] hover:bg-[#78290f] text-[#ffecd1] font-bold py-3 rounded transition"
              >
                Envoyer
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 2 }}
              className="bg-[#001d3d] text-center text-2xl py-8"
            >
              🎉 Message envoyé avec succès !
            </motion.div>
          )}
        </motion.div>

        {/* ░░░ ICONS — PULSE & ROTATION ░░░ */}
        <div className="relative flex flex-row items-center justify-center gap-8">
          {icons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              className="text-4xl text-[#15616d]"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{
                opacity: 1,
                scale: [1, 1.2, 1],
                rotate: [0, 20, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
