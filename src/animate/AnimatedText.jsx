import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedText({ text, className = "" }) {
  const letters = text.split("");
  const [replay, setReplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setReplay(false);
      setTimeout(() => setReplay(true), 50);
    }, 9000); // ⬅️ la durée avant que l’animation recommence

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={replay}  // ⬅️ Force le composant à se remonter = relance l’animation
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.20 } }
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
