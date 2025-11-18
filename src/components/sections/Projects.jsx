import projects from "../data/projects";
import ProjectCard from "../../components/ProjectCard";


export default function Projects() {
  return (
    <section className="projects">
      <h2>Mes Projets</h2>
      <p>Découvrez mes principales réalisations en développement web.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
