import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ParticleNetwork from "../animate/ParticleNetwork";
import SpinningCube from "../animate/SpinningCube";
import BgChacha from "../animate/BgChacha";

export default function Skills() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset pour rejouer l'animation
    }
  }, [isInView, controls]);

  // 🎨 LES DONNÉES STRUCTURÉES
  const skills = {
    Outils: [
      { name: "Figma", icon: "/img/icons/figma.svg", },
      { name: "VS Code", icon: "/img/icons/vscode.svg" },
      { name: "Git & GitHub", icon: "/img/icons/github.svg" },
    ],

    Langages: [
      { name: "React.js", icon: "/img/icons/react.svg", color: "#61DAFB" },
      { name: "HTML5", icon: "/img/icons/html5.svg", color: "#fffff" },
      { name: "CSS3", icon: "/img/icons/css3.svg" },
      { name: "JavaScript (ES6+)", icon: "/img/icons/javascript.svg", color: "#F7DF1E" },
    ],

    Frameworks: [
      { name: "Tailwind CSS", icon: "/img/icons/tailwindcss.svg", color: "#38BDF8" },
      { name: "Bootstrap", icon: "/img/icons/bootstrap.svg", color: "#7952B3" },
      { name: "Framer Motion", icon: "/img/icons/framer.svg" },
    ],
  };

  // 🎬 Animation éléments (icône + texte)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // 🎬 Animation icônes
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: (i) => ({
      opacity: 4,
      scale: 1,
      transition: {
        delay: i * 0.25,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="competences"
      ref={ref}
      className="
        snap-start w-full relative
        bg-[#001524] text-[#ffecd1]
        flex flex-col items-center
        px-6 md:px-12 lg:px-20 pt-30 pb-30"
    >
      <ParticleNetwork />

      <h2 className="text-[#ffecd1] mb-8 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-semibold">Compétences</h2>

      <div className="relative w-full max-w-6xl grid gap-12 sm:grid-cols-1 lg:grid-cols-3 text-center">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="flex flex-col items-center text-[#ffecd1]">
            <h3 className="text-2xl opacity-90 font-semibold text-[#ff7d00] mb-6">{category}</h3>

            <ul className="space-y-6">
              {items.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={controls}
                  className="flex items-center justify-center space-x-4"
                >
                  {/* LOGO */}
                  <motion.img
                    custom={i}
                    variants={logoVariants}
                    src={item.icon}
                    
                    className="w-10 h-10" b
                    alt={item.name}
                  />

                  {/* NOM */}
                  <motion.span
                    custom={i}
                    variants={itemVariants}
                    className="text-xl text-[#ffecd1] opacity-90"
                  >
                    {item.name}
                  </motion.span>
                  
                </motion.li>
                
              ))}
            </ul>
          </div>
        ))}
      </div>
<BgChacha />
      <SpinningCube size={5} />
    </section>
  );
}
