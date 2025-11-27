import React from "react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg- flex items-center justify-center z-50">
      <div className="bg-[#001524] border-4 border-[#ff7d00] p-6 rounded-xl max-w-4xl w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-1 right-4 text-[#ece5dd] text-3xl"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* IMAGE PLUS LARGE */}
          <div className="w-full md:w-[45%] rounded">
            <img
              src={project.modalimg}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENU À DROITE */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-[#ece5dd] mb-2">{project.title}</h2>
            <p className="text-[#ece5dd] mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border-2 border-[#ff7d00] rounded bg-[#0000000] text-[#ece5dd] text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#15616d] text-[#ece5dd] rounded hover:bg-[#ff7d00] hover:text-[#000000] transition"
                >
                  Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#15616d] text-[#ece5dd] rounded hover:bg-[#ffb703] hover:text-[#000000] transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
