

export default function ProjectCard({ title, description, image, stack, context, objectives, results }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="project-stack">
          {stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="project-details">
          <p><strong>Contexte :</strong> {context}</p>
          <p><strong>Objectifs :</strong> {objectives}</p>
          <p><strong>Résultats :</strong> {results}</p>
        </div>
      </div>
    </article>
  );
}
