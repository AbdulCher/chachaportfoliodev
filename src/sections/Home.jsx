import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../animate/AnimatedCard";
import SpinningCube from "../animate/SpinningCube";
import profileImage from "../../img/profile.webp";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import ParticleNetwork from "../animate/ParticleNetwork";
import BgChacha from "../animate/BgChacha";

const Home = () => {
  const [iconsAnimated, setIconsAnimated] = useState(false);

  const icons = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaEnvelope />, link: "mailto:contact@tonmail.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  // Animation des icônes au premier rendu uniquement
  useEffect(() => {
    setIconsAnimated(true);
  }, []);

  return (
    <section
      id="accueil"
      className="snap-start min-h-screen w-full relative flex flex-col items-center gap-10 px-6 md:px-12 lg:px-20 pt-28 bg-[#001524]"
    >
      <ParticleNetwork numPoints={6} />

      {/* Texte + image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.article className="flex-1 text-center md:text-left space-y-6">
          <AnimatedCard direction="left" delay={0.3}>
            <h1 className="text-[#27818f] font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              DEVELOPPEUR WEB
            </h1>
          </AnimatedCard>

          <AnimatedCard direction="left" delay={0.5}>
            <h2 className="text-[#ece5dd] mt-4 text-md md:text-xl xl:text-2xl lg:text-2xl font-semibold">
              Passionné par le Front-End & l’UX moderne
            </h2>
          </AnimatedCard>

          <AnimatedCard direction="left" delay={0.7}>
            <p className="mt-6 text-[#ece5dd] max-w-xl text-base sm:text-lg md:text-xl mx-auto md:mx-0">
              J’aime créer des interfaces épurées, performantes et animées,
              tout en optimisant l’expérience utilisateur.
            </p>
          </AnimatedCard>
        </motion.article>

        <AnimatedCard direction="right" delay={0.5}>
          <motion.figure className="flex-1 flex justify-center">
            <img
              src={profileImage}
              alt="profil"
              className="md:w-52 md:h-52 lg:w-56 lg:h-56 w-36 h-36 object-cover rounded-full shadow-xl border-4 border-[#ff7d00]"
              loading="lazy"
            />
          </motion.figure>
        </AnimatedCard>
      </div>

      <BgChacha />

      {/* Icônes réseaux */}
      <div className="flex flex-row items-center justify-center gap-8">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            className="text-xl md:text-2xl xl:text-5xl lg:text-4xl text-[#27818f]"
            initial={iconsAnimated ? { opacity: 0, scale: 0.5, rotate: -20 } : {}}
            animate={iconsAnimated ? { opacity: 1, scale: [1, 1.2, 1], rotate: [0, 40, 0] } : {}}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.3,
              rotate: 10,
              transition: { duration: 0.3 },
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Spinning Cube */}
      {/* <div className="w-full flex justify-center ms:w-4"> */}
        {/* <SpinningCube size={100} /> */}
      {/* </div> */}
    </section>
  );
};

export default Home;
