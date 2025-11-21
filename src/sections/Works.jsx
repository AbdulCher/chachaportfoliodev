import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Works() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projets" className="snap-start w-full bg-gray/10 flex flex-col items-center justify-center p-6 lg:px-16 py-36">
      <h2 className="text-3xl font-bold mb-8 text-[#023047]">Mes Projets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setModalProject}
          />
        ))}
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
