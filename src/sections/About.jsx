import AnimatedCard from "../animate/AnimatedCard";
import ParticleNetwork from "../animate/ParticleNetwork";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
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
        bg-[#001524] text-[#ece5dd]
        flex flex-col items-center
        px-6 md:px-12 lg:px-20 pt-30 pb-30
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Effet de fond optimisé */}
      <ParticleNetwork />

      <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-20">
        {/* Texte de gauche */}
        <motion.article
          className="flex-1 text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#ece5dd] mt-4 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-semibold">
            À propos de <span className="text-[#ff7d00]">ChaChaDev</span>
          </h2>

          <p className="leading-relaxed text-base sm:text-lg md:text-xl opacity-90">
            Après une formation complète chez <strong>OpenClassrooms</strong>, j’ai appris
            à transformer des maquettes Figma en sites web modernes et responsives.
            Curieux et rigoureux, j’aime relever des défis techniques et concevoir
            des interfaces élégantes et fonctionnelles.
          </p>
        </motion.article>

        {/* Bloc des 3 compétences */}
        <motion.article
          className="flex-1 flex flex-col items-center lg:items-start w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.figure className="w-full pl-0 grid gap-3">
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
          </motion.figure>

          <a
            href="#projets"
            className="
              mt-6 bg-[#27818f] text-[#ece5dd]
              px-6 py-2 rounded
              hover:bg-[#ff7d00] hover:text-black transition
              self-center
            "
          >
            Mes projets →
          </a>
        </motion.article>
      </div>

      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FondPortfolio
          className="text-[#ff7d00] font-extrabold
          xl:text-[4rem]
          lg:text-[3rem]
          md:text-[2.4rem]
          sm:text-[2rem]"
        />
      </motion.div>

      {/* Icônes optimisées (one-time anim + hover) */}
      <div className="flex flex-row items-center justify-center gap-8 pt-6">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            aria-label={`Lien vers ${item.link}`}
            className="text-xl md:text-2xl xl:text-5xl lg:text-4xl text-[#27818f]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.3,
              rotate: 10,
              transition: { duration: 0.25 },
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* <SpinningCube /> */}
    </motion.section>
  );
}
