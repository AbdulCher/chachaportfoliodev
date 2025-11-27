import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import TypewriterText from "../animate/TypewriterText"; // chemin selon ton projet
import TextFadeLoop from "../animate/TextFadeLoop";

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
      className="
        relative snap-start 
        bg-[#001524] text-[#ece5dd] 
        flex flex-col items-center 
        justify-center px-8 lg:px-20 py-36"
    >
      <h2 className="text-[#ece5dd] mb-8 text-xl 
            md:text-2xl xl:text-3xl lg:text-4xl 
            font-semibold">Contact</h2>

      <motion.div
        className="mb-4 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        onViewportEnter={() => setTriggerText(prev => !prev)} // inverser trigger à chaque scroll
      >
        <TypewriterText
          text="Une question ou une idée? Utilisez ce formulaire ou les réseaux sociaux👇."
          speed={90}
          className="opacity-90 text-[#27818f] text-lg"
          trigger={triggerText}
        />
      </motion.div>
        
      <div className="w-full max-w-3xl flex flex-col items-center gap-16">
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
                className="shadow-inner p-3 rounded bg-[#001524] border border-[#ece5dd]"
                required
              />

              <input
                type="email"
                placeholder="Votre email"
                className="p-3 rounded text-[#] bg-[#001524] border border-[#ece5dd]"
                required
              />

              <textarea
                placeholder="Votre message..."
                className="p-3 rounded bg-[#001524] border border-[#ece5dd] h-32"
                required
              />

              <button
                type="submit"
                className="bg-[#27818f] hover:bg-[#ff7d00] text-[#ece5dd] font-bold py-3 rounded transition"
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
        <div className="flex flex-row items-center justify-center gap-8">
          {icons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              className="text-xl md:text-2xl xl:text-5xl lg:text-4xl text-[#27818f]"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{
                opacity: 1,
                scale: [1, 1.2, 1],
                rotate: [0, 40, 0],
              }}
              transition={{
                duration: 4.2,
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
