import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ParticleNetwork from "../animate/ParticleNetwork";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Works() {
  const [modalProject, setModalProject] = useState(null);

  // Mémo évite de recréer les icônes à chaque render
  const icons = useMemo(() => [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaEnvelope />, link: "mailto:contact@tonmail.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ], []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,          // ❗ ANIME UNE SEULE FOIS = performance++
    margin: "-150px",
  });

  return (
    <motion.section
      ref={sectionRef}
      id="projets"
      className="relative snap-start w-full bg-[#001524] flex flex-col items-center justify-center p-6 lg:px-16 py-36"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ParticleNetwork />

      <h2 className="text-[#ece5dd] mb-12 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-semibold">
        Mes Projets
      </h2>

      {/* GRID OPTIMISÉE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: fromLeft ? -120 : 120 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <ProjectCard project={project} onOpen={setModalProject} />
            </motion.div>
          );
        })}
      </div>

      {/* MODAL */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}

      {/* ICÔNES OPTIMISÉES */}
      <div className="flex flex-row items-center justify-center gap-8 mt-12">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            aria-label={`Lien vers ${item.link}`}
            className="text-xl md:text-2xl xl:text-5xl lg:text-4xl text-[#27818f]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
            }}
            whileHover={{
              scale: 1.25,
              rotate: 10,
              transition: { duration: 0.25 },
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
