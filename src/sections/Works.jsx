import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ParticleNetwork from "../animate/ParticleNetwork";

export default function Works() {
  const [modalProject, setModalProject] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-250px",
  });

  return (
    <motion.section
      ref={sectionRef}
      id="projets"
      className="relative snap-start w-full bg-[#000000] flex flex-col items-center justify-center p-6 lg:px-16 py-36"
    >
      <ParticleNetwork />
      <h2 className="text-3xl font-bold mb-8 text-[#e5e5e5]">Mes Projets</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => {
          // Determine direction per card (4 cards funky entrance)
          const fromLeft = index % 2 === 0; // index 0 et 2 → gauche
          const fromRight = index % 2 === 1; // index 1 et 3 → droite

          return (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                x: fromLeft ? -180 : fromRight ? 180 : 0,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0 }
              }
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.12,
              }}
            >
              <ProjectCard project={project} onOpen={setModalProject} />
            </motion.div>
          );
        })}
        
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
      {/* ---------- BOUTONS EN BAS ---------- */}
      <div className="flex flex-row gap-4 mt-20 justify-center">
        <a href="#projets" className="bg-[#14213d] px-6 py-2 text-[#e5e5e5] rounded hover:bg-[#fca311] hover:text-[#000000] transition">
          GitHub
        </a>
        <a href="#apropos" className="bg-[#14213d] px-6 py-2 text-[#e5e5e5] rounded hover:bg-[#fca311] hover:text-[#000000] transition">
          Linkedin
        </a>
        <a href="#contact" className="bg-[#14213d] px-6 py-2 text-[#e5e5e5] rounded hover:bg-[#fca311] hover:text-[#000000] transition">
          Contact
        </a>
      </div>

    </motion.section>
  );
}
