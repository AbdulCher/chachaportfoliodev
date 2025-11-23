import AnimatedCard from "../animate/AnimatedCard";
import ParticleNetwork from "../animate/ParticleNetwork";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="apropos" className="relative snap-start w-full bg-[#023047] flex flex-col items-center justify-center p-6 lg:px-16 py-36">
      
      <ParticleNetwork />

      {/* Texte Intro */}
      <motion.div className="relative bg-[#023047]/70 text-center text-[#fb8500] max-w-3xl mb-10">
        <h2 className="text-4xl font-bold mb-4">À propos</h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          Après une formation complète chez <strong>OpenClassrooms</strong>,<br />
          j’ai appris à transformer des maquettes Figma en sites web modernes et responsives.<br />
          Curieux et rigoureux, j’aime relever des défis techniques et concevoir<br />
          des interfaces élégantes et fonctionnelles.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div className="w-full max-w-6xl grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <AnimatedCard direction="right" delay={0.20}>
        <div className="relative bg-[#023047] text-[#8ecae6] rounded-lg hover:shadow-xl transition p-4 shadow-lg shadow-black/40 flex flex-col items-center">
          
            <h3 className="relative text-2xl">Booki</h3>
          <p className="relative text-1xl text-center">
            Intégration HTML/CSS responsive
          </p>
        </div>
      </AnimatedCard>
      <AnimatedCard direction="up" delay={0.3}>
        <div className="text-[#8ecae6] bg-[#023047] rounded-lg overflow-hidden hover:shadow-xl transition p-4 shadow-lg shadow-black/40 flex flex-col items-center">
          <h3 className="text-2xl">Sophie Bluel</h3>
          <p className="text-1xl text-center">
            JavaScript dynamique
          </p>
        </div>
      </AnimatedCard>
      <AnimatedCard direction="left" delay={0.20}>
        <div className="text-[#8ecae6] bg-[#023047] rounded-lg hover:shadow-xl transition p-4 shadow-lg shadow-black/40 flex flex-col items-center">
          <h3 className="text-2xl">Kasa</h3>
          <p className="text-1xl text-center">
            Application React complète
          </p>
        </div>
        </AnimatedCard>
      </motion.div>

      {/* Bouton */}
      <a
        href="#projets"
        className="bg-[#8ecae6] mt-20 inline-block px-6 py-2 text-[#023047] rounded hover:bg-[#ffb703] transition"
      >
        Mes projets →
      </a>
    </motion.section>
  );
}
