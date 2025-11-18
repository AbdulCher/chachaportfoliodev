import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

export default function Home() {
  return (
    <section
      id="accueil"
      className="snap-start h-screen bg-gray-900 flex flex-col lg:flex-row items-center justify-between p-6 lg:px-16 relative"
    >
      {/* Texte principal animé */}
      <motion.div
        className="mb-6 lg:mb-0"
        animate={{ x: 100 }}
        transition={transition}
      >
        <h1 className="text-5xl text-white leading-tight">
          NNNNNN<br />
          NNNNN<br />
          NNNNN
        </h1>
      </motion.div>

      {/* Image animée */}
      <motion.div
        className="mb-6 lg:mb-0"
        animate={{ x: -100 }}
        transition={transition}
      >
        <img
          src="/img/profile.jpg"
          alt="Profil"
          className="h-60 w-60 object-cover rounded-full"
        />
      </motion.div>

      {/* Texte secondaire */}
      <div className="absolute top-10 left-10 text-white">
        <h2 className="text-6xl lg:text-8xl font-bold">Intégrateur web</h2>
      </div>
    </section>
  );
}
