// sections/Hero.js
import { useEffect } from "react";
import profileImage from "../../public/img/profile.webp";
import BgChacha from "../animate/BgChacha";
import Icons from "../components/Icons";
import ParticleNetwork from "../animate/ParticleNetwork";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // durée des animations
      once: false,     // permet de répéter l'animation au scroll
      offset: 200,     // déclenchement à 200px du viewport
    });
    AOS.refresh();      // refresh pour détecter tous les éléments dynamiques
  }, []);

  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col justify-center px-8 py-24
        snap-start w-full relative bg-[#001524] text-[#ece5dd] 
        items-center md:px-12 lg:px-20"
      aria-label="Section d'accueil"
    >
      {/* Background animé */}
      <ParticleNetwork />

      {/* Contenu principal : Texte + Image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 z-10">

        {/* Texte de présentation */}
        <article 
          className="flex-1 text-center md:text-left space-y-6"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1 className="text-[#27818f] font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            DÉVELOPPEUR WEB
          </h1>

          <h2 className="text-[#ece5dd] mt-4 text-lg md:text-xl xl:text-2xl lg:text-2xl font-semibold">
            Passionné par le Front-End & l'UX moderne
          </h2>

          <p className="mt-6 text-[#ece5dd] max-w-xl text-base sm:text-lg md:text-xl mx-auto md:mx-0 leading-relaxed">
            J'aime créer des interfaces épurées, performantes et animées,
            tout en optimisant l'expérience utilisateur.
          </p>
        </article>

        {/* Image de profil */}
        <figure
          className="flex-shrink-0"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="200"
        >
          <img
            src={profileImage}
            alt="Photo de profil du développeur web"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 
              object-cover rounded-full shadow-2xl border-4 border-[#ff7d00]
              hover:scale-105 transition-transform duration-300"
            loading="eager"
          />
        </figure>
      </div>

      {/* Background animé décoratif */}
      <div className="mt-10 mb-10 z-10" data-aos="fade-up">
        <BgChacha />
      </div>

      {/* Icônes de réseaux sociaux */}
      <div className="z-10" data-aos="fade-up" data-aos-delay="200">
        <Icons />
      </div>
    </section>
  );
}
