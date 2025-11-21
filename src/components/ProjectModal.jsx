import React from "react";



export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#112840] p-6 rounded-xl max-w-lg w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold"
        >
          &times;
        </button>
        <img
          src={project.modalimg}
          alt={project.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded bg-[#1F6692] text-white text-sm"
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
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
