import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SpinningCube from "../animate/SpinningCube";
import AnimatedText from "../animate/AnimatedText";
import ParticleNetwork from "../animate/ParticleNetwork";


const text = "DEVELOPPEUR WEB";

export default function Home() {
  return (
    <motion.section id="accueil" className="mt-28 snap-start bg-[#023047] flex flex-col items-center justify-between min-h-screen p-6 lg:px-16 py-10">

      <ParticleNetwork />

          {/* Bloc Texte + Image */}

      <motion.div className="relative flex flex-col lg:flex-row items-center justify-center w-full gap-10 mt-8">
      
          {/* Texte */}

        <motion.div className="flex flex-col lg:items-start items-center text-center lg:text-left space-y-6 lg:flex-1">
          
          <motion.h1 className="mt-10 text-5xl lg:text-6xl text-[#fb8500] font-bold leading-tight flex flex-wrap justify-center lg:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }, // temps entre chaque lettre
            }}>
            {text.split("").map((char, index) => (
              <motion.span key={index} 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}>

                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 className="border-transparent rounded-md px-2 py-2 inline-block">
            <AnimatedText
              text={"NDIAYE\nCHEIKH\nABDUL!"}
              className="whitespace-pre-line text-3xl lg:text-4xl text-[#fb8500] font-bold"
            />
          </motion.h2>

          <motion.p className="px-2 text-[#fb8500] bg-[#023047]/40 text-lg lg:text-xl leading-relaxed max-w-2xl">
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
  

        {/* Boutons */}

      <div className="bg-[#023047] flex flex-row gap-4 mt-6 justify-center">
        <a href="#projets" className="bg-[#8ecae6] px-6 py-2 text-[#023047] rounded hover:bg-[#ffb703] transition">
          GitHub
        </a>
        <a href="#apropos" className="bg-[#8ecae6] px-6 py-2 text-[#023047] rounded hover:bg-[#ffb703] transition">
          Linkedin
        </a>
        <a href="#contact" className="bg-[#8ecae6] px-6 py-2 text-[#023047] rounded hover:bg-[#ffb703] transition">
          Contact
        </a>
      </div>

          {/* Cube */}
      <div className="w-full flex justify-center mt-8 lg:mt-12" style={{ height: "300px" }}>
        <SpinningCube size={100} />
      </div>

          {/* Deplacer cube au centre 

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 pointer-events-none">
        <SpinningCube />
      </div>*/}

    </motion.section>


  );
}
