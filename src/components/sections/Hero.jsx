import React from "react";
import { motion } from "framer-motion";


const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
}
function Hero() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">


      <section id="accueil" className="snap-start h-screen bg-gray-900 flex items-center justify-between p-6 lg:px-8">
        
        <motion.div animate={{ x: 100 }} transition={transition}>
          <h1 className="text-5xl text-white animate-bounceScale">NDIAYE<br></br>CHEIKH<br></br>ABDUL</h1>
        </motion.div>
        <div className=" text-white flex items-start justify-start ">
            <h2 className="text-8xl flex items-start absolute start-30 top-30">Intégrateur web<br></br></h2>
        </div>
        <motion.div animate={{ x: -100 }} transition={transition}>
          <img className="h-60 w-60 object-cover rounded-full ..." src="/img/profile.jpg" />
        </motion.div>

      </section>

      <section
        id="apropos"
        className="snap-start h-screen bg-blue-950 flex items-center justify-center"
      >
        <div className="text-4xl text-white flex items-center justify-between">
            <div className="grow order-1">
                <h2 >À propos</h2>
                <p className="text-2xl">
                    Après une formation complète chez <strong>OpenClassrooms</strong>, <br></br>j’ai appris à transformer
                    des maquettes Figma en sites web modernes et responsive.<br></br>
                    Curieux et rigoureux, j’aime relever des défis techniques et concevoir
                    <br></br>des interfaces élégantes et fonctionnelles.
                </p>
            </div>
            <div className="text-2xl grow text-white order-2">
                <h3>Quelques projets récents</h3>
                <div className="border-6 justify-items-center">
                    <img src="/img/booki.jpg" alt="Projet Booki" />
                    <p>Booki<br></br>Intégration HTML/CSS responsive</p>
                </div>
                <div className="border-6 justify-items-center-safe">
                    <img className="" src="/img/sophiebluel.jpg" />
                    <p className="">Portfolio Sophie Bluel<br></br> JavaScript dynamique</p>
                </div>
                <div className="border-8 justify-items-end-safe">
                    <img src="/img/Kasa.jpg" alt="Projet Kasa" />
                    <p>Kasa<br></br> Application React complète</p>
                </div>
            
                <a href="#projets" className="btn-secondary border-2 hover:text-blue-500">Voir tous les projets →</a>
            
            </div>
        </div>
        
      </section>

      <section
        id="projets"
        className="snap-start h-screen bg-purple-500 flex items-center justify-center"
      >
        <h2 className="text-5xl text-white">Mes Projets</h2>
      <p>Découvrez mes principales réalisations en développement web.</p>
      
      </section>

      <section
        id="contact"
        className="snap-start h-screen bg-orange-500 flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">Contact</h1>
      </section>
    </div>
  );
}

export default Hero;
