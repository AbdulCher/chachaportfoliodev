import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ParticleNetwork from "../animate/ParticleNetwork";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Works() {

  const [modalProject, setModalProject] = useState(null);
  const icons = [
        { icon: <FaGithub />, link: "https://github.com" },
        { icon: <FaLinkedin />, link: "https://linkedin.com" },
        { icon: <FaEnvelope />, link: "mailto:contact@tonmail.com" },
        { icon: <FaInstagram />, link: "https://instagram.com" },
        { icon: <FaTwitter />, link: "https://twitter.com" },
      ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-250px",

  });

  return (
    <motion.section
      ref={sectionRef}
      id="projets"
      className="relative snap-start w-full bg-[#001524] flex flex-col items-center justify-center p-6 lg:px-16 py-36"
    >
      <ParticleNetwork />
      <h2 className="text-[#ece5dd] mb-8 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-semibold">Mes Projets</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => {
          const fromLeft = index % 2 === 0; 
          const fromRight = index % 2 === 1; 

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

      <div className="flex mt-12 flex-row items-center justify-center gap-8">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            className="text-xl md:text-2xl xl:text-5xl lg:text-4xl text-[#27818f]"
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

    </motion.section>
  );
}
