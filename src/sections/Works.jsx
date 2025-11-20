import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Works() {
  return (
    <section
      id="projets"
      className="snap-start min-h-screen w-full py-20 px-6 lg:px-20
        bg-gradient-to-b from-[#0D141F] via-[#111A27] to-[#112840]
        flex flex-col items-center"
    >
      {/* Titre */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-300 text-center">
        Mes Projets
      </h2>

      {/* Description */}
      <p className="text-gray-300 mb-12 text-center lg:text-center max-w-3xl text-lg lg:text-xl">
        Découvrez mes principales réalisations en développement web. Chaque projet montre mon travail sur HTML, CSS, JavaScript et React.
      </p>

      {/* Grid des projets */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
