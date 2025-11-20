import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  direction = "up",  // "up", "down", "left", "right"
  delay = 0,
  className = ""
}) {
  const directions = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,        // ⬅️ rejoue à chaque scroll
        amount: 0.2         // ratio visible avant d’activer
      }}
      transition={{ duration: 0.6, delay }}
      variants={directions[direction]}
    >
      {children}
    </motion.div>
  );
}
