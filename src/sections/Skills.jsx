// ============================================
// sections/Skills.js - AMÉLIORÉ
// ============================================
import BgPortfolio from "../animate/BgPortfolio";
import Icons from "../components/Icons";

export default function Skills() {
  const skills = {
    Outils: [
      { name: "Figma", icon: "/img/icons/figma.svg" },
      { name: "VS Code", icon: "/img/icons/vscode.svg" },
      { name: "Git & GitHub", icon: "/img/icons/github.svg" },
    ],
    Langages: [
      { name: "React.js", icon: "/img/icons/react.svg" },
      { name: "HTML5", icon: "/img/icons/html5.svg" },
      { name: "CSS3", icon: "/img/icons/css3.svg" },
      { name: "JavaScript (ES6+)", icon: "/img/icons/javascript.svg" },
    ],
    Frameworks: [
      { name: "Tailwind CSS", icon: "/img/icons/tailwindcss.svg" },
      { name: "Bootstrap", icon: "/img/icons/bootstrap.svg" },
      { name: "Framer Motion", icon: "/img/icons/framer.svg" },
    ],
  };

  return (
    <section
      id="competences"
      className="min-h-screen flex flex-col justify-center px-8 py-24
        snap-start w-full relative
        bg-[#001524] text-[#ece5dd]
        items-center
        md:px-12 lg:px-20"
      aria-labelledby="skills-title"
    >
      <h2 
        id="skills-title"
        className="text-[#ece5dd] mb-12 text-2xl md:text-3xl 
          xl:text-4xl lg:text-5xl font-semibold"
        data-aos="fade-down"
      >
        Compétences
      </h2>

      <div className="relative w-full max-w-6xl grid gap-12 mb-12 
        sm:grid-cols-1 lg:grid-cols-3 z-10">
        {Object.entries(skills).map(([category, items], idx) => (
          <article 
            key={category} 
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            data-aos-duration="800"
          >
            <h3 className="text-2xl font-semibold text-[#ff7d00] mb-6">
              {category}
            </h3>

            <ul className="space-y-6 w-full">
              {items.map((item, i) => (
                <li
                  key={item.name}
                  className="flex items-center justify-center space-x-4
                    bg-[#001524]/40 backdrop-blur-sm p-4 rounded-lg
                    border border-[#27818f]/30
                    hover:border-[#ff7d00]/50 hover:shadow-lg 
                    hover:shadow-[#ffecd1]/20
                    transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 150 + i * 100}
                >
                  <img
                    src={item.icon}
                    className="w-10 h-10 object-contain"
                    alt={`Icône ${item.name}`}
                    loading="lazy"
                  />
                  <span className="text-lg text-[#ece5dd] font-medium">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <BgPortfolio />
      <Icons />
    </section>
  );
}
