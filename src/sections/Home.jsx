import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../animate/AnimatedCard";
import SpinningCube from "../animate/SpinningCube";
import profileImage from "../../img/profile.jpg"; // adapte le chemin selon ton projet
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import TextFadeLoop from "../animate/TextFadeLoop";
import ParticleNetwork from "../animate/ParticleNetwork";
import BgChacha from "../animate/BgChacha";

const Home = () => {
  const icons = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaEnvelope />, link: "mailto:contact@tonmail.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  return (
    <section
      id="accueil"
      className="
        snap-start min-h-screen w-full relative 
        bg-[#001524] justify-center 
        flex flex-col items-center 
        gap-10 px-6 md:px-12 lg:px-20 pt-28"
    >
      <ParticleNetwork />
    
      {/* ----------- COLONNES TEXTE + IMAGE ----------- */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* TEXTE */}
        <article.div className="flex-1 text-center md:text-left space-y-6">

          <AnimatedCard direction="left" delay={0.3}>
            <h1 className="text-[#15616d] font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
             DEVELOPPEUR WEB
            </h1>
          </AnimatedCard>

          <AnimatedCard direction="left" delay={0.5}>
            <h2 className="text-[#ffecd1] mt-4 text-md md:text-xl xl:text-2xl lg:text-2xl font-semibold">
              Passionné par le Front-End & l’UX moderne
            </h2>
          </AnimatedCard>

          <AnimatedCard direction="left" delay={0.7}>
            <p className="mt-6 text-[#ffecd1] max-w-xl text-base sm:text-lg md:text-xl mx-auto md:mx-0">
              J’aime créer des interfaces épurées, performantes et animées,
              tout en optimisant l’expérience utilisateur.
            </p>
          </AnimatedCard>
        </article.div>

        {/* IMAGE */}
        <AnimatedCard direction="right" delay={0.5}>
          <figure.div className="flex-1 flex justify-center">
            <img
              src={profileImage}
              alt="profil"
              className="md:w-52 md:h-52 lg:w-56 lg:h-56 w-36 h-36 object-cover rounded-full shadow-xl border-4 border-[#ff7d00]"
            />
          </figure.div>
        </AnimatedCard>
      </div>

      <BgChacha />

       {/* ----------- ICÔNES ANIMÉES ----------- */}
      <nav.motion className="flex flex-row items-center justify-center gap-8">
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
      </nav.motion>

      {/* ----------- SPINNING CUBE ----------- */}
      <div className="w-full flex justify-center ms:w-4">
        <SpinningCube size={100} />
      </div>
    </section>
  );
};

export default Home;
