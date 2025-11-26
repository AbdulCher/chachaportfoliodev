import AnimatedCard from "../animate/AnimatedCard";
import ParticleNetwork from "../animate/ParticleNetwork";
import AnimatedText from "../animate/AnimatedText";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";


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
      className="pt-35 snap-start bg-[#001524] flex flex-col items-center justify-between min-h-screen p-6 lg:px-16 py-10 relative w-full"
    >
      <ParticleNetwork />

      {/* ---------- CONTENEUR 2 COLONNES ---------- */}
      <div className="relative w-full flex flex-col lg:flex-row gap-16">

        {/* ------------ COLONNE GAUCHE ------------ */}
        <motion.div className="flex-1 text-left opacity-90 text-[#ffecd1] flex flex-col justify-start pt-0">
          
          <h2 className="text-4xl font-bold mb-4">À propos</h2>

          <p className="text-lg lg:text-xl leading-relaxed">
            Après une formation complète chez <strong>OpenClassrooms</strong>,<br />
            j’ai appris à transformer des maquettes Figma en sites web modernes et responsives.
            Curieux et rigoureux, j’aime relever des défis techniques et concevoir
            des interfaces élégantes et fonctionnelles.
          </p>
          {/* <AnimatedText
                  text={
                    "👍Merci d'avoir visiter mon protfolio !\n"+
                    "Je poursuis en ce moment une formation Opencassroom\n"+
                    "pour devenir DEVELOPPEUR FULL-STACK, mais je reste disponible!"
                  }
                  className="border-b-4 border-[#15616d] rounded-xl p-3 bg-[#001524]/14 text-xl font-light text-[#ffecd1] mt-10"
                /> */}
        </motion.div>

        {/* ------------ COLONNE DROITE ------------ */}
        <div className="flex-1 flex flex-col items-center lg:items-start w-full">

          {/* Cards */}
          <motion.div className="w-full grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
            <AnimatedCard direction="left" delay={0.20}>
              <div className="relative bg-[#001524]/14 text-[#ffecd1] rounded-lg hover:shadow-md transition p-4 shadow-sm shadow-[#ffecd1]/60 flex flex-col items-center">
                <h3 className="relative text-2xl">Booki</h3>
                <p className="relative text-1xl text-center">
                  Intégration HTML/CSS responsive
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard direction="left" delay={0.40}>
              <div className="relative bg-[#001524]/14 text-[#ffecd1] rounded-lg hover:shadow-md transition p-4 shadow-sm shadow-[#ffecd1]/60 flex flex-col items-center">
                <h3 className="relative text-2xl">Sophie Bluel</h3>
                <p className="relative text-1xl text-center">
                  JavaScript dynamique
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard direction="left" delay={0.60}>
              <div className="bg-[#001524]/14 text-[#ffecd1] rounded-lg hover:shadow-md transition p-4 shadow-sm shadow-[#ffecd1]/60 flex flex-col items-center">
                <h3 className="text-2xl">Kasa</h3>
                <p className="text-1xl text-center">
                  Application React complète
                </p>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Bouton Mes Projets — CENTRÉ */}
          <a
            href="#projets"
            className="mt-20 bg-[#15616d] animate-bounce px-6 py-2 text-[#ffecd1] rounded hover:bg-[#ff7d00] hover:text-[#000000] transition self-center"
          >
            Mes projets →
          </a>
        </div>
      </div>

       {/* ░░░ ICONS — PULSE & ROTATION ░░░ */}
        <div className="flex flex-row items-center justify-center gap-8">
          {icons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              className="text-4xl text-[#15616d]"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{
                opacity: 1,
                scale: [1, 1.2, 1],
                rotate: [0, 20, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

    </motion.section>
  );
}
