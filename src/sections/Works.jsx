import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Works() {
  return (
    <section
      id="projets"
      className="snap-start h-screen w-full py-16 px-6 lg:px-16 bg-purple-950 flex flex-col items-center justify-start overflow-y-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-white">Mes Projets</h2>
      <p className="text-gray-300 mb-10 text-center lg:text-left max-w-2xl">
        Découvrez mes principales réalisations en développement web.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
