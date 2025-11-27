import AnimatedCard from "../animate/AnimatedCard";
import ParticleNetwork from "../animate/ParticleNetwork";
import TextRotator from "../animate/TextRotator";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import TextFadeLoop from "../animate/TextFadeLoop";
import FondPortfolio from "../animate/BgPortfolio";
import SpinningCube from "../animate/SpinningCube";

export default function About() {

  const icons = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaEnvelope />, link: "mailto:contact@tonmail.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  return (
    <motion.section
      id="apropos"
      className="
        snap-start w-full relative
        bg-[#001524] text-[#ffecd1]
        flex flex-col items-center
        px-6 md:px-12 lg:px-20 pt-30 pb-30
      "
    >
      <ParticleNetwork />

      {/* ---------- CONTENU PRINCIPAL ---------- */}
      <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-20">

        {/* ------------ COLONNE TEXTE ------------ */}
        <div className="flex-1 text-left space-y-6">
          
          <h2 className="text-[#ffecd1] mt-4 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-semibold">
            À propos de <span className="text-[#ff7d00]">ChaChaDev</span>
          </h2>

          <p className="leading-relaxed text-base sm:text-lg md:text-xl opacity-90">
            Après une formation complète chez <strong>OpenClassrooms</strong>, j’ai appris
            à transformer des maquettes Figma en sites web modernes et responsives.
            Curieux et rigoureux, j’aime relever des défis techniques et concevoir
            des interfaces élégantes et fonctionnelles.
          </p>

        </div>

        {/* ------------ COLONNE DROITE : CARDS ------------ */}
        <div className="flex-1 flex flex-col items-center lg:items-start w-full">
          
          <div className="w-full pl-0 grid gap-3">
            
            <AnimatedCard direction="left" delay={0.20}>
              <div className="bg-[#001524]/14 p-2 rounded-lg shadow-sm shadow-[#ffecd1]/40 text-center">
                <h3 className="text-xl">Booki</h3>
                <p className="text-md opacity-90">Intégration HTML/CSS responsive</p>
              </div>
            </AnimatedCard>

            <AnimatedCard direction="left" delay={0.40}>
              <div className="bg-[#001524]/14 p-2 rounded-lg shadow-sm shadow-[#ffecd1]/40 text-center">
                <h3 className="text-xl">Sophie Bluel</h3>
                <p className="text-md opacity-90">JavaScript dynamique</p>
              </div>
            </AnimatedCard>

            <AnimatedCard direction="left" delay={0.60}>
              <div className="bg-[#001524]/14 p-2 rounded-lg shadow-sm shadow-[#ffecd1]/40 text-center">
                <h3 className="text-xl">Kasa</h3>
                <p className="text-md opacity-90">Application React complète</p>
              </div>
            </AnimatedCard>

          </div>

          {/* ----- Button centered ----- */}
          <a
            href="#projets"
            className="
              mt-6 bg-[#15616d] text-[#ffecd1]
              px-6 py-2 rounded
              hover:bg-[#ff7d00] hover:text-black transition
              self-center
            "
          >
            Mes projets →
          </a>

        </div>
      </div>

      {/* ----------- TEXTE ANIMÉ CENTRÉ ----------- */}
      
      <motion.div className="relative w-full h-full flex items-center justify-center">
        
        <FondPortfolio
          className="text-[#ff7d00] font-extrabold
          xl:text-[4rem]
          lg:text-[3rem]
          md:text-[2.4rem]
          sm:text-[2rem]"
        />
      </motion.div>

      {/* ----------- ICÔNES ANIMÉES ----------- */}
      <div className="flex flex-row items-center justify-center gap-8">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            className="text-xl md:text-2xl xl:text-5xl lg:text-4xl text-[#15616d]"
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
<SpinningCube />
    </motion.section>
  );
}
