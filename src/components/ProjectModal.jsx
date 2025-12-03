// ============================================
// components/ProjectModal.js - AMÉLIORÉ
// ============================================
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  // Bloquer le scroll quand la modal est ouverte
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm 
        flex items-center justify-center z-50 p-4
        animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#001524] border-[#ff7d00] border-2 sm:border-3 md:border-4
          sm:p-6
          rounded-lg sm:rounded-xl 
          p-6 md:p-8 max-w-5xl w-full 
          relative shadow-2xl
          max-h-[90vh] overflow-y-auto xl:overflow-hidden
          animate-scaleIn"
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 md:text-2xl
            text-[#ece5dd] hover:text-[#ff7d00]
            text-xl font-bold
            'transition-colors' duration-300
            hover:rotate-90 transform transition-transform"
          aria-label="Fermer la modal"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="w-full md:w-[45%] rounded-lg overflow-hidden">
            <img
              src={project.modalimg || project.image}
              alt={`Vue détaillée du projet ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenu */}
          <div className="flex-1">
            <h2 
              id="modal-title"
              className="text-3xl md:text-4xl font-bold 
                text-[#ece5dd] mb-4"
            >
              {project.title}
            </h2>

            <p className="text-[#ece5dd] text-base md:text-lg 
              mb-4 leading-relaxed opacity-90">
              {project.description}
            </p>

            {project.fonctionnalités && (
              <div className="bg-[#001524]/40 rounded-lg">
                <h3 className="text-xl font-semibold text-[#ff7d00]">
                  Fonctionnalités
                </h3>
                <p className="text-[#ece5dd] opacity-90">{project.fonctionnalités}</p>
              </div>
            )}

            {project.acquis && (
              <div className="bg-[#001524]/40 rounded-lg border-[#27818f]/30">
                <h3 className="text-xl font-semibold text-[#ff7d00] mt-4">
                  Acquis
                </h3>
                <p className="text-[#ece5dd] opacity-90">{project.acquis}</p>
              </div>
            )}

            {/* Technologies */}
            {project.stack && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#ff7d00] mt-4 mb-3">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(project.stack) 
                    ? project.stack 
                    : [project.stack]
                  ).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 border-2 border-[#ff7d00] 
                        rounded-full bg-[#ff7d00]/10 text-[#ece5dd] 
                        text-sm font-medium
                        hover:bg-[#ff7d00] hover:text-[#001524]
                        transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Liens */}
            <div className="flex gap-4 flex-wrap">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#27818f] text-[#ece5dd] 
                    rounded-lg font-semibold
                    hover:bg-[#ff7d00] hover:text-[#001524]
                    transition-all duration-300
                    hover:scale-105 shadow-lg"
                >
                  Voir la démo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#27818f] text-[#ece5dd] 
                    rounded-lg font-semibold
                    hover:bg-[#ff7d00] hover:text-[#001524]
                    transition-all duration-300
                    hover:scale-105 shadow-lg"
                >
                  Voir sur GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
