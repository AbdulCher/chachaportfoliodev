export default function ProjectCard({
  title,
  description,
  image,
  stack,
  context,
  objectives,
  results
}) {
  return (
    <article className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition p-4 shadow-lg shadow-indigo-500/50 ...">
      <img src={image} alt={title} className="w-full h-80 object-cover rounded-lg" />

      <div className="mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-gray-600 mt-2">{description}</p>

        <ul className="flex flex-wrap gap-2 mt-4">
          {stack.map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 text-sm text-gray-700 space-y-2">
          <p>
            <strong>Contexte :</strong> {context}
          </p>
          <p>
            <strong>Objectifs :</strong> {objectives}
          </p>
          <p>
            <strong>Résultats :</strong> {results}
          </p>
        </div>
      </div>
    </article>
  );
}
