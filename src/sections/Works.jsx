// ============================================
// sections/Works.js - AMÉLIORÉ
// ============================================
import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Icons from "../components/Icons";
import BgChacha from "../animate/BgChacha";

export default function Works() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section
      id="projets"
      className="min-h-screen flex flex-col justify-center px-8 py-24
        snap-start w-full relative
        bg-[#001524] text-[#ece5dd] items-center
        md:px-12 lg:px-20"
      aria-labelledby="projects-title"
    >
      <h2 
        id="projects-title"
        className="text-[#ece5dd] text-2xl mb-14
          md:text-3xl xl:text-4xl lg:text-5xl font-semibold"
        data-aos="fade-down"
      >
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
        xl:grid-cols-3 gap-6 w-full max-w-7xl z-10 mb-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
          >
            <ProjectCard 
              project={project} 
              onOpen={setModalProject} 
            />
          </div>
        ))}
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}

      <div className="mt-10 mb-8 z-10">
        <BgChacha />
      </div>
      <Icons />
    </section>
  );
}