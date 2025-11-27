import React from "react";
import { motion } from "framer-motion";

const TextFadeLoop = ({
  text = "Bienvenue ! Je suis John DOE",
  duration = 2,
  className = "",
}) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: duration * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {text}
    </motion.span>
  );
};

export default TextFadeLoop;
