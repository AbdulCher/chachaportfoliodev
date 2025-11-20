import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SpinningCube from "../components/SpinningCube";
import AnimatedText from "../animate/AnimatedText";


const text = "Intégrateur web";

export default function Home() {
  return (
   <motion.section
  id="accueil"
  className="snap-start bg-gray/10 flex flex-col items-center justify-between min-h-screen p-6 lg:px-16"
>
  {/* Bloc Texte + Image */}
  <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 mt-8">
    
    {/* Texte */}
    <motion.div className="flex flex-col lg:items-start items-center text-center lg:text-left space-y-6 lg:flex-1">
      <motion.h1
      className="text-5xl lg:text-6xl text-[#0D141F] font-bold leading-tight flex flex-wrap justify-center lg:justify-start"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } }, // temps entre chaque lettre
      }}
>
  {text.split("").map((char, index) => (
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
</motion.h1>
    <motion.div className="border-transparent rounded-md px-2 py-2 inline-block">
      <AnimatedText
  text={"NDIAYE\nCHEIKH\nABDUL"}
  className="whitespace-pre-line text-3xl lg:text-4xl text-[#0D141F] font-semibold"
/>
    </motion.div>
      <p className="px-2 text-[#0D141F] text-lg lg:text-xl leading-relaxed max-w-md">
        Je transforme des maquettes Figma en sites web modernes et responsives.
        Curieux et rigoureux, j’aime relever des défis techniques et concevoir
        des interfaces élégantes et fonctionnelles.
      </p>
    </motion.div>

    {/* Image */}
    <motion.div className="lg:flex-1 flex justify-center items-center max-w-md">
      <img
        src="/img/profile.jpg"
        alt="Profil"
        className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg"
      />
    </motion.div>
  </div>

  {/* Boutons */}
  <div className="flex flex-row gap-4 mt-8 justify-center">
    <a href="#projets" className="bg-[#80aae1] px-6 py-2 border-2 border-[#154467] text-[#0D141F] rounded hover:text-[#596f16] transition">
      Projets
    </a>
    <a href="#apropos" className="bg-[#80aae1] px-6 py-2 border-2 border-[#154467] text-gray-300 rounded hover:text-blue-500 transition">
      À propos
    </a>
    <a href="#contact" className="bg-[#80aae1] px-6 py-2 border-2 border-[#154467] text-gray-300 rounded hover:text-blue-500 transition">
      Contact
    </a>
  </div>

  {/* Cube */}
  <div className="w-full flex justify-center mt-8 lg:mt-12" style={{ height: "300px" }}>
    <SpinningCube />
  </div>
  {/* Deplacer cube au centre <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 pointer-events-none">
  <SpinningCube />
</div>*/}

</motion.section>


  );
}
