import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextRotator = ({
  words = ["Développeur", "Designer", "Créatif"],
  duration = 2,
  className = "",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <motion.span
      key={words[index]} // important pour la transition
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {words[index]}
    </motion.span>
  );
};

export default TextRotator;
