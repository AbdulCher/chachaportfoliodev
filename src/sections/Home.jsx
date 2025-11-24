import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SpinningCube from "../animate/SpinningCube";
import ParticleNetwork from "../animate/ParticleNetwork";

const texts = [
  "🖋DEVELOPPEUR WEB",
  "🐱 CONÇOIS DES APP",
  "🐵 ET DES SITES MODERNES",
  "🚀 CONTACTEZ-MOI",
  "💻 TRANSFORMEZ VOS IDÉES"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const intervalRef = useRef(null);

  useEffect(() => {
    // Quand on revient sur la section, reset l'index
    if (isInView) {
      setCurrentIndex(0);

      // On nettoie l'ancien interval si existant
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % texts.length);
      }, 3000);
    } else {
      // Quand la section sort de la vue, on stoppe l'intervalle
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      id="accueil"
      className="mt-28 snap-start bg-[#000000] flex flex-col items-center justify-between min-h-screen p-6 lg:px-16 py-10"
    >
      <ParticleNetwork />

      {/* Bloc Texte + Image */}
      <motion.div className="relative flex flex-col lg:flex-row items-center justify-center w-full gap-10 mt-8">
        {/* Texte */}
        <motion.div className="flex flex-col lg:items-start items-center text-center lg:text-left space-y-6 lg:flex-1">

          {/* H1 animé */}
          <motion.h1
            key={currentIndex} // force la réanimation à chaque changement
            className="mt-10 text-5xl lg:text-6xl text-[#e5e5e5] font-bold leading-tight flex flex-wrap justify-center lg:justify-start"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            <span style={{ fontFamily: "inherit, Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji" }}>
              {texts[currentIndex].split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* H2 ou autre texte */}
          <motion.h2 className="border-transparent rounded-md px-2 py-2 inline-block text-3xl lg:text-4xl text-[#e5e5e5] font-bold whitespace-pre-line">
            {"NNNNN\nTATATA\nALLOU!".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Paragraphe */}
          <motion.p className="px-2 text-[#e5e5e5] text-lg lg:text-xl leading-relaxed max-w-2xl">
            Je transforme des maquettes Figma en sites web modernes et responsives.
            Curieux et rigoureux, j’aime relever des défis techniques et concevoir
            des interfaces élégantes et fonctionnelles.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div className="lg:flex-1 flex justify-center items-center max-w-md">
          <img
            src="/img/profile.jpg"
            alt="Profil"
            className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Cube */}
      <div className="w-full flex justify-center mt-8 lg:mt-12" style={{ height: "300px" }}>
        <SpinningCube size={100} />
      </div>
    </motion.section>
  );
}
