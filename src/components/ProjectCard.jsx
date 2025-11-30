// ============================================
// components/ProjectCard.js - FINAL AVEC IMAGES 1200x800
// ============================================
export default function ProjectCard({ project, onOpen }) {
  return (
    <article
      onClick={() => onOpen(project)}
      className="relative cursor-pointer overflow-hidden 
        rounded-xl shadow-lg group
        transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        bg-[#001524]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onOpen(project);
        }
      }}
      aria-label={`Voir les détails du projet ${project.title}`}
    >
      {/* Container avec aspect-ratio 3:2 pour vos images 1200x800 */}
      <div className="relative w-full .aspect-[3/2] overflow-hidden bg-[#001524]">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          width="1200"
          height="800"
          className="w-full h-full object-cover
            group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Overlay au hover */}
      <div className="absolute inset-0 
        bg-gradient-to-t from-[#001524] via-[#001524]/90 to-transparent
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300
        flex flex-col items-center justify-center
        text-[#ece5dd] p-6">
        
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
          {project.title}
        </h3>
        
        {project.stack && (
          <p className="text-sm md:text-base font-medium opacity-90 text-center">
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

// import { useEffect } from "react";

// export default function ProjectModal({ project, onClose }) {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="bg-[#001524] border-4 border-[#ff7d00] p-6 md:p-8 rounded-xl max-w-6xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-[#ece5dd] hover:text-[#ff7d00] text-4xl font-bold z-10"
//         >
//           ×
//         </button>

//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="w-full lg:w-[40%]">
//             <img
//               src={project.modalimg || project.image}
//               alt={project.title}
//               className="w-full rounded-lg"
//             />
//           </div>

//           <div className="flex-1 space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#ece5dd]">
//               {project.title}
//             </h2>

//             <p className="text-[#ece5dd] opacity-90">
//               {project.description}
//             </p>

//             {project.objectif && (
//               <div className="bg-[#001524]/40 p-4 rounded-lg border border-[#27818f]/30">
//                 <h3 className="text-xl font-semibold text-[#ff7d00] mb-2">
//                   Objectif
//                 </h3>
//                 <p className="text-[#ece5dd] opacity-90">{project.objectif}</p>
//               </div>
//             )}

//             {project.fonctionnalités && (
//               <div className="bg-[#001524]/40 p-4 rounded-lg border border-[#27818f]/30">
//                 <h3 className="text-xl font-semibold text-[#ff7d00] mb-2">
//                   Fonctionnalités
//                 </h3>
//                 <p className="text-[#ece5dd] opacity-90">{project.fonctionnalités}</p>
//               </div>
//             )}

//             {project.acquis && (
//               <div className="bg-[#001524]/40 p-4 rounded-lg border border-[#27818f]/30">
//                 <h3 className="text-xl font-semibold text-[#ff7d00] mb-2">
//                   Acquis
//                 </h3>
//                 <p className="text-[#ece5dd] opacity-90">{project.acquis}</p>
//               </div>
//             )}

//             {project.stack && (
//               <div>
//                 <h3 className="text-xl font-semibold text-[#ff7d00] mb-3">
//                   Technologies utilisées
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.stack.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="px-4 py-2 border-2 border-[#ff7d00] rounded-full bg-[#ff7d00]/10 text-[#ece5dd] text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="flex gap-4 flex-wrap pt-4">
//               {project.demo && (
                
//                   href={project.demo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-[#27818f] text-[#ece5dd] rounded-lg font-semibold hover:bg-[#ff7d00] hover:text-[#001524] transition-all"
//                 >
//                   Voir la démo
//                 </a>
//               )}
//               {project.github && (
                
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-[#27818f] text-[#ece5dd] rounded-lg font-semibold hover:bg-[#ff7d00] hover:text-[#001524] transition-all"
//                 >
//                   Voir sur GitHub
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }