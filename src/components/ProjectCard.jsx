
// ============================================
// components/ProjectCard.js - AMÉLIORÉ
// ============================================
export default function ProjectCard({ project, onOpen }) {
  return (
    <article
      onClick={() => onOpen(project)}
      className="relative cursor-pointer overflow-hidden 
        rounded-xl shadow-lg group
        transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onOpen(project);
        }
      }}
      aria-label={`Voir les détails du projet ${project.title}`}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        loading="lazy"
        className="w-full h-64 object-cover 
          border-2 border-[#27818f]/30
          group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay au hover */}
      <div className="absolute inset-0 
        bg-gradient-to-t from-[#001524] via-[#001524]/90 to-transparent
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300
        flex flex-col items-center justify-center
        text-[#ece5dd] p-6">
        
        <h3 className="text-2xl font-bold mb-2 text-center">
          {project.title}
        </h3>
        
        {project.stack && (
          <p className="text-base font-medium opacity-90 text-center">
            {Array.isArray(project.stack) 
              ? project.stack.join(" • ") 
              : project.stack}
          </p>
        )}

        <span className="mt-4 text-[#ff7d00] font-semibold">
          Voir le projet →
        </span>
      </div>
    </article>
  );
}
