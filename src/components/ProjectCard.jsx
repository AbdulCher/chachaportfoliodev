export default function ProjectCard({ title, description, image, stack, github, demo }) {
  return (
    <article className="group bg-gray/10 text-[#0D141F] rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#87a330] transition-all duration-300 overflow-hidden border border-[#1F6692]/20">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105 border-2 border[#0D141F]"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        <h3 className="text-xl font-bold text-[#0D141F] group-hover:text-[#87a330] transition">
          {title}
        </h3>

        <p className="text-[#0D141F] text-sm leading-relaxed">
          {description}
        </p>

        {/* Stack */}
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <li
              key={index}
              className="px-2 py-1 text-xs bg-[#87a330] border border-[#1F6692]/40 rounded-full text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-lg bg-[#80aae1] text-white hover:bg-[#75C7F0] transition"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-lg bg-[#80aae1] text-white hover:bg-gray-200 transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
